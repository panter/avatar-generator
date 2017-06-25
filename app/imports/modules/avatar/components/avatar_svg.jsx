import { map } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import getShapeColor from '../../../configs/get_shape_color';
import shapes from '../../../configs/shapes';

const AvatarSvgBase = styled.svg`
`;
const getPoints = (shapeId) => {
  const shape = shapes[shapeId];

  return shape.map(p => p.join(',')).join(' ');
};
const AvatarSvg = ({ className, style, avatar }) => (
  <AvatarSvgBase className={className} style={style} viewBox="0 0 1000 1000">
    {map(avatar.shapes, (shape, shapeId) => (
      <polygon
        key={shapeId}
        points={getPoints(shapeId)}
        transform={`translate(${shape.position.x}, ${shape.position.y}) rotate(${shape.rotation})`}
        style={{ fill: getShapeColor({ shapeId, group: avatar.group }) }}
      />
      ))}

  </AvatarSvgBase>
  );

export default AvatarSvg;
