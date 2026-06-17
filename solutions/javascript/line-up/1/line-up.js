//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let str_num = String(num);
  let len = str_num.length;
  let sec_last_digit = str_num.charAt(len-2);
  let last_digit = str_num.charAt(len-1);
  let last_two_digit = sec_last_digit+last_digit;
  let card_num = null;

  if ( last_two_digit === "11") {
    card_num = str_num+"th";
  } else if (last_two_digit === "12") {
    card_num = str_num+"th";
  } else if (last_two_digit === "13") {
    card_num = str_num+"th";
  } else if (str_num.endsWith(1)) {
    card_num = str_num+"st";
  } else if (str_num.endsWith(2)) {
    card_num = str_num+"nd";
  } else if (str_num.endsWith(3)) {
    card_num = str_num+"rd";
  } else {
    card_num = str_num+"th";
  }
  
  return name + ", you are the " + card_num + " customer we serve today. Thank you!";
};
