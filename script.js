// Person class definition  
class Person {  
  constructor(name, age) {  
    this._name = name; // Store name in a private property  
    this._age = age;   // Store age in a private property  
  }  

  // Getter for name  
  get name() {  
    return this._name;  
  }  

  // Setter for age  
  set age(value) {  
    this._age = value; // Set the age value  
  }  

  // Getter for age (optional, if you want to access age)  
  get age() {  
    return this._age;  
  }  
}  

// Student class that extends Person  
class Student extends Person {  
  constructor(name, age) {  
    super(name, age); // Call the parent constructor  
  }  

  // Method for studying  
  study() {  
    console.log(`${this.name} is studying`);  
  }  
}  

// Teacher class that extends Person  
class Teacher extends Person {  
  constructor(name, age) {  
    super(name, age); // Call the parent constructor  
  }  

  // Method for teaching  
  teach() {  
    console.log(`${this.name} is teaching`);  
  }  
}  

// Do not change the code below this line  
window.Person = Person;  
window.Student = Student;  
window.Teacher = Teacher;