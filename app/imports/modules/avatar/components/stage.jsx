import { Layer, Stage, Line } from 'react-konva';
import { map, flatten } from 'lodash';
import { withContentRect } from 'react-measure';
import React from 'react';

import GroupSelect from '../containers/group_select';
import shapes from '../../../configs/shapes';


const BaseShape = props => (
  <Line
    draggable
    closed
    {...props}
  />
);

const colors = {
  ta2: '#303034',
  tb1: '#51575B',
  tb2: '#303034',
  tc: '#303034',
  d: '#303034',
  r: '#51575B',
};

const groupColors = {
  manul: '#F05867',
  gruppe2: '#FCB42F',
  lokomotive: '#E8E631',
  atlas: '#54BE8B',
};

const getColor = ({ shapeId, group }) => {
  if (shapeId === 'ta1') {
    return groupColors[group];
  }
  return colors[shapeId];
};


const AvatarStage = withContentRect('bounds')(
  ({
    avatarId,
    avatar,
    setShapePosition,
    setShapeRotation,
    measureRef,
    contentRect: { bounds },
  }) => (
    <div ref={measureRef} style={{ width: '100%', height: '100%' }}>
      <GroupSelect avatarId={avatarId} group={avatar.group} />
      <Stage width={bounds.width} height={bounds.height}>
        <Layer >
          {
              map(
                avatar.shapes,
                (props, shapeId) => {
                  const points = flatten(shapes[shapeId]);
                  const color = getColor({ shapeId, group: avatar.group });

                  return (
                    <BaseShape
                      key={shapeId}
                      {...props}
                      fill={color}
                      points={points}
                      onClick={(event) => {
                        const { evt: { shiftKey, altKey }, target: { attrs: { rotation } } } = event;
                        setShapeRotation({
                          avatarId,
                          shapeId,
                          rotation: rotation + (shiftKey ? -30 : 30),
                        });
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
