const unit = 100;
const sqrt3 = Math.sqrt(3);


const paths = {
  ta: [[0, 0], [unit, 0], [unit / 2, (unit * sqrt3) / 2]],
  tb: [[0, 0], [unit, 0], [unit, (unit * sqrt3)]],
  tc: [[0, 0], [2 * unit, 0], [unit, (unit * sqrt3)]],
  d: [[0, (unit * sqrt3) / 2], [unit / 2, 0], [unit, (unit * sqrt3) / 2], [unit / 2, (unit * sqrt3)]],
  r: [[0, 0], [unit, 0], [2 * unit, unit * sqrt3], [unit, unit * sqrt3]],
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
