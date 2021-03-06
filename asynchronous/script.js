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

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};


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
    // countriesContainer.style.opacity = 1;
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

const getJSON = function(url, errorMsg = 'something went wrong'){
  return fetch(url).then(response => {
    // console.log(response);
    if(!response.ok)
      throw new Error(`${errorMsg} (${response.status})`);
     return response.json()
  })
};

// const getCountryData = function (country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if(!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//        return response.json()
//     })
//     .then(data => {
//       renderCoutry(data[0])
//       // const neighbour = data[0].borders[0];
//       const neighbour = "fjhgvdjfg";
//       if(!neighbour) return;
      
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => {
//       if(!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json()
//     })
//     .then(data => {
//       renderCoutry(data[0], 'neighbour')
//     })
//     .catch(err => {
//       // console.log(`${err} 💥💥💥`);
//       renderError(`something went wrong 💥💥💥${err.message}. Try again!`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
// };


const getCountryData = function (country){
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCoutry(data[0])
     
      if(!data[0].hasOwnProperty('borders')) throw new Error(`No neighbour found`);
      const neighbour = data[0].borders[0];



      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,
                     'Country not found' );      
    })
    .then(data => renderCoutry(data[0], 'neighbour'))
    .catch(err => {
      // console.log(`${err} 💥💥💥`);
      renderError(`something went wrong 💥💥💥${err.message}. Try again!`)
    })
    .finally(() => {
      // countriesContainer.style.opacity = 1;
    })
};

// btn.addEventListener('click', function(){
//   getCountryData('australia');

// })

// getCountryData('mongolia');



// =====================================================

// In this challenge you will build a function 'whereAmI' which renders a country
// only based on GPS coordinates. For that, you will use a second API to geocode
// coordinates. So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
// challenge 1
  // const whereAmI = function(lat, lng){
  //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=459583832916985788287x5687`)
  //     .then(response => {
  //       console.log(response)
  //       if (!response.ok){
  //         throw new Error(`Not foundProblem with geocodinf ${response.status}`);
  //       }
  //       return response.json()
  //     })
  //     .then(data =>{ 
  //       console.log(`you are in ${ data.city }, ${ data.country }`)
      
  //       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
  //     })
  //     .then(response => {
  //       // console.log(response);
  //       if(!response.ok)
  //         throw new Error(`country not found`);
  //        return response.json()
  //     })
  //     .then(data => renderCoutry(data[0]))
  //     .catch( err => console.error(`${err.message}💥💥💥`))
  //     .finally(() => {
  //       countriesContainer.style.opacity = 1;
  //     })
  // }
// end challenge 1
// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
// to convert coordinates to a meaningful location, like a city and country name.
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
// will be done to a URL with this format:
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
// promises to get the data. Do not use the 'getJSON' function we created, that
// is cheating �
// 3. Once you have the data, take a look at it in the console to see all the attributes
// that you received about the provided location. Then, using this data, log a
// message like this to the console: “You are in Berlin, Germany”
// 4. Chain a .catch method to the end of the promise chain and log errors to the
// console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you
// will get this error with code 403. This is an error with the request. Remember,
// fetch() does not reject the promise in this case. So create an error to reject
// the promise yourself, with a meaningful error message



// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant
// attribute from the geocoding API result, and plug it into the countries API that
// we have been using.
// 7. Render the country and catch any errors, just like we have done in the last
// lecture (you can even copy this code, no need to type the same code)


// Test data:
//  Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
//  Coordinates 2: 19.037, 72.873
//  Coordinates 3: -33.933, 18.474

// whereAmI(52.508,13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('resolve promise 1').then(res => console.log(res))
// Promise.resolve('resolve promise 2').then(res => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res)
// })
// console.log('test end');


// const lotteryPromise = new Promise(function(resolve, reject){
//   console.log('lotter draw is happening 🔮');
//   setTimeout(function(){
//     if(Math.random() >= 0.5){
//       resolve('you win 💵💵💵 ')
//     } else {
//       reject('you lost ')
//     }

