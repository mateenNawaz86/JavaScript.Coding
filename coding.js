// Coding Challenge #1
 var massMark = prompt('What is Mark\'s mass in kg? ');
console.log('Mark\'s mass: ' + massMark);




var heightMark = prompt('What is Mark\'s height in meters? ');
console.log('Mark\'s height: ' + heightMark);

var massJohn = prompt('What is John\'s mass in kg? ');
 console.log('John\'s mass:' + massJohn);

var heightJohn = prompt('What is John\'s height in meters? ');
 console.log('John\'s height: ' + heightJohn);


var BMIMark = massMark/(heightMark * heightMark);

var BMIJohn = massJohn/(heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn ;
console.log('Is Mark\'s BMI higher than John\'s ?' + markHigherBMI); 
















 Coding Challenge #2



function tipsCalculator(bills){
	var percentage;
	if(bills < 50){
		percentage = 0.2;
		
	} else if(bills >= 50 && bills < 200){
		percentage = 0.15;
	} else{
		percentage = 0.1;
		
	}
	return bills * percentage;
}
 var bills = [124, 48, 268];
var tips = [tipsCalculator(bills[0]),
		   tipsCalculator(bills[1]),
		   tipsCalculator(bills[2])];
console.log(tips);
 var finalValues = [bills[0] + tips[0],
				   bills[1] + tips[1],
				   bills[2] + tips[2]];
console.log(finalValues);






//Coding Challenge #3

    
var Mark = {
	fullName: prompt('What is fullName?'),
	height: prompt('What is height?'),
	mass: prompt('What is mass?'),
	calBMI :function(){
	this.bmi = this.mass/(this.height * this.height);
	return this.bmi;
   }
	
};
console.log(Mark);

var John = {
	fullName: prompt('What is fullName?'),
	height: prompt('What is height?'),
	mass: prompt('What is mass?'),
	
	calBMI: function(){
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
};
console.log(John);
console.log('Mark bmi: '+ Mark.calBMI() );
console.log('John bmi: ' + John.calBMI() );
if(Mark.bmi > John.bmi){
	console.log(Mark.fullName + '   has higher BMI: '+ Mark.bmi);
} else if(John.bmi > Mark.bmi){
	console.log(John.fullName + '  has higher BMI: ' + John.bmi);
} else{
	console.log(Mark.fullName + 'and' + John.fullName + ' have same BMI values!');
}




























