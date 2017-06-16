import React from 'react';

import { withContentRect } from 'react-measure';

import { Layer, Stage, Line } from 'react-konva';

import { map, flatten } from 'lodash';


const unit = 100;
const sqrt3 = Math.sqrt(3);


const BaseShape = props => (
  <Line
    draggable
    fill="red"
    closed
    {...props}
  />
);


const paths = {
  ta: [[0, 0], [unit, 0], [unit / 2, (unit * sqrt3) / 2]],
  tb: [[0, 0], [unit, 0], [unit, (unit * sqrt3)]],
  tc: [[0, 0], [2 * unit, 0], [unit, (unit * sqrt3)]],
  d: [[0, (unit * sqrt3) / 2], [unit / 2, 0], [unit, (unit * sqrt3) / 2], [unit / 2, (unit * sqrt3)]],
  r: [[0, 0], [unit, 0], [2 * unit, unit * sqrt3], [unit, unit * sqrt3]],
};

const shapes = {
  ta1: paths.ta,
  ta2: paths.ta,
  tb1: paths.tb,
  tb2: paths.tb,
  tc: paths.tc,
  d: paths.d,
  r: paths.r,
};


const AvatarStage = withContentRect('bounds')(
  ({
    avatar: { _id: avatarId, ...avatar },
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
                avatar,
                (props, key) => {
                  const points = flatten(shapes[key]);
                  return (
                    <BaseShape
                      key={key}
                      {...props}
                      points={points}
                      onClick={({ target: { attrs: { rotation } } }) => setShapeRotation({
                        avatarId,
                        shapeId: key,
                        rotation: rotation + 30,
                      })}
                      onDragMove={({ target: { attrs: { x, y } } }) => setShapePosition({
                        avatarId,
                        shapeId: key,
                        x,
                        y,
                      })}
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
