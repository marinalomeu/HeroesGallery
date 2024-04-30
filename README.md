# Heroes Gallery

## The Project
The project is a Hero Gallery that contains fourteen Marvel and DC Comics heroes, organized in cards containing name, Studio and Superpowers.
The user can search any Hero by name using the search imput or by gender and studio using the select filter. It can also delete the selected hero or add a new one by typing the hero's informations such as the ones that are to be shown in the cards.

### Purpose
This litle project was created as an oportunity to practice and work on JavaSript fundamentals, AngularJS functions and, of course, trainning logical thinking.

### Used techs
<div style="display: inline_block"><br>
  <img align="center" alt="Nina-HTML" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Nina-CSS" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Nina-Js" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">	 
  <img align="center" alt="Nina-Angular" height="45" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg">    
</div>

## Project scope
- [x] Add Heroes
- [x] Remove Heroes
- [x] Edit name
- [x] Filter by name
- [x] Filter by gender
- [x] Sort by name

### `function addHero()`
#### Logic
1. Enter the new hero informations (Name, studio, gender, superpowers)
2. Save those informations as properties in **hero{ }**
3. Save the new **hero{ }** in **superHeroes[ ]**
4. Update **vm.heroesList**

#### Functions
`prompt()` : Get hero informations from the user

`array.push()` : Add objet in array

`Math.random()` : generate a random hero id

#

### `function removeHero()`
#### Logic
1. Select the hero to be deleted
2. Get the hero's index
3. Generate a new array with all heroes except the deleted hero
4. Update **superHeroes[ ]** and **vm.heroesList**

#### Functions
`for(){}` : For every element in **superHeroes[]** different than the selected one

`array.push()`: add all the non selected heroes to the new heroes list

#

### `function editHero()`
#### Logic

