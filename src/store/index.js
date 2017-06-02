import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: { account: 1, name: 'Julia', gender: 1, avatar: 'https://placeimg.com/40/40/people/1' },
    currentContact: { account: 2, name: 'Randy', gender: 0, avatar: 'https://placeimg.com/40/40/people/2' },
    chatRecords: [
      {
        id: 0,
        from: 1,
        to: 2,
        content: 'Hello Randy!',
        Timestamp: 1235656765745,
        isNewMsg: false,
      },
      {
        id: 1,
        from: 2,
        to: 1,
        content: 'Hi Julia!',
        Timestamp: 1235656765745,
        isNewMsg: true,
      },
    ],
    contactList: [
      { account: 2, name: 'Randy', gender: 0, avatar: 'https://placeimg.com/40/40/people/2' },
      { account: 3, name: 'Solin', gender: 1, avatar: 'https://placeimg.com/40/40/people/3' },
      { account: 4, name: 'Jack', gender: 0, avatar: 'https://placeimg.com/40/40/people/4' },
    ],
    chatList: [
    ],
    currentProfile: { account: 2, name: 'Randy', gender: 0, avatar: 'https://placeimg.com/40/40/people/2' },
  },
  mutations,
  actions,
});
