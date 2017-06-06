import * as api from '@/api';
import * as types from './types';

export default{
  updateCurrentContact({ commit }, contact) {
    commit(types.UPDATE_CURRENT_CONTACT, contact);
  },
  addRecord({ commit }, record) {
    commit(types.ADD_CHAT_RECORD, record);
  },
  sendChatMessage(context, record) {
    context.commit(types.ADD_CHAT_RECORD, record);
    if (context.state.chatList.indexOf(context.state.currentContact) !== 0) {
      context.commit(types.UPDATE_CHAT_LIST, context.state.currentContact);
    }
  },
  updateCurrentProfile({ commit }, profile) {
    commit(types.UPDATE_CURRENT_PROFILE, profile);
  },
  updateChatRecord({ commit }, contact) {
    commit(types.UPDATE_CHAT_RECORD, contact);
  },
  updateCurrentTheme({ commit }, theme) {
    commit(types.UPDATE_CURRENT_THEME, theme);
    (async () => {
      localStorage.setItem('currentTheme', theme.name);
    })();
  },
  updateCurrentUser({ commit }, user) {
    commit(types.UPDATE_CURRENT_USER, user);
  },
  async login({ commit }, { username, password }) {
    const loginedUser = await api.login(username, password);
    const user = {
      account: loginedUser.get('username'),
      name: 'test',
      gender: 0,
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return loginedUser;
  },
  async signup({ commit }, { username, password, email }) {
    const loginedUser = await api.signup(username, password, email);
    const user = {
      account: loginedUser.get('username'),
      name: 'test',
      gender: 0,
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return loginedUser;
  },
  logout() {
    api.logout();
  },
};
