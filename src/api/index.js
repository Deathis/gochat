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
