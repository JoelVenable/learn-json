//  To pull the JSON data into JS we need to use XMLHttpRequest.

var header = document.querySelector('header');
var section = document.querySelector('section');

var request = fetchJsonRequest('../data.json');

request.onload = function () {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}


function populateHeader(jsonObj) {
  addHTMLElement('h1',header, jsonObj['squadName']);
  var subheadContent = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`;
  addHTMLElement('p', header, subheadContent);
}


function showHeroes(jsonObj) {
  var heroList = jsonObj['members'];

  for (let i = 0; i < heroList.length; i++) {
    const hero = heroList[i];
    var div = addHTMLElement('div',section,"");


    addHTMLElement('h3',div,`Name: ${hero.name}`);
    addHTMLElement('p',div,`Age: ${hero.age}`);
    addHTMLElement('p',div,`Secret Identity: ${hero.secretIdentity}`);
    addHTMLElement('p',div,"Special Powers:");
    var powersList = addHTMLElement('ul',div);
    for (let i = 0; i < hero.powers.length; i++) {
      addHTMLElement('li',powersList,hero.powers[i]);
    }
  }
}


function addHTMLElement(htmlTag, parent, htmlContent) {
  htmlElement = document.createElement(htmlTag);
  htmlElement.textContent = htmlContent;
  parent.appendChild(htmlElement);
  return htmlElement;
}


function fetchJsonRequest(jsonURL) {
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  request.send();
  return request;
}