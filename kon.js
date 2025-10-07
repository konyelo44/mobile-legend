// //let name1 = "Mary"
// //let name2 = "Tess"
// //let place = "farm";
// //let status = "farmer";

// //document.writeln(`${name1} and ${name2} are childhood bestfriends. They go to 
//    // ${place} together. Their ${place} is located at Bitano, Legazpi, Albay. ${name1} is a skilled ${status} while ${name2} is a begginer ${status}.`);

// let names3 = ["Mary", 18, "Smith", "BSIT", 3, 'A', true];
// names3.unshift["John", "Doe"]
// names3.push[17, "BSCS"]

// document.writeln("Firstname "(${names3}));


// let grade = prompt("Enter grade[A,B,C]: "); 

// switch(grade){
//    case 'A':
//       document.writeln("Outstanding");
//       break;
//    case 'B':
//       document.writeln("Very Good");
//       break;
//    case 'C':
//       document.writeln("Good");
//       break;
//    default:
//       document.writeln("Invalid Grade");
//       break;
// }

function login() {
   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;

   let isLoggedIn = (username === correctUsername && password === correctPassword);

   switch(isLoggedIn){
      case true:
         document.getElementById("result").innerText = "Welcome admin!";
         break;
      default:
         document.getElementById("result").innerText = "Invalid username or password";
         break;     
 }
}