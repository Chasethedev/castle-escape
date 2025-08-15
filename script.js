// grab centerDiv ID 
let centerDiv = document.getElementById('centerDiv');
// grab bodywrap ID
let bodyWrap = document.getElementById('bodyWrap');
// create h2
let h2 = document.createElement('h2');
// add class to h2
h2.classList.add('gameh2');
// create player
const player = {
	name: '',
	persuassion: 0,
	intimidation: 0
}

// audio 
let myAudio = document.getElementById('myAudio');

//create play game button
let playBtn = document.getElementById('playBtn');
// create music on button
let musicBtnOn = document.createElement('button');
// create music off button
let musicBtnOff = document.createElement('button');

// play/pause or on/off music functions
musicBtnOn.addEventListener('click', function(){
	myAudio.volume = 0;
	musicBtnOn.remove();
	musicBtnOff.classList.add('musicBtnStyle')
	musicBtnOff.innerText = 'music off'
	bodyWrap.appendChild(musicBtnOff)
})
musicBtnOff.addEventListener('click', function(){
	myAudio.volume = 1;
	musicBtnOff.remove();
	bodyWrap.appendChild(musicBtnOn)
})


// first "click to play" button with event listener
playBtn.addEventListener("click", function() {
	musicBtnOn.innerText = "music on"
	musicBtnOn.classList.add('musicBtnStyle')
	bodyWrap.appendChild(musicBtnOn)	
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
	myAudio.play();		
});

