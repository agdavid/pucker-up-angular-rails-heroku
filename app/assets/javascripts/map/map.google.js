// Sample GoogleMap to confirm working properly 
function initMap() {
    // Center map on USA
    var usa = {lat: 41.560654, lng: -98.491622};
        
    // Instantiate new Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: usa
    });

    // JS model object
    function Coordinate(id, name, url, lat, lng) {
        this.id = id
        this.name = name
        this.url = url
        this.lat = lat
        this.lng = lng
    };


};