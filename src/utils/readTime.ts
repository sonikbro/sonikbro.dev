export default function readTime(content: string){
  const WPS = 275 / 60;

  let images = 0;
  const regex = /\w/;

  const words = content.split(' ').filter((word: string) => {
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

  return Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
};
