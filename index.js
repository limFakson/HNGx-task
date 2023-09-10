const Username = document.getElementById('slackUserName');
const myTrack = document.getElementById('myTrack');
const UTCtime = document.getElementById('currentUTCTime');
const DOW = document.getElementById('currentDayOfTheWeek');

Username.innerHTML = 'Horland Yinx';
myTrack.innerHTML = 'Frontend Development';

const d = new Date()
date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
DOW.innerHTML = date[d.getDay()];

const sd = new Date().getTime()
UTCtime.innerHTML = sd;

document.getElementById('url').addEventListener('click', () => {
    window.location.href = "https://github.com/limFakson";

})