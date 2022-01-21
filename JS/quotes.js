const quotes = [
    {
        quote: "A",
        author: "a"
    },
    {
        quote: "B",
        author: "b"
    },
    {
        quote: "C",
        author: "c"
    },
    {
        quote: "D",
        author: "d"
    },
    {
        quote: "E",
        author: "e"
    },
    {
        quote: "F",
        author: "f"
    },
    {
        quote: "G",
        author: "g"
    },
    {
        quote: "H",
        author: "h"
    },
    {
        quote: "I",
        author: "i"
    },
    {
        quote: "J",
        author: "j"
    },
    {
        quote: "K",
        author: "k"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;