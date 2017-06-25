const unit = 100;
/* eslint camelcase: 0*/
const u_2 = unit / 2;
const u_3 = unit / 3;
const u_sqrt3 = unit * Math.sqrt(3);
const u_sqrt3_2 = u_sqrt3 / 2;
const u_sqrt3_4 = u_sqrt3 / 4;
const u_sqrt3_3 = u_sqrt3 / 3;
const u_sqrt3_6 = u_sqrt3 / 6;

const paths = {
  // same side triangle
  ta: [[-u_2, -u_sqrt3_6], [u_2, -u_sqrt3_6], [0, u_sqrt3_3]],
  // 30-60-90 triangle
  tb: [[-2 * u_3, -u_sqrt3_3], [u_3, -u_sqrt3_3], [u_3, 2 * u_sqrt3_3]],
  // big triangle (same-side)
  tc: [[-unit, -u_sqrt3_3], [unit, -u_sqrt3_3], [0, (2 * u_sqrt3_3)]],
  // diamond
  d: [[-u_2, 0], [0, -u_sqrt3_2], [u_2, 0], [0, u_sqrt3_2]],
  // rhomboid
  r: [[-unit, -u_sqrt3_2], [0, -u_sqrt3_2], [unit, u_sqrt3_2], [0, u_sqrt3_2]],
};

export default {
  ta1: paths.ta,
  ta2: paths.ta,
  tb1: paths.tb,
  tb2: paths.tb,
  tc: paths.tc,
  d: paths.d,
  r: paths.r,
};
