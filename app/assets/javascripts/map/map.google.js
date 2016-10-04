// Sample GoogleMap to confirm working properly 
function initMap() {
        // Center map on USA
        var usa = {lat: 41.560654, lng: -98.491622};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: usa
        });
        var marker = new google.maps.Marker({
          position: usa,
          map: map
        });
      }