import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Stage from '../components/stage.jsx';

export const composer = ({ context, avatarId }, onData) => {
  const { Meteor, Collections: { Avatars } } = context();
  Meteor.subscribe('avatars.one.byId', avatarId);
  const avatar = Avatars.findOne(avatarId);
  if (avatar) {
    onData(null, { avatar });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  setShapePosition: actions.avatars.setShapePosition,
  setShapeRotation: actions.avatars.setShapeRotation,
});

const StageContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Stage);

setComposerStub(StageContainer, ({ }) => ({

}));

export default StageContainer;
