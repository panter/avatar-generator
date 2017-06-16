import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import avatarModule from '../imports/modules/avatar';
import coreModule from '../imports/modules/core';
import adminModule from '../imports/modules/admin';
import registrationModule from '../imports/modules/registration';
import accountModule from '../imports/modules/account';
import { alertsModule } from '@panter/manul-alerts';
import { adminModule as manulAdminModule } from '@panter/manul-admin';
// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(manulAdminModule);
app.loadModule(alertsModule);
app.loadModule(registrationModule);
app.loadModule(accountModule);
app.loadModule(avatarModule);
app.init();
