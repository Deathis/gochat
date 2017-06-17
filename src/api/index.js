import AV from 'leancloud-storage';
import { Realtime, TextMessage } from 'leancloud-realtime';

const appId = 'nPCOlCqA9Idmb1bXjP7E8wm7-gzGzoHsz';
const appKey = 'uWdXwqDfLAViVHB1oXaxRjnK';
AV.init({ appId, appKey });

const realtime = new Realtime({
  appId: 'nPCOlCqA9Idmb1bXjP7E8wm7-gzGzoHsz',
  region: 'cn',
});

const clientSingleton = (function createIMClient() {
  let instance;
  let user;
  return {
    getInstance: async () => {
      if (user !== AV.User.current()) {
        instance = null;
        user = AV.User.current();
      }
      if (!instance) {
        instance = await realtime.createIMClient(AV.User.current().get(['username']));
      }
      return instance;
    },
  };
}());

export async function signup(username, password, email) {
  const user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.setEmail(email);
  return user.signUp();
}

export async function login(username, password) {
  return AV.User.logIn(username, password);
}

export function logout() {
  AV.User.logOut();
}

export async function updateAvatar(avatarFile) {
  const tmp = avatarFile.name.split('.');
  const name = `avatar.${tmp[tmp.length - 1]}`;
  const avFile = new AV.File(name, avatarFile);
  const currentUser = AV.User.current();
  currentUser.set('avatar', avFile);
  currentUser.fetchWhenSave = true;

  return currentUser.save();
}

export async function updateNickname({ nickname }) {
  const currentUser = AV.User.current();
  currentUser.set('nickname', nickname);
  currentUser.fetchWhenSave = true;

  return currentUser.save();
}

export async function updateGender({ gender }) {
  const currentUser = AV.User.current();
  currentUser.set('gender', gender);
  currentUser.fetchWhenSave = true;

  return currentUser.save();
}

export async function searchUser({ account }) {
  if (account === AV.User.current().get('username')) {
    return null;
  }
  const query = new AV.Query('_User');
  query.equalTo('username', account);
  return query.first();
}

export async function addContact(avUser) {
  const currentUser = AV.User.current();
  const contactsRelation = currentUser.relation('contacts');
  contactsRelation.add(avUser);
  await currentUser.save();
  const contacts = await contactsRelation.query().find();
  return contacts;
}

export async function getContacts() {
  let contacts = [];
  const currentUser = AV.User.current();
  if (currentUser) {
    const contactsRelation = currentUser.relation('contacts');
    contacts = await contactsRelation.query().find();
  }
  return contacts;
}

// 发送文本消息
export async function sendTextMessage({ to, msg }) {
  const client = await clientSingleton.getInstance();
  const conversation = await client.createConversation({
    members: [to],
    name: `${AV.User.current().get('username')} & ${to}`,
    transient: false,
    unique: true,
  });
  return conversation.send(new TextMessage(msg));
}

// 获取聊天记录
export async function getChatRecords({ to, count = 20 }) {
  const client = await clientSingleton.getInstance();
  const conversation = await client.createConversation({
    members: [to],
    name: `${AV.User.current().get('username')} & ${to}`,
    transient: false,
    unique: true,
  });
  return conversation.queryMessages({ limit: count });
}
// 获取会话列表
export async function getConversations() {
  const client = await clientSingleton.getInstance();
  return client.getQuery().containsMembers([AV.User.current().get('username')]).find();
}

// 获取当前用户的IM客户端实例
export async function getIMClient() {
  return clientSingleton.getInstance();
}

