var Task = function (name) {
  this.name = name;
  this.completed = false;
};

// ClassName.prototype.methodName = function(arguments) {}
Task.prototype.complete = function () {
  console.log('Completing task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('Saving task: ' + this.name);
  this.completed = true;
};

module.exports = Task;
