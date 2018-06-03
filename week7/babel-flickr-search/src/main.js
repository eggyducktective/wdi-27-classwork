
console.log(`Welcome to transpilation ${'world!'}`);
const state = {
  page: 1,
  photos: [],
  currentSlideshowIndex: null
};

$(document).on('keydown', ev => {
  console.log(ev.which, ev.keyCode, ev.key);

  if (!$('#fullscreen').is(':visible')){
    return;
  }
  switch(ev.key) {
    case 'Escape':
      $('#fullscreen').fadeOut(200);
    break;
    case 'ArrowLeft':
      advancedSlideshow(-1);
    break;
    case 'ArrowRight':
      advancedSlideshow(1);
    break;
  }

});

$(document).ready(() => {

  $('#searchForm').on('submit', () => {

    $('#images').empty();

    const query = $('#query').val();
    searchFlickr( query );
    return false;
  });

  $('#query').focus();

  // $(document).on('click', 'img', function(){
  //   $(this).attr('index');
  // });

});

$(window).on('scroll', () => {

  const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
  // console.log({scrollBottom});

  if(scrollBottom > 5){
    return;
  }

  console.log('Near bottom of page...');
  throttledSearchFlickr( $('#query').val() );

});


const searchFlickr = searchQuery => {
  console.log({searchQuery}, state.page);


  $('<hr>').appendTo('#images');

  const URL = "https://api.flickr.com/services/rest/";

  $.getJSON(URL, {
    api_key: 'API key',
    method: 'flickr.photos.search',
    text: searchQuery,
    format: 'json',
    nojsoncallback: 1,
    page: state.page++
  })
  .done(showImages)
  .fail(errorHandler);

};

let throttledSearchFlickr = _.throttle(searchFlickr, 5000, {trailing: false});

const errorHandler = xhr => {
  console.warn('Error with search request: ', xhr.responseText, xhr);
};

const showImages = data => {
  console.log(data);

  //save the search result array into our state object so other
  //functions can use it
  state.photos = data.photos.photo;

  _.each(data.photos.photo, (photo, index) => {
    const imageURL = generateImageURL( photo );

    const $link = $('<a>')
    // .attr('index', index)
    .on('click', function(){
      // const index = $(this).attr('index');
      // this nested function has access to the variables defined in its parrent
      // scope, ie, the _.each callback which is processing each images
      // This is because JS supports 'closures'
      showFullScreenImage( parseInt(index) );
    });

    $('<img>', {src: imageURL}).appendTo($link);
    $('#images').append($link)
  });

};

const showFullScreenImage = photoIndex => {
  state.currentSlideshowIndex = photoIndex;

  // console.log('showFullScreenImage index', photoIndex);
  const imageUrl = generateImageURL(state.photos[photoIndex], 'c');
  // console.log(imageUrl);

  $('#description').html(state.photos[photoIndex].title);

  $('#fullscreen')
  .css('background-image', `url(${imageUrl})`)
  .fadeIn(100);
};

const advancedSlideshow = amount => {
  // Calculate index of nex image in slideshow based on global index var,
  // and wrap back to zero at the end
  let newIndex = (state.currentSlideshowIndex + amount) % state.photos.length;
  if(newIndex < 0) {
    newIndex = state.photos.length - 1;
  }
  showFullScreenImage(newIndex);
};




const generateImageURL = ( p, size='q' ) => {
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_${size}.jpg`;
};
