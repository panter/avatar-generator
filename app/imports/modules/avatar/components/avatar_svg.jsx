import { map } from 'lodash';
import React from 'react';

import getShapeColor from '../../../configs/get_shape_color';
import shapes from '../../../configs/shapes';


const getPoints = (shapeId) => {
  const shape = shapes[shapeId];

  return shape.map(p => p.join(',')).join(' ');
};
const AvatarSvg = ({ avatar }) => (
  <svg width={1000} height={1000}>
    {map(avatar.shapes, (shape, shapeId) => (
      <polygon
        key={shapeId}
        points={getPoints(shapeId)}
        transform={`translate(${shape.position.x}, ${shape.position.y}) rotate(${shape.rotation})`}
        style={{ fill: getShapeColor({ shapeId, group: avatar.group }) }}
      />
      ))}

  </svg>
  );

export default AvatarSvg;