//   },2000)
// });

// lotteryPromise.then(res => console.log(res))
// .catch(err => console.error(err));

// // promisifyng time out
// const wait = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000)
//   })

// }

// wait(2).then(( )=> {
//   console.log('i waited 2 second');
//   return wait(3);
// }).then(( )=> {
//   console.log('i waited 3 second');
  
// })

// Promise.resolve('abc').then(x=> console.log(x));
// Promise.resolve('abc').catch(x=> console.error(x));



// console.log('getting position');
// const getPosition = function(){
//   return new Promise(function(resolve, reject){
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition()
// //   .then(pos => console.log(pos))




// const whereAmI = function(){
//   getPosition().then(pos => {
//     console.log(pos.coords);
//     const {latitude: lat, longitude: lng} = pos.coords;
//     console.log(lat, lng);
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=459583832916985788287x5687`)
//   })
  



    
//       .then(response => {
//         console.log(response)
//         if (!response.ok){
//           throw new Error(`Not foundProblem with geocodinf ${response.status}`);
//         }
//         return response.json()
//       })
//       .then(data =>{ 
//         console.log(`you are in ${ data.city }, ${ data.country }`)
      
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//       })
//       .then(response => {
//         // console.log(response);
//         if(!response.ok)
//           throw new Error(`country not found`);
//          return response.json()
//       })
//       .then(data => renderCoutry(data[0]))
//       .catch( err => console.error(`${err.message}💥💥💥`))
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       })
//   }

//   btn.addEventListener('click', whereAmI)



//   For this challenge you will actually have to watch the video! Then, build the image
// loading functionality that I just showed you on the screen.
// Your tasks:
// Tasks are not super-descriptive this time, so that you can figure out some stuff by
// yourself. Pretend you're working on your own �
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that �)
// 7. After the second image has loaded, pause execution for 2 seconds again
// 8. After the 2 seconds have passed, hide the current image
// Test data: Images in the img folder. Test the error handler by passing a wrong
// image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
// otherwise images load too fast

// const imgContainer = document.querySelector('.images');

// const wait = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000)
//   })

// }




// const creatImage = function(imgpath){
//   return new Promise((resolve, reject)=>{
//     const img = document.createElement('img');
//     img.src = `${imgpath}`

//     img.addEventListener('load', function(){
//       imgContainer.append(img);
//       resolve(img)
//     });

//     img.addEventListener('error', function(){
//       reject(new Error ('image not found'))
//     });
//   })
// }

// let currentImg;

// creatImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img
//     console.log('img 1 loaded');
//     return wait(4)
//   })
//   .then(()=>{
//     currentImg.style.display = 'none';
//     return creatImage('img/img-2.jpg')
//   })
//   .then(img => {
//     currentImg = img
//     console.log('img 2 loaded');
//     return wait(4)
//   })
//   .then(()=>{
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err))


const getPosition = function(){
    return new Promise(function(resolve, reject){
     
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };







const whereAmI = async function (){
 try { // geolocation
 const pos = await getPosition()
 const {latitude: lat, longitude: lng} = pos.coords;
 console.log(lat, lng);
//  reverse geocode
 const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=459583832916985788287x5687`)
 console.log(resGeo);
 
//  if(!resGeo.ok) throw new Error(`problem getting location data`);
 const dataGeo = await resGeo.json()
 console.log(dataGeo);

  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then(res => console.log(res))

  // country data
  const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
 console.log(res);
  
  if(!res.ok) throw new Error(`country not found`);
  console.log(res);
  const data = await res.json();
  renderCoutry(data[0])
  } catch(err){
    console.log(`${err} 💥 `);
    renderError(`something went wrong 💥 ${err.message}`)
  }
};
whereAmI();



console.log('first')

countriesContainer.style.opacity = 1;

// try {
//   let y = 3;
//   const x = 1;
//   y =2;
// } catch(err){
//   alert(err.message)
// }