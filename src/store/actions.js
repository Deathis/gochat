import * as api from '@/api';
import * as types from './types';

export default {
  // 更新当前联系人
  updateCurrentContact({ commit }, contact) {
    commit(types.UPDATE_CURRENT_CONTACT, contact);
  },

  addRecord({ commit }, record) {
    commit(types.ADD_CHAT_RECORD, record);
  },
  // 发送聊天信息
  async  sendChatMessage(context, { to, content }) {
    const msg = await api.sendTextMessage({ to, msg: content });
    const record = {
      id: msg.id,
      from: msg.from,
      to: context.state.currentContact.account,
      content: msg.text,
      timestamp: msg.timestamp,
      read: true,
    };

    context.commit(types.ADD_CHAT_RECORD, record);
    // if (context.state.chatList.indexOf(context.state.currentContact) !== 0) {
    //   context.commit(types.UPDATE_CHAT_LIST, context.state.currentContact);
    // }
    return msg;
  },
  // 更新当前查看的profile
  updateCurrentProfile({ commit }, profile) {
    commit(types.UPDATE_CURRENT_PROFILE, profile);
  },
  // 更新聊天记录
  async updateChatRecord(context) {
    const records = await context.dispatch('getChatRecords', { from: context.state.currentUser.account, to: context.state.currentContact.account });
    context.commit(types.UPDATE_CHAT_RECORD, records);
  },
  // 更新主题
  updateCurrentTheme({ commit }, theme) {
    commit(types.UPDATE_CURRENT_THEME, theme);
    (async () => {
      localStorage.setItem('currentTheme', theme.name);
    })();
  },
  // 更新当前用户
  async updateCurrentUser({ commit }, avUser) {
    let user = null;
    if (avUser) {
      user = {
        account: avUser.get('username'),
        name: avUser.get('nickname'),
        gender: avUser.get('gender') || 0,
        avatar: avUser.get('avatar') ? avUser.get('avatar').thumbnailURL(72, 72) : undefined,
      };
    }
    commit(types.UPDATE_CURRENT_USER, user);
  },
  // 登录
  async login({ commit }, { username, password }) {
    const loginedUser = await api.login(username, password);
    return loginedUser;
  },
  // 注册
  async signup({ commit }, { username, password, email }) {
    const loginedUser = await api.signup(username, password, email);
    return loginedUser;
  },
  // 登出
  logout() {
    api.logout();
  },
  // 更新头像
  async updateAvatar({ dispatch }, avatarFile) {
    const avUser = await api.updateAvatar(avatarFile);
    dispatch('updateCurrentUser', avUser);
    return avUser.get('avatar');
  },
  // 更新昵称
  async updateNickname({ dispatch }, { name }) {
    const avUser = await api.updateNickname({ nickname: name });
    dispatch('updateCurrentUser', avUser);
    return avUser.get('nickname');
  },
  // 更新性别
  async updateGender({ dispatch }, { gender }) {
    const avUser = await api.updateGender({ gender });
    dispatch('updateCurrentUser', avUser);
    return avUser.get('gender');
  },
  // 搜索用户
  async searchContact({ commit }, { account }) {
    return api.searchUser({ account });
  },
  // 添加好友
  async addContact({ dispatch }, avUser) {
    await api.addContact(avUser);
    dispatch('updateContactList');
  },
  // 更新联系人列表
  async updateContactList({ commit }) {
    const avContacts = await api.getContacts();
    const contactList = avContacts.map(avContact => ({
      avUser: avContact,
      account: avContact.get('username'),
      name: avContact.get('nickname'),
      gender: avContact.get('gender'),
      avatar: avContact.get('avatar') ? avContact.get('avatar').thumbnailURL(72, 72) : undefined,
    }));
    commit(types.UPDATE_CONTACT_LIST, contactList);
  },
// 获取聊天记录
  async getChatRecords({ _ }, { from, to }) {
    const massages = await api.getChatRecords({ to });
    const records = massages.map(msg => ({
      id: msg.id,
      from: msg.from === from ? from : to,
      to: msg.from === from ? to : from,
      content: msg.text,
      timestamp: msg.timestamp,
      read: true,
    }));

    return records;
  },

// 获取会话列表
  async updateConversations({ dispatch, commit }, { account }) {
    const conversations = await api.getConversations();
    const avUserPromise = [];
    for (let index = 0; index < conversations.length; index += 1) {
      const conversation = conversations[index];
      const acc = conversation.members.find(val => val !== account);
      if (acc) {
        avUserPromise.push(dispatch('searchContact', { account: acc }));
      }
    }
    const avUsers = await Promise.all(avUserPromise);
    const chatList = avUsers.map((avUser) => {
      const conversation = conversations.find(val => val.members.indexOf(avUser.get('username')) >= 0);
      return {
        avUser,
        conversation,
        account: avUser.get('username'),
        name: avUser.get('nickname'),
        gender: avUser.get('gender'),
        avatar: avUser.get('avatar') ? avUser.get('avatar').thumbnailURL(72, 72) : undefined,
      };
    });
    chatList.sort((a, b) => {
      if (!b.conversation.lastMessageAt || !a.conversation.lastMessageAt) {
        return 0;
      }
      return b.conversation.lastMessageAt - a.conversation.lastMessageAt;
    });

    commit(types.UPDATE_CHAT_LIST, chatList);
  },
  // 标记消息为已读
  markRead({ _ }, contact) {
    contact.conversation.read();
  },
};
