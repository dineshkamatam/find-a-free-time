const events = [
  {
    start: "Wed, 03 Mar 2021 04:00:15 GMT",
    end: "Wed, 03 Mar 2021 05:00:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 06:00:15 GMT",
    end: "Wed, 03 Mar 2021 06:30:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 08:30:15 GMT",
    end: "Wed, 03 Mar 2021 09:30:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 09:30:15 GMT",
    end: "Wed, 03 Mar 2021 09:50:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 12:50:15 GMT",
    end: "Wed, 03 Mar 2021 13:10:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 11:30:15 GMT",
    end: "Wed, 03 Mar 2021 12:15:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 13:30:15 GMT",
    end: "Wed, 03 Mar 2021 14:00:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 15:00:15 GMT",
    end: "Wed, 03 Mar 2021 15:30:15 GMT",
  },
];

const findBtn = document.getElementById("findBtn");
const form = document.getElementById("form");
const ul = document.getElementById("ul");
const available = document.getElementById("available");
const scheduled = document.getElementById("scheduled");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let date = document.getElementById("date").value;
  let startTime = document.getElementById("StartTime").value;
  let Duration = document.getElementById("Duration").value;
  let start = new Date(date + " " + startTime);
  let end = new Date(start.getTime() + Duration * 60 * 1000);

  let st = start.toString();
  let endU = end.toString();

  events.forEach((e) => {
    let stT = new Date(e.start).toLocaleTimeString("en-US");
    let enT = new Date(e.end).toLocaleTimeString("en-US");
    let li = document.createElement("li");
    li.innerText = stT + " to " + enT;
    ul.appendChild(li);
  });

  for (let ss of events) {
    let sta = new Date(ss.start).toString();
    let en = new Date(ss.end).toString();

    let li = document.createElement("li");

    if ((sta === st) & (en === endU)) {
      console.log("time is not available");
      break;
    } else {
      console.log("time is not available");
      break;
    }
  }
});
