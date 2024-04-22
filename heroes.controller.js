angular.module('heroes').controller('MainController', controller)

function controller(heroesServices) {

    const vm = this;
    vm.heroesList = heroesServices.allHeroesList();

    vm.onClickAddHero = function(){
        const newHero = heroesServices.collectNewHeroInformation();
        if(newHero !== null){
            heroesServices.addHeroToDB(newHero)
            renderHeroesList(heroesServices.allHeroesList())
        }
    }

    vm.onClickRemoveHero = function(heroId){
        const nonRemovedHeroes = heroesServices.removeHero(heroId)
        heroesServices.updateSuperHeroesDataBase(nonRemovedHeroes)
        renderHeroesList(nonRemovedHeroes)
    }

    vm.onClickEditHeroName = function(hero){
        heroesServices.editHeroName(hero)
    }

    vm.onChangeSearchByName = function(){
        applyCurrentFilters()
    }

    vm.onChangeFilterByGender = function(){
        applyCurrentFilters()
    }

    vm.onChangeFilterByStudio = function(){
        applyCurrentFilters()
    }

    function renderHeroesList  (heroesList){
        vm.heroesList = heroesList;
    }

    function applyCurrentFilters (){
        const allHeroes = heroesServices.allHeroesList()
        
        let list = heroesServices.searchHeroesByName(allHeroes, vm.searchText)
        list = heroesServices.filterByGender(list, vm.selectedGender)
        list = heroesServices.filterHeroesByStudio(list, vm.selectedStudio)
        
        renderHeroesList(list)
        console.log(list)
    
    }


    
 



}



