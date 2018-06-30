

const express = require('express');
const app = express();
const server = require('http').createServer( app );
const io = require('socket.io')( server );

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Webserver listening on port 3000... throw me some eggs');
});


const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'L2ZgAPxxXoZ0RnXKaSKaNGFPi',
  consumer_secret: 'lYr2ForxhXDuSziL2XInsmmZx96iMRt434llJM6raNDLvjMxg3',
  access_token_key: '4193694133-yFOOCQcs14lFt9SaPQ3FBJfUJeYMFw1IRdtfgaF',
  access_token_secret: 'LsC0LxiirQmy5Z83Rgfe3Imp98KsRhwPENbgLvkHhlbh1'
});


const tweetStream = client.stream('statuses/filter', {
  track: process.argv[2] || 'sunset',
  language: 'en'
});


io.on('connection', socket => {

  console.log('Connected to client');
  // connection has been established!
  // now we can start listening for messages and sending messages through the socket
  // setInterval( () => {
  //
  //   socket.emit('news', { message: 'you are connected to the backend, eggs, eggs, eggs', happy: true});
  //
  // }, 2000);

  tweetStream.on('data', tweet => {
    // console.log('tweet: ', tweet.text);
    socket.emit('tweet', tweet);
    });

  socket.on('response', data => {
    console.log('Got response from browser:', data);
  });

  socket.on('chat', data => {
    socket.broadcast.emit('message', data) // broadcast before emit here sends the message to everyone
                                        // the client who sent the message in the first place.
  });

  socket.on('disconnect', data => {
    console.log('User disconnected');
    socket.broadcast.emit('message', "User has left the room. No more eggs are given")
  })

}); // connection

// const Twitter = require('twitter');
//
// const client = new Twitter({
//   consumer_key: 'L2ZgAPxxXoZ0RnXKaSKaNGFPi',
//   consumer_secret: 'lYr2ForxhXDuSziL2XInsmmZx96iMRt434llJM6raNDLvjMxg3',
//   access_token_key: '4193694133-yFOOCQcs14lFt9SaPQ3FBJfUJeYMFw1IRdtfgaF',
//   access_token_secret: 'LsC0LxiirQmy5Z83Rgfe3Imp98KsRhwPENbgLvkHhlbh1'
// });
//
//
// const tweetStream = client.stream('statuses/filter', {
//   track: process.argv[2] || 'javascript',
//   language: 'en'
// });
//
//
// tweetStream.on('data', tweet => {
//   if(tweet.extended_tweet) {
//   console.log('tweet(full): ', tweet.extended_tweet.full_text);
//
//   } else {
//     console.log('tweet: ', tweet.text);
//   }
// });
