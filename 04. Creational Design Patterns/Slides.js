/* Creational Design Patterns

Creational Design Patterns
Used to Construct New Objects
Adapting Creation to the Situation

Constructor Pattern
Use to create new objects with their own object scope. 

The new keyword
> Creates a brand new object
> Links to an object prototype
> Binds ‘this’ to the new object scope
> Implicitly returns this

* function ObjectName(param1, param2){
*   this.param1 = param1;
*   this.param2 = param2;
* 
*   this.toString = function () {
*   return this.param1 + ' ' + this.param2;
*   }
* }

Constructor Pattern
Create objects from functions.

Demo

Constructor Pattern
Drawbacks 




Prototypes

Prototype
An encapsulation of properties that an object links to. 

Prototypes

Task ->  
 Task -> Task.Prototype 
Task -> 

Prototypes

In the Node environment

In the angular environment

In EcmaScript2015



Module Pattern

Simple Way to Encapsulate Methods
Creates a “Toolbox” of functions to use. 

var Module = {
method: function(){...},
nextMethod: function(){...}
}

Module Pattern
Object Literal 

* var Module = function () {
*   var privateVar = 'I am private...';
*     return {
*       method: function () {...
*       },
*       nextMethod: function () {...
*     }
*   }
* }

Module Pattern
Wrap it in a function!

Module Pattern Demo

Module Pattern in Angular




Factory Pattern

A pattern used to simplify object creation.

Simplifies object creation
Creating different objects based on need
Repository Creation

Factory Pattern in our Node App



Singleton

Used to restrict an object to one instance of that object
across the application. 

Remembers the last time you used it
Hands the same instance back
Node.js uses CommonJS



Singletons in Node



Singletons in Angular



Creational Design Patterns
Constructor Pattern
Module Pattern
Factories
Singletons
*/
