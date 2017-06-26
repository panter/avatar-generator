import { Layer, Stage, Line } from 'react-konva';
import { map, flatten } from 'lodash';
import { withContentRect } from 'react-measure';
import React from 'react';
import styled, { css } from 'styled-components';

import getShape from '../../../configs/shapes';
import AvatarNameInput from '../containers/avatar_name_input';
import Button from '../../core/components/button';
import GroupSelect from '../containers/group_select';
import getShapeColor from '../../../configs/get_shape_color';

const BaseShape = props => (
  <Line
    draggable
    closed
    {...props}
  />
);

const hoverFancyOpacity = css`
  opacity: 0.4;
  transition: opacity 0.3s;
  transition-delay: 2s;
  &:hover {
    opacity: 1;
    transition-delay: 0s;
  }
`;

const AvatarActions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  ${hoverFancyOpacity}
`;

const ProTipps = styled.div.attrs(
  { children: [
    <p>Click: Rotate 30°</p>,
    <p>Shift-click: Rotate -30°</p>,
    <p>Alt-click: flip the piece</p>,
  ],
  })`
  position: absolute;
  bottom: 10px;
  right: 10px;
  left: 10px;
  ${hoverFancyOpacity}
`;


const AvatarStage = withContentRect('bounds')(
  ({
    avatarId,
    avatar,
    setShapePosition,
    setShapeRotation,
    setShapebackface,
    measureRef,
    saveAsSVG,
    contentRect: { bounds },
  }) => (
    <div ref={measureRef} style={{ width: '100%', height: '100%' }}>
      <AvatarActions>
        <GroupSelect avatarId={avatarId} group={avatar.group} />
        <AvatarNameInput avatarId={avatarId} />
        <Button onClick={() => saveAsSVG(avatar)}>SVG</Button>
      </AvatarActions>
      <ProTipps />
      <Stage width={bounds.width} height={bounds.height}>
        <Layer >
          {
              map(
                avatar.shapes,
                ({ backface, ...props }, shapeId) => {
                  const points = flatten(getShape({ shapeId, backface }));
                  const color = getShapeColor({ shapeId, group: avatar.group });

                  return (
                    <BaseShape
                      key={shapeId}
                      {...props}
                      fill={color}
                      points={points}
                      onClick={(event) => {
                        const { evt: { shiftKey, altKey }, target: { attrs: { rotation } } } = event;
                        if (altKey) {
                          setShapebackface({
                            avatarId,
                            shapeId,
                            backface: !backface,
                          });
                        } else {
                          setShapeRotation({
                            avatarId,
                            shapeId,
                            rotation: rotation + (shiftKey ? -30 : 30),
                          });
                        }
                      }}

                      onDragMove={
                        ({ target: { attrs: { x, y } } }) => setShapePosition({
                          avatarId,
                          shapeId,
                          x,
                          y,
                        })
                      }
                    />
                  );
                }
              )
            }
        </Layer>
      </Stage>
    </div>
    )
);

export default AvatarStage;
