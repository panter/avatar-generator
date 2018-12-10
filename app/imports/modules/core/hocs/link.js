import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';

export const composer = ({ context, ...nav }, onData) => {
  const { manulRouter } = context();
  onData(null, {
    ...manulRouter.createNavItem(nav),
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default C => composeAll(composeWithTracker(composer), useDeps(depsMapper))(C);
