const logClockTime = require('./logClockTime');
const todayDate = require('./todayDate');

let timeString = "hh:mm:ss"

let main = (string) => {

  return todayDate()
}

setInterval(f=> {console.log(main(timeString));; logClockTime()}, 1000)
