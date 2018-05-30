var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    console.log("Assertion passed: " + assertionToCheck + " is truthy")
  },
  isEqual: function(resultToCheck, expectedResult) {
    if (resultToCheck != expectedResult) {
      throw new Error("Test failed: " + resultToCheck + " is not equal to " + expectedResult);
    }
    console.log("Test passed: " + resultToCheck + " is equal to " + expectedResult)
  },
  // contains: function(resultToCheck, resultContainer) {
  //   if (resultContainer.includes(resultToCheck) = false) {
  //     throw new Error("Test failed: " + resultContainer + " does not contain " + resultToCheck);
  //   }
  //   console.log("Test passed: " + resultContainer + " contains " + resultToCheck)
  // }
};
