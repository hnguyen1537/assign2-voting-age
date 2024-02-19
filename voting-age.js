// Checks the given age to see whether it's legal to vote in the US or not.
// Returns true if the age is 18 years or older. Otherwise, returns false.

function checkVotingAge(age) {
  // TODO: Implement this function.
  const result = age >= 18 ? true : false; 
  // Returns true if age is 18 or older, else false
  return result;
}


console.log((checkVotingAge(18)); 


// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  checkVotingAge
};
