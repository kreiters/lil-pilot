const engineStart = new Audio('turbine start.wav');
const shutDown = new Audio('turbine shutdown.wav');
const comm = new Audio('radio chatter.wav');
const eject = new Audio('eject.wav');
const buttonClick = new Audio('click.wav');


let engRunning;
let comms;
let ejecting;
let redFlashing;
let greenFlashing;
let whiteFlashing;

const startBtn = document.getElementById("btn1");
const commBtn = document.getElementById("btn2");
const Btn3 = document.getElementById("btn3");
const Btn4 = document.getElementById("btn4");
const Btn5 = document.getElementById("btn5");
const lights1 = document.getElementById('inst1');
const lights2 = document.getElementById('inst2');
const lights3 = document.getElementById('inst3');
const lights4 = document.getElementById('inst4');
const lights5 = document.getElementById('inst5');
const lights6 = document.getElementById('inst6');
const red = document.getElementById('redLight');
const green = document.getElementById('greenLight');
const white1 = document.getElementById('whiteLight1');
const white2 = document.getElementById('whiteLight2');
const white3 = document.getElementById('whiteLight3');
const white4 = document.getElementById('whiteLight4');



startBtn.addEventListener('click', function(event){
    if (!engRunning) {
        buttonClick.play();
        startBtn.classList.toggle('clicked');
        console.log('starting turbine');
        shutDown.pause();
        shutDown.currentTime = 0;
        engineStart.currentTime = 1;
        engineStart.play();
        engRunning = true;
    }
    else if (engRunning) {
        console.log(engineStart.currentTime)
        buttonClick.play();
        startBtn.classList.toggle('clicked');
        console.log('shutting down turbine');
        if (engineStart.currentTime < 3) {
            shutDown.currentTime = 8;
            shutDown.play();
            engineStart.pause();
            //engineStart.currentTime = 0;
            engRunning = false; 
        }
        else {
        shutDown.currentTime = 1;
        shutDown.play();
        engineStart.pause();
        //engineStart.currentTime = 0;
        engRunning = false;
        }
    }
  });

commBtn.addEventListener('click', function(event){
    if (!comms) {
        buttonClick.play();
        commBtn.classList.toggle('clicked');
        console.log('starting comms');
        comm.play();
        comms = true;
    }
    else if (comms) {
        buttonClick.play();
        commBtn.classList.toggle('clicked');
        console.log('shutting off comms');
        comm.pause();
        comms = false;
    }
});

Btn3.addEventListener('click', function(event){
    buttonClick.play();
    Btn3.classList.toggle('clicked');
    lights1.classList.toggle('clicked');
    lights2.classList.toggle('clicked');
    lights3.classList.toggle('clicked');
    lights4.classList.toggle('clicked');
    lights5.classList.toggle('clicked');
    lights6.classList.toggle('clicked');
});

Btn4.addEventListener('click', function(event){
    buttonClick.play();
    Btn4.classList.toggle('clicked');
    console.log('btn4 classname is: ' + Btn4.className + ' and red classname is: ' + red.className)
    if (Btn4.className == 'clicked' && red.className == 'off' | red.className == '' | red.className == 'off flash') {
        red.classList.toggle('flash');
        green.classList.toggle('flash');
        white1.classList.toggle('flash');
        white2.classList.toggle('flash');
        white3.classList.toggle('flash');
        white4.classList.toggle('flash');
        flashing()
    }
    else {
        clearInterval(redFlashing);
        clearInterval(greenFlashing);
        clearInterval(whiteFlashing);
        //red.classList.toggle('off');
        //green.classList.toggle('off');
        red.classList.remove('flash');
        green.classList.remove('flash');
        white1.classList.remove('flash');
        white2.classList.remove('flash');
        white3.classList.remove('flash');
        white4.classList.remove('flash');
    }
});

Btn5.addEventListener('click', function(event){
    buttonClick.play();
    if (!ejecting) {
        Btn5.classList.toggle('clicked');
        console.log('ejecting');
        eject.play();
        ejecting = true;
    }
    else if (ejecting) {
        Btn5.classList.toggle('clicked');
        console.log('shutting off eject');
        eject.pause();
        eject.currentTime = 1;
        ejecting = false;
    }
});

function flashing() {
    console.log('flashing running...');
    console.log('btn4 classname is: ' + Btn4.className + ' and red classname is: ' + red.className)
    //if (Btn4.className == 'clicked') {
    redFlashing = setInterval(function() {
        red.classList.toggle('flash');
      }, 500);
      greenFlashing = setInterval(function() {
        green.classList.toggle('flash');
      }, 500);
      whiteFlashing = setInterval(function() {
        white1.classList.toggle('flash');
        white2.classList.toggle('flash');
        white3.classList.toggle('flash');
        white4.classList.toggle('flash');
      }, 250);
      
}
