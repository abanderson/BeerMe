$(function() {
    let api = new Api(33.748, -84.392);
    let sidebar = new SideBar();
    let breweryList = [];
    let beerList = [];


    api.searchForBreweries()
        .then(function(breweries) {
            breweryList = breweries;
            //Render Map here
            breweries.forEach(function(brewery) {
                api.getBeersForBrewery(brewery.name)
                    .then(function(beers) {
                        beers.forEach(function(beer) {
                            beerList.push(beer);
                            sidebar.renderSideBar(beerList);
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            });
        })
        .catch(function(error) {
            console.log(error);
        });

});