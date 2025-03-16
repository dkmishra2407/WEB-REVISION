const axios = require('axios');
// way 1
// fetch('https://api.github.com/users/dkmishra2407')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// way 2
// async function fetchdata(){
//     try{
//         const response = await fetch('https://api.github.com/users/dkmishra2407');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error('Error:', error);
//     }
// }
// fetchdata();