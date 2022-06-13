export const generateColor = (colors) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let duplicate = false;
  if (colors.length !== 0) {
    duplicate = colors.find((color) => color === randomColor);
  }
  return duplicate ? generateColor(colors) : randomColor;
};
