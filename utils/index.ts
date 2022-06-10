const { DateTime } = require('luxon');

export const formatTime = (date: string) => {
  return DateTime.fromISO(date, {
    zone: 'utc',
  }).toFormat('dd LLLL yyyy');
};

export const readTime = (content: string) => {
  const WPS = 275 / 60;

  let images = 0;
  const regex = /\w/;

  let words = content.split(' ').filter((word: string) => {
    if (word.includes('<img')) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  const imageAdjust = images * 4;
  let imageSecs = 0;
  let imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  return minutes;
};