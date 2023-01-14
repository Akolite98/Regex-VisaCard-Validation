// const set1 = / hello[0-9]/.test("hello");

// console.log(set1);

// const set2 = /^\S+@+\S+\.?\S+$/.test("hello@gmail.com");

// console.log(set2);

// const match = /\d+/.exec("two five three");
// console.log(match);

// const prompt = require("prompt-sync")();

function isValid_VisaCard_Number(VisaCard_Number) {
  // Regex to check valid
  // VisaCard_Number
  let regex = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);

  // if VisaCard_Number
  // is empty return false
  if (VisaCard_Number == null) {
    return "false";
  }

  // Return true if the VisaCard_Number
  // matched the ReGex
  if (regex.test(VisaCard_Number) == true) {
    return "true";
  } else {
    return "false";
  }
}

// Test Case 1:
let str1 = "4155279860457";
console.log(isValid_VisaCard_Number(str1));

// Test Case 2:
let str2 = "4155279860457201";
console.log(isValid_VisaCard_Number(str2));

// Test Case 3:
let str3 = "4155279";
console.log(isValid_VisaCard_Number(str3));

// Test Case 4:
let str4 = "6155279860457";
console.log(isValid_VisaCard_Number(str4));

// Test Case 5:
let str5 = "415a27##60457";
console.log(isValid_VisaCard_Number(str5));

// Test Case 6:
let str6 = "RAH12071998";
console.log(isValid_VisaCard_Number(str6));
