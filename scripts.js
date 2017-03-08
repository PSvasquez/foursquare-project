$(document).ready(function (){
    
 $("button").on("click", function(){
     var location = $('input').val();
     var url = "https://api.foursquare.com/v2/venues/search?client_id=2SNBS2ZISJKMUIIZLCWY4FHA14Y0HYRR5T5OIOTFPVVWKHXM&client_secret=SE3BEPYPGXWUAPQWF1ZBWQ2GFMOEC4G44FPHHVP4OMCPXLT0&v=20151209&near="+ location
     + ""
}

    });
    console.log(url)
     $.get(url, function(data){
         var data = data.;
    $("#food-results").html(data+"");
    console.log(data)
     }