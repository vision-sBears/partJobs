var loggedFlag = 0;
//for scrolling in the jobs page
const usernameRegex =/^[a-zA-Z0-9_\.]+$/;
const RegexFirstchar=/[0-9]/;
//--------------------------------------------------------------------
// function sendEmail(){

// var name=$("#name");
// var email=$("#email");
// var number=$("#number");
// var subject=$("#subject");
// if(isNotEmpty(name) && isNotEmpty(number) && isNotEmpty(email) && isNotEmpty(subject)){
//   alert('hi');
//   $.ajax({
//   url:'sendEmail.php',
//   method:'POST',
//   dataType:'json',
//   data:{
//     name:name.val(),
//     number: number.val(),
//     email:email.val(),
//     subject:subject.val()
//   },
//   success: function(response){
//     $('#contact')[0].reset();
//     $('.sent-notification').text("message sent successfully");
//   }

// });
// }  
// }
// function isNotEmpty(caller){
// if(caller.val() == ""){
//   caller.css('border','1px solid orange');
//   return false;
// }else
// {
//   caller.css('border','');
//   return true;
// }
// }

//when u click on search icon
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
//when u click on x icon
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
//Index.php : when u click on switch to show Email feild

function showEmail() {
  var x = document.getElementById("email-field");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    
  }
}
//to switch between log in and sign in
function openIndiviualSignin() {
  document.getElementById("tab-1").checked = false;
  document.getElementById("tab-2").checked = true;
  document.getElementById("logSignOverlayy").style.display = "block";
  document.getElementById("IndiviualSign").style.display = "block";
  document.getElementById("IndivisualLog").style.display = "block";

}

function openCompanySignin() {
  document.getElementById("tab-1").checked = false;
  document.getElementById("tab-2").checked = true;
  document.getElementById("logSignOverlayy").style.display = "block";
  document.getElementById("companySign").style.display = "block";
  document.getElementById("companyLog").style.display = "block";
}

function openIndiviualLogin() {
  document.getElementById("tab-2").checked = false;
  document.getElementById("tab-1").checked = true;
  document.getElementById("IndivisualLog").style.display = "block";
  document.getElementById("logSignOverlayy").style.display = "block";
  document.getElementById("IndiviualSign").style.display = "block";
}

function openCompanyLogin() {
  document.getElementById("tab-2").checked = false;
  document.getElementById("tab-1").checked = true;
  document.getElementById("logSignOverlayy").style.display = "block";
  document.getElementById("IndivisualLog").style.display = "none";
  document.getElementById("companySign").style.display = "block";
  document.getElementById("companyLog").style.display = "block";
  document.getElementById("IndiviualSign").style.display = "none";


}
//when u click on x icon
function closeSignin() {
  document.getElementById("IndiviualSign").style.display = "none";
  document.getElementById("companyLog").style.display = "none";
  document.getElementById("IndivisualLog").style.display = "none";

  document.getElementById("companySign").style.display = "none";
  document.getElementById("logSignOverlayy").style.display = "none";
}
//first form when both of the fields are empty
function validateForm() {
  var where = document.form.city.value;
  var what = document.form.keywors.value;
  var alerti = document.getElementById("alert-vaildation");
  if (alerti.style.display === 'inline') {
    alerti.style.display = "none";
  }
  if (where === "" && what === "") {
    //  alert("Name must be filled out");
    

    alerti.style.display = "inline";
    return false;
  
  }else return true;
}


