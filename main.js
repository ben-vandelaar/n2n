//Chapter 1
alert('Welcome to Quiz Ninja!');

//Chapter 2
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answerd ${answer}`)

//Chapter 3

// const quiz = [
//     ["What is Superman's real name?", "Clark Kent"],
//     ["What is Wonder Woman's real name?", "Diana Prince"],
//     ["What is Batman's real name?", "Bruce Wayne"]
// ];
// let score = 0;

// for (const [question, answer] of quiz) {
//     const response = prompt(question);
//     if (response === answer) {
//         alert('Correct!');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

//Chapter 4 

// function mean(arr, callback) {
//     if (callback) {
//         arr.map(callback);
//         const total = array.reduce((a, b) => a + b);
//         return total / array.length
//     }
// };

// mean([2, 5, 7, 11, 4]);

// mean([2, 5, 7, 11, 4], x => 2 * x);

// mean([2,5,7,11,4],square);

// const quiz = [
//     ["What is Superman's real name?", "Clark Kent"],
//     ["What is Wonder Woman's real name?", "Diana Prince"],
//     ["What is Batman's real name?", "Bruce Wayne"]
// ];

// function start(quiz) {
//     let score = 0;

//     for (const [question, answer] of quiz) {
//         const response = ask(question);
//         check(response, answer);
//     }
//     gameOver();

//     function ask(question) {
//         return prompt(question);
//     }

//     function check(response, answer) {
//         if (response === answer) {
//             alert("Correct!");
//             score++;
//         } else {
//             alert(`Wrong! The correct answer was ${answer}`);
//         }
//     }

//     function gameOver() {
//         alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
//     }
// }

// start(quiz);

//Chapter 5

// Regular Express

// const language = 'JavaScript';
// const pattern = new RegExp(language);

// pattern.test('joke');

// pattern.test('java')

// const pattern = /JavaScript/;

// const vowels = /[aeiou]/;

// const atoz = /[a-z]/;

// const js = /[Jj][aeiou]v[aeiou]/;

// js.test('JavaScript');

// const JS = /[javascript]/i;

// JS.test('JavaScript');


// let email = prompt("Please enter email");

// const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

// emailPattern.test(email) ? prompt("Email Validated") : prompt("Please enter valid email");


// "I'm learing JavaScript".search(/java/i);


// const quiz = [
//     { name: "Superman", realName: "Clark Kent" },
//     { name: "Wonder Woman", realName: "Diana Prince" },
//     { name: "Batman", realName: "Bruce Wayne" },
// ];

// const game = {
//     start(quiz) {
//         this.questions = [...quiz];
//         this.score = 0;

//         for (const question of this.questions) {
//             this.question = question;
//             this.ask();
//         }
//         this.gameOver();
//     },
//     ask() {
//         const question = `What is ${this.question.name}'s real name?`;
//         const response = prompt(question);
//         this.check(response);
//     },
//     check(response) {
//         const answer = this.question.realName;
//         if (response === answer) {
//             alert('Correct!');
//             this.score++;
//         } else {
//             alert(`Wrong! The correct answer was ${answer}`);
//         }
//     },
//     gameOver() {
//         alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
//     }

// }

// v


//Chapter 6

//DOM and Jquery

//JS
// const ul = document.querySelector('ul#roster');
// ul.querySelector('li#bats');

//JQ

// $('ul#roster').find('li#bats');



const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    { name: "Wonder Woman", realName: "Diana Prince" },
    { name: "Batman", realName: "Bruce Wayne" },
];

//View Object


// const view = {
//     score: document.querySelector('#score strong'),
//     question: document.getElementById('question'),
//     result: document.getElementById('result'),
//     info: document.getElementById('info'),
//     render(target, content, attributes) {
//         for (const key in attributes) {
//             target.setAttribute(key, attributes[key]);
//         }
//         target.innerHTML = content;
//     }
// };


//Game Object


// const game = {
//     start(quiz) {
//         this.questions = [...quiz];
//         this.score = 0;

//         for (const question of this.questions) {
//             this.question = question;
//             this.ask();
//         }
//         this.gameOver();
//     },
//     ask() {
//         const question = `What is ${this.question.name}'s real name ?`;
//         view.render(view.question, question);
//         const response = prompt(question);
//         this.check(response);
//     },
//     check(response) {
//         const answer = this.question.realName;
//         if (response === answer) {
//             view.render(view.result, 'Correct!', { 'class': 'correct' });
//             alert('Correct!');
//             this.score++;
//             view.render(view.score, this.score);
//         } else {
//             view.render(view.result, `Wrong! The correct answer was ${answer}`);
//         }
//     },
//     gameOver() {
//         view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`)
//     }
// }

// game.start(quiz);


//Chapter 7

function doSomething() {
    console.log('Something Happened!');
}

// addEventListener('click', doSomething2)

// function doSomething2(event) {
//     console.log(`screen: (${event.screenX}, ${event.screenY}),
//     page: (${event.pageX}, ${event.pageY}),
//     client:(${event.screenX},${event.screenY})`)
// }

// const dblclickParagraph = document.getElementById('dblclick');
// dblclickParagraph.addEventListener('dblclick', highlight)

// function highlight(event) {
//     event.target.classList.toggle('highlight');
// }

// const mouseParagraph = document.getElementById('mouse');
// mouseParagraph.addEventListener('mouseover', highlight);
// mouseParagraph.addEventListener('mouseout', highlight);

// addEventListener('keydown', highlight);

// addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

// addEventListener('keydown', (event) => {
//     if (event.key === 'c' && event.ctrlKey) {
//         console.log('Action Cancled!');
//     }
// })

// addEventListener('touched', () => console.log('Touch stopped'));


// ulElement = document.getElementById('list');
// liElement = document.querySelector('#list li');

// ulElement.addEventListener('click', (event) =>
//     console.log('Clicked on ul'), true);

// liElement.addEventListener('click', (event) => {
//     console.log('Clicked on li'),
//         event.stopPropagation();
// }, false);

// const view = {
//     start: document.getElementById('start'),
//     score: document.querySelector('#score strong'),
//     question: document.getElementById('question'),
//     result: document.getElementById('result'),
//     info: document.getElementById('info'),

//     show(element) {
//         element.style.display = "block";
//     },
//     hide(element) {
//         element.style.display = 'none';
//     },

//     render(target, content, attributes) {
//         for (const key in attributes) {
//             target.setAttribute(key, attributes[key]);
//         }
//         target.innerHTML = content;
//     }
// };

//Game Object


// const game = {
//     start(quiz) {
//         view.hide(view.start);
//         this.questions = [...quiz];
//         this.score = 0;

//         for (const question of this.questions) {
//             this.question = question;
//             this.ask();
//         }
//         this.gameOver();
//     },
//     ask() {
//         const question = `What is ${this.question.name}'s real name ?`;
//         view.render(view.question, question);
//         const response = prompt(question);
//         this.check(response);
//     },
//     check(response) {
//         const answer = this.question.realName;
//         if (response === answer) {
//             view.render(view.result, 'Correct!', { 'class': 'correct' });
//             alert('Correct!');
//             this.score++;
//             view.render(view.score, this.score);
//         } else {
//             view.render(view.result, `Wrong! The correct answer was ${answer}`);
//         }
//     },
//     gameOver() {
//         view.show(view.start);
//         view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`)
//     }
// }

// view.start.addEventListener('click', () =>
//     game.start(quiz), false);



//Chapter 8

