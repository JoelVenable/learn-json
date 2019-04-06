//  To pull the JSON data into JS we need to use XMLHttpRequest.

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = '../data.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
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
  var heroList = jsonObj['members'];

  for (let i = 0; i < heroList.length; i++) {
    const hero = heroList[i];
    var div = document.createElement('div');
    section.appendChild(div);


    var heroName = document.createElement('h3'),
     heroAge = document.createElement('p'),
     heroIdentity = document.createElement('p');
     heroPowers = document.createElement('ul');

    heroName.textContent = hero.name;
    div.appendChild(heroName);

    heroAge.textContent = `Age: ${hero.age}`;
    div.appendChild(heroAge);

    heroIdentity.textContent = `Secret Identity: ${hero.secretIdentity}`;
    div.appendChild(heroIdentity);

    div.appendChild(heroPowers);
    for (let i = 0; i < hero.powers.length; i++) {
      const heroPower = hero.powers[i];
      var power = document.createElement('li');
      power.textContent = heroPower;
      heroPowers.appendChild(power);
    }
  }
}