// alert("Hello Khan names")
// User birthday say 03/07/1778
// Calculate the day of the week they were born
// Depending on the gender give them a name
// const dDate = document.getElementById("dateInput");

const male = document.getElementById("maleRadio");
const female = document.getElementById("femaleRadio");

let CC;
let DD;
let YY;
let MM;
let day;

// let akanMale = {
//   Sunday: "Kwasi",
//   Monday: "Kwadwo",
//   Tuesday: "Kwabena",
//   Wednesday: "Kwaku",
//   Thursday: "Yaw",
//   Friday: "Kofi",
//   Saturday: "Kwame",
// };

let akanFemale = [
  { english: "Sunday", ghana: "Akosua" },
  { english: "Monday", ghana: "Adwoa" },
  { english: "Tuesday", ghana: "Abenaa" },
  { english: "Wednesday", ghana: "Akua" },
  { english: "Thursday", ghana: "Yaa" },
  { english: "Friday", ghana: "Afua" },
  { english: "Saturday", ghana: "Ama" },
];

let akanMale = [
  { english: "Sunday", ghana: "Kwasi" },
  { english: "Monday", ghana: "Kwadwo" },
  { english: "Tuesday", ghana: "Kwabena" },
  { english: "Wednesday", ghana: "Kwaku" },
  { english: "Thursday", ghana: "Yaw" },
  { english: "Friday", ghana: "Kofi" },
  { english: "Saturday", ghana: "Kwame" },
];

// const daysOfTheWee = {
//   1: "Sunday",
//   2: "Monday",
//   3: "Tuesday",
//   4: "Wednesday",
//   5: "Thursday",
//   6: "Friday",
//   7: "Saturday",
// };

const getDate = () => {
  document.getElementById("dateInput").addEventListener("change", function () {
    var input = this.value;
    var dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

    // CC - is the century digits. For example 1989 has CC = 19
    CC = dateEntered.getFullYear();
    CC = CC.toString().substr(0, 2);
    console.log("Decade " + CC);

    // YY - is the Year digits (1989 has YY = 89)
    YY = dateEntered.getFullYear();
    YY = YY.toString().substr(2, 4);
    console.log("Year " + YY);

    // MM -  is the Month
    MM = dateEntered.getMonth();
    console.log("Month " + MM);

    // DD - is the Day of the month

    DD = dateEntered.getDate();
    console.log("Day of month " + DD);

    day = dateEntered.getDay();
    console.log("Day of week " + day);

    // alert("Helllow")

    // alert(male.isChecked)
    // dayOfTheWeek();
  });
};

// Formulae for calculating day of the month

const dayOfTheWeek = () => {
  // let firstPart = CC / 4 - 2 * CC - 1;
  // let secondPart = (5 * YY) / 4;
  // let thirdPart = (26 * (MM + 1)) / 10;

  let d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  d = Math.floor(d);
  // d = d + 2;
  console.log("day of the formulae " + d);

  // let gender = prompt("Whats your Gender?");
  
  // console.log("CheckBox "+ checked)

  if (male.checked) {
    akanMale.find((item, index, arr) => {
      if (index == day) {
        console.log(item.ghana, item.english);
        document.getElementById("text").innerHTML = `Means an African male 👨🏿 born on ${item.english}`

      }
    });
  } else if (female.checked) {
    akanMale.find((item, index, arr) => {
      if (index == day) {
        console.log(item.ghana, item.english);
        document.getElementById("text").innerHTML =`Means an African female 👧🏿 born on ${item.english}`
      }
    });
  }
};

const validate = () => {
  if ((male.checked && female.checked) == false) {
    alert("Gender Must set");
  }
};

let date = new Date();
// alert(date.getTimezoneOffset)
getDate();

document.getElementById("btn").addEventListener("click", () => {
  dayOfTheWeek();
  validate();
});
