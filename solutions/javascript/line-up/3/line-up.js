//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let strNum = String(num);

  if (
    strNum.endsWith("11") ||
    strNum.endsWith("12") ||
    strNum.endsWith("13")
  ) {
    strNum = `${strNum}th`;
  } else if (strNum.endsWith("1")) {
    strNum = `${strNum}st`;
  } else if (strNum.endsWith("2")) {
    strNum = `${strNum}nd`;
  } else if (strNum.endsWith("3")) {
    strNum = `${strNum}rd`;
  } else {
    strNum = `${strNum}th`;
  }

  return `${name}, you are the ${strNum} customer we serve today. Thank you!`;
};
