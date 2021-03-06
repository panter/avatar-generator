import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AvatarSvg from '../avatar_svg';


storiesOf('avatar.AvatarSvg', module)
  .addWithDoc('default view', AvatarSvg,
  'This is the default view',
  () => {
    return (
      <AvatarSvg />
    );
  })
