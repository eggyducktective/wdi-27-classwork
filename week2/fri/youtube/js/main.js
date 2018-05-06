// const links = document.querySelectorAll('a');

const $links = $( 'a' );


console.log($links);




for (let i = 0; i < $links.length; i++) {
 const $link = $links.eq(i); // gives us the Nth object from the results AS A JQUERY OBJECT

//   const link = links[i]; //would give us the Nth object AS A VANIALLA DOM NODE OBJECT ie no JQuery methods


//   console.log( link. href );
//
  const thumbnailURL = youtube.generateThumbnailUrl($link.attr("href"));


  //create image tag and set the src attribute to be the thumbnail videoUrl
  // const imgTag = document.createElement('img');
  // imgTag.src = thumbnailURL;



  const $imgTag = $('<img>');
  $imgTag.attr('src', thumbnailURL);

  // link.appendChild( imgTag );
  $link.append ($imgTag);
}





$links.each(function() {
  const thumbnailURL = youtube.generateThumbnailUrl($(this).attr("href") );
  const $imgTag = $('<img>', {src: thumbnailURL});
  // $imgTag.attr('src', thumbnailURL);
  $(this).append ($imgTag);
});
