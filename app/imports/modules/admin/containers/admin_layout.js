import {
  useDeps, composeAll, composeWithTracker, compose,
} from '/imports/komposer';
import AdminLayout from '../components/admin_layout.jsx';
import MainLayout from '../../core/components/main_layout';
import restrictToRoles from '/imports/modules/core/hocs/restrict_to_roles';
import NotAllowedMessage from '../components/not_allowed_message';
import React from 'react';

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  restrictToRoles('admin', () => (
    <MainLayout content={() => <NotAllowedMessage />} />
  )),
  useDeps(depsMapper),
)(AdminLayout);
