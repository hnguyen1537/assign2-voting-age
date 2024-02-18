// Checks the given age to see whether it's legal to vote in the US or not.
// Returns true if the age is 18 years or older. Otherwise, returns false.
function checkVotingAge(age) {
  // TODO: Implement this function.
  if (age >= 18) { //if age is greater than or = 18, return true
    return `true`;
      
  } else {  // else, return false cannot vote
      return 'false';}

//return age, is age less > or = 18 ? return true else, false
      return `${age} ${age >= 18 ? true : false}`; 
      

}
//check console
console.log(checkVotingAge(17)) // false
console.log(checkVotingAge(18)) // true

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  checkVotingAge
};
