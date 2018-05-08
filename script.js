$(function() {
    let api = new Api(33.748, -84.392);

    // Test #1
    // Log all results from api.searchForBreweries()
    // to the console
    api.searchForBreweries()
        .then(function(breweries) {
            breweries.forEach(function(brewery){
                console.log(brewery);
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    

    
    // Test #2
    // Log all results from api.getBeersForBrewery()
    // to the console
    api.getBeersForBrewery("Arches Brewing")
        .then(function(beers) {
            beers.forEach(function(beer) {
                console.log(beer);
            });
            //console.log(beers);
        })
        .catch(function(error) {
            console.log(error);
        });


    // Test #3
    // Feed the brewery list returned by api.searchForBreweries()
    // in api.getBeersForBrewery and then log all beers returned
    // from each brewery to the console 
    api.searchForBreweries()
        .then(function(breweries) {
            breweries.forEach(function(brewery){
                api.getBeersForBrewery(brewery.name)
                    .then(function(beers) {
                        beers.forEach(function(beer) {
                            console.log(beer);
                        });
                    });
            });
        })
        .catch(function(error) {
            console.log(error);
        });

});