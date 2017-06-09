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

  sendChatMessage(context, record) {
    context.commit(types.ADD_CHAT_RECORD, record);
    if (context.state.chatList.indexOf(context.state.currentContact) !== 0) {
      context.commit(types.UPDATE_CHAT_LIST, context.state.currentContact);
    }
  },
// 更新当前查看的profile
  updateCurrentProfile({ commit }, profile) {
    commit(types.UPDATE_CURRENT_PROFILE, profile);
  },
  updateChatRecord({ commit }, contact) {
    commit(types.UPDATE_CHAT_RECORD, contact);
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
};
