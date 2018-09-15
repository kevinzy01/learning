import logClockTime from "./logClockTime"
import todayDate from "./todayDate"

let timeLogger = () => {
  console.clear()
  console.log(todayDate() + "\n" + logClockTime());
}

setInterval(timeLogger, 1000)
