import fetch from "node-fetch";

// fetch("https://bing.com/quary=js")
//     .then((dataFromBing) => {
//         console.log(dataFromBing.url);
//         return fetch("https://yahoo.com/quary=js");
//     })
//     .then((dataFromYahoo) => {
//         console.log(dataFromYahoo.url);
//         return fetch("https://google.com/quary=js");
//     })
//     .then((dataFromGoogle) => {
//         console.log(dataFromGoogle.url);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });

// fetch("https://bing.com/quary=js")
//     .then((dataFromBing) => {
//         console.log(dataFromBing.url);
//         return fetch("https://yahoo.com/quary=js");
//     })
//     .then((dataFromYahoo) => {
//         console.log(dataFromYahoo.url);
//         return fetch("https://google.com/quary=js");
//     })
//     .then((dataFromGoogle) => {
//         console.log(dataFromGoogle.url);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const foo = async () => {
//     try {
//         const dataFromBing = await fetch("https://bing.com/quary=js");
//         console.log(dataFromBing.url);
//         const dataFromYahoo = await fetch("https://yahoo.com/quary=js");
//         console.log(dataFromYahoo.url);
//         const dataFromGoogle = await fetch("https://google.com/quary=js");
//         console.log(dataFromGoogle.url);
//     } catch (error) {
//         console.log("Error", error);
//     }
// };

// foo();



// ============= статические методы

// all | race | any | allSettled

// All

// const pr1 = fetch("https://bing.com/quary=js");
// const pr2 = fetch("https://google.com/quary=js");
// const pr3 = fetch("https://yahoo.com/quary=js");
// const bigPromise = Promise.all([pr1, pr2, pr3]);

// const bigPromise = Promise.all([
//     fetch("https://bing.com/quary=js"),
//     fetch("https://google.com/quary=js"),
//     fetch("https://yahoo.com/quary=js")
// ]);


// bigPromise
//     .then((dataFormBigPromise) => {
//         console.log(dataFormBigPromise[2].url);
//     })
//     .catch((err) => {
//         console.log("Error bigPromise", err);
//     })

// RACE

// const bigPromise = Promise.race([
//     fetch("https://bing.com/quary=js"),
//     fetch("https://google.com/quary=js"),
//     fetch("https://yahoo.com/quary=js")
// ]);

// bigPromise
//     .then((dataFormBigPromise) => {
//         console.log(dataFormBigPromise.url);
//     })
//     .catch((err) => {
//         console.log("Error bigPromise", err);
//     }); 

// ANY

// const bigPromise = Promise.any([
//     fetch("https://bing.com/quary=js"),
//     fetch("https://google.com/quary=js"),
//     fetch("https://yahoo.com/quary=js")
// ]);

// bigPromise
//     .then((dataFormBigPromise) => {
//         console.log(dataFormBigPromise.url);
//     })
//     .catch((err) => {
//         console.log("Error bigPromise", err);
//     });

// ALLSETTLED

const bigPromise = Promise.allSettled([
    fetch("https://bing.com/quary=js"),
    fetch("https://google.com/quary=js"),
    fetch("https://yahoo.com/quary=js")
]);

bigPromise
    .then((dataFormBigPromise) => {
        console.log(dataFormBigPromise);
    })
