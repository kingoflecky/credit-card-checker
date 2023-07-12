// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add my functions below:

const cloneArray = (array) => {
  let cloneArray = array.slice(0); // copy the whole `array`
  return cloneArray;
};

const doubleEveryOtherNum = (array) => {
  let doubled = array.reverse(0); // reverse the whole `array`
  for (let i = 1; i < doubled.length; i += 2) {
    doubled[i] *= 2; // replace the value at `i`, for every other number.
  }
  return doubled;
};

const minus9Check = (doubledNums) => {
  let sub9 = doubledNums.slice(); // copy the whole `array`

  for (let i = 0; i < sub9.length; i++) {
    if (sub9[i] > 9) {
      sub9[i] -= 9;
    }
  }
  return sub9;
};

const sumTotal = (subtractedNums) => {
  return subtractedNums.reduce((a, b) => a + b, 0);
};

const getModulo = (sum) => {
  return sum % 10;
};

const isValid = (remainder) => {
  return remainder === 0;
};

const validateCred = (array) => {
  const orgArray = cloneArray(array);
  const doubledNums = doubleEveryOtherNum(orgArray);
  const subtractedNums = minus9Check(doubledNums);
  const sum = sumTotal(subtractedNums);
  const remainder = getModulo(sum);

  return isValid(remainder);
};

const findInvalidCards = (arrayBatch) => {
  let validCards = [];
  let invalidCards = [];

  for (const i of arrayBatch) {
    if (validateCred(i)) {
      validCards.push(JSON.stringify(i));
    } else if (!validateCred(i)) {
      invalidCards.push(JSON.stringify(i));
    }
  }
  return invalidCards;
};

const idInvalidCardCompanies = (findInvalidCards) => {
  let companyNames = [];
  let firstNum = [];
  let invalids = findInvalidCards(batch);
  const arrayCopy = [...invalids];

  arrayCopy.forEach(function (i) {
    if (!firstNum.includes(i[1])) {
      firstNum.push(i[1]);
    }
  });

  for (const i of firstNum) {
    switch (i) {
      case "3":
        companyNames.push("Amex");
        break;
      case "4":
        companyNames.push("Visa");
        break;
      case "5":
        companyNames.push("Mastercard");
        break;
      case "6":
        companyNames.push("Discover");
        break;
      default:
        companyNames.push("Company not found");
    }
  }

  return companyNames.join(", ");
};

// Tests for the above
// console.log("validator - expect true: " + validateCred(valid1));
// console.log("validator - expect false: " + validateCred(invalid1));
// console.log("invalid cards: " + findInvalidCards(batch));

// console.log("card companies: " + idInvalidCardCompanies(findInvalidCards));




// submit form
const submitForm = (event) => {
  event.preventDefault();
  const fName = document.getElementById("fullName");
  const bankName = document.getElementById("bankName");
  const cardNum = document.getElementById("cardNum");
  console.log(fName.value, bankName.value, cardNum.value);
}
// **WIP**
