'use strict'
/*Es5*/
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    console.log(this.price = this.price * 0.75);
}

let product1 = new Product("tea", 440);
product1.make25PercentDiscount();
console.log(product1);

/*Es6*/

class Preduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * 0.75;
        console.log(this);
    }
}

let preduct1 = new Preduct("tea", 440);
preduct1.make25PercentDiscount();

/* Наследование */
/*ES5*/
function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {

    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let post1 = new AttachedPost("Assylzhan", "awesom", 2002);
post1.edit("grate");
post1.makeTextHighlighted ("true");

/*ES6*/

class Mail {
    constructor( author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedMail extends Mail {
    constructor(author, text, date) {
       super ( author, text, date);
       this.highlighted = false;
    }

    makeTextHighlighted () {
        this.highlighted = true;
    }
}

let mail1 = new AttachedMail("Assylzhan", "awesom", 2002);
mail1.edit("grate");
mail1.makeTextHighlighted ("true");