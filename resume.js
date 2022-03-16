var namee = document.querySelector("#name");
var designationn = document.querySelector("#designation");
var maill = document.querySelector("#mail");
var contactnoo = document.querySelector("#contactno");
var cityy = document.querySelector("#city");
var linkedinidd = document.querySelector("#linkedinid");



window.addEventListener("load",()=>{
   
    const name = localStorage.getItem("name");
    const designation = localStorage.getItem("designation");
    const mail = localStorage.getItem("email");
    const contactno = localStorage.getItem("contactno");
    const city = localStorage.getItem("city");
    const linkedinid = localStorage.getItem("linkedinid");
    namee.textContent=name;
    designationn.textContent=designation;
    maill.textContent=mail;
    contactnoo.textContent=contactno;
    cityy.textContent=city;
    linkedinidd.textContent=linkedinid;
})