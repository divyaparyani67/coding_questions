const object = {
    message: 'Hello, World!',
  
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    }
  };
  
  console.log(object.getMessage())


//   'Hello, World!' is logged to console. Open the demo.

// object.getMessage() is a method invocation, that's why this inside the method equals object.

// There's also a variable declaration const message = 'Hello, Earth!' inside the method. The variable doesn't influence anyhow the value of this.message.


const object = {
    message: 'Hello, World!',
  
    logMessage() {
      console.log(this.message); // What is logged?
    }
  };
  
  setTimeout(object.logMessage, 1000);


//   After a delay of 1 second, undefined is logged to console. Open the demo.

// While setTimeout() function uses the object.logMessage as a callback, still, it inovkes object.logMessage as a regular function, rather than a method.

// And during a regular function invocation this equals the global object, which is window in the case of the browser environment.

// That's why console.log(this.message) inside logMessage method logs window.message, which is undefined.

// Side challenge: how can you fix this code so that 'Hello, World!' is logged to console? Write your solution in a comment below!