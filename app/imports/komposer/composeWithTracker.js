import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
import compose from './compose';

export default function composeWithTracker(reactiveFn, options) {
  const onPropsChange = (props, onData, context) => {
    if (Meteor.isServer) {
      reactiveFn(props, onData, context);
    } else {
      let trackerCleanup;
      const handler = Tracker.nonreactive(() => Tracker.autorun(() => {
        trackerCleanup = reactiveFn(props, onData, context);
      }));

      return () => {
        if (typeof trackerCleanup === 'function') {
          trackerCleanup();
        }
        return handler.stop();
      };
    }
  };

  return compose(
    onPropsChange,
    options,
  );
}
