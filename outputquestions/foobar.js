var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);
    console.log("outer func: self.foo = " + self.foo);
    (function () {
      console.log("inner func: this.foo = " + this.foo);
      console.log("inner func: self.foo = " + self.foo);
    })();
  },
};
myObject.func();

// I think it's not a problem to understand what happens in "outer" part, but it can be hard to get t "inner" one.
// in the inner function "this" is "window", so this.foo is undefined, like window.foo
// but, "self" keeps the reference to the "myObject", so you can get it's "foo", like "myObject.foo"



