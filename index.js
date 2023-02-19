const introCont = document.getElementById("intro-container");
const subCircle = document.getElementById("subcir");
const trImageC = document.getElementById('tr-image-c');
const trImage = document.getElementById('tr-image');
const contCir = document.getElementById('contcir');
const header = document.getElementById('head');

introCont.addEventListener('click', function() {
    window.location.href = "https://dzlthatch.github.io/dazzler.com/#wid"
})

subCircle.addEventListener('click', function() {
    window.location.href = "https://dzlthatch.github.io/dazzler.com/#help"
})

contCir.addEventListener('click', function() {
    window.location.href = "https://dzlthatch.github.io/dazzler.com/#cont"
})

header.addEventListener('click', function() {
    window.location.href = "https://dzlthatch.github.io/dazzler.com/#explore"
})

// trImage.addEventListener('mouseover', function() {
//     trImage.src = 'images/champagne-7679665.jpg'
// })
// trImage.addEventListener('mouseout', function() {
//     trImage.src = 'images/addplants.png'
// })

let serOne = document.getElementById('service1');
let serTwo = document.getElementById('service2');
let serThree = document.getElementById('service3');
let serFour = document.getElementById('service4');
let serFive = document.getElementById('service5');
let serSix = document.getElementById('service6');

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');

const services = [
                    {ser: "images/addplants.png", name: serOne, box: box1}, 
                    {ser: "images/addblue.png", name: serTwo, box: box2},
                    {ser: "images/beach-1850059.jpg", name: serThree, box: box3},
                    {ser: "images/addpink.png", name: serFour, box: box4},
                    {ser: "images/addyellow.png", name: serFive, box: box5},
                    {ser: "images/adidaswd3.png", name: serSix, box: box6}
                ];

services.forEach(function(service) {
    service.box.addEventListener("mouseover", function() {
        service.name.style = `background: url(${service.ser})`;
    });

    service.box.addEventListener("mouseout", function() {
        service.name.style = 'background:reset';
    })
})

const vQuote = document.getElementById('v-quote');
const bigOne = document.getElementById('vbo');
const bigTwo = document.getElementById('vbt');
const smallOne = document.getElementById('vso');
const smallTwo = document.getElementById('vst');
let vq = 0;

vQuote.addEventListener("mouseover", function() {
    if (vq == 0) {

        vQuote.style = 'background: black; box-shadow: -18px 18px 0 rgb(216, 90, 90);border-bottom-left-radius: 180px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 180px';

        vQuote.innerText = "What's up!";
        
        smallOne.style = 'transform: translate(82.5vw,0)';
        bigOne.style = 'transform: translate(70vw, 0)';

        smallTwo.style = 'transform: translate(-82.5vw,0)';
        bigTwo.style = 'transform: translate(-70vw, 0)';

        vq = 1;

    }
    
    else if (vq == 1) {

        vQuote.style = 'background: reset; box-shadow: none;border-bottom-left-radius: 180px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 180px';
        vQuote.innerText = "Hey there!";
        
        smallOne.style = 'transform: translate(0, 0)';
        bigOne.style = 'transform: translate(0,0)';
        
        smallTwo.style = 'transform: translate(0, 0)';
        bigTwo.style = 'transform: translate(0,0)';

        vq = 2;
    }

    else if (vq == 2) {

        vQuote.style = 'background: black; box-shadow: 18px -18px 0 rgb(216, 90, 90)';
        vQuote.innerText = "Do it do Win, not do it to not lose!";

        smallOne.style = 'transform: translateX(82.5vw)';
        bigOne.style = 'transform: translateX(70vw)';
        
        smallTwo.style = 'transform: translateX(-82.5vw)';
        bigTwo.style = 'transform: translateX(-70vw)';

        vq = 3
    }

    else if (vq == 3) {

        vQuote.style = 'background: reset; box-shadow: none;'
        vQuote.innerText = "Businesses must develop and grow with a a good and modern marketing strategy."

        smallOne.style = 'transform: translate(0, 0)';
        bigOne.style = 'transform: translate(0,0)';
        
        smallTwo.style = 'transform: translate(0, 0)';
        bigTwo.style = 'transform: translate(0,0)';

        vq = 0;
    }
})

const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const mM1 = document.getElementById('m-m1');
const mM2 = document.getElementById('m-m2');

const mmp1 = document.getElementById('mmp1')
const mmp = document.getElementById('mmp');

m1.addEventListener('mouseover', () => {
    m1.style = 'background: black; color: white; box-shadow: -5px 5px 0 rgb(216, 90, 90);';
    mM1.style = 'width: 0; height: 0; border: none;';
    mM2.style = 'width: 0; height: 0; border: none;';

    mmp.style = 'opacity: 1';
    mmp.src = "images/lavender-3066531.jpg"
})

m1.addEventListener('mouseout', () => {
    m1.style = 'background: reset; color: reset; box-shadow: reset;';
    mM1.style = 'opacity: reset;';
    mM2.style = 'top: reset; left: reset;';

    mmp.style = 'opacity: 0';
})

m2.addEventListener('mouseover', () => {
    m2.style = 'background: black; color: white; box-shadow: -5px 5px 0 rgb(216, 90, 90);';
    mM1.style = 'width: 0; height: 0; border: none;';
    mM2.style = 'width: 0; height: 0; border: none;';

    mmp.style = 'opacity: 1';
    mmp.src = "images/interior-design-g9529861dc_1280.jpg"

})

m2.addEventListener('mouseout', () => {
    m2.style = 'background: reset; color: reset; box-shadow: reset;';
    mM1.style = 'opacity: reset;';
    mM2.style = 'top: reset; left: reset; right: reset; bottom: reset;';

    mmp.style = 'opacity: 0';
})

// contact form

let na = document.getElementById("name");
let email = document.getElementById("em");
let num = document.getElementById("num");
let message = document.getElementById("mes");

const li = [na, email, num, message];

function isB() {
    li.forEach(function(element) {
        if (element.value != "") {
            ;
        }

        else {
            element.style = 'background: reset; color: reset; box-shadow: reset';
        }
    })
}

const sub = document.getElementById("sub");

function isBlank(id) {
    const obj = document.getElementById(`${id}`);
    const val = obj.value;

    if (val != "") {
        obj.style = 'background: black; color: white; box-shadow: -5px 5px 0 rgb(216,90,90)';
    }

    else {
        obj.style = 'background: reset; color: reset; box-shadow: reset';
    }
}

const ctF = document.getElementById('ctF');

// if div is not active and div is blank => reset everything
function isAB() {
    li.forEach(function(i) {
        if (i !== document.activeElement && i.value == "") {
            i.style = "background: reset; color: reset; box-shadow: reset";
        } else {
            i.style = 'background: black; color: white; box-shadow: -5px 5px 0 rgb(216,90,90)';
        }
    })
}

function isNotActive() {
    li.forEach(function(l) {
        if (l !== document.activeElement) {
            if (l.value != "") {
                l.style = 'background: black; color: white; box-shadow: -5px 5px 0 rgb(216,90,90)';
            }
            else {
                l.style="background: reset; color: reset; box-shadow: reset";
            }
        }
        else {
            console.log('not active');
        }
    })
}

let move = 0;

function isDone() {
    if (na.value && email.value && num.value && message.value);


    else {
        const style = getComputedStyle(sub);
        const alignSelf = style.alignSelf;
        if (alignSelf == 'center') {
            sub.style = 'align-self: start;';
        }

        else if (alignSelf == 'start') {
            sub.style = 'align-self: end;';
        }

        else if (alignSelf == 'end') {
            sub.style = 'align-self: reset;';
        }
    }
}
