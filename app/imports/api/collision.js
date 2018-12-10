import {
  Vector, Polygon, testPolygonPolygon, Response,
} from 'sat';
import { mapValues, omit, map } from 'lodash';

import getShape from '../configs/shapes';


export const getPolygon = ({
  shapeId, position, rotation, backface,
}) => {
  const shape = getShape({ shapeId, backface });
  const vectors = shape.map(point => new Vector(point[0], point[1]));
  const p = new Polygon(new Vector(position.x, position.y), vectors);
  p.setAngle(rotation * (Math.PI / 180));
  return p;
};
export default ({
  avatar, shapeId, blackList = [], newPosition = null, newRotation = null, newFace = null,
}) => {
  // check overlap
  // const avatar = Avatars.findOne(avatarId);
  const { position: oldPosition, rotation: oldRotation, backface: oldSide } = avatar.shapes[shapeId];
  const position = newPosition !== null ? newPosition : oldPosition;
  const rotation = newRotation !== null ? newRotation : oldRotation;
  const backface = newFace !== null ? newFace : oldSide;
  const thisPolygon = getPolygon({
    shapeId, position, rotation, backface,
  });

  const polygons = mapValues(
    omit(avatar.shapes, [...blackList, shapeId]),
    ({ position: p, rotation: r, backface: b }, key) => getPolygon({
      shapeId: key, position: p, rotation: r, backface: b,
    }),
  );


  const collisions = map(polygons, ((otherP, otherShapeId) => {
    const response = new Response();
    const collides = testPolygonPolygon(thisPolygon, otherP, response);
    return { collides, response, shapeId: otherShapeId };
  }));
  return collisions;
};
