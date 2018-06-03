'use strict';
console.log('Welcome to transpilation ' + 'world!');
var state = {
  page: 1,
  photos: [],
  currentSlideshowIndex: null
};

$(document).on('keydown', function (ev) {
  console.log(ev.which, ev.keyCode, ev.key);

  if (!$('#fullscreen').is(':visible')) {
    return;
  }
  switch (ev.key) {
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

$(document).ready(function () {

  $('#searchForm').on('submit', function () {

    $('#images').empty();

    var query = $('#query').val();
    searchFlickr(query);
    return false;
  });

  $('#query').focus();

  // $(document).on('click', 'img', function(){
  //   $(this).attr('index');
  // });
});

$(window).on('scroll', function () {

  var scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());
  // console.log({scrollBottom});

  if (scrollBottom > 5) {
    return;
  }

  console.log('Near bottom of page...');
  throttledSearchFlickr($('#query').val());
});

var searchFlickr = function searchFlickr(searchQuery) {
  console.log({ searchQuery: searchQuery }, state.page);

  $('<hr>').appendTo('#images');

  var URL = "https://api.flickr.com/services/rest/";

  $.getJSON(URL, {
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    method: 'flickr.photos.search',
    text: searchQuery,
    format: 'json',
    nojsoncallback: 1,
    page: state.page++
  }).done(showImages).fail(errorHandler);
};

var throttledSearchFlickr = _.throttle(searchFlickr, 5000, { trailing: false });

var errorHandler = function errorHandler(xhr) {
  console.warn('Error with search request: ', xhr.responseText, xhr);
};

var showImages = function showImages(data) {
  console.log(data);

  //save the search result array into our state object so other
  //functions can use it
  state.photos = data.photos.photo;

  _.each(data.photos.photo, function (photo, index) {
    var imageURL = generateImageURL(photo);

    var $link = $('<a>')
    // .attr('index', index)
    .on('click', function () {
      // const index = $(this).attr('index');
      // this nested function has access to the variables defined in its parrent
      // scope, ie, the _.each callback which is processing each images
      // This is because JS supports 'closures'
      showFullScreenImage(parseInt(index));
    });

    $('<img>', { src: imageURL }).appendTo($link);
    $('#images').append($link);
  });
};

var showFullScreenImage = function showFullScreenImage(photoIndex) {
  state.currentSlideshowIndex = photoIndex;

  // console.log('showFullScreenImage index', photoIndex);
  var imageUrl = generateImageURL(state.photos[photoIndex], 'c');
  // console.log(imageUrl);

  $('#description').html(state.photos[photoIndex].title);

  $('#fullscreen').css('background-image', 'url(' + imageUrl + ')').fadeIn(100);
};

var advancedSlideshow = function advancedSlideshow(amount) {
  // Calculate index of nex image in slideshow based on global index var,
  // and wrap back to zero at the end
  var newIndex = (state.currentSlideshowIndex + amount) % state.photos.length;
  if (newIndex < 0) {
    newIndex = state.photos.length - 1;
  }
  showFullScreenImage(newIndex);
};

var generateImageURL = function generateImageURL(p) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'q';

  return 'https://farm' + p.farm + '.staticflickr.com/' + p.server + '/' + p.id + '_' + p.secret + '_' + size + '.jpg';
};
