// software development solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.
//object oriented programming organizes code into object definitions. These are sometimes called classes, and they group together data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.
// Objects can transfer information by calling and passing data to another object's methods. Also, new classes can receive, or inherit, all the features from a base or parent class. This helps to reduce repeated code.
//Your choice of programming approach depends on a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. 

//1. Create a Basic JavaScript Object
//property - what makes up an object 
//similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

//2. Use Dot Notation to Access the Properties of an Object

//3. Create a Method on an Object
//Methods are properties that are functions. This adds different behavior to an object.
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();
  // Returns "The name of this duck is Aflac."

  //4. Make Code More Reusable with the "this" Keyword
  //this refers to the object that the method is associated with
  // If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.
  let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
  };

  //5. Define a Constructor Function
  //Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object.
  // Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
  //Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
  //Constructors define properties and behaviors instead of returning a value as other functions might.
  function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }
  
//6. Use a Constructor to Create Objects
function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
    // "this" inside the constructor always refers to the object being created
}
  
let blueBird = new Bird();

//blueBird has all the properties defined inside the Bird constructor:
//new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results.


//7. Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog();

terrier.name = "Bruce";
terrier.color = "blue";

//8. Verify an Object's Constructor with instanceof
//Anytime a constructor function creates a new object, that object is said to be an instance of its constructor
//instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
//
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false

//9.  Understand Own Properties
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

//name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties
//The following code adds all of the own properties of duck to the array ownProps:
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

//10. Use Prototype Properties to Reduce Duplicate Code
Bird.prototype.numLegs = 2;

//11. Iterate Over All Properties
//2 kinds of propertis: own properties and prototype properties
//Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

//add duck's own properties to the array ownProps and prototype properties to the array prototypeProps
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

//13. Understand the Constructor Property
//constructor property is a reference to the constructor function that created the instance.
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);  //prints true
console.log(beagle.constructor === Dog);  //prints true

//The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

//14. Change the Prototype to a New Object

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//15. Remember to Set the Constructor Property when Changing the Prototype
//effect of manually setting the prototype to a new object. It erases the constructor property
duck.constructor === Bird; // false -- Oops
duck.constructor === Object; // true, all objects inherit from Object.prototype
duck instanceof Bird; // true, still works

//to fix this
Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

//16. Understand Where an Object’s Prototype Comes From
// an object inherits its prototype directly from the constructor function that created it
//For example, here the Bird constructor creates the duck object:
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
//duck inherits its prototype from the Bird constructor function.
//show this relationship with the isPrototypeOf method
Bird.prototype.isPrototypeOf(duck);// returns true

//17. Understand the Prototype Chain
//All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // yields 'object'

//Because a prototype is an object, a prototype can have its own prototype
// prototype of Bird.prototype is Object.prototype:
Object.prototype.isPrototypeOf(Bird.prototype); // returns true

//The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.

//18. Use Inheritance So You Don't Repeat Yourself(DRY)
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

//19. Inherit Behaviors from a Supertype
//first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.
// /By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.
let animal = Object.create(Animal.prototype);
//Object.create(obj) creates a new object, and sets obj as the new object's prototype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

//20. Set the Child's Prototype to an Instance of the Parent
//next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.
Bird.prototype = Object.create(Animal.prototype);

//Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
// /duck inherits all of Animal's properties, including the eat method.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

//21. Reset an Inherited Constructor Property
//When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}

//But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set Bird's constructor property to the Bird object:
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}

//22. Add Methods After Inheritance
//A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { } // Bird is a constructor that inherits its prototype from Animal
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

//to add behavior that is unique to Bird objects
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
//Now instances of Bird will have both eat() and fly() methods:
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"

//
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log("Woof!");
}

// Only change code above this line

let beagle = new Dog();
beagle.bark();

//23. Override Inherited Methods
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};

//24. Use a Mixin to Add Common Behavior Between Unrelated Objects
//A mixin allows other objects to use a collection of functions.
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"

//25. Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
  let hatchedEgg = 10; // private variable

  /* publicly available method that a bird object can use */
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

//26. Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("A cozy nest is ready");
}) ();

//Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

//27. Use an IIFE to Create a Module
//An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
//We can group these mixins into a module
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invoked
motionModule.glideMixin(duck);
duck.glide();











