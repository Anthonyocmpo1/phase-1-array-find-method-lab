// code your solution here
function superbowlWin(record) {
    // Find the first record where the result is "W"
    const winRecord = record.find(entry => entry.result === "W");
  
    if (winRecord) {
      console.log(`The Denver Broncos won the Super Bowl in ${winRecord.year}`);
      return winRecord.year;
    } else {
      console.log("The Denver Broncos did not win the Super Bowl.");
      return undefined;
    }
  }
  
  module.exports = superbowlWin;