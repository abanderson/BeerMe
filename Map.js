$(function() {

    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 33.748, lng: -84.392 },
            zoom: 11
        });
    }

    initMap();

});