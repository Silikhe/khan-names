// alert("Hello Khan names")
// User birthday say 03/07/1778
// Calculate the day of the week they were born
// Depending on the gender give them a name
// const dDate = document.getElementById("dateInput");
let CC;
let DD;
let YY;
let MM;

let akanMale = [
  { Sunday: "Kwasi" },
  { Monday: "Kwadwo" },
  { Tuesday: "Kwabena" },
  { Wednesday: "Kwaku" },
  { Thursday: "Yaw" },
  { Friday: "Kofi" },
  { Saturday: "Kwame" },
];

let akanFemale = [
  { Sunday: "Akosua" },
  { Monday: "Adwoa" },
  { Tuesday: "Abenaa" },
  { Wednesday: "Akua" },
  { Thursday: "Yaa" },
  { Friday: "Afua" },
  { Saturday: "Ama" },
];

document.getElementById("dateInput").addEventListener("change", function () {
  var input = this.value;
  var dateEntered = new Date(input);
  console.log(input); //e.g. 2015-11-13
  console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

  // CC - is the century digits. For example 1989 has CC = 19
  CC = dateEntered.getFullYear();
  CC = CC.toString().substr(0, 2);
  console.log(CC);

  // YY - is the Year digits (1989 has YY = 89)
  YY = dateEntered.getFullYear();
  YY = YY.toString().substr(2, 4);
  console.log(YY);

  // MM -  is the Month
  MM = dateEntered.getMonth();
  console.log(MM);

  // DD - is the Day of the month

  DD = dateEntered.getDay();
  console.log(DD);

  dayOfTheWeek();
});

// Formulae for calculating day of the month
// (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

const dayOfTheWeek = (fullDate) => {

  let firstPart = CC / 4 - 2 * CC - 1;
  let secondPart = (5 * YY) / 4;
  let thirdPart = (26 * (MM + 1)) / 10;

  let d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
d = Math.trunc(d);
d = d + 2;
  console.log(d);

  for (const [key, value] of Object.entries(akanMale)) {
    console.log(value)
  }
  
};

let date = new Date();
// alert(date.getTimezoneOffset)
