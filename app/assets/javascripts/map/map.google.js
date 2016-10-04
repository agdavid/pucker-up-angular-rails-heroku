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

    //JS method on the prototype
    Coordinate.prototype.create_marker = function() {
        var latLng = new google.maps.LatLng(this.lat, this.lng);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    };

    function createCoordinates(data) {
        for(var i=0; i < data.length; i++) {
            var id = data[i].id;
            var lat = parseFloat(data[i].lat);
            var lng = parseFloat(data[i].lng);

            var coordinate = new Coordinate(id, lat, lng);
            coordinate.create_marker()
        }
    };


};