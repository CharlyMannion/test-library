var consoleGreen = (testText) => {
  console.log(`%c${testText}`, "color: green; text-decoration: underline")
}
var consoleRed = (testText) => {
  console.log(`%c${testText}`, "color: red; font-weight: bold")
}

var assert = {
  isTrue: (assertionToCheck) => {
    if (!assertionToCheck) {
      throw new Error(`Test failed: ${assertionToCheck} is not truthy`)
    }
    consoleGreen(`Test passed: ${assertionToCheck} is truthy`)
  },
  isEqual: (resultToCheck, expectedResult) => {
    if (resultToCheck != expectedResult) {
      throw new Error(`Test failed: ${resultToCheck} didn't equal ${expectedResult}`)
    }
    consoleGreen(`Test passed: ${resultToCheck} is equal to ${expectedResult}`)
  },
  isEmpty: (resultToCheck) => {
    if (!(Object.keys(resultToCheck).length === 0)) {
      throw new Error(`Test failed: object is not empty`)
    }
    consoleGreen(`Test passed: object is empty`)
  },
  contains: (container, resultToFind) => {
    consoleRed('WARNING: "contains()" is no longer advised, use "arrayContains()" instead')

    if (!(container.includes(resultToFind))) {
      throw new Error(`Test failed: ${resultToFind} is not in ${container}`)
    }
    consoleGreen(`Test passed: ${resultToFind} is in ${container}`)
  },
  isAnArray: (object) => {
    if (!(Array.isArray(object))) {
      throw new Error(`Test failed: ${object} is not an array`)
    }
    consoleGreen(`Test passed: ${object} is an array`)
  },
  arrayContains: (container, resultToFind) => {
    if (!(container.includes(resultToFind))) {
      throw new Error(`Test failed: ${resultToFind} is not in ${container}`)
    }
    consoleGreen(`Test passed: ${resultToFind} is in ${container}`)
  }
}

let respondsTo = (placeholderFunction, callback) => {
  try {
    callback in placeholderFunction ? consoleGreen(`${callback} exists`) : consoleRed(`${callback} does not exist`)
  } catch (error) {
    consoleRed(error)
  }
}

let spyOn = (placeholderFunkyObject, placeholderFunkyFunction) => {
  try {
    placeholderFunkyObject[placeholderFunkyFunction] = function () {
      consoleGreen(`${placeholderFunkyFunction} has been called`)
    }
  } catch (error) {
    consoleRed(error)
  }
}
