$(document).ready(function(){

  $.ajax({
    url: '/uptime'
  })
  .done(function(data){
    console.log('response:', data);

    $('#uptime').text(data);

  })
  .fail(function(xhr){
    console.log(xhr.responseText, xhr);
  });

  $.getJSON('/dogs')
  .done(function(dogs){
    console.log(dogs);
    dogs.forEach(function(dog){
      $('<li>').html(`Name: ${dog.name}, Roundness: ${dog.roundness}, Age: ${dog.age}`).appendTo('#dogList');
    });

  })
  .fail(function(xhr){
    console.log(xhr.responseText, xhr);
  })

  // setInterval(function(){
    $.getJSON('/hog')
    .done(function(data){
      // console.log(data);
      $('#hog').text(data.biggest_hog);
      $('#time').text(data.current_time);
    })
    .fail(function(xhr){
      console.log(xhr.responseText, xhr);
    });

  // }, 500);

});
