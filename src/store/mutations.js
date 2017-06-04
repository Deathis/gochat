import * as types from './types';

export default {
  [types.UPDATE_CURRENT_CONTACT](state, contact) {
    state.currentContact = contact;
  },
  [types.ADD_CHAT_RECORD](state, record) {
    state.chatRecords.push(record);
  },
  [types.UPDATE_CURRENT_PROFILE](state, profile) {
    state.currentProfile = profile;
  },
  [types.UPDATE_CHAT_LIST](state, chat) {
    const index = state.chatList.indexOf(chat);
    if (index < 0) {
      state.chatList.unshift(chat);
    } else {
      state.chatList.splice(index, 1);
      state.chatList.unshift(chat);
    }
  },
  [types.UPDATE_CHAT_RECORD](state, contact) {
    state.chatRecords.filter(record =>
                             record.from === contact.account &&
                             !record.read)
                     .forEach((record) => {
                       record.read = true;
                     });
  },
  [types.UPDATE_CURRENT_THEME](state, theme) {
    state.currentTheme = theme.name;
  },
};
