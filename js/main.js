//  To pull the JSON data into JS we need to use XMLHttpRequest.

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = '../data.json';
var request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}


function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`;
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  // do stuff
  
}