    class Map { 
        
        constructor (breweryArray) {
            this.breweryArray = breweryArray
        };
        
        render(breweryArray) {
            function initMap() {
                let mapLatLng = { lat: 33.90, lng: -84.392 };
                let myLatLng = {};
                var map;
                var marker;
                
                map = new google.maps.Map(document.getElementById('map'), {
                    center: mapLatLng,
                    zoom: 11
                });

                breweryArray.forEach(function (currentBrewery) {
                    myLatLng = { lat: currentBrewery.latitude, lng: currentBrewery.longitude }
                    marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: currentBrewery.name
                    });
                });
            };
            initMap();            
        };
    };