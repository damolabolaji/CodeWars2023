// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.

// Your task is to return a four-digit string that encodes that time in 24-hour time.

// Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
// On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.

// function convertTime(time) {
//   if (time.includes("a.m.")) {
//     time = time.replace("a.m.", "").replace(":", "");
//     newTime = `0${time}`;
//     if (newTime) return newTime;
//   }
//   if (time.includes("p.m.")) {
//     time = time.replace("p.m.", "");
//     time = time.replace("a.m.", "").split(":").join("");
//     newtime = Number(time);
//   }
// }

//if time is 8:15 a.m the it'll become 0815.
//remove the a.m., add 0 to the begining
//if it is 10 0r 11 , dont add 0

// function convert24(time) {
//   SplitTime = time.split(":");
//   if (time.includes("a.m.")) {
//     if (Number(SplitTime[0]) < 10) {
//       time = time.replace("a.m.", "").replace(":", "");
//       return `0${time}`;
//     } else if (Number(SplitTime[0]) === 10 || Number(SplitTime[0]) === 11) {
//       time = time.replace("a.m.", "").replace(":", "");
//       return time;
//     } else if (Number(SplitTime[0]) === 12) {
//       time = time.replace("a.m.", "").replace(":", "").replace("12", "");
//       return `00${time}`;
//     }
//   }
//   if (time.includes("p.m.")) {
//     if (Number(SplitTime[0]) < 12) {
//       time = time.replace("p.m.", "").split(":");
//       addedTime = Number(SplitTime[0]) + 12;
//       return `${addedTime}${time[1]}`;
//     } else if (Number(SplitTime[0]) === 12) {
//       time = time.replace("p.m.", "").split(":").join("");
//       return time;
//     }
//   }
// }
// console.log(convert24("12:13 p.m."));

function convertTime(hour, minute, period) {
  if (period === "am") {
    if (hour < 10) {
      return `0${hour}${minute}`;
    } else if (hour === 10 || hour === 1) {
      return `${hour}${minute}`;
    } else return `00${minute}`;
  } else if (period === "pm") {
    if (hour === 12) {
      return `${hour}${minute}`;
    }
    return `${hour + 12}${minute}`;
  }
}

console.log(convertTime(1, 20, "am"));

//according to CodeWars
