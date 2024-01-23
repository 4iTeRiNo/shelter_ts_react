export const getRandomNumber = (min: number, max: number, num: number) => {
  const countSlide: number[] = [];

  while (countSlide.length < num) {
    const number = Math.floor(min + Math.random() * (max + 1 - min));

    if (countSlide.indexOf(number) < 0) {
      countSlide.push(number);
    }
  }
  return countSlide;
};
