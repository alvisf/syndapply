// var childVal = null;
// var exists;
// var cid;
// var recepient;
// var keyVal = null;
// var lastNo = lastNum();
// var xhttp = new XMLHttpRequest();
var firebaseConfig = {
    apiKey: "AIzaSyB_JG_uUIg53_pZibwczE83fMRiApaYT_k",
    authDomain: "jokes-lpsfyh.firebaseapp.com",
    databaseURL: "https://jokes-lpsfyh.firebaseio.com",
    projectId: "jokes-lpsfyh",
    storageBucket: "jokes-lpsfyh.appspot.com",
    messagingSenderId: "528474061645",
    appId: "1:528474061645:web:13e7db723cae116b3ad504"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// var messagesRef = firebase.database().ref("RegisteredUsers");

// document.getElementById("alvissubmit").addEventListener("submit", saveMessage);

// function getInputVal(id) {
//   return document.getElementById(id).value;
// }

// function loadMessage(
//   alviscollege,
//   alvisemail,
//   alvisgender,
//   alvisregno,
//   alvisphone,
//   alvisname,
//   alvisfood
// ) {
//   var newMessageRef = messagesRef.child("CRX" + childVal + lastNo);
//   newMessageRef.set({
//     c: alviscollege,
//     e: alvisemail,
//     g: alvisgender,
//     b: "cryptrix",
//     id: "CRX" + childVal + lastNo,
//     n: alvisregno,
//     p: alvisphone,
//     r: "1" === "1",
//     u: alvisname,
//     v: alvisfood
//   });

//   creDit();
//   // serverReq();
//   rDone();
// }
// function sendemail() {
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open(
//     "POST",
//     "https://java-mail-heroku.herokuapp.com/MailServlet",
//     true
//   );
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   // var sende = recepient + "&" + cid;
//   // xhttp.send(sende);
// }
// function delTop() {
//   var ref = firebase.database().ref("unqId");
//   ref.child(keyVal).remove();
//   // console.log(keyVal);
// }
// function loadd(
//   alviscollege,
//   alvisemail,
//   alvisgender,
//   alvisregno,
//   alvisphone,
//   alvisname,
//   alvisfood
// ) {
//   stackTop();

//   while (childVal != null) {
//     // checkIfUserExists("CRX" + childVal);

//     if (!exists) {
//       loadMessage(
//         alviscollege,
//         alvisemail,
//         alvisgender,
//         alvisregno,
//         alvisphone,
//         alvisname,
//         alvisfood
//       );
//       delTop();
//     } else {
//       loadd();
//     }
//     break;
//   }
// }

// function saveMessage(e) {
//   e.preventDefault();

//   var alviscollege = getInputVal("college");
//   var alvisemail = getInputVal("email");
//   var alvisgender = getInputVal("sex");
//   var alvisregno = getInputVal("regno");
//   var alvisphone = getInputVal("phone");
//   var alvisname = getInputVal("name");
//   var alvisfood = "1" === getInputVal("food").toString();
//   // var usersRef = firebase.database().ref("RegisteredUsers");

//   recepient = "recepient=" + alvisemail;

//   loadd(
//     alviscollege,
//     alvisemail,
//     alvisgender,
//     alvisregno,
//     alvisphone,
//     alvisname,
//     alvisfood
//   );
//   //     var ref = firebase.database().ref('unqId');
//   //     ref.orderByValue().limitToFirst(1).once("value", function(snapshot) {
//   //       console.log(ref.child("unqId"));
//   //       // snapshot.remove();
//   //       // console.log(snapshot.val());
//   //    }, function (error) {
//   //       console.log("Error: " + error.code);
//   //    });
// }

// function saveVal(hah, lol) {
//   childVal = hah;
//   keyVal = lol;
// }
stackTop();
function stackTop() {
   return firebase.database().ref('data').once('value').then(function(snapshot) {
    
    var lname =snapshot.val().name;
    var Aincome =snapshot.val().Aincome;
    var address=snapshot.val().address;
    var dob =snapshot.val().dob;
    var loantype =snapshot.val().loantype;
    var phNo =snapshot.val().phNo;

    $(document).ready(function() {
        $("#lname").html(
          'name:'+ lname
        );
        $("#Aincome").html(
            'annual income:'+ Aincome
          );
          $("#address").html(
            'Address:'+ address
          );
          $("#dob").html(
            'date of birth:'+ dob
          );
          $("#loantype").html(
            'Loan Type:'+ loantype
          );
          $("#phNo").html(
            'PH.Number:'+ phNo
          );

      });
      

      });


//   var ref = firebase.database().ref("data");
//   ref
//     .once(
//       "value",
//       function(snapshot) {
//         snapshot.then(function(child) {
//           console.log(snapshot.val());
//         });

//         //   console.log(snapshot.child.val());
//       },
//       function(error) {
//         console.log("Error: " + error.code);
//       }
//     );
}

// function creDit() {
//   console.log("made by Alvis.F");
//   console.log("made by Daniel D");
//   console.log("made by Dennis.F");
// }

// function rDone() {
//   cid = "cid=CRX" + childVal + lastNo;
//   sendemail();
//   $(document).ready(function() {
//     $("#alvisdis").html(
//       '<h1><br><center>Sorry the Registration is closed!!!</center></h1>\n<h1><br><center>We be back next year. Stay tuned</center></h1>\n<h1 style="font-size:5vw;">\n<br>\n<center>SORRY!!!!\n<span style="color: red">Thank you.....'
//       // childVal +
//       // lastNo
//     );
//   });
// }
// "</span>\n</center>\n</h1>\n<h1>\n<br>\n<center>PLEASE BRING THIS CRYPTRIX ID ON THE DAY OF THE SYMPOSIUM</center>\n</h1>\n<h1>\n<br>\n<center>A CONFIRMATION MAIL HAS BEEN SENT TO YOUR EMAIL ADDRESS</center>\n</h1>\n"
// function checkIfUserExists(userId) {
//   var usersRef = firebase.database().ref("RegisteredUsers");
//   usersRef.child(userId).once("value", function(snapshot) {
//     exists = snapshot.exists();
//     console.log(exists);
//   });
// }

// function lastNum() {
//   var min = 0;
//   var max = 99;
//   var random = Math.floor(Math.random() * (+max - +min)) + +min;
//   return random;
// }
