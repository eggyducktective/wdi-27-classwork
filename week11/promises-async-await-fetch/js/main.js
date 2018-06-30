// Advanced JS Async
// Fetch API/ Promises
// Async + Await


// return a promise -> .then
//
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//
// .then(response => {
//   response.json().then( actualData => {
//     console.log('data', actualData);
//   });
// });

//
// fetch('https://jsonplaceholder.typicode.com/posts/2')
// .then( response => response.json() )
// .then( data => console.log('data:', data) )
// .catch( err => console.warn('caught ERROR:', err) );
//
//
// // async/await:
//
// const getPost = async() => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   console.log('response:', response);
//   const data = await response.json();
//   console.log(data);
// };
//
// getPost();
//
// const getPost = async function(){
// };
//




fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify( {title: 'Test title', body: 'Lorem Ipsum'} ),
  headers: { 'Content-type': 'application/json'}
})
.then( response => response.json())
.then( data => console.log('data', data))
.catch( err => console.warn('got an error', err))


const submitPost = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify( {title: 'Test title', body: 'Lorem Ipsum'} ),
    headers: {'Content-type': 'application/json'}
  });
  // console.log('res', response2)
  const data = await res.json();
  console.log('async data', data);
};

submitPost();
