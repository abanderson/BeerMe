$(function() {

    class Map { 
        
        constructor (breweryArray) {
            this.breweryArray = breweryArray
        }
            //will need to loop over brewery data looking for brewery names. 
            //For each brewery name it will need to create a new marker. 
            //find its corresponding latitude and logitude.
        
        render() {
            function initMap() {
                let mapLatLng = { lat: 33.748, lng: -84.392 };
                let myLatLng = {};

                map = new google.maps.Map(document.getElementById('map'), {
                    center: mapLatLng,
                    zoom: 11
                });

                breweryArray.forEach(function (currentBrewery) {
                    myLatLng = { lat: currentBrewery.Latitude, lng: currentBrewery.Longitude }
                    marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: currentBrewery.name
                    });
                });
            };
            initMap();
        };

    }    

    //         function markerRender() {
                

                
    //         };
    //         markerRender();
    //     }
        

    // }

        

    // var map;
    // var marker;

    

    // function initMap() {
    //     var myLatLng = { lat: 33.748, lng: -84.392 };

    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: myLatLng,
    //         zoom: 11
    //     });

    //     function markerRender() {
    //         let markerArray = [];
    //         let myLatLng = {};

    //         sampleDate.forEach(function (currentBrewery) {
    //             myLatLng = { lat: currentBrewery.latitude, lng: currentBrewery.longitude }
    //             marker = new google.maps.Marker({
    //                 position: myLatLng,
    //                 map: map,
    //                 title: currentBrewery.brewery_name
    //             });
    //         })
    //     };
    //     // marker = new google.maps.Marker({
    //     //     position: myLatLng,
    //     //     map: map,
    //     //     title: 'Hello World!'
    //     // });
    //     markerRender();
    // }

    // initMap();

});