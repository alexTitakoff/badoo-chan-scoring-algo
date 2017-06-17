//Задача:
//1.Считать интерессы тянок  +
//2.Скорринг 
//3.Формирования массива по скоррингу




$(document).ready(function(argument) {
//generating data

let genArray = []

let nameArray = ['Amy', 'Kate','Molly', 'Milly', 'Kamila', 'Nina','Lola', 'Sara', 'Micky',
'Natasha','Lina','Rina','Rena','Zoy',]

let interestArray = ['iceream','run','eat','movies','pizza','science','code','c++','php','web','internet','rap','music','trap','red','apple','techology','serials','chill','rock','paint','youtube']

let ageArray = [18,19,20,21,22,23,24,25,26,27]

function nameGen(nameArray) {
	let num = Math.floor(Math.random() * nameArray.length);
	return  nameArray[num]	
}

function ageGen(ageArray) {
	let num = Math.floor(Math.random() * ageArray.length);
	return  ageArray[num]	
}



function interestGen(interestArray) {
	//generate interests count
	let count = Math.floor(Math.random() * 10)
	let interestGenArray = []

	for(let y=0; y < count; y++){
		let num = Math.floor(Math.random() * interestArray.length);
		interestGenArray.push(interestArray[num])	
	} 

	return  interestGenArray
}




//main data cicle

for(let i=0; i < 1000; i++ ) {
	
	let genObj = {}
	genObj.name = nameGen(nameArray)
	genObj.gender = 'female'
	genObj.age = ageGen(ageArray)
	genObj.interests = interestGen(interestArray)
	genArray.push(genObj)

}


console.log('========genArray')
console.log(genArray)






let  personArray = genArray


let myInterests = ['run', 'science', 'games', 'code'];


// цикл скорринга
for (let y=0; y< personArray.length; ++y){


	let thisGirl = personArray[y];
	let girlInterests = personArray[y].interests;
	//console.log(girlInterests);

	var idx=0;
	thisGirl.score = 0;
	for (var i=0;i<myInterests.length;i++){
		
		idx=girlInterests.indexOf(myInterests[i]);

		if (idx>=0) {
			
			thisGirl.score = thisGirl.score + 1;
		};
		
	}; // выводит совпадения
}; // personArray


personArray = personArray.sort(function (b, a) {
	return (a.score - b.score);
});





// let array =[
// {
// 	"id":15364842,
// 	"date":7,
// 	"src":"GeZA4v2l-Vo.jpg"
// },
// {
// 	"id":2,
// 	"date":1364245503,
// 	"src":"pIMhRV5nf_Y.jpg"
// },
// {
// 	"id":5,
// 	"date":1364243193,
// 	"src":"LMnKzmNZ390.jpg"
// }
// ]

// array = array.sort(function (b, a) {
//     //если результат <0 то b должен быть впереди a
//     return (a.date - b.date);
// });
// console.log(array);


// var one=['mail.ru','google.com','yandex.ru','rambler.ru'];
// var two=['google.com','rambler.ru'];

// var idx=0;
// for (var i=0;i<two.length;i++)
// {
// 	idx=one.indexOf(two[i]);
// 	if (idx>=0) alert(idx); // выводит совпадения
// }


console.log(personArray);




let grid = $('.grid_profils')
console.log(grid)
for (let k = 0; k < personArray.length; k++ ) {

	let cookInterstsData  
	let dataIntArr = personArray[k].interests

	for (let m = 0; m < dataIntArr.length; m++ ) {
		if (m == 0) {
			cookInterstsData = dataIntArr[m]
		} else {
			cookInterstsData =  cookInterstsData + ', ' + dataIntArr[m] 
		}

	}

	$('<div class="col-md-3 profile "><div class="thumbnail"><img src="female_avatar.jpg" alt="..."><div class="caption"><h5>'+ personArray[k].name +'</h5><p><b>Age:</b> '+personArray[k].age +'</p><p><b>Iterests:</b> '+ cookInterstsData +' </p><p> <a href="#" class="btn btn-default" role="button">See Profile</a></p></div></div></div>').appendTo(grid)

}

}) // DOC READY



