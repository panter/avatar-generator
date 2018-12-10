export default {
  account: {
    login({ Meteor, Alerts, manulRouter }) {
      Meteor.loginWithGoogle(
        { requestPermissions: ['email'] },
        Alerts.handleCallback('account.login', {
          props: () => ({ user: Meteor.user() }),
        }, (error) => {
          if (!error) {
            manulRouter.go('home');
          }
        }),
      );
    },
    logout({ Meteor, Alerts, manulRouter }) {
      Meteor.logout(Alerts.handleCallback('account.actions.logout', (error) => {
        if (!error) {
          manulRouter.go('home');
        }
      }));
    },
  },
};
