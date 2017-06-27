import FileSaver from 'file-saver';
import ReactDOMServer from 'react-dom/server';

import React from 'react';

import AvatarSVG from '../components/avatar_svg';

export default {
  avatars: {
    setShapePosition({ Methods }, { avatarId, shapeId, x, y }) {
      return Methods.Avatars.setShapePosition.call({ avatarId, shapeId, x, y });
    },
    setShapeRotation({ Methods }, { avatarId, shapeId, rotation }) {
      Methods.Avatars.setShapeRotation.call({ avatarId, shapeId, rotation });
    },
    setShapebackface({ Methods }, { avatarId, shapeId, backface }) {
      Methods.Avatars.setShapebackface.call({ avatarId, shapeId, backface });
    },
    selectGroup({ Methods }, { avatarId, group }) {
      Methods.Avatars.selectGroup.call({ avatarId, group });
    },
    setAvatarName({ Methods }, { avatarId, name }) {
      Methods.Avatars.setAvatarName.call({ avatarId, name });
    },
    create({ Methods, manulRouter }) {
      Methods.Avatars.create.call({}, (error, avatarId) => (
        manulRouter.go('avatar', { avatarId })
      ));
    },
    copyAvatar({ Methods, manulRouter }, avatarId) {
      Methods.Avatars.copyAvatar.call({ avatarId }, (error, newAvatarId) => (
        manulRouter.go('avatar', { avatarId: newAvatarId })
      ));
    },
    deleteAvatar({ Methods, manulRouter, Alerts }, avatarId) {
      Alerts.confirm({
        message: "really? this can't be undone 🙀",
        onConfirm: () => {
          Methods.Avatars.deleteAvatar.call({ avatarId }, error => (
            manulRouter.go('home')
          ));
        },
      });
    },
    saveAsSVG({}, avatar) {
      /* global window*/
      const svgString = ReactDOMServer.renderToStaticMarkup(<AvatarSVG avatar={avatar} />);
      const blob = new window.Blob([`<?xml version="1.0" encoding="UTF-8"?>${svgString}`], { type: 'image/svg+xml;charset=utf-8' });
      FileSaver.saveAs(blob, `avatar-${avatar._id}.svg`);
    },
  },
};
