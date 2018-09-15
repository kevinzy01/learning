const todayDate = () => {
  let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  let day = weekdays[new Date().getDay()]

  return "Today is: " + day;
}

// console.log(todayDate());

export default todayDate
