
  // Write your algorithm here

// make a function `hasTargetSum` that check if two numbers from the array
// adds up to some target if i have an array [1,2,3,4]
// and the target is 6i shoud return true because 2 and 4 add to 6
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
function hasTargetSum(array, target) {

  for (let i = 0; i< array.length; i++){
    const complement = target - array[i]
    for (let j = i+1;j< array.length; j++){

      if (array[j]=== complement)return true
    }
  }

  return false;
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
