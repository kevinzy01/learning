// let checkAMPM = x => {
//   if (x > 12) {
//     return x - 12 + " pm"
//   } else {
//     return x + " am";
//   }
// }
//
// let hour = (time, string) => {
//   let updateHours = time.getHours()
//
//   return string.replace("hh", updateHours);
// }
//
// let mins = (time, string) => {
//   let updateMins = time.getMinutes()
//
//   return string.replace("mm", updateMins)
// }
//
// let secs = (time, string) => {
//   let updateSecs = time.getSeconds()
//
//   return string.replace("ss", updateSecs)
// }
//
// const CurrentTime = (h, m, s, time, string) => {
//   return checkAMPM(h(time, string)) + m(time, string) + s(time, string);
// }
//
// export {CurrentTime, secs, mins, hour}

const logClockTime = () => {
  let time = getCLockTime()

  console.log(time);
}

const getCLockTime = () => {
  let date = new Date()

  var time = {
    hours: date.getHours(),
    mins: date.getMinutes(),
    secs: date.getSeconds(),
    amppm: "AM"
  }

  if (time.hours == 12) {
    time.ampm = "PM"
  } else if (time.hours > 12) {
    time.ampm = "PM"
    time.hours -= 12
  }

  if (time.hours < 10 ) {
    time.hours = "0" + time.hours
  }

  if (time.mins < 10) {
    time.mins = "0" + time.mins
  }

  if (time.secs < 10) {
    time.secs = "0" + time.secs
  }

  return time.hours + ":" + time.mins + ":" + time.secs + " " + time.ampm;

}

module.exports = logClockTime;
