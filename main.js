const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  let s = fullName.split(" ");
  this.getFirstName = () => {
    return s[0];
  };
  this.getLastName = () => {
    return s[1];
  };
  this.getFullName = () => {
    return this.getFirstName() + " " + this.getLastName();
  };
  this.setFirstName = (first) => {
    s[0] = first;
  };
  this.setLastName = (last) => {
    s[1] = last;
  };
  this.setFullName = (firstAndLast) => {
    let fullName = firstAndLast;
    s = fullName.split(" ");
  };
};

const bob = new Person("Bob Ross");
const rob = new Person("Rob Loh");

console.log(bob.getFullName());
console.log(rob.getFullName());

bob.setFullName("Vasia Pupkin");
console.log(bob.getFullName());
