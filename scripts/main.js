var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/man-utd1.png') {
      myImage.setAttribute ('src','images/man-utd2.jpg');
    } else {
      myImage.setAttribute ('src','images/man-utd1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

/*
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Manchester United appreciates you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Manchester United appreciates you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/
