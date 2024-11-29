//Advanced Labs

// function makeCounter() {
//     let currentCount = 0

//     return function() {
//         currentCount++
//         console.log(currentCount)
//         return currentCount
//     }
// }

// let counter1 = makeCounter()
// let counter2 = makeCounter()

// counter1()
// counter1()


// function makeCounter2(startFrom) {
//     let currentCount = startFrom

//     return function() {
//         currentCount ++
//         console.log(currentCount)
//         return currentCount
//     }
// }

// let counter3 = makeCounter2(45)

// counter3()
// counter3()


// function makeCounter3(startFrom, incrementBy) {
//     let currentCount = startFrom

//     return function() {
//         currentCount += incrementBy
//         console.log(currentCount)
//     }
// }

// let counter4 = makeCounter3(50, 5)

// counter4()
// counter4()



// function delayMsg(msg) {
//     console.log(`This message will be printed after a delay: ${msg} `)
// }

// const delayMsg = (msg) => console.log(`This message will be printed`)

// setTimeout(delayMsg, 3000, '#1: Delayed by 100ms')
// setTimeout(delayMsg, 2000, '#2: Delayed by 20ms')
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms')
// delayMsg( '#4: Not Delayed at all')

// let fifthTimer = setTimeout(delayMsg,10000, 'This will be the longest delay')

// clearTimeout(fifthTimer)

// function printMe() {
//     console.log('printing debounced message')
// }

// printMe = debounce(printMe)

// setTimeout( printMe, 100)
// setTimeout( printMe, 200)
// setTimeout( printMe, 300)


// function debounce(func) {
//     let Timeout

//     return function() {
//         clearTimeout(timeout)

//             timeout = setTimeout(func, 1000)
//     }
// }

// function debounce2(func, ms) {
//     let timeout
//     return function() {

//         clearTimeout(timeout)

//             timeout = setTimeout(func,ms)
// }
// }

// function printMe2(msg) {
//     console.log(`printing out debounced message c: ${msg}`)
// }

// printMe2 = debounce2(printMe2, 1500)

// setTimeout( printMe2, 100, 'msg #1')
// setTimeout( printMe2, 200, 'msg #2')
// setTimeout( printMe2, 300, 'msg #3')

// function debounce3(func, ms) {
//     let timeout

//     return function(msg) {
//         clearTimeout(timeout)
//         timeout = setTimeout(func, ms, msg)
// }
// }

// printMe()
// debounce2('hello')
// debounce3('hello')

// function printFibonacci() {
//     let first = 1
//     let second = 1

//     console.log(first)
//     console.log(second)

//     setInterval(function printFibonacci(){
//         let next = first + second
//         console.log(next)

//         first = second
//         second = next
//     }, 1000)

// }

// function printFibonacciTimeouts() {
//     let [first, second] = [1,1]
//     console.log(first)
//     console.log(second)

//     setTimeout(function printNext(first, second) {
//         let next = first + second
//         console.log(next)

//         setTimeout(printNext, 100, second, next)
//     }, 1000, first, second)

// }

// function printFibonaccilimit(limit) {
//     let first = 1
//     let second = 1

//     console.log(first)
//     console.log(second)

//     let counter = 3

//     let intervalRef = setInterval(function printnext(){
//         let next = first + second
//         console.log(next)

//         first = second
//         second = next
//         counter++

//         if (counter == limit) clearInterval(intervalRef)
//     },1000)
// }

// printFibonacci()
// printFibonacciTimeouts()
// printFibonaccilimit(4)

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,

//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`)
//     }
// }

// car.description()

// setTimeout(() => car.description(), 2000)

// setTimeout(car.description, 2000)

// car = {...car, year: 2024}

// let describeCar = car.description.bind(car)

// setTimeout(describeCar, 4000)

// car = {...car, year: 2025}

// function multiply(a, b){
//     console.log(a * b)
// }

// multiply.delay(500)(5, 5)

// function.prototype.delay = function(ms) {
//     let originalFunction = this
//     return function(arg1, arg2) {
//         setTimeout(originalFunction, ms, arg1, arg2)
//     }
// }

// multiply.delay(2000)(5, 5)

// Function.prototype.delay2 = function(ms) {
//     let originalFunction = this
//     return function() {
//         setTimeout(() => originalFunction.apply(this, arguments),ms)
//     }
// }

// function multiply4(a,b,c,d) {
//     console.log(a*b*c*d)
// }

// multiply.delay2(1000)(5,5,5,5)



// class DigitalClock {
//     constructor(prefix) {
//         this.prefix = prefix;
//         this.timer = null;
//     }

//     display() {
//         let date = new Date();

//         let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;
//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);   
//     }

//     stop() {
//         if (this.timer !== null) {
//             clearInterval(this.timer);
//             this.timer = null;
//         }
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.display(), 1000);
//     }
// }

// class PrecisionClock extends DigitalClock {
//     constructor(prefix, precision = 1000) {
//         super(prefix);
//         this.precision = precision;
//     }
    
//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), this.precision);
//     }
// }2

// class AlarmClock extends DigitalClock {
//     constructor(prefix, wakeTime = '07:00') {
//         super(prefix);
//         this.wakeupTime = wakeupTime;
//     }

//     checkDisplay() {
//         let now = new Date();
//         let [currentHours, currentMinutes] = [now.getHours(), now.getMinutes()];
//         let [wakeupHours, wakeupMinutes] = this.wakeupTime.split(':').map(Number);

//         if (currentHours === wakeupHours && currentMinutes === wakupMinutes) {
//             console.log('Wake Up!');
//             this.stop(); 
//         } else {
//             this.display();
//         }

//     }

//     start() {
//         this.timer = setInterval(() => {
//             this.checkDisplay();
//         }, 1000);
//     }
// }

// const myAlarmClock = new AlarmClock('my alarm clock:', '19:35');
// myAlarmClock start();

// function orderItem(...itemNames) {
//     return `Order placed for: ${itemNames.join(',')}`;
// }

// function validateStringArg(fn) {
//     return function (arg) {
//         if (typeof arg !== "string") {
//             throw new Error("Argument must be a string");
//         }
//         return fn(arg);
//     };
// }

// function validateStringArgs(fn) {
//     return function (...args) {
//         for (let arg of args) {
//             if (typeof arg !== "string") {
//                 throw new Error (`Argument ${arg} must be a string`);
//             }
//         }
//         return fn(...args);
//     };
// }

// const validateOrderItem = validateStringArg(orderItems);
// const validateOrderItems = validateStringArgs(orderItems);

// try {

//     console.log(validatedOrderItems("Apple Watch", "Airpods"));



//     console.log(validateOrderItems("Apple Wtch", "Airpods"));
//     console.log(validatedOrderItems("abc", 123));
// } catch (err) {
//     console.log(err.message);
// }



// function randomDelay() {
//     let delay = Math.ceil(Math.random() * 20);
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (delay % 2 ===0) {
//                 resolve(delay)
//             } else {
//                 reject(delay)
//             }
//         }, delay * 1000)
//     });
// }


// randomDelay()
// .then ((delay) => console.log(`Successful delay of ${delay} seconds`))
// .catch((delay) => console.log)

// import fetch from 'node-fetch'
// globalThis.fetch = fetch
// function fetchURLData(url) {
//     let fetchPromise = fetch(url).then(response => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error(`Request failed with status ${response.status}`);
//         }
//     });

//     return fetchPromise;
// }
// fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.error(error.message));