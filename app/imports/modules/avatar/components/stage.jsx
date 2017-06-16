import React from 'react';

import { withContentRect } from 'react-measure';

import { Layer, Stage, Path } from 'react-konva';

import { map } from 'lodash';

const BaseShape = props => (
  <Path
    fill="red"
    draggable
    {...props}
  />
);


const TriangleA = props => (
  <BaseShape
    {...props}
    data="M.89 0l100 173.21H.89z"
  />
);


const TriangleB = props => (
  <BaseShape
    {...props}
    data="M51 0l50 86.605H1z"
  />
);

const TriangleC = props => (
  <BaseShape
    {...props}
    data="M101 173.21H1L101 0l100 173.21H101"
  />
);


const Diamond = props => (
  <BaseShape
    {...props}
    data="M1 86.605L51 0l50 86.605-50 86.605z"
  />
);

const Rhomboid = props => (
  <BaseShape
    {...props}
    data="M1 173.605L51 87 1 173.605zm150.00105-86.99028L51 260.21002 1 173.605m.2573-.22572L101 0l50 86.605"
  />
);

const shapes = {
  ta1: TriangleA,
  ta2: TriangleA,
  tb1: TriangleB,
  tb2: TriangleB,
  tc: TriangleC,
  d: Diamond,
  r: Rhomboid,

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
                  const Shape = shapes[key];
                  return (
                    <Shape
                      key={key}
                      {...props}
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
