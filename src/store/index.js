import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: { account: 1, name: 'Julia', avatar: 'https://placeimg.com/40/40/people/1' },
    currentContact: { account: 2, name: 'Randy', avatar: 'https://placeimg.com/40/40/people/2' },
    chatRecords: [
      {
        id: 0,
        from: 1,
        to: 2,
        content: 'Hello Randy!',
        Timestamp: 1235656765745,
      },
      {
        id: 1,
        from: 2,
        to: 1,
        content: 'Hi Julia!',
        Timestamp: 1235656765745,
      },
    ],
    contactList: [
      { account: 2, name: 'Randy', avatar: 'https://placeimg.com/40/40/people/2' },
      { account: 3, name: 'Solin', avatar: 'https://placeimg.com/40/40/people/3' },
      { account: 4, name: 'Jack', avatar: 'https://placeimg.com/40/40/people/4' },
    ],
    chatList: [
      { account: 2, name: 'Randy', avatar: 'https://placeimg.com/40/40/people/2' },
      { account: 4, name: 'Jack', avatar: 'https://placeimg.com/40/40/people/4' },
    ],
  },
  mutations,
  actions,
});
