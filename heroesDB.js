angular.module('heroes').service('heroesDB', heroesDB);


function heroesDB() { 

    const db = this;

    db.getList = function(){
        return superHeroes
    }

    db.appendHero = function(hero){
        superHeroes.push(hero)
    }

    db.removeHero = function (heroId){
        
        const nonRemovedHeroes = []
        const HeroToRemoveId = heroId

        for(let i = 0; i < superHeroes.length; i++){
            let hero = superHeroes[i];

            if (hero.id != HeroToRemoveId){
                nonRemovedHeroes.push(superHeroes[i]);
            };
            
        };

    }

    db.updateSuperHeroesDataBase = function(heroesList){
        superHeroes = heroesList;
    }

    db.checkIfHeroExists = function(enteredName){
        
        for(let hero of superHeroes){
            const heroToBeAdded = enteredName.toLocaleLowerCase();
            const heroesNames = hero.name.toLocaleLowerCase();
            
            if(heroesNames == heroToBeAdded){
                return true;
            }
            
        }
        return false;
    }   

}


let superHeroes = [
    {
        "id": 1,
        "name": "Superman",
        "gender": "Male",
        "superpower": "Flight, super strength, heat vision, freeze breath",
        "avatar": "https://i.pinimg.com/originals/52/e4/39/52e43982e4212a8117f7c5eba281c8cd.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 2,
        "name": "Wonder Woman",
        "gender": "Female",
        "superpower": "Super strength, speed, flight, enhanced senses, magical weaponry",
        "avatar": "https://i.pinimg.com/originals/43/88/d4/4388d497d1ffab61572b07c8575881c3.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 3,
        "name": "Spider-Man",
        "gender": "Male",
        "superpower": "Wall-crawling, enhanced agility, super strength, spider-sense",
        "avatar": "https://example.com/spiderman_avatar.jpg",
        "studio": "Marvel"
    },
    {
        "id": 4,
        "name": "Captain Marvel",
        "gender": "Female",
        "superpower": "Flight, super strength, energy projection, invulnerability",
        "avatar": "https://example.com/captain_marvel_avatar.jpg",
        "studio": "Marvel"
    },
    {
        "id": 5,
        "name": "Batman",
        "gender": "Male",
        "superpower": "Genius-level intellect, peak physical condition, advanced technology",
        "avatar": "https://example.com/batman_avatar.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 6,
        "name": "Wonder Man",
        "gender": "Male",
        "superpower": "Super strength, invulnerability, flight, energy manipulation",
        "avatar": "https://example.com/wonder_man_avatar.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 7,
        "name": "Storm",
        "gender": "Female",
        "superpower": "Weather manipulation, flight, immunity to extreme temperatures",
        "avatar": "https://example.com/storm_avatar.jpg",
        "studio": "Marvel"
    },
    {
        "id": 8,
        "name": "The Flash",
        "gender": "Male",
        "superpower": "Super speed, time manipulation, accelerated healing",
        "avatar": "https://example.com/flash_avatar.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 9,
        "name": "Green Lantern",
        "gender": "Male",
        "superpower": "Power ring constructs, flight, energy manipulation",
        "avatar": "https://example.com/green_lantern_avatar.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 10,
        "name": "Black Widow",
        "gender": "Female",
        "superpower": "Expert martial artist, espionage skills, enhanced physiology",
        "avatar": "https://example.com/black_widow_avatar.jpg",
        "studio": "Marvel"
    },
    {
        "id": 11,
        "name": "Iron Man",
        "gender": "Male",
        "superpower": "Genius-level intellect, powered armor suit",
        "avatar": "https://example.com/iron_man_avatar.jpg",
        "studio": "Marvel"
    },
    {
        "id": 12,
        "name": "Thor",
        "gender": "Male",
        "superpower": "Super strength, control over lightning, flight",
        "avatar": "https://example.com/thor_avatar.jpg",
        "studio": "Marvel"
    },
    {
        "id": 13,
        "name": "Supergirl",
        "gender": "Female",
        "superpower": "Flight, super strength, heat vision, freeze breath",
        "avatar": "https://example.com/supergirl_avatar.jpg",
        "studio": "DC Comics"
    },
    {
        "id": 14,
        "name": "Aquaman",
        "gender": "Male",
        "superpower": "Super strength, underwater adaptation, telepathic communication with sea life",
        "avatar": "https://example.com/aquaman_avatar.jpg",
        "studio": "DC Comics"
    }
]
