//Задача:
//1.Считать интерессы тянок  +
//2.Скорринг 
//3.Формирования массива по скоррингу



//generating data

let genArray = []

let nameArray = ['Amy', 'Kate','Molly', 'Milly', 'Kamila', 'Nina','Lola', 'Sara', 'Micky',
'Natasha','Lina','Rina','Rena','Zoy',]

let interestArray = ['iceream','run','eat','movies','pizza','science','code','c++','php','web','internet','rap','music','trap','red','apple','techology','serials','chill','rock','paint','youtube']


function nameGen(nameArray) {
	let num = Math.floor(Math.random() * nameArray.length);
	return  nameArray[num]	
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



for(let i=0; i < 10; i++ ) {
	
	let genObj = {}
	genObj.name = nameGen(nameArray)
	genObj.gender = 'female'
	genObj.interests = interestGen(interestArray)
	genArray.push(genObj)

}


console.log('========genArray')
console.log(genArray)



let  personArray = [
{
	name: "Vi",
	gender: "female",
	age: "21", 
	interests: ['run', 'eat', 'iceream'],

},

{	
	name: "Alice",
	gender: "female",
	age: "22", 
	interests: ['run', 'eat', 'iceream', 'code'] 
},

{	
	name: "Kate",
	gender: "female",
	age: "20", 
	interests: ['music', 'iceream'] 
},

{	
	name: "Nika",
	gender: "female",
	age: "21", 
	interests: ['run', 'games', 'eat', 'iceream','science', 'code'] 
},
];







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





