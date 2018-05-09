class SideBar {
    constructor(beerList) {
        this.beerList = beerList;
        this.searchResults = $('.search-results');
    }

    renderSideBar() {
        let sideBarHTML = "";

        this.beerList.forEach(function(beer){
            let beerObject = new Beers(beer);
                
            sideBarHTML += beerObject.renderBeers();
        });
        
        this.searchResults.html(sideBarHTML);
    }
}