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
