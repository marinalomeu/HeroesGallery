angular.module('heroes').service('heroesServices', heroesServices);

function heroesServices(heroesDB){
    const serv = this;

    
    serv.allHeroesList = function(){
       return heroesDB.getList()
    }

    serv.addHeroToDB = function(hero){
        return heroesDB.appendHero(hero)
    }

    serv.updateSuperHeroesDataBase = function(heroesList){
        heroesDB.updateSuperHeroesDataBase(heroesList)
    }

    serv.editHeroName = function (hero){
        const newName = serv.enterHeroName()
        if(newName === null){
            return null;
        }
        hero.name = newName;
        return heroesDB.editHero(hero)

    }
    
    serv.collectNewHeroInformation = function() {
        const name = serv.enterHeroName();
        if(name === null){
            return null;
        }

        const gender = serv.enterHeroGender();
        if(gender === null){
            return null;
        }

        const superpower = serv.enterHeroSuperpower();
        if(superpower === null){
            return null;
        }

        const studio = serv.enterHeroStudio();
        if(studio === null){
            return null;
        }

        const avatar = serv.enterHeroAvatarURL();

        return { name, superpower, gender,  avatar,  studio }; 
    }
        
    serv.createRandomId = function() {
        return Math.floor(Math.random() * 100)
    }
    
    serv.enterHeroName = function() {
        let newHeroName;
        
        while(!newHeroName){
            newHeroName = prompt('Name')
            
            if(newHeroName === null){
                return  null;
            }
               return newHeroName;
        }
        
    }

    serv.enterHeroSuperpower = function() {
        let superpower;
        
        while(!superpower){
            superpower = prompt('Superpower')

            if(superpower === null){
                return  null;
            }
        }
        return superpower;
    }

    serv.enterHeroGender = function() {
        let gender 
        while(!gender){
            gender = prompt('Gender')

            if(gender === null){
                return  null;
            }
        }
        return gender;
    }
    // configurar obrigatoriedade
    serv.enterHeroAvatarURL = function() {
        const avatar = prompt('Avatar URL')
        return avatar;
    }

    serv.enterHeroStudio = function() {
        let studio; 
        while(!studio){
            studio = prompt('Studio')

            if(studio === null){
                return  null;
            }
        }
        return studio;
    }

    serv.searchHeroesByName = function(heroesList, searchText){
       
        
        if(!searchText){
            return heroesList;
        }
        else{
            
            let listByName = []
            
            for(let hero of heroesList){
                
                const name = hero.name.toLocaleLowerCase();
                
                if(name.indexOf(searchText.toLocaleLowerCase()) !== -1){
                    listByName.push(hero)
                }
            }
            return listByName;
        }
    }

    serv.filterByGender = function(heroesList, genderValue){

        let filteredHeroesListByGender = []
        
        if(!genderValue){
            return heroesList;  
        }
        else if(genderValue == 0){
            return heroesList;
        }
        else{
            
            let gender;
            if(genderValue == 1) {
                gender = "Female"
            }else{
                gender = "Male"
            }
            
            for(let hero of heroesList){
                
                if(hero.gender.indexOf(gender) !== -1){
                    filteredHeroesListByGender.push(hero)
                }
                
            }
            return filteredHeroesListByGender;
        }
    }

    serv.filterHeroesByStudio = function(heroesList, studioValue){
        let filteredHeroesListByStudio = []
        let studio;
        
        if(!studioValue){
            return heroesList;  
        }
        else if(studioValue == 0){
            return heroesList;
        }
        
        else{
            if(studioValue == 1) {
                studio = "DC Comics"
            }else if(studioValue == 2){
                studio = "Marvel"
            }
            
            for(let hero of heroesList){
                
                if(hero.studio == studioValue){
                    filteredHeroesListByStudio.push(hero)
                }
                
            }
            return filteredHeroesListByStudio;
        }
    }

    serv.sortByName = function(array){
        array.sort()
    }

}
