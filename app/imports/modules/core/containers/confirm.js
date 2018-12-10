import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';
import Confirm from '../components/confirm.jsx';
import { createConfirm } from '@panter/manul-alerts';

export default createConfirm(Confirm);
