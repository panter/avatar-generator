import { Layer, Stage, Line } from 'react-konva';
import { map, flatten } from 'lodash';
import { withContentRect } from 'react-measure';
import React from 'react';

import collision from '../../../api/collision';
import shapes from '../../../configs/shapes';


const BaseShape = props => (
  <Line
    draggable
    closed
    {...props}
  />
);


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
      <Stage width={bounds.width} height={bounds.height}>
        <Layer >
          {
              map(
                avatar.shapes,
                (props, shapeId) => {
                  const points = flatten(shapes[shapeId]);
                  const color = shapeId === 'ta1' ? 'red' : '#333';

                  return (
                    <BaseShape
                      key={shapeId}
                      {...props}
                      fill={color}
                      points={points}
                      onClick={({ target: { attrs: { rotation } } }) => setShapeRotation({
                        avatarId,
                        shapeId,
                        rotation: rotation + 30,
                      })}
                      dragBoundFunc={(newPosition) => {
                        const { position } = collision({ shapeId, avatarId, newPosition });
                        return position;
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
