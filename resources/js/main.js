// data structure

// ###################
// ###################
// Using arrays only 

// // Roger = 0
// // Carlos = 1
// // Susan = 2

// // name
// let names = [];
// names[0] = 'Roger';

// // picture
// let pictures = [];
// pictures[0] = 'Rogerspicurl';
// // -- url
// // -- alt

// // contributions
// // -- day/week
// let monday = [];
// let tuesday = [];
// let wednesday = [];
// let thursday = [];
// let friday = [];

// monday[0] = false;
// tuesday[0] = 'mashed potatoes';
// wednesday[0] = false;
// thursday[0] = false;
// friday[0] = false;


// ###################
// ###################
// Using objects

// let People = [];

// const Roger = {
//   name: 'Roger',
//   picture: 'Rogerspicurl',
//   contributions: {
//     monday: false,
//     tuesday: 'Mashed potatoes',
//     wednesday: false,
//     thursday: false,
//     friday: false
//   }
// }

// People.push(Roger);

// const Susan = {
//   name: 'Susan',
//   picture: 'Susunspicurl',
//   contributions: {
//     monday: false,
//     tuesday: false,
//     wednesday: 'Fudge',
//     thursday: false,
//     friday: false
//   }
// }


// ###################
// ###################
// data structure using function constructor

let People = [];

const Person = function(name, img, contributions) {
  this.name = name;
  this.img = img;
  this.contributions = contributions;
}

Person.prototype.doSomethingSpecial = function() {
  console.log(`${this.name} is doing something special!`);
}

// new = {}
const Roger = new Person('Roger', 'rogersimgurl', {
  monday: false,
  tuesday: 'Mashed potatoes',
  wednesday: false,
  thursday: false,
  friday: false
});

const Susan = new Person('Susan', 'susansimgurl', {
  monday: false,
  tuesday: false,
  wednesday: 'Fudge',
  thursday: false,
  friday: false
});

People.push(Roger);
People.push(Susan);

// ###################
// ###################
// displaying with Arrays only

// display a person
// const displayPerson = function(index) {
//   console.log(names[index]);
//   console.log(pictures[index]);
//   console.log(monday[index]);
//   console.log(tuesday[index]);
//   console.log(wednesday[index]);
//   console.log(thursday[index]);
//   console.log(friday[index]);
// }


// display a person
const displayPerson = function(person) {
  console.log(person.name);
  console.log(person.img);
  console.log(person.contributions);
  
}

// displayPerson(Roger);

// displayPerson(0);


// display all the people
const displayAllPeople = function() {
  People.forEach(person => {
    displayPerson(person);
    person.doSomethingSpecial();
  });
}

displayAllPeople();