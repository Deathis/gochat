<template>
  <md-layout id="login" md-column>
    <span class="md-display-2">GOCHAT</span>
    <form v-show="status!=='init'" @submit.stop.prevent="submit">
      <md-input-container>
        <label>UserName</label>
        <md-input v-model.trim.lazy="form.username" required></md-input>
      </md-input-container>
  
      <md-input-container md-has-password>
        <label>Password</label>
        <md-input v-model.lazy="form.password" type="password" required></md-input>
      </md-input-container>
  
      <md-input-container v-if="status==='signup'">
        <label>Email</label>
        <md-input v-model.trim.lazy="form.email" type="email" :required="status==='signup'"></md-input>
      </md-input-container>
      <md-button type="submit" class="md-primary md-raised" :disabled="status==='pending'">{{submitBtnText}}</md-button>
    </form>
    <md-button v-show="status==='init'" class="md-primary md-raised" @click.native="primaryClick" :disabled="status==='pending'">start</md-button>
    <md-button class="md-raised" @click.native="secondaryClick" :disabled="status==='pending'">{{secondaryBtnText}}</md-button>
  </md-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      status: 'init',
      form: {
        username: '',
        password: '',
        email: '',
      },
    };
  },
  computed: {
    submitBtnText() {
      let text = '';
      if (this.status === 'signup') {
        text = 'signup';
      }
      if (this.status === 'login') {
        text = 'login';
      }
      return text;
    },
    secondaryBtnText() {
      let text = 'login';
      if (this.status !== 'init') {
        text = 'cancel';
      } else {
        this.form.username = '';
        this.form.password = '';
        this.form.email = '';
      }
      return text;
    },
  },
  methods: {
    ...mapActions([
      'login',
      'signup',
      'listenToMessage',
    ]),
    primaryClick() {
      if (this.status === 'init') {
        this.status = 'signup';
      }
    },
    secondaryClick() {
      if (this.status !== 'init') {
        this.status = 'init';
      } else {
        this.status = 'login';
      }
    },
    submit() {
      if (this.status === 'signup') {
        const signupInfo = {
          username: this.form.username.toLowerCase(),
          password: this.form.password,
          email: this.form.email };
        this.signup(signupInfo)
        .then(() => {
          this.status = 'init';
          this.listenToMessage();
          this.$router.push({ name: 'userAvatar' });
        }, (() => {
          this.status = 'signup';
        }));
      } else if (this.status === 'login') {
        this.login({ username: this.form.username.toLowerCase(),
          password: this.form.password }).then(() => {
            this.status = 'init';
            this.listenToMessage();
            this.$router.push({ name: 'chat' });
          }, () => {
            this.status = 'login';
          });
      }
      this.status = 'pending';
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  height: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  span {
    align-self: center;
    &.md-display-2 {
      margin: {
        bottom: 20px;
      }
    }
  }

  $formWidth:80%;
  form {
    min-width: $formWidth;
    align-self: center;
    .md-button {
      margin: {
        left: 0;
        right: 0;
      }
      ;
      min-width: 100%;
      align-self: center;
      text-transform: capitalize;
    }
  }
  .md-button {
    min-width: $formWidth;
    align-self: center;
    text-transform: capitalize;
  }
}
</style>
