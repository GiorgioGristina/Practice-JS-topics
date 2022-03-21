'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country){
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
//       <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][1].name}</p>
//     </div>
//   </article>
//     `

//     console.log(Object.entries(data.currencies)[0][1].name);
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;


//   });

// }

// getCountryData('china');
// getCountryData('italy');
// getCountryData('germany');


const renderCoutry = function(data, className = ''){
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
      <p class="country__row"><span>💰</span>${Object.entries(data.currencies)[0][1].name}</p>
    </div>
  </article>
    `

    
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


// const getCountryAndNeighbour = function (country){
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // render country ( 1)
//     renderCoutry(data)

//     // get neigbour country(2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return
//     console.log(neighbour);

//     // ajax call country neigbour
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function(){
      
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
//       // render country ( 2)
//       renderCoutry(data, 'neighbour')
//     })
//   });

// }

// getCountryAndNeighbour('usa');


const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

const getCountryData = function (country){
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCoutry(data[0])
      const neighbour = data[0].borders[0];
      if(!neighbour) return;
      
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => {
      renderCoutry(data[0], 'neighbour')
    })
};


getCountryData('finland');

// getCountryData('mongolia');
