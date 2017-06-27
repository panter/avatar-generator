/* global WebApp*/
import ReactDOMServer from 'react-dom/server';

import React from 'react';

import { Avatars } from '../imports/api/collections';
import AvatarSVG from '../imports/modules/avatar/components/avatar_svg';

WebApp.connectHandlers.use('/avatar/export', (req, res, next) => {
  const avatarId = req.query.avatarId;
  const avatar = Avatars.findOne(avatarId);

  if (avatar) {
    res.writeHead(200, { 'content-type': 'image/svg; charset=utf-8' });
    const svgString = ReactDOMServer.renderToStaticMarkup(<AvatarSVG avatar={avatar} />);
    res.end(`<?xml version="1.0" encoding="UTF-8"?>${svgString}`);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });

    res.end('sorry, nöd gfunde 😿');
  }
});
