import { Vector, Polygon, testPolygonPolygon, Response } from 'sat';
import { mapValues, omit, some, map, forEach } from 'lodash';

import { Avatars } from '/imports/api/collections';

import shapes from '../configs/shapes';


const getPolygon = ({ shapeId, position, rotation }) => {
  const shape = shapes[shapeId];
  const vectors = shape.map(point => new Vector(point[0], point[1]));
  const p = new Polygon(new Vector(position.x, position.y), vectors);
  p.setAngle(rotation * (Math.PI / 180));
  return p;
};
export default ({ avatarId, shapeId, newPosition = null, newRotation = null }) => {
  // check overlap
  const avatar = Avatars.findOne(avatarId);
  const { position: oldPosition, rotation: oldRotation } = avatar.shapes[shapeId];
  const position = newPosition !== null ? newPosition : oldPosition;
  const rotation = newRotation !== null ? newRotation : oldRotation;
  const thisPolygon = getPolygon({ shapeId, position, rotation });

  const polygons = mapValues(
    omit(avatar.shapes, shapeId),
    ({ position: p, rotation: r }, key) => getPolygon({ shapeId: key, position: p, rotation: r })
  );

  const collisions = map(polygons, ((otherP, otherShapeId) => {
    const response = new Response();
    const collides = testPolygonPolygon(thisPolygon, otherP, response);
    return { collides, response, shapeId: otherShapeId };
  })).filter(c => c.collides);
  return collisions;
};
