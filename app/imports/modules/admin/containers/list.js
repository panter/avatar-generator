import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';
import List from '../components/list.jsx';

export const depsMapper = (context, actions) => ({
  context: () => context,
  downloadCsv: actions.manulAdmin.downloadCsv,
});

export default composeAll(useDeps(depsMapper))(List);
