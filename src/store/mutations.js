import * as types from './types';

export default {
  [types.UPDATE_CURRENT_CONTACT](state, contact) {
    state.currentContact = contact;
  },
  [types.ADD_CHAT_RECORD](state, record) {
    state.chatRecords.push(record);
  },
};
