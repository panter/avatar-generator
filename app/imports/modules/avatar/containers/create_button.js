import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import CreateButton from '../components/create_button.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  create: actions.avatars.create,
});

const CreateButtonContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateButton);

setComposerStub(CreateButtonContainer, ({ }) => ({

}));

export default CreateButtonContainer;
