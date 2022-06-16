const quotes = [
    {
        quote:"No bread eaten by man is so sweet as that earned by his own labor.",
        auther:"seohyun"
    },
    {
        quote:"if you do not walk today, you'll have to run tomorrow.",
        auther:"Anonymous"
    },
    {
        quote:"I'll prepare, and some day my chance will come.",
        auther:"Abraham Lincoln"
    }
]

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;