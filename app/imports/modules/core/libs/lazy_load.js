import Loadable from 'react-loadable';

export default (loader, options = {
  LoadingComponent: () => null,
}) => Loadable({
  loader,
  ...options,
});
