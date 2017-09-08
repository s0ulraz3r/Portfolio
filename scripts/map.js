function initMap(){
  var vit = {lat: 12.966987, lng: 77.599295};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 20,
  center: vit
  });
  var marker = new google.maps.Marker({
    position: vit,
    map: map,
    animation: google.maps.Animation.BOUNCE
      });
  var infowindow = new google.maps.InfoWindow({
    content: "<b>VIT Infotech, #133/1, 5th Floor, <br> Janardhan Towers, Residency Road,<br> Bangalore - 560 025</b>"
  });
  infowindow.open(map,marker);
}
