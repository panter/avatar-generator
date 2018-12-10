import '/imports/api/collections';

import './i18n';

import { Meteor } from 'meteor/meteor';

import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { initAdminServer } from '@panter/manul-admin';

import { Counts } from 'meteor/tmeasday:publish-counts';
import adminConfig from '/admin_config';

import importI18nSeed from './import_i18n_seed';
import methods from './methods';
import publications from './publications';

publications();
methods();


importI18nSeed();
initAdminServer({ Meteor, ValidatedMethod, Counts }, adminConfig);

/* global ServiceConfiguration */
ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
      clientId: '241654798799-7fhlfb90pvts2m71al3lhbtphv6en5ha.apps.googleusercontent.com',
      secret: 'Evo79FdcFKG72Szzhzn-48mq',
    },
  },
);
