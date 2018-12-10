import { map } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import getShapeColor from '../../../configs/get_shape_color';
import getShape from '../../../configs/shapes';

const AvatarSvgBase = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})`
`;
const getPointString = ({ shapeId, backface }) => {
  const shape = getShape({ shapeId, backface });

  return shape.map(p => p.join(',')).join(' ');
};
const AvatarSvg = ({ className, style, avatar }) => (
  <AvatarSvgBase className={className} style={style} viewBox="0 0 1000 1000">
    {map(avatar.shapes, (shape, shapeId) => (
      <polygon
        key={shapeId}
        points={getPointString({ shapeId, backface: shape.backface })}
        transform={`translate(${shape.position.x}, ${shape.position.y}) rotate(${shape.rotation})`}
        style={{ fill: getShapeColor({ shapeId, group: avatar.group }) }}
      />
    ))}

  </AvatarSvgBase>
);

export default AvatarSvg;
