const quotes = [
    {
        quote:"I never dreamed about success, I worked for it.",
        quote_kr:"(나는결코 성공에 대해 꿈꾸지 않는다. 나는 꿈을 위해 행동했다.)",
        auther:"- Estee Lauder -"
    },
    {
        quote:"Do not try to be original, just try to be good.",
        quote_kr:"(독특한 사람이 되려하지 말아라. 좋은 사람이 되도록 해라!)",
        auther:"- Paul Rand -"
    },
    {
        quote:"Do not be afraid to give up the good to go for the great",
        quote_kr:"(더 좋은것을 쫓기 위해 좋은 것을 버리는 것을 두려워 하지 마라!)",
        auther:"- John D.Rockefeller -"
    },
    {
        quote:"Some people dream of success, while other people get up every morning and male it happen.",
        quote_kr:"(성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다.)",
        auther:"- Wayne Huizenga -"
    },
]

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");
const kr = document.querySelector("#quote span:nth-child(2)")
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;
kr.innerText = todaysQuote.quote_kr;