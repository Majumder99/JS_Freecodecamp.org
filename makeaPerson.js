const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };
  this.getLastName = () => {
    return fullName.split(" ")[1];
  };
  this.getFullName = () => {
    return fullName;
  };
  this.setFirstName = (name) => {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = (name) => {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = (name) => {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
bob.getFullName();

// getFirstName();
// getLastName();
// getFullName();
// setFirstName(first);
// setLastName(last);
// setFullName(firstAndLast);
