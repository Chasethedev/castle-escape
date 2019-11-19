// grab centerDiv ID 
let centerDiv = document.getElementById('centerDiv');
// grab bodywrap ID
let bodyWrap = document.getElementById('bodyWrap');
// create h2
let h2 = document.createElement('h2');
// add class to h2
h2.classList.add('gameh2');
// create player
let player;

//create play game button
let playBtn = document.getElementById('playBtn');
// first "click to play" button with event listener
playBtn.addEventListener("click", function() {	
	// set h2 text
	h2.innerText ="ENTER YOUR NAME";
	// append h2
	centerDiv.appendChild(h2);
	// removes the class that hides the input / revealed
	input.removeAttribute('class');	
	// enter name button inner text
	enterBtn.innerText = "Enter";
	// append enter name button
	centerDiv.appendChild(enterBtn);
	// deletes play game btn
	playBtn.parentNode.removeChild(playBtn);		
});

// create enter name button
let enterBtn = document.createElement('button');
// create input
let input = document.getElementById('gameInput');
//second button enter name event listener
enterBtn.addEventListener("click", function (){
	if (input.value.length > 0) { 
		// assign input value to var player
		player = document.getElementById('gameInput').value;
		// remove input
		input.parentNode.removeChild(input);
		// set h2 text
		h2.innerText = `Welcome ${player}! Let your journey begin!`;
		// append h2
		centerDiv.appendChild(h2);
		// deletes play enter name btn
		enterBtn.parentNode.removeChild(enterBtn);
		// inner text for first continue
		firstContinueBtn.innerText = "Continue";
		// append name button
		centerDiv.appendChild(firstContinueBtn);
	} 
 });

// create first continue button
let firstContinueBtn = document.createElement('button');
// create next 1 button
let next1Btn = document.createElement('button');
// create next 2 button
let next2Btn = document.createElement('button');
// create top dialog box
let someText = document.getElementById('someText');
//first continue button event listener
firstContinueBtn.addEventListener('click', function(){
	bodyWrap.setAttribute('class', 'fade-out');
	setTimeout(function(){
		bodyWrap.setAttribute('class','fade-in');
		//removes first continue button
		firstContinueBtn.parentNode.removeChild(firstContinueBtn);
		// remove h1
		document.getElementById('page1h1').remove();
		//remove h2
		h2.parentNode.removeChild(h2);
		// changes id
		document.getElementById('bodyWrap').id ='bodyWrapFrost1';
		// add classes
		someText.setAttribute('class', 'narrator');
		// inner text set
		someText.innerText = `The forst is cold. You have been on the road a long time. It has been days since you have even had a bite and the only water you can find is that which you can get from eating snow. You can feel your energy draining. You have lost count of the days it's been since you have seen another living soul. Every step is harder to take than the last but your only hope is to continue on in search for shelter and food.`;
		// creates next 1 button
 		centerDiv.appendChild(next1Btn);
 		// add next text to next1 button
 		next1Btn.innerText = "next";
	},4000)
    //next 1 button event listener
	next1Btn.addEventListener("click", function(){
		//removes nextbtn1 button
		next1Btn.parentNode.removeChild(next1Btn);
		// change box inner text
		someText.innerText = `It is best not to be visible out in the open. Take cover and travel through trees`;
		//create next btn 2
		centerDiv.appendChild(next2Btn);
		// add next text to next2 button
 		next2Btn.innerText = "next";
	});
});

//next 2 button event listener
next2Btn.addEventListener('click', function(){
		//removes nextbtn2 button
		next2Btn.parentNode.removeChild(next2Btn);
		// changes id
		document.getElementById('bodyWrapFrost1').id ='bodyWrapFrost2';
		// changes some text
		someText.innerText = `You found a river! However it is frozen solid. This part of the forst is thick with dead trees and slippery icy bolders. It's quite hard to move through. There looks to be an easier flat path on the other side of these trees`;
		//create next btn 3
		centerDiv.appendChild(next3Btn);
		// add next text to next3 button
 		next3Btn.innerText = "next";	
})

// create next 3 button
let next3Btn = document.createElement('button');
 //next 3 button event listener
next3Btn.addEventListener('click', function(){
		//removes nextbtn3 button
		next3Btn.parentNode.removeChild(next3Btn);
		// changes id
		document.getElementById('bodyWrapFrost2').id ='bodyWrapFrost3';
		// changes some text
		someText.innerText = `This looks much easier to travel through but you are not quite as hidden. Best be aware of your surroundings and travel with caution but the lack of food and sleep has made you a bit clumsy. You can feel your senses fading with each step.`;
		// //create next btn 4
		// centerDiv.appendChild(next4Btn);
		// // add next text to next3 button
 	// 	next4Btn.innerText = "next";
		
})

// forest continue button
// let forestContinueBtn = document.createElement('button');
// setTimeout(function(){
// 		// creates forest continue button
// 		centerDiv.appendChild(forestContinueBtn);
// 		// forest continue button inner text
// 		forestContinueBtn.innerText = 'Continue';
// 	}, 9000)

// forestContinueBtn.addEventListener("click", function(){
// 	document.getElementById('bodyWrap2').id ='bodyWrapStranger';
// 	someText.innerText = 'It looks like you arent alone out here after all. Though it\'s hard to tell if this is a friend or foe';

// })



// window.onload = function() {
// 	document.getElementById('myAudio').play();
// }











