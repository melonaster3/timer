const args = process.argv.slice(2);
console.log(args);

const alarmClock = (time) => {
  if (time === []) {
    return null;
  }

  let newTimer = numberCheck(time);

  for (num of newTimer) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },num * 1000);
  }

};

const numberCheck = (arr) => {
  if (arr === []) {
    return [];
  }
  let newArr = [];
  for (let num of arr) {
    let integer = parseInt(num, 10);
    if (num > 0) {
      newArr.push(integer);
    }
  }
  return newArr;
};



alarmClock(args);

