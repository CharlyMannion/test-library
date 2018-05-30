var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    console.log("Assertion passed: " + assertionToCheck + " is truthy")
  },
  isEqual: function(resultToCheck, expectedResult) {
    if (resultToCheck != expectedResult) {
      throw new Error("Assertion failed: " + resultToCheck + " is not equal to " + expectedResult);
    }
    console.log("Assertion passed: " + resultToCheck + " is equal to " + expectedResult)
  }
};
