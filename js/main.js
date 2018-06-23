function ChangeColor(){

	document.getElementById("title").style.color='black';
	var colors =['red','green','blue','orange','purple','yellow','pink'];
	var arraylength=colors.length;
	var positionone=Math.floor(Math.random()* arraylength);
	var positiontwo=Math.floor(Math.random()* arraylength);
	var colorone =colors[positionone];
	var colortwo=colors[positiontwo];
	if (colorone==colortwo) {
		colortwo='brown';
	}

	document.getElementById('container').style.backgroundColor = colorone;
	document.getElementById('article').style.backgroundColor = colortwo;


}


function FetchData(){
	var name =document.getElementById('personname').value;
	var years =document.getElementById('age').value;
	var location =document.getElementById('country').value;
	//object creation
	var user ={
		name:name,
		years:years,
		location:location
	};

	var message='';

	if (user.name=="") {
		message +=' You did not enter Your name';
	}else{
		message += ' Your name is ' +user.name ;
	}


	if (user.years=="") {
		message += ' . You forgot to enter Your Age! ';
	}else{
		message+=' . Your are ' +user.years + 'years old ';
	}

	if (user.location=="") {
		message+= ' . You forgot to enter the country you belong to!';
	}else{
		message += ' . You come from '+user.location +' . ';
	}

	document.getElementById('output').innerHTML=message;
	
}

//closure
function square() {
	var number=document.getElementById('number').value;
	//console.log (number);
	 function squared(){
	 	return number*number;
	 }
	
	squarednumber=squared();
	
	document.getElementById('psquare').innerHTML= squarednumber;
}
//prototypes,inheritance and encapsulation
function cprototype() {
	var sname=document.getElementById('sname').value;
	var sid=document.getElementById('sid').value;

	function student(sname,sid,totalscore=400){
		this.name=sname;
		this.id=sid;
		this.examscore=totalscore;	

	}

	student.prototype={
		constructor: student,
		age:45,
	
		showNameIdandScore: function(){
			if (this.name==''&&this.id=='')
				{return 'plese enter all your details'}
				else{ 
			return 'Dear' +' ' + this.name + ', student id  ' + this.id +'  your exam score is '  +this.examscore;
		}
		},

	
}


student=new student(sname,sid);
//console.log(student.age);
var message=student.showNameIdandScore();


document.getElementById('output1').innerHTML= message;

}
//........................................................................................

//custom events
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('awesome', e => console.log(e.detail.text()));

textarea.addEventListener('input', function() {
  
  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))
});
//...........................................................................................................
// Javascript promises
function promises(){
	const promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://api.icndb.com/jokes/random');
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response); 
    } else {
      reject(Error(request.statusText)); 
    }
  };

  request.onerror = () => {
    reject(Error('Error fetching data.')); 
  };

  request.send(); 
});

console.log('Asynchronous request made.');

promise.then((data) => {
  console.log('Got data! Promise fulfilled.');
  document.body.textContent = JSON.parse(data).value.joke;
}, (error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});
}
//................................................................................................................
//Inbuilt events
function changetext (){
	var message='Mouse over the button';
	document.getElementById('hovermesage').innerHTML=message;
}

function showText(){
	var message='Mouse over the button';
	document.getElementById('hovermesage').innerHTML=message;
}
function clearText(){
	document.getElementById('hovermesage').innerHTML=' ';
}




