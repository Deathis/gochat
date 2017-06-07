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
      name: loginedUser.get('nickname') || `user${loginedUser.id.substr(0, 5)}`,
      gender: loginedUser.get('gender'),
      avatar: loginedUser.get('avatar').thumbnailURL(72, 72),
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return loginedUser;
  },
  async signup({ commit }, { username, password, email }) {
    const loginedUser = await api.signup(username, password, email);
    const user = {
      account: loginedUser.get('username'),
      name: loginedUser.get('nickname') || `user${loginedUser.id.substr(0, 5)}`,
      gender: loginedUser.get('gender') || 0,
      avatar: loginedUser.get('avatar') ? loginedUser.get('avatar').thumbnailURL(72, 72) : undefined,
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return loginedUser;
  },
  logout() {
    api.logout();
  },
  async updateAvatar({ commit }, avatarFile) {
    const avUser = await api.updateAvatar(avatarFile);
    const avatarThumbnailURL = avUser.get('avatar').thumbnailURL(72, 72);
    const user = {
      avatar: avatarThumbnailURL,
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return avUser.get('avatar');
  },
  async updateNickname({ commit }, { name }) {
    const avUser = await api.updateNickname({ nickname: name });
    const user = {
      name: avUser.get('nickname'),
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return avUser.get('nickname');
  },
  async updateGender({ commit }, { gender }) {
    const avUser = await api.updateGender({ gender });
    const user = {
      gender: avUser.get('gender'),
    };
    commit(types.UPDATE_CURRENT_USER, user);
    return avUser.get('gender');
  },
};
