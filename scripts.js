$(document).ready(function() {
 $('button').on('click', function(event) {

  var food = $('#food').val();
  var zipcode = $('#zip').val();
  var URL = "https://api.foursquare.com/v2/venues/search?" +
   "client_id=2SNBS2ZISJKMUIIZLCWY4FHA14Y0HYRR5T5OIOTFPVVWKHXM&" +
   "client_secret=SE3BEPYPGXWUAPQWF1ZBWQ2GFMOEC4G44FPHHVP4OMCPXLT0&" +
   "near=" + zipcode +
   "&query=" + food;
  console.log(url)
  $.get(URL, function(data) {
   var venues = data.response.venues;
   console.log(venues)
   var myresult = "";
   for (var i = 0; i < 2; i++) {
    myresult += "<li>NAME: " + venues[i].name;
    "</li>"
   }
   $("#food-results").html(myresult);
  })
 });
})
$('food-result').append(['venues']);
$('food-result').append(['myresult']);