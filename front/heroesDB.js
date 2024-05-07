angular.module('heroes').service('heroesDB', heroesDB);

// heroes api
function heroesDB($http) { 

    const db = this;

    db.getList = function(){
        const promise = $http.get('http://localhost:8083/heroes')
        return promise;
    }

    db.getStudios = function(){
        const promise = $http.get('http://localhost:8083/heroes/studios/')
        return promise;
    }

    db.appendHero = function(hero){
        return $http.post('http://localhost:8083/heroes', hero)
    }

    db.deleteHero = function (heroId){
        return $http.delete('http://localhost:8083/heroes/' + heroId)
    }

    db.editHero = function(hero){
        return $http.put('http://localhost:8083/heroes/' + hero.id, hero)
    }

    db.editHeroStudio = function(list, studio){
        const obj = {ids : list, studio : studio}
        console.log(obj)

        return $http.put('http://localhost:8083/heroes/studio/',  obj)
    }

    db.updateSuperHeroesDataBase = function(heroesList){
        superHeroes = heroesList;
    }

    db.deleteHeroesGroup = function(list){
        const obj = { ids : list };
        
        return $http.post('http://localhost:8083/heroes/excluirlote/', obj)
    }

}


