/* global WebApp */
/*
import { Restivus } from 'meteor/nimble:restivus';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Avatars } from '../imports/api/collections';
import AvatarSVG from '../imports/modules/avatar/components/avatar_svg';
import { basename, extname } from 'path';

const Api = new Restivus({
  apiPath: '',
});

Api.addRoute('avatar/:avatarId', {
  get() {
    const { avatarId: avatarIdOrg } = this.urlParams;
    const extension = extname(avatarIdOrg);
    const avatarId = basename(avatarIdOrg, extension);
    const avatar = Avatars.findOne(avatarId);

    if (avatar) {
      const svgString = ReactDOMServer.renderToStaticMarkup(<AvatarSVG avatar={avatar} />);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'image/svg+xml',
        },
        body: `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`,
      };
    }
    return {
      statusCode: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
      body: 'sorry, nöd gfunde 😿',
    };
  },
});

WebApp.connectHandlers.use('/avatar/export', (req, res, next) => {
  const avatarId = req.query.avatarId;
});

*/
