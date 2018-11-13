const colors = {
  ta2: '#303034',
  tb1: '#51575B',
  tb2: '#303034',
  tc: '#303034',
  d: '#303034',
  r: '#51575B'
};

const groupColors = {
  manul: '#F05867',
  gruppe2: '#FCB42F',
  lokomotive: '#E8E631',
  atlas: '#54BE8B',
  panter: '#51C4F1'
};

export const getGroupColor = group => groupColors[group] || 'black';

export default ({ shapeId, group }) => {
  if (shapeId === 'ta1') {
    return getGroupColor(group);
  }
  return colors[shapeId];
};
