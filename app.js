const firebaseConfig = {
  apiKey: "AIzaSyBaAXmU3KU2EiMRUinqq9svxQtI65wwxpA",
  authDomain: "formdata-b7401.firebaseapp.com",
  projectId: "formdata-b7401",
  storageBucket: "formdata-b7401.appspot.com",
  messagingSenderId: "44569804899",
  appId: "1:44569804899:web:ffe6af4efafd322d09b856"
};



firebase.initializeApp(firebaseConfig);
var firestore= firebase.firestore()

//var to access database  collection
const db= firestore.collection("formdata");
let submitButton =document.getElementById('submit');
submitButton.addEventListener("click",(e) => {
e.preventDefault()
let user_name=document.getElementById('fname').value;
console.log(user_name);
let father_name=document.getElementById('fathername').value;
let gender=document.getElementById('gender').value;
let state=document.getElementById('state').value;
let pincode=document.getElementById('pincode').value;
if(pincode.length!=6)alert("pincode not 6 digit")
let mobile=document.getElementById('mobile').value;
let email=document.getElementById('email').value;
// let file=document.getElementById('file').value;
let date=Date();
console.log(father_name);console.log(gender);console.log(state);
console.log(mobile);console.log(email);console.log(pincode)
//save data to firebase
db.doc().set({
user_name:user_name,
father_name:father_name,
gender:gender,
state:state,
pincode:pincode,
mobile:mobile,
email:email,
date:date
// file:file
}).then(()=>{
    
document.getElementById('fname').value="";    
document.getElementById('fathername').value="";
document.getElementById('gender').value="";
document.getElementById('state').value="";
document.getElementById('pincode').value="";
document.getElementById('mobile').value="";
document.getElementById('email').value="";
// document.getElementById('file').value="";

console.log("data saved ")
}).catch((error)=>{
    console.log(error)
})
 
});
 

// const { doc,getDoc } = require('firebase/firestore');