// create enter name button
let enterBtn = document.createElement('button');
// create input
let input = document.getElementById('gameInput');
//second button enter name event listener
enterBtn.addEventListener("click", function (){
	if (input.value.length > 0) { 
		// assign input value to var player
		player.name = document.getElementById('gameInput').value;
		// remove input
		input.parentNode.removeChild(input);
		// set h2 text
		h2.innerText = `Welcome ${player.name}! Let your journey begin!`;
		// append h2
		centerDiv.appendChild(h2);
		// removes enter name btn
		enterBtn.remove();
		// inner text for first continue
		firstContinueBtn.innerText = "Continue";
		// append name button
		centerDiv.appendChild(firstContinueBtn);
	} else {
		h2.innerText = 'Please enter your name to continue'
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
	// add class to fade out
	bodyWrap.classList.add('fade-out');

	firstContinueBtn.classList.add('blurryOut')
	page1h1.classList.add('blurryOut');
	// set delay
	setTimeout(function(){
		// add class for fade in
		bodyWrap.classList.add('fade-in');
		//removes first continue button
		firstContinueBtn.remove();
		// remove h1
		document.getElementById('page1h1').remove();
		//remove h2
		h2.parentNode.removeChild(h2);
		// changes class 
		bodyWrap.classList.remove('background-image1');
		bodyWrap.classList.add('bg-image-forest1');
		// add classes
		someText.classList.add('narrator')
		// inner text set
		someText.innerText = `The forest is cold. You have been on the road a long time. It has been days since you have had a bite and the only water you can find is that which you can get from eating snow. You can feel your energy draining. You have lost count of the days it's been since you have seen another living soul. Every step is harder to take than the last but your only hope is to continue on in search for shelter and food.`;
		// creates next 1 button
 		centerDiv.appendChild(next1Btn);
 		// add next text to next1 button
 		next1Btn.innerText = "next";
	},4000)
    //next 1 button event listener
	next1Btn.addEventListener("click", function(){
		//removes nextbtn1 button
		next1Btn.remove();
		// change box inner text
		someText.innerText = `It is best not to be visible out in the open. Take cover and travel through the trees.`;
		//create next btn 2
		centerDiv.appendChild(next2Btn);
		// add next text to next2 button
 		next2Btn.innerText = "next";
	});
});

// create next 3 button
let next3Btn = document.createElement('button');
//next 2 button event listener
next2Btn.addEventListener('click', function(){
		//removes nextbtn2 button
		next2Btn.remove();
		// changes class
		bodyWrap.classList.remove('bg-image-forest1');
		bodyWrap.classList.add('bg-image-forest2');
		// changes some text
		someText.innerText = `You found a river! However it is frozen solid. This part of the forest is thick with dead trees and icy bolders. It is quite hard to move through. There looks to be an easier path on the other side of these trees.`;
		//create next btn 3
		centerDiv.appendChild(next3Btn);
		// add next text to next3 button
 		next3Btn.innerText = "next";	
})

// create next 4 button
let next4Btn = document.createElement('button');
//next 3 button event listener
next3Btn.addEventListener('click', function(){
		//removes nextbtn3 button
		next3Btn.remove()
		// changes class 
		bodyWrap.classList.remove('bg-image-forest2', 'fade-out', 'fade-in');
		bodyWrap.classList.add('bg-image-forest3');
		// changes some text
		someText.innerText = `This looks much easier to travel through but you are not quite as hidden. Best be aware of your surroundings and travel with caution but the lack of food and sleep has made you a bit clumsy. You can feel your senses fading with each step but you have to keep moving. There seems to be slight yellow glow off into the mountains. It is hard to tell if it is real or if it is just your imagenation. It could possibly mean sort of shelter.`;
		//create next btn 4
		centerDiv.appendChild(next4Btn);
		// add next text to next4 button
 		next4Btn.innerText = "next";		
})

let speakBeastBtn = document.createElement('button')
//next 4 button event listener
next4Btn.addEventListener('click', function(){
	// changes Audio
	myAudio.src='monstersound.mp3'; myAudio.load();
	// makes page fade-out
	bodyWrap.classList.add('fade-out');
	// set delay
	setTimeout(function(){
		// plays audio
		myAudio.play();
		// makes page fade in
		bodyWrap.classList.add('fade-in');
		// removes background
		bodyWrap.classList.remove('bg-image-forest3');
		// changes class for new background
		bodyWrap.classList.add('bg-image-treemonster');
		//removes nextbtn3 button
		next4Btn.remove();
		// inner text set
		someText.innerText = `You have stumbled upon a strange beast. Your lack of awareness made it hard to see this creature until it was too late.`;
		//create next beast chat button
		centerDiv.appendChild(speakBeastBtn);
		// add next text to next4 button
 		speakBeastBtn.innerText = "speak with beast";
	},4000)
});


let optionsDiv = document.createElement('div');
let beasttalkcontainer = document.createElement('div');
let choseh3 = document.createElement('h3');
let beasth3 = document.createElement('h3');

let opt1Btn = document.createElement('button');
let opt2Btn = document.createElement('button');

// intimidation and persuassion points
let intimidationDiv = document.createElement('div');
let persuassionDiv = document.createElement('div');
let intimidationPnts = document.createElement('p');
let persuassionPnts = document.createElement('p');
let pntsContainerDiv = document.createElement('div');

speakBeastBtn.addEventListener("click", function(){

		bodyWrap.appendChild(pntsContainerDiv)
		pntsContainerDiv.classList.add('pntsContainerDivStyle', 'fade-in')

		pntsContainerDiv.appendChild(persuassionDiv)
		persuassionDiv.classList.add('persuassionStyle')
		persuassionDiv.appendChild(persuassionPnts)
		persuassionPnts.innerText = `persuassion ${player.persuassion}`;

		pntsContainerDiv.appendChild(intimidationDiv)
		intimidationDiv.classList.add('intimidationStyle')
		intimidationDiv.appendChild(intimidationPnts)
		intimidationPnts.innerText = `intimidation ${player.intimidation}`;




		speakBeastBtn.remove();
		// removes narrator style class
		someText.classList.remove('narrator')
		someText.classList.add('beastTalk')
		someText.innerText ='';

		beasttalkcontainer.classList.add('beasttalkcontainer')

		someText.appendChild(beasth3);
		beasth3.innerText = 'TREE BEAST';
		beasth3.classList.add('beasth3Style')

		someText.appendChild(beasttalkcontainer)
		

		beasttalkcontainer.innerText = `Well Well what do we have here? A tiny human that dares to cross my path. It looks like you have made a wrong turn at some point didn't you little Guy? `;

	setTimeout(function(){
		centerDiv.appendChild(choseh3);
		choseh3.classList.add('choseh3style','fade-in');

		centerDiv.appendChild(optionsDiv);
		optionsDiv.classList.add('optionsContainer', 'fade-in')
		
		optionsDiv.appendChild(opt1Btn);
		optionsDiv.appendChild(opt2Btn);
		opt1Btn.classList.add('optionBtnStyle')
		opt2Btn.classList.add('optionBtnStyle')
		choseh3.innerText = `Chose your response`;
		opt1Btn.innerText = `I mean you no trouble. I am in desperate search of food and shelter. I will be on my way and leave you be. Good day to you sir!`;
		opt2Btn.innerText = `I have made no wrong turn foul beast. I am in need of food and shelter and I plan on contining ahead until I find some. Step aside beast!`;

	},3000)
})

let opt3Btn = document.createElement('button');
let opt4Btn = document.createElement('button');
opt3Btn.classList.add('optionBtnStyle')
opt4Btn.classList.add('optionBtnStyle')

opt1Btn.addEventListener('click', function(){

	persuassionPnts.innerText = ` persuassion `+ ++player.persuassion;

	beasttalkcontainer.innerText = `Oh really now? So should I just let you go continuing on tip toeing around the woods? For what? Just so you can come back in a day with an axe to making little toys out of my fellow brothers. I dont think so little guy!`
	opt1Btn.remove()
	opt2Btn.remove()
	optionsDiv.classList.remove('fade-in');

	optionsDiv.appendChild(opt3Btn);
	optionsDiv.appendChild(opt4Btn);
	opt3Btn.innerText = `I play no tricks. I am weary. There is a firey glow in the mountains. It is my only hope for survival in this lifeless forest.`;
	opt4Btn.innerText = `One more step and you'll be fire wood beast! My buisness is not with you but with the flame in the mountain. Now let me be or else!`;

})

opt2Btn.addEventListener('click', function(){
	intimidationPnts.innerText = ` intimidation ` + ++player.intimidation;

	beasttalkcontainer.innerText = `Hahaha! looks like we have an ornery one here. I wonder if the skin on your bones is a tough as the attitude you portray. Only one way to find out!`
	opt1Btn.remove()
	opt2Btn.remove()
	optionsDiv.classList.remove('fade-in');

	optionsDiv.appendChild(opt3Btn);
	optionsDiv.appendChild(opt4Btn);
	opt3Btn.innerText = `I play no tricks. I am weary. There is a firey glow in the mountains. It is my only hope for survival in this lifeless forest.`;
	opt4Btn.innerText = `One more step and you'll be fire wood beast! My buisness is not with you but with the flame in the mountain. Now let me be or else!`;
	// opt4Btn.innerText = `Take one more step and you'll be fire wood beast! This is your last warning! Step aside and let me be or else!`;
})


let opt5Btn = document.createElement('button');
let opt6Btn = document.createElement('button');
opt5Btn.classList.add('optionBtnStyle')
opt6Btn.classList.add('optionBtnStyle')

opt3Btn.addEventListener('click', function(){
	
	persuassionPnts.innerText = ` persuassion ` + ++player.persuassion;

	beasttalkcontainer.innerText = `You know, you are lucky human blood doesnt sound too apetizing at the moment. Still full from my last meal just 20 years ago. `
	opt3Btn.remove()
	opt4Btn.remove()

	optionsDiv.appendChild(opt5Btn);
	optionsDiv.appendChild(opt6Btn);
	opt5Btn.innerText = `Just ate? 20 years ago?`;
	opt6Btn.innerText = `You mean to tell me you can survive on one meal within 20 years?`;

})

opt4Btn.addEventListener('click', function(){
	intimidationPnts.innerText = ` intimidation ` + ++player.intimidation;

	// beasttalkcontainer.innerText = `You know you are lucky I just ate 20 years ago and I'm still full. Human blood doesnt sound too apetizing at the moment.`
	beasttalkcontainer.innerText = `You know, you are lucky human blood doesnt sound too apetizing at the moment. Still full from my last meal just 20 years ago. `
	opt3Btn.remove()
	opt4Btn.remove()

	optionsDiv.appendChild(opt5Btn);
	optionsDiv.appendChild(opt6Btn);
	opt5Btn.innerText = `Just ate? 20 years ago?`;
	opt6Btn.innerText = `You mean to tell me you can survive on one meal within 20 years?`;
})

let opt7Btn = document.createElement('button');
let opt8Btn = document.createElement('button');
opt7Btn.classList.add('optionBtnStyle')
opt8Btn.classList.add('optionBtnStyle')

opt5Btn.addEventListener('click', function(){
	persuassionPnts.innerText = ` persuassion ` + ++player.persuassion;

	beasttalkcontainer.innerText = `Oh look it does have a brain and can comprehend what I say! For a moment I thought both of our heads were made of wood.. 20 years is more than recent enough, 80 to 100 years is around the limit my kind can go without a proper feast. Sadly that's about how long we go here in this forest without coming across another living thing.`
	opt5Btn.remove()
	opt6Btn.remove()

	optionsDiv.appendChild(opt7Btn);
	optionsDiv.appendChild(opt8Btn);
	opt7Btn.innerText = `That is why that glow in the mountains is only hope for food and shelter.`;
	opt8Btn.innerText = `You have wasted my time long enough. I must reach the glow in the mountains.`;

})

opt6Btn.addEventListener('click', function(){
	intimidationPnts.innerText = ` intimidation ` + ++player.intimidation;

	beasttalkcontainer.innerText = `Oh look it does have a brain and can comprehend what I say! For a moment I thought both of our heads were made of wood.. 20 years is more than recent enough, 80 to 100 years is around the limit my kind can go without a proper feast. Sadly that's about how long we go here in this forest without coming across another living thing.`
	opt5Btn.remove()
	opt6Btn.remove()

	optionsDiv.appendChild(opt7Btn);
	optionsDiv.appendChild(opt8Btn);
	opt7Btn.innerText = `That is why the flame in the mountain is only hope for food and shelter.`;
	opt8Btn.innerText = `You have wasted my time long enough! I must reach the glow in the mountains.`;
})

let opt9Btn = document.createElement('button');
let opt10Btn = document.createElement('button');
opt9Btn.classList.add('optionBtnStyle')
opt10Btn.classList.add('optionBtnStyle')

opt7Btn.addEventListener('click', function(){
	persuassionPnts.innerText = ` persuassion ` + ++player.persuassion;

	choseh3.classList.remove('fade-in');

	beasttalkcontainer.innerText = `Ahh yes yes yes the glow in the mountain. It is infact a castle from the ancient days. So if it's shelter you seek then you will surely find it there but be warned, it will be your down fall. Like a moth to a flame`
	opt7Btn.remove()
	opt8Btn.remove()

	optionsDiv.appendChild(opt9Btn);
	optionsDiv.appendChild(opt10Btn);
	opt9Btn.innerText = `I have no other choice. I'm on the brink of death as we speak. I'll take my chances`;
	opt10Btn.innerText = `Whatever that castle holds cannot be anyworse than this forest. I'm dying and have no choice`;
	
})

opt8Btn.addEventListener('click', function(){
	intimidationPnts.innerText = ` intimidation ` + ++player.intimidation;

	choseh3.classList.remove('fade-in');

	beasttalkcontainer.innerText = `Hahaha! Oh you are so intimidating with your little weapons. Well Mr impatient if it's shelter you seek then you find it at that glow in the mountain. It is in fact a castle from the ancient days but be warned, finding it will be your down fall. Like a moth to a flame`
	opt7Btn.remove()
	opt8Btn.remove()

	optionsDiv.appendChild(opt9Btn);
	optionsDiv.appendChild(opt10Btn);
	opt9Btn.innerText = `I have no other choice. I'm on the brink of death as we speak. I'll take my chances`;
	opt10Btn.innerText = `Whatever that castle holds cannot be anyworse than this forest. I'm dying and have no choice`;
})

let mountainBtn = document.createElement('button');

opt9Btn.addEventListener('click', function(){
	persuassionPnts.innerText = ` persuassion ` + ++player.persuassion;

	choseh3.classList.add('fade-out');

	beasttalkcontainer.innerText = `So be it then. I shall let you pass. Behind me there is path that leads up the mountains. Stay to the right any time the trail splits and it will lead you to your destination. No need to take cover while on the trail. There are no other living creatures in this forest besides you.. especially this close to the castle.`
	opt9Btn.remove()
	opt10Btn.remove()

	setTimeout(function(){
		choseh3.remove();
		
		mountainBtn.classList.add('fade-in');
		optionsDiv.appendChild(mountainBtn);
		mountainBtn.innerText = `Take the mountain path`;
	},4000)
	
})

opt10Btn.addEventListener('click', function(){
	intimidationPnts.innerText = ` intimidation ` + ++player.intimidation;

	choseh3.classList.add('fade-out');

	beasttalkcontainer.innerText = `So be it then tough guy. I shall let you pass. Behind me there is path that leads up the mountains. Stay to the right any time the trail splits and it will lead you to your destination. No need to take cover while on the trail. There are no other living creatures in this forest besides you.. especially this close to the castle.`
	opt9Btn.remove()
	opt10Btn.remove()
	setTimeout(function(){
		choseh3.remove();
		
		mountainBtn.classList.add('fade-in');
		optionsDiv.appendChild(mountainBtn);
		mountainBtn.innerText = `Take the mountain path`;
	},4000)

})







