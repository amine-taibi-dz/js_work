console.log("app.js");
var num0 = 1;
var numObj = new Number('123'); //Number object
var num = numObj.valueOf();//number primitive
var numStr = numObj.toString();//string representation

var str = 'some string';
var newStr = "abcde".substr(1, 2);
console.log(newStr);

var strObj0 = new String("abcde aab Ab"); //String object
var str0 = strObj0.valueOf(); //string primitive
console.log(strObj0.match(/ab/g));
console.log(str0.match(/ab/ig)); //both call will work

var pattern = /[A-Z]+/g;
console.log('ab'.match(pattern));// null
console.log('AB'.match(pattern)); // ["AB"]


var str02 = 'A';
var pattern02 = /[A-Z]+/;
console.log(pattern02.test(str02));// true


var obj00 = JSON.parse('{"a": 1, "b": "hi"}');
console.dir(obj00);
var stringObj00 = JSON.stringify({ a: 1, b: 'hi' });
console.dir(stringObj00);

var arr00 = new Array();
var arr01 = ['apple', 'orange', 'kiwi'];
console.dir(arr00);
console.dir(arr01);
console.log(arr01);

var obj00 = { name: 'Gala', url: 'img/gala100x100.jpg', price: 129 };
console.dir(obj00);
console.log(obj00);
var obj01 = new Object();
console.log(obj01);

var bool1 = true;
var bool2 = false;
var boolObj = new Boolean(1 === "1");
console.dir([bool1, bool2, boolObj]);

var timestamp = Date.now();
var d = new Date();
console.log(timestamp, d);

var x = Math.floor(3.4890);
var ran = Math.round(Math.random() * 100);
console.log(x, ran);

//window.location.href = 'http://rapidprototypingwithjs.com'
console.log(window.location.href);

var transactionsContainer = document.createElement('div');
transactionsContainer.setAttribute('id', 'main1');
var content = document.createTextNode('Transactions');
transactionsContainer.appendChild(content);
document.body.appendChild(transactionsContainer);
var main = document.getElementById('main1');
console.log(main, main.offsetWidth, main.offsetHeight);

let uri = encodeURI('http://www.webapplog.com/js is awesome');
console.log(uri);
console.log(decodeURI(uri));
console.log(isNaN(uri));
console.log(isNaN(10));
console.log(isNaN(-10e1));
console.log(!isNaN(0b100));
console.log(!isNaN(0o777));
console.log(!isNaN(0xFFF));
try {
    throw new Error('This book rocks!');
} catch (error) {
    console.error(error.name);
}


function Sum(a, b) {
    var sum = a + b;
    return sum;
}
console.log(Sum(1, 2));
var f = function (str1) {
    return function (str2) {
        return str1 + ' ' + str2;
    }
}
//tests
var a = f('hello');
var b = f('goodbye');
console.log(a('Catty'));
console.log(b('Doggy'));