//indiviual log in validation
//document.getElementById('IndivisualLog').addEventListener('submit',
 function IndivisualLog() {

 
  var inFieldU = document.getElementById("in-userf");
  var inFieldP = document.getElementById("in-passf");
 
  var inLabelU = document.getElementById("in-user");
  var inLabelP = document.getElementById("in-pass");
usernameRegex .exec(inFieldU);//regular expression
  const vaild=!!usernameRegex;
  if(!vaild){
alert("user name is invaild");
return false
  }

  //if already shown from previous submit to hide it
  if (inLabelU.style.display === "inline" || 
  inLabelP.style.display === "inline" 
  
   
   ) {

    inLabelU.style.display = "none";
    inLabelP.style.display = "none";
    
    
     
    }
    if( inFieldU.value[0].match(RegexFirstchar) != null ){
      inLabelU.innerHTML="user name should not start with number or Literal Characters";
      inLabelU.style.display="inline"
      return false
     }

  
   }
   //company log in validation
   document.getElementById('companyLog').addEventListener('submit', function() {

  
 
  var coFieldU = document.getElementById("co-userf");
  var coFieldP = document.getElementById("co-passf");
  
  
  var coLabelU = document.getElementById("co-user");
  var coLabelP = document.getElementById("co-pass");
  usernameRegex .exec(coFieldU);//regular expression
  const vaild=!!usernameRegex;
  if(!vaild){
alert("user name is invaild");
  }

  //if already shown from previous submit to hide it
  if (
   coLabelU.style.display === "inline" ||
   coLabelP.style.display === "inline"
   ) {

   
    
     coLabelU.style.display = "none" ;
     coLabelP.style.display = "none";
     
    }
    if( coFieldU.value[0].match(RegexFirstchar) != null ){
      coLabelU.innerHTML="user name should not start with number or Literal Characters";
      coLabelU.style.display="inline"
     }

 
   });
   //inSignValidation this way the validation function will be applied before submission
   document.getElementById('IndiviualSign').addEventListener('submit', function() {
    n
  var inFieldFanme = document.getElementById("in-fnamef");
  var inFieldU = document.getElementById("in-S-userf");
  var inFieldP = document.getElementById("in-S-passf");
  var inFieldPR = document.getElementById("in-passRf");
  var inFieldbirth = document.getElementById("in-birthDatef");
  var inFieldAddress = document.getElementById("in-addressf");
  usernameRegex .exec(inFieldU);//regular expression
  const vaild=!!usernameRegex;
  if(!vaild){
alert("user name is invaild");
  }
  //inFieldU.value. match(nameRegex);
  var inLabelFname = document.getElementById("in-fname");
  var inLabelU = document.getElementById("in-S-user");
  var inLabelP = document.getElementById("in-S-pass");
  var inLabelPR = document.getElementById("in-passR");
  var inLabelbirthDate = document.getElementById("in-birthDate");
  var inLabeladdress = document.getElementById("in-address");

 
 
  

  //if already shown from previous submit to hide it
  if (inLabelFname.style.display === "inline"||
   inLabelU .style.display === "inline"||
  inLabelP .style.display === "inline"||
 inLabelPR .style.display === "inline"||
 inLabelbirthDate .style.display === "inline"||
   inLabeladdress .style.display === "inline" 
   ) 
   {
 
    inLabelFname .style.display ="none";
    inLabelU .style.display = "none";
   inLabelP .style.display = "none";
  inLabelPR .style.display = "none";
  
    inLabelbirthDate .style.display = "none";
    inLabeladdress .style.display = "none";
    
     
    }


    if( inFieldFanme.value[0].match(RegexFirstchar) != null ){
      inLabelFname.innerHTML="name should not start with number or Literal Characters";
      inLabelFname.style.display="inline"
     }


if( inFieldU.value[0].match(RegexFirstchar) != null ){
 inLabelU.innerHTML="user name should not start with number or Literal Characters";
 inLabelU.style.display="inline"
}

   if (inFieldPR.value != inFieldP.value) {
    
    inLabelPR.innerHTML = "passwords are not the same";
    inLabelPR.style.display="inline";
  }
  if (inFieldP.value.length < 6) {
    //   //   //display label will be better
     inLabelP.innerHTML = 'password cannot be less than 6 characters';
    
     }
      

  
  });
   

//coSignValidation
document.getElementById('companySign').addEventListener('submit', function() {

  var usernameRegex = /[0-9]/;//regular expression
  var coFieldU = document.getElementById("co-S-userf");
  var coFieldP = document.getElementById("co-S-passf");
  var coFieldPR = document.getElementById("co-passRf");
  var coFieldbirth = document.getElementById("co-birthDatef");//company number
  var coFieldAddress = document.getElementById("co-addressf");

 
  var coLabelU = document.getElementById("co-S-user");
  var coLabelP = document.getElementById("co-S-pass");
  var coLabelPR = document.getElementById("co-passR");
  var coLabelbirthDate = document.getElementById("co-birthDate");
  var coLabeladdress = document.getElementById("co-address");

 
  

  //if already shown from previous submit to hide it
  if (
   coLabelU .style.display == "inline"||
  coLabelP .style.display == "inline"||
 coLabelPR .style.display == "inline"||
 coLabelbirthDate .style.display == "inline"||
   coLabeladdress .style.display == "inline" 
   ) {
 
   
    coLabelU .style.display = "none";
   coLabelP .style.display = "none";
  coLabelPR .style.display = "none";
  
  coLabelbirthDate .style.display = "none";
    coLabeladdress .style.display = "none";
    
     
    }
    if( coFieldU.value[0].match(usernameRegex) != null ){
      coLabelU.innerHTML="user name should not start with number or Literal Characters";
      coLabelU.style.display="inline"
     }

   if (coFieldPR.value != coFieldP.value) {
    
    coLabelPR.innerHTML = "passwords are not the same";
    coLabelPR.style.display="inline";

  }
  

  
});

//post Overlay "job details"
function openJobDetails(){

  document.getElementById("postOverlay").style.display="block";
  document.getElementById("body").style.overflow="hidden";
}///to close the overlay
function closeJobDetails(){

  document.getElementById("postOverlay").style.display="none";
  document.getElementById("body").style.overflow="scroll";
}

  