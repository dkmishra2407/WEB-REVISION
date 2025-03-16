// // CALL BACK HELL 

// // function data(num, callback) {
// //     console.log("getting data", num);
// //     if (callback) callback();
// // }

// // data(1, () => {
// //     data(2, () => {
// //         data(3, () => {
// //             data(4);
// //         });
// //     });
// // });


// // SOLUTIO TO CALLBACK HELL

// // 1. Promises
// // 2. Async/Await

// // Promises

// // const getpromise = () =>{
// //     return new Promise((resolve,reject)=>{
// //         console.log("in promise");
// //         resolve("promise resolved");
// //         reject("promise rejected");
// //     })
// // } 

// // const promise = getpromise();

// // promise.then((data) =>{
// //     console.log(data);
// // })
// // .catch((error)=>{
// //     console.log(error);
// // })
// // .finally(()=>{
// //     console.log("finally");
// // })

// //async 

// function data(num){
//     return new Promise((resolve)=>{
//         console.log(num);
//         resolve();
//     })
// }

// async function fetchdata() {
//     await data(1);
//     await data(2);
//     await data(3);
//     await data(4);
// }

// fetchdata();

// async for promises.all()

// async function fetchMultipleData() {
//     let [data1, data2] = await Promise.all([
//       fetch("https://api.example.com/data1").then(res => res.json()),
//       fetch("https://api.example.com/data2").then(res => res.json())
//     ]);
//     console.log(data1, data2);
//   }
// fetchMultipleData();
  

// accesing json data

// let user = {
//     "name": "Alice",
//     "age": 25,
//     "email": "alice@example.com"
//   };
  
//   console.log(user.name);
//   console.log(user["name"]);