import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';
import { withTranslatedSchema } from '@panter/manul-i18n';
import Create from '../components/create.jsx';


export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  withTranslatedSchema(({ collectionName }) => ({ schema: collectionName })),
  useDeps(depsMapper),
)(Create);
