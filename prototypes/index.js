const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.reduce((acc, kitty) => {
      kitty.color === 'orange' && acc.push(kitty.name)
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of names
    // Conditional on each element to check if color propert === 'orange'
    // reduce to push only the name property of elements that match condition into new array
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a,b) => b.age - a.age);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of the same number of objects with the same properties
    // Sort() by age
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.reduce((acc, kitty) => {
      kitty.age += 2;
      acc.push(kitty);
      return acc;
    }, []);
    return result;
  }
};

// Annotation:
// Write your annotation here as a comment
// IN: Array of objects
// OUT: Array of kitties whos age has each increased by 2 years
// map and += their age by 2








// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach(member => {
        if (!acc[member]) {
          acc[member] = [];
        }
        acc[member].push(club.club);
      })
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Object - user reduce() and set to an objects
    // iterate over clubs then members array for each club
    // set a key on acc with all the names not repeating of people
    // values are of the clubs they are a part of
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.reduce((acc, mod) => {
      const newObj = {
        'mod': mod.mod,
        'studentsPerInstructor': mod.students / mod.instructors
      }
      acc.push(newObj);
      return acc;
    }, []);
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: Array of objects
    // reduce to create a new array that we can push objects with a mod key and studentsPerInstructor key
    // set mod key to value of mod on each object
    // set studentsPerInstructor key to students / instructors
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      return {
        'flavor': cake.cakeFlavor,
        'inStock': cake.inStock
      }
    });
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: Array of objects
    // map because array will be of the same length
    // return an object of the flavor as a key and values
    // inStock as a key and values
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => {
      return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: An array of only the cake objects whos inStock value is greater than 0
    // filter
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      acc += cake.inStock;
      return acc;
    }, 0);

    return result;
    // Annotation:
    // IN: Array of objects
    // OUT: number
    // reduce and use acc 0 as a counter to += each cakes value of inStock property

  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        !acc.includes(topping) && acc.push(topping);
      })
      return acc;
    }, []);
    return result;
    // Annotation:
    // In: Array of objects
    // Out: An array of toppings without duplicates
    // Reduce to an array and
    // iterate over cake.toppings
    // conditional if acc !includes() the topping, push topping into acc
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc[topping]) {
          acc[topping] = 0;
        }
        acc[topping] += 1;

      })

      return acc;
    }, {});
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: objects
    // reduce to an object
    // iterate over each cake's toppings
    // make a key for each topping starting with a value of 1
    //conditional if that key exists, += 1 to its value
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => {
      return classroom.program === 'FE';
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of objects
    // filter through classrooms and return if the cr's program === 'FE'
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, classroom) => {
      if (classroom.program === 'FE') {
        acc.feCapacity += classroom.capacity;
      } else {
        acc.beCapacity += classroom.capacity;
      }

      return acc;
    }, {feCapacity: 0, beCapacity: 0});
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Object with two keys whos falue is the sum of the capacity
    // counted separately by 'FE' and 'BE'
    // reduce to array and create new objects then push into new array
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array
    // sort() by capacity a-b
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((acc, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        acc.push(book.title)
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of book titles
    // if the books genre is NOT horror or true Crime
    // reduce to an array and push if above conditional passes

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((acc, book) => {
      if (book.published >= 1990) {
        const newObj = {
          'title': book.title,
          'year': book.published
        }
        acc.push(newObj);
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of objects
    // conditonal to check if publishing year is >= 1990 && <= 2001
    // reduce to an array and push an object with the title of the book and the year both as key value pairs
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.reduce((acc, el) => {
      acc.push((el.temperature.high + el.temperature.low) / 2);
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of average temperatures
    // reduce to a number
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((acc, el) => {
      if (el.type === 'sunny' || el.type === 'mostly sunny') {
        acc.push(`${el.location} is ${el.type}.`)
      }
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Array of sentences
    // reduce to an array
    // write a conditional to check if el.type is === 'sunny' || 'mostly sunny'
    // if true, push an interpolated sentence into the reduced array
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a, b) => b.humidity - a.humidity);
    return result.shift();

    // Annotation:
    // Write your annotation here as a comment
    // IN: Array of objects
    // OUT: Object whos humidity is the highest
    // sort the objects in weather array by humidity b.humidity - a.humidity
    // return the shift() value;
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((acc, park) => {
      park.visited ? acc.parksVisited.push(park.name) : acc.parksToVisit.push(park.name);

      return acc;
    }, {parksToVisit: [], parksVisited: []});
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: Object
    // reduce to a new array with two keys each with an array value
    // write a conditional if visited is true push to the second key else push to the first key
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.reduce((acc, park) => {
      const newObj = {};
        newObj[park.location] = park.name;

      acc.push(newObj);
      return acc;
    }, []);
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: Array of objects
    // reduce to a new array
    // create a new object with each iteration and set the key to the el.location and its value to the el.name
    // push the new object into the acc
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((acc, park) => {
      park.activities.forEach(activity => {
        !acc.includes(activity) && acc.push(activity);
      })
      return acc;
    }, []);
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: Array of activities
    // reduce to an array throught nationalParks
    // iterate over each park's activities
    // write conditional if the acc doesnt include the activity
      // then push the activiy into the acc
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // IN: Array of objects
    // Out: number
    // reduce to a number through the breweries array
    // += the acc to the length of each beers array
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((acc, brewery) => {
      const newObj = {
        name: brewery.name,
        beerCount: brewery.beers.length
      }
      acc.push(newObj);
      return acc;
    }, []);
    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: Array of objects
      // Reduce to an array
      // on each iteration create a new object and push that into the acc
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((acc, brewery) => {
      const findHighestAbvBeer = brewery.beers.sort((a, b) => b.abv - a.abv);
      acc.push(findHighestAbvBeer.shift());
      return acc.sort((a, b) => b.abv - a.abv);
    }, []).shift();

    return result;

    // Annotation:
    // IN: Array of objects
    // OUT: object
    // reduce to an array through my breweries and sort that b.abv - a.abv
    // assign the reduce to a variable so I can shift the highest abv beer object at the end
    // iterate through each brewerys beers array
      // assign that to a variable to then sort b.abv - a.abv
      // push the shift return into my reducer
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((acc, instructor) => {
      cohorts.forEach(cohort => {
        if (instructor.module === cohort.module) {
          const newObj = {
            name: instructor.name,
            studentCount: cohort.studentCount
          }
          acc.push(newObj);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // IN: Array of instructor objects
      // A second array of cohort objects
    // OUT: Array of objects
    // reduce to an array through instructors
    // iterate over cohorts
      // if the instructor.module === cohort.module
      // create a new object with a key of 'name' whos value is the instructor.name
        // And another key of 'studentCount' whos value is the cohort.studentCount
      // push the new object into the acc
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, cohort) => {
      const filteredInstructors = instructors.filter(instructor => instructor.module === cohort.module);
      acc[`cohort${cohort.cohort}`] = cohort.studentCount / filteredInstructors.length;

      return acc;
    }, {});
    return result;

    // Annotation:
    // IN: Array of instructor objects
      // A second array of cohort objects
    // OUT: Object
    // reduce to an object over cohorts
    // assign variable to sort instructors by module
      // iterate over sorted instructors
      // filter instructors whos module === 1, 2, 3, 4
      // go over each filtered array and
        // assign each key of the acc to a cohort matching the module being looked at (with the filter)
        // divide the studentCount by length of the filter being looked at
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, instructor) => {
      acc[instructor.name] = [];
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(subject => {
          if (instructor.teaches.includes(subject) && !acc[instructor.name].includes(cohort.module)) {
            acc[instructor.name].push(cohort.module);
          }
        })
      })
      return acc;
    }, {});
    return result;

    // Annotation:
    // IN: Array of instructor objects
      // A second array of cohort objects
    // OUT: Object with a key of each instructor.name whos value is an array
    // reduce to an object over instructors
    // iterate over cohorts
      // iterate over cohort.curriculum
      // conditional if inststructor.teaches includes the curriculum
        // inside the acc push the cohort.module
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach(subject => {
        acc[subject] = [];
        instructors.forEach(instructor => {
          if (instructor.teaches.includes(subject) && !acc[subject].includes(instructor.name)) {
            acc[subject].push(instructor.name);
          };
        });
      });
      return acc;
    }, {});
    return result;

    // Annotation:
    // IN: Array of instructor objects
      // A second array of cohort objects
    // OUT: Object
    // reduce to an object through cohorts
      // iterate over cohort.curriculum
      // create keys on the acc for each subject with a value of an empty array
    // iterate over instructors
      // conditional if instructor.teaches.includes(subject)
      // push the instructor.name into that subject key
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
