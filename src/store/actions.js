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
};
