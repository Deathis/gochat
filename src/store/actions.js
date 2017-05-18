import * as types from './types';

export default{
  updateCurrentContact({ commit }, contact) {
    commit(types.UPDATE_CURRENT_CONTACT, contact);
  },
  addRecord({ commit }, record) {
    commit(types.ADD_CHAT_RECORD, record);
  },
  sendChatMessage({ commit }, record) {
    commit(types.ADD_CHAT_RECORD, record);
  },
  updateCurrentProfile({ commit }, profile) {
    commit(types.UPDATE_CURRENT_PROFILE, profile);
  },
};
