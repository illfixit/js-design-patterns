/* Objects in JavaScript

Creating a New Object
Just use curly braces… 

var obj = {}; 

Creating a New Object
Using Object.create
var obj = {};
var nextObj = Object.create(Object.prototype);

Creating a New Object
Use the new keyword. (Don’t worry, it’s ok)
var obj = {};
var nextObj = Object.create(Object.prototype);
var lastObj = new Object();

Assigning Keys and Values

Dot notation
var obj = {};
obj.param = 'new value';
console.log(obj.param); // new value

Square bracket notation
var obj = {};
obj[’param'] = 'new value';
console.log(obj[’param']); // new value

var obj = {};
var val = 'value';
obj[val] = 'new value';
console.log(obj[val]); // new value


Defining Properties
ECMAScript 5 introduces defineProperty

Demo
Create a Task Object


Object.defineProperty(obj, 'name', {
value: 'my name',
writable: true, *
enumerable: true, **
configurable: true ***
})

(*) writable
true if and only if the value associated with the property may be changed with an assignment operator.
Defaults to false.

(**)enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object.
Defaults to false.

(***) configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
Defaults to false.

We can use Object.create()
for inheritance…
*/
(() => {
  var task = {
    title: 'My Title',
    description: 'My Description',
  };

  Object.defineProperty(task, 'toString', {
    value: function () {
      return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });

  var urgentTask = Object.create(task);
  Object.defineProperty(urgentTask, 'toString', {
    value: function () {
      return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });

  console.log(urgentTask.toString());
})();
/*

Summary
> Three ways to create objects
> Assigning and reading values
> Define properties
> Inheritance

*/
