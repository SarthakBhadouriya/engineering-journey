//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  const strNum = String(num);
  const lastTwoDigits = strNum.slice(-2);

  let cardNum;

  if (
    lastTwoDigits === "11" ||
    lastTwoDigits === "12" ||
    lastTwoDigits === "13"
  ) {
    cardNum = `${strNum}th`;
  } else if (strNum.endsWith("1")) {
    cardNum = `${strNum}st`;
  } else if (strNum.endsWith("2")) {
    cardNum = `${strNum}nd`;
  } else if (strNum.endsWith("3")) {
    cardNum = `${strNum}rd`;
  } else {
    cardNum = `${strNum}th`;
  }

  return `${name}, you are the ${cardNum} customer we serve today. Thank you!`;
};
