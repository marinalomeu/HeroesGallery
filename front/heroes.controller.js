angular.module('heroes').controller('MainController', controller)

function controller(heroesServices, heroesDB) {

    const vm = this;
    vm.heroesList = []
    vm.heroesStudios = []
    let studios = []
    let heroesList = []
    let originalOrder = true;

    vm.$onInit = function(){
        renderHeroesList()
        studiosList()
    }

    vm.onClickAddHero = function(){
        const newHero = heroesServices.collectNewHeroInformation();
        if(newHero !== null){
            heroesServices.addHeroToDB(newHero).then(r => {
                renderHeroesList()
                
            })
        }
    }

    vm.onClickRemoveHero = function(heroId){
        
        heroesDB.deleteHero(heroId).then(r => {
            renderHeroesList()
        })
    }

    vm.onClickEditHeroName = function(hero){
        const p = heroesServices.editHeroName(hero);
        if(p === null){
            return;
        }
        p.then(r => {
            renderHeroesList()
        })
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

    function applyCurrentFilters (){
        let list = sortHeroesByName(angular.copy(heroesList))
            
        list = heroesServices.searchHeroesByName(list, vm.searchText);
        list = heroesServices.filterByGender(list, vm.selectedGender);
        list = heroesServices.filterHeroesByStudio(list, vm.selectedStudio); 

        renderFilteredHeroesList(list)
    
    }

    function renderHeroesList(){
        vm.loading = true;
        const heroesPromise = heroesDB.getList()

        heroesPromise.then(function(response){
            vm.loading = false;
            heroesList = response.data
            applyCurrentFilters()
        })
    }

    function studiosList(){
        const studiosPromise = heroesDB.getStudios()

        studiosPromise.then(function(response){
            studios = response.data
            vm.heroesStudios = studios
        })
    }

    function renderFilteredHeroesList(list){
        vm.heroesList = list;
    }
 
    vm.onClickSortByName = function(){
        originalOrder = !originalOrder;
        applyCurrentFilters()
    }
    
    function sortHeroesByName(list){
        
        return originalOrder ? list : list.sort(function(a, b){
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; 
        });
       
    }

    vm.showAllCheckboxes = function(){
        let showAllCheckboxes = false;
        angular.forEach(vm.onCheck, function(value, key) {
            if(value){
                showAllCheckboxes = true;
            }

        });

        return showAllCheckboxes;

    }

    vm.onClickRemoveGRoupOfHeroes = function(){
        const groupOfHeroesToBeRemoved = groupSelectedHeroes()
        heroesDB.deleteHeroesGroup(groupOfHeroesToBeRemoved)
        renderHeroesList()
    }

    vm.onClickEditGroupOfHeroes = function(){
        const groupOfHeroesToBeEdited = groupSelectedHeroes()
        heroesDB.editHeroStudio(groupOfHeroesToBeEdited, vm.studio).then(renderHeroesList())
      
    }

    function groupSelectedHeroes(){
        let heroesIds = []

        angular.forEach(vm.onCheck, function(value, id){
            if(value){
                heroesIds.push(id)
            }
        })
        return heroesIds;
    }

    vm.getStudioName = function(studioId){

        let heroStudio
        for( let studio of studios){
            if(studio.id == studioId){
                heroStudio = studio.name
            }
        }
        return heroStudio;

    }

    




}




