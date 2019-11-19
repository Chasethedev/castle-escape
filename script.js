var centerDiv = document.getElementById('centerDiv');
//create play game button
var playBtn = document.getElementById('playBtn');
// create enter name button
var enterBtn = document.createElement('button');
// create first continue button
var firstContinueBtn = document.createElement('button');
// forest continue button
var forestContinueBtn = document.createElement('button');
// create next 1 button
var next1Btn = document.createElement('button');
var next2Btn = document.createElement('button');
var next3Btn = document.createElement('button');
// create input
var input = document.getElementById('gameInput');

var bodyWrap = document.getElementById('bodyWrap');
// create player
var player;
// create h2
var h2 = document.createElement('h2');
// add class to h2
h2.classList.add('gameh2');

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

// create top dialog box
var someText = document.getElementById('someText');

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
		someText.innerText = 'The forst is cold. you have been on the road a long time. It has been days since you have even had a bite and the only water you can find is that from which you can get from eating snow. You can feel your energy draining. You have lost count of the days its been since you have seen another living soul. There is no home to go back to. Your only hope is to continue on and look for shelter' ;
		// creates next 1 button
 		centerDiv.appendChild(next1Btn);
 		// add next text to next1 button
 		next1Btn.innerText = "next";
	},4000)
	next1Btn.addEventListener("click", function(){
		//removes nextbtn1 button
		next1Btn.parentNode.removeChild(next1Btn);
		// change box inner text
		someText.innerText = 'travel through trees';
		//create next btn 2
		centerDiv.appendChild(next2Btn);
		// add next text to next2 button
 		next2Btn.innerText = "next";
	});
});

next2Btn.addEventListener('click', function(){
		//removes nextbtn2 button
		next2Btn.parentNode.removeChild(next2Btn);
		// changes id
		document.getElementById('bodyWrapFrost1').id ='bodyWrapFrost2';
		// changes some text
		someText.innerText = 'You found a river! However it is frozen solid. It looks like there might be a small path on the other side of these trees';
		//create next btn 3
		centerDiv.appendChild(next3Btn);
		// add next text to next3 button
 		next3Btn.innerText = "next";
		
})

next3Btn.addEventListener('click', function(){
		//removes nextbtn3 button
		next3Btn.parentNode.removeChild(next3Btn);
		// changes id
		document.getElementById('bodyWrapFrost2').id ='bodyWrapFrost3';
		// changes some text
		someText.innerText = 'You found a river! However it is frozen solid. It looks like there might be a small path on the other side of these trees';
		// //create next btn 4
		// centerDiv.appendChild(next4Btn);
		// // add next text to next3 button
 	// 	next4Btn.innerText = "next";
		
})


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











