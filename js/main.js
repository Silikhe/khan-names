// alert("Hello Khan names")
// User birthday say 03/07/1778
// Calculate the day of the week they were born
// Depending on the gender give them a name
const mydate = document.getElementById("dateInput");
let CC;
let DD;
let YY;
let MM;


let akanMale = [
    {"Sunday": "Kwasi"},
    {"Monday": "Kwadwo"},
    {"Tuesday": "Kwabena"},
    {"Wednesday": "Kwaku"},
    {"Thursday": "Yaw"},
    {"Friday": "Kofi"},
    {"Saturday": "Kwame"},
]

let akanFemale = [
    {"Sunday": "Akosua"},
    {"Monday": "Adwoa"},
    {"Tuesday": "Abenaa"},
    {"Wednesday": "Akua"},
    {"Thursday": "Yaa"},
    {"Friday": "Afua"},
    {"Saturday": "Ama"},
]

mydate.addEventListener("change", function() {
    var input = this.value;
    var dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered()); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
});

// Formulae for calculating day of the month
// (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

const dayOfTheWeek = (fullDate) => {
   

    // CC - is the century digits. For example 1989 has CC = 19

    // YY - is the Year digits (1989 has YY = 89)

    // MM -  is the Month

    // DD - is the Day of the month 


    let firstPart = ( (CC/4) -2*CC-1)
    let secondPart = ((5*YY/4) )
    let thirdPart = ((26*(MM+1)/10))

    let dayOfTheWeek = (firstPart + secondPart + thirdPart + DD) % 7


}

let date = new Date();
// alert(date.getTimezoneOffset)


