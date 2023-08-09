function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}





// const maciej = {
//   username: "Maciej",
//   showName() {
//     console.log(maciej.username);
//   },
// };

// maciej.showName();








// const maciej = {
//   username: "Maciej",
//   showName() {
//     console.log(this.username);
//   },
// };

// maciej.showName();








// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors());








// function foo() {
//   console.log(this);
// }

// foo(); 








// const maciej = {
//   username: "Maciej",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// maciej.showThis(); 
// maciej.showName();







// function showThis() {
//   console.log("this in showThis: ", this);
// }
// showThis(); 
// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;
// user.showContext(); 








// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   console.log(`Przetwarzanie żądania od ${callback()}.`);
// }

// makeMessage(customer.getFullName); 







// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); 

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;

// user.showContext(); 







// const hotel = {
//     username: "Resort hotel",
//     showThis() {
//       const foo = () => {
//         console.log("this in foo: ", this);
//       };
  
//       foo();
//       console.log("this in showThis: ", this);
//     },
//   };
  
//   hotel.showThis();








//   class User {
//   }
  
//   const mango = new User();
//   console.log(mango); 
  
//   const poly = new User();
//   console.log(poly); 









// class User {
//     constructor(name, email) {
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com");
//   console.log(mango);
  
//   const poly = new User("Poly", "poly@mail.com");
//   console.log(poly);









// class User {
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
//   console.log(mango); 
  
//   const poly = new User({
//     name: "Poly",
//     email: "poly@mail.com",
//   });
//   console.log(poly); 









// class User {
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
  
//     getEmail() {
//       return this.email;
//     }
  
//     changeEmail(newEmail) {
//       this.email = newEmail;
//     }
//   }










// class User {
//     name;
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     getEmail() {
//       return this.#email;
//     }
  
//     changeEmail(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
//   });
//   mango.changeEmail("mango@supermail.com");
//   console.log(mango.getEmail()); 
//   console.log(mango.#email); 










// class User {
//     #email;
  
//     constructor({ name, email }) {
//       this.name = name;
//       this.#email = email;
//     }
  
//     get email() {
//       return this.#email;
//     }
  
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }










// const mango = new User({ name: "Mango", email: "mango@mail.com" });
// console.log(mango.email); 
// mango.email = "mango@supermail.com";
// console.log(mango.email); 











// class User {
//     static Roles = {
//       ADMIN: "admin",
//       EDITOR: "editor",
//     };
  
//     #email;
//     #role;
  
//     constructor({ email, role }) {
//       this.#email = email;
//       this.#role = role;
//     }
  
//     get role() {
//       return this.#role;
//     }
  
//     set role(newRole) {
//       this.#role = newRole;
//     }
//   }
  
//   const mango = new User({
//     email: "mango@mail.com",
//     role: User.Roles.ADMIN,
//   });
  
//   console.log(mango.Roles);
//   console.log(User.Roles); 
  
//   console.log(mango.role); 
//   mango.role = User.Roles.EDITOR;
//   console.log(mango.role); 










// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }
  
//     #email;
  
//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));










// class User {
//     #email;
  
//     constructor(email) {
//       this.#email = email;
//     }
  
//     get email() {
//       return this.#email;
//     }
  
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//   }
  
//   const editor = new ContentEditor("mango@mail.com");
//   console.log(editor); 
//   console.log(editor.email); 












// class User {
//     #email;
  
//     constructor(email) {
//       this.#email = email;
//     }
  
//     get email() {
//       return this.#email;
//     }
  
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//   class ContentEditor extends User {
//     constructor({ email, posts }) {
//       super(email);
//       this.posts = posts;
//     }
//   }
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//   console.log(editor); 
//   console.log(editor.email); 












// class ContentEditor extends User {
//     constructor({ email, posts }) {
//       super(email);
//       this.posts = posts;
//     }
  
//     addPost(post) {
//       this.posts.push(post);
//     }
//   }
  
//   const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//   console.log(editor); 
//   console.log(editor.email); 
//   editor.addPost("post-1");
//   console.log(editor.posts); 