import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: { account: 1, name: 'Julia', avatar: 'https://placeimg.com/40/40/people/1' },
    currentContact: { account: 2, name: 'Randy', avatar: 'https://placeimg.com/40/40/people/2' },
    chatRecords: [
      {
        id: 1234,
        from: 1,
        to: 2,
        content: 'Hello Randy!',
        Timestamp: 1235656765745,
      },
      {
        id: 1234,
        from: 2,
        to: 1,
        content: 'Hi Julia!',
        Timestamp: 1235656765745,
      },
    ],
  },
});
