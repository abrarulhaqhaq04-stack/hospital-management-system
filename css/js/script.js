let patients = JSON.parse(localStorage.getItem("patients")) || [];

const form = document.getElementById("patientForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let patient={

name:document.getElementById("name").value,

age:document.getElementById("age").value,

gender:document.getElementById("gender").value,

disease:document.getElementById("disease").value

};

patients.push(patient);

localStorage.setItem("patients",JSON.stringify(patients));

alert("Patient Added Successfully");

window.location="patients.html";

});

}

const table=document.getElementById("patientTable");

if(table){

patients.forEach(function(p){

table.innerHTML+=`
<tr>
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.gender}</td>
<td>${p.disease}</td>
</tr>
`;

});

}

const count=document.getElementById("patientCount");

if(count){

count.innerHTML=patients.length;

}