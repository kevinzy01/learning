const logClockTime = () => {
  let time = getCLockTime()

  return time;
}

const getCLockTime = () => {
  let date = new Date()

  var time = {
    hours: date.getHours(),
    mins: date.getMinutes(),
    secs: date.getSeconds(),
    ampm: "AM"
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

export default logClockTime
