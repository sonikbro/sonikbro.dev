const { DateTime } = require('luxon');

const formatTime = (date: string) => {
  return DateTime.fromISO(date, {
    zone: 'utc',
  }).toFormat('dd LLLL yyyy');
};

export default formatTime;
