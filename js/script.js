// Строгий режим
"use strict";
// тут берёться рандомное слово и шинкуется на массив
const randomIndex = Math.floor(Math.random() * (dictionary.length));
const result = dictionary[randomIndex];
const newResult = result.split("", 5)
console.log(newResult);

// генератор по очереди выдаёт строки инпутов
function* generatorLines() {
	var line1 = document.querySelector('.worldle__line1')
	console.log(line1);
	yield line1;
	var line2 = document.querySelector('.worldle__line2')
	yield line2;
	var line3 = document.querySelector('.worldle__line3')
	yield line3;
	var line4 = document.querySelector('.worldle__line4')
	yield line4;
	var line5 = document.querySelector('.worldle__line5')
	yield line5;
	var line6 = document.querySelector('.worldle__line6')
	yield line6;
}
let line = generatorLines();


// функция собирает инпуты с передаваемой линии и пушит в массив
function numArrCreate(i) {
	let arr = [];
	let onePar = '.' + i.classList[0] + " .worldle1";
	let one = document.querySelector(onePar)
	arr.push(one.value)
	let twoPar = '.' + i.classList[0] + " .worldle2";
	let two = document.querySelector(twoPar)
	arr.push(two.value)
	let threePar = '.' + i.classList[0] + " .worldle3";
	let three = document.querySelector(threePar)
	arr.push(three.value)
	let fourPar = '.' + i.classList[0] + " .worldle4";
	let four = document.querySelector(fourPar)
	arr.push(four.value)
	let fivePar = '.' + i.classList[0] + " .worldle5";
	let five = document.querySelector(fivePar)
	arr.push(five.value)
	console.log(arr)
	return arr;
}


// этот плям запускает весь процесс
function plyam() {
	let lineSave = line.next().value; //сохраняю линию из генератора
	let arrInputs = numArrCreate(lineSave)
	let trueVal = 0;

	let inputs = lineSave.getElementsByTagName('input'); //сохраняю линию
	for (let q = 0; q < inputs.length; q++) {
		inputs[q].style.background = '#76787B'; //всем серый цвет
	}

	for (let i = 0; i < newResult.length; i++) {
		const element = newResult[i];

		for (let a = 0; a < 5; a++) {
			if (arrInputs.includes(element)) { //есть ли буква в слове

				if (inputs[a].value === element) {
					inputs[a].style.background = '#BDAA59';//жёлтый
					if (arrInputs[a] == newResult[a]) {
						inputs[a].style.background = '#6AA165';// зелёный
						trueVal += 1;
						// console.log(trueVal)
					} else {
						inputs[a].style.background = '#BDAA59';//жёлтый
					}
				}
			}
		}
	}


	if (trueVal == 5) {
		alert('you Win')
	}
}


function reloading() {
	document.location.reload();
}









