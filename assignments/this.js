/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding, basically the default bind, when no context is given
* 2. implicit binding, implied binding of this to an object via a method usually
* 3. new binding, using a constructor to bind this to an object
* 4. explicit binding uses .call(), .bind(), or .apply() to bind objects together 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayStuff() {
    console.log(this);
}

// Principle 2

// code example for Implicit Binding

const obj = {
    greet: "Hello",
    sayName: function (name) {
        console.log(`${this.greet} my name is ${name}`)
    }
}

// Principle 3

// code example for New Binding

function Person(attributes) {
    this.name = attributes.name,
    this.age = attributes.age
}
const dan = new Person('Dan', 14);

// Principle 4

// code example for Explicit Binding

function Child (attributes) {
Person.call(this, attributes);
}