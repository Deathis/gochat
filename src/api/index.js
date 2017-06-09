import AV from 'leancloud-storage';

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
