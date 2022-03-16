var namee = document.querySelector("#name");
var designation = document.querySelector("#designation");
var mail = document.querySelector("#mail");
var contactno = document.querySelector("#contactno");
var city = document.querySelector("#city");
var linkedinid = document.querySelector("#linkedinid");
var form = document.querySelector("#form");
var inputs = document.querySelectorAll(".input");

var isvalidid = (linkedinid) => {
 
  const pattern = /^(www\.linkedin\.com\/in\/[a-zA-Z0-9!#$%&'"*+-=?^_`{|}~]+)/;
  return pattern.test(linkedinid);
};
var isvalidemail = (mail) => {
 // const pattern = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const pattern = /^([^\.][a-zA-Z0-9!#$%&'"*+-=?^_`{|}~]+@[a-zA-Z]+\.[a-z]+[^\.])/;
  return pattern.test(mail);
};

function errormsg(elem, msg) {
  elem.parentElement.querySelector(".error").textContent = msg;
}
function removemsg(elem) {
  elem.parentElement.querySelector(".error").textContent = "";
}
function addcolor(elem) {
  elem.classList.add("redcolor");
}
function removecolor(elem) {
  elem.classList.remove("redcolor");
}


  //username
  $(namee).on("keyup", () => {
    if (namee.value.trim() == "") {
      errormsg(namee, "Field cannot be empty");
      addcolor(namee);
    } else {
      removemsg(namee);
      removecolor(namee);
     
      localStorage.setItem("name", namee.value);
    }
  });

  //Designation
  $(designation).on("keyup", () => {
    if (designation.value.trim() == "") {
      errormsg(designation, "Field cannot be empty");
      addcolor(designation);
    } else {
      removemsg(designation);
      removecolor(designation);
      
      localStorage.setItem("designation", designation.value);
    }
  });

  //Email
  $(mail).on("keyup", () => {
    if (mail.value.trim() == "") {
      errormsg(mail, "Field cannot be empty");
      addcolor(mail);
    } else if (!isvalidemail(mail.value)) {
      errormsg(mail, "Invalid email format");
      addcolor(mail);
    } else {
      removemsg(mail);
      removecolor(mail);
      
      localStorage.setItem("email", mail.value);
    }
  });

  //COntact Number
  $(contactno).on("keyup", () => {
    if (contactno.value.trim() == "") {
      errormsg(contactno, "Field cannot be empty");
      addcolor(contactno);
    } else if (contactno.value.trim().length < 10) {
      errormsg(contactno, "Number should be of 10 digit");
      addcolor(contactno);
    } else {
      removemsg(contactno);
      removecolor(contactno);
     
      localStorage.setItem("contactno", contactno.value);
    }
  });

  //city
  $(city).on("keyup", () => {
    if (city.value.trim() == "") {
      errormsg(city, "Field cannot be empty");
      addcolor(city);
    } else {
      removemsg(city);
      removecolor(city);
      
      localStorage.setItem("city", city.value);
    }
  });

  //LinkedinId
  $(linkedinid).on("keyup", () => {
    if (linkedinid.value.trim() == "") {
      errormsg(linkedinid, "Field cannot be empty");
      addcolor(linkedinid);
    } else if (!isvalidid(linkedinid.value)) {
      errormsg(linkedinid, "Invalid Id format");
      addcolor(linkedinid);
    } else {
      removemsg(linkedinid);
      removecolor(linkedinid);
      
      localStorage.setItem("linkedinid", linkedinid.value);
    }
  });

  function isvalidform() {
    var i = true;
    inputs.forEach((input) => {
      if (input.classList.contains("redcolor")) {
        i = false;
      }
    });
    return i;
  }

$(form).on("submit", (event) => {
  
  if (isvalidform() == true) {
    form.submit();
  } else {
    event.preventDefault();
  }
});
document.querySelector("#submitbtn").disabled = true;
$(form).on("keyup",()=>{
  if(namee.value != "" && designation.value != "" && mail.value != "" && city.value != "" && contactno.value != "" && linkedinid.value != ""){
    document.querySelector("#submitbtn").disabled = false;
  }else if(namee.value == "" || designation.value == "" || mail.value == "" || city.value == "" || contactno.value == "" || linkedinid.value == "") {
    document.querySelector("#submitbtn").disabled = true;
  }
})

  


