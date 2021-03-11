let imagesData = ['images/boat.jpg','images/building.jpg','images/canal.jpg','images/church.jpg','images/duckweed.jpg','images/grassland.jpg','images/tractor.jpg','images/tree.jpg'];
let titleData = ['Boat','Building','Canal','Church','Duckweed','Grassland','Tractor','Tree'];
let descriptionData = ['A view of old boats on the quay of Prins Hendrikkade, in front of the new buildings on Oosterdokseiland in Amsterdam.',
  'Spacious entrance of a wealthy mansion in front of Artis Zoo, in the heart of the Plantage district: Plantage Kerklaan.',
  'A view from the Hortus-bridge over the Nieuwe Herengracht canal in Amsterdam with the stone-border of the Wertheim park.',
  'Roman catholic 19th century church Sint Nicolaaskerk/ Sint-Nicolaasbasiliek in the old citycenter in Amsterdam-Centrum.',
  'Ditch full of yellow-green duckweed, with tiny birches on the wet peat borders; characteristic landscape for moorlands in Drenthe.',
  'Photo of a flat grass landscape in the area Laaghalerveen near Hooghalen; these grasslands are here property of a few big cow-farmers, to enlarge their mowed grass storage under plastics.',
  'Farmer, working on a tractor with a huge mobile role of flexible water pipe to spray the peat fields with their characteristic rather loose and sandy structure in Drenthe.',
  'Wide-grown canopy of a large birch tree on the peat in North Netherlands, 2012.'
  ];
let currentPhoto = 0;
function display() {
  $('#photo').attr('src', imagesData[currentPhoto]);
  $('#photo-title').text(titleData[currentPhoto]);
  $('#photo-description').text(descriptionData[currentPhoto]);

}
display();
$("#leftArrow").click(() => {
  currentPhoto--;
  if (currentPhoto == -1) {
    currentPhoto = 7;
  }
  $('.thumbPic').removeClass('active');
  display();
})
$("#rightArrow").click(() => {
  currentPhoto++;
  if (currentPhoto == 8) {
    currentPhoto = 0;
  }
  $('.thumbPic').removeClass('active');
  display();
})
function displayThumbs(pict, index) {
  $("#thumbnails").append(`<img src=${pict} data-index=${index} class="thumbPic"></img>`);
}
imagesData.forEach(displayThumbs);
$(".thumbPic").click((event) => {
  currentPhoto = $(event.target).attr('data-index');
  currentPhoto = parseInt(currentPhoto);
  display();
})
$('.thumbPic').click(function() {
  $('.thumbPic').not(this).removeClass('active');
  $(this).addClass('active');
});
