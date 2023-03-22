function hasTargetSum(array, target) { //Sn: N
	for (let i = 0; i < array.length; i++) { // Tn: N, Sn: 1
		const remainder = target - array[i]; // Tn: 1, Sn: 1
		const indexOf = array.indexOf(remainder); // Tn: N, Sn: 1
		if (indexOf != -1 && indexOf != i) { // Tn: 1, Sn: 1
			return true; // 1
		}
	}
	return false // 1
}

/* 
  Write the Big O time complexity of your function here
  Tn = O(N^2)
  Sn = O(N)
*/

/* 
  Add your pseudocode here
  iterate over the every number in array:
	if index of (number-target) is found and is not the same iteration number:
		return true
		stop the iteration
   return false
*/

/*
  Add written explanation of your solution here
  We iterate through every number of the array and check if the remainder of
  the number minus the target exists in array, if it does we return true and stop the loop
  otherwise return false.
*/

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
