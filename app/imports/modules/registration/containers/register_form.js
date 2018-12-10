import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

import RegisterForm from '../components/register_form.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Schemas, SimpleSchema } = context();

  const registerSchema = new SimpleSchema().extend(Schemas.UserProfile);
  registerSchema.extend(Schemas.Login);
  registerSchema.extend(
    new SimpleSchema({
      confirmPassword: {
        type: String,
        label: 'Enter the password again',
        custom() {
          if (this.value !== this.field('password').value) {
            return 'passwordMismatch';
          }
        },
        uniforms: {
          type: 'password',
        },
      },
    }),
  );

  onData(null, { registerSchema });
};

export const depsMapper = (context, actions) => ({
  register: actions.registration.register,
  context: () => context,
});

const RegisterFormContainer = composeAll(composeWithTracker(composer), useDeps(depsMapper))(RegisterForm);

export default RegisterFormContainer;
