$(function() {
    let api = new Api(33.90, -84.392);
    let breweryList = [];
    let beerList = [];

    api.searchForBreweries()
        .then(function(breweries) {
            breweryList = breweries;
            //console.log(map);
            let mapped = new Map(breweries);            
            mapped.render(breweries);
            breweries.forEach(function(brewery) {
                api.getBeersForBrewery(brewery.name)
                    .then(function(beers) {
                        beers.forEach(function(beer) {
                            beerList.push(beer);
                            let sidebar = new SideBar(beerList);
                            sidebar.renderSideBar();
                        });
                        //console.log(beerList);
                    });
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    
});