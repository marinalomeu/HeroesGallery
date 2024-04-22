angular.module('heroes').service('heroesServices', heroesServices);

function heroesServices(heroesDB){
    const serv = this;

    
    serv.allHeroesList = function(){
       return heroesDB.getList()
    }

    serv.addHeroToDB = function(hero){
        heroesDB.appendHero(hero)
    }

    serv.removeHero = function (heroId){
        
        const nonRemovedHeroes = []
        const HeroToRemoveId = heroId
        const superHeroes = heroesDB.getList()

        for(let i = 0; i < superHeroes.length; i++){
            let hero = superHeroes[i];

            if (hero.id != HeroToRemoveId){
                nonRemovedHeroes.push(superHeroes[i]);
            };
            
        };
        return nonRemovedHeroes;

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
        const id = serv.createRandomId();

        return { id, name, superpower, gender,  avatar,  studio }; 
    }
        
    serv.createRandomId = function() {
        return Math.floor(Math.random() * 100)
    }
    
    serv.enterHeroName = function() {
        let newHeroName;
        
        while(true){
            newHeroName = prompt('Name')
            
            if(newHeroName === null){
                return  null;
            }
            
            else {
                if(!heroesDB.checkIfHeroExists(newHeroName)){
                    return newHeroName;
                }
                alert('This Hero already exists!')
            }
            
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
        // const searchText = vm.searchText
        
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
        else if(genderValue == 1){
            return heroesList;
        }
        else{
            
            let gender;
            if(genderValue == 2) {
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
        
        if(!studioValue){
            return heroesList;  
        }
        else if(studioValue == 1){
            return heroesList;
        }
        
        else{
            
            let studio;
            if(studioValue == 2) {
                studio = "DC Comics"
            }else{
                studio = "Marvel"
            }
            
            for(let hero of heroesList){
                
                if(hero.studio.indexOf(studio) !== -1){
                    filteredHeroesListByStudio.push(hero)
                }
                
            }
            return filteredHeroesListByStudio;
        }
    }


}