/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding, in global scope value of this will be window object.
* 2. Implicit Binding, during the executing of an object this referes to the current object.
* 3. New Binding, when we have a function that creates an object with the new keyward this is bound to that instance of the object.
* 4. Explicit Binding, when you use .bind .call or .apply you over write what the this keyward points to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const obj = {
	greeting: 'hello',
	name: 'marshall',
	sayHi: function(){
		console.log(`${this.greeting} my name is ${this.name}`)
	}
}

obj.sayHi()

// Principle 3

// code example for New Binding

function Dude(name){
	this.name = name
	this.speak = function() {
		console.log(this)
	}
}

const dude = new Dude('marshall')
const dude2 = new Dude('eric')
console.log(dude, dude2)

// Principle 4

// code example for Explicit Binding

dude.speak.call(dude2)
dude2.speak.apply(dude)

dude.speak()
dude2.speak()


