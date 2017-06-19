import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import GroupSelect from '../components/group_select.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  selectGroup: actions.avatars.selectGroup,
});

const GroupSelectContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(GroupSelect);

setComposerStub(GroupSelectContainer, ({ }) => ({

}));

export default GroupSelectContainer;
