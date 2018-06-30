
console.log('egggggggs');


const socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
  console.log('connected!');
});

socket.on('news', data => {
  console.log('Got news', data);
  socket.emit('response', {status: 'good'});
});

socket.on('message', data => {
  console.log('got chat message:', data);
});

socket.on('tweet', data => {
  console.log('got tweet:', data);
  // $('#tweets').prepend(`<p><em>${data.user.screen_name}</em>: ${data.text}</p>`)
  if( data.entities && data.entities.media){
    console.log('Got image: ', data.entities.media, data.entities.media[0].media_url );
    const $img = $('<img class="tweetImg">').attr("src", data.entities.media[0].media_url});
    $('#tweets').append($img);
  }
});
