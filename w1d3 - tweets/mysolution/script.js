let jsonUrl = "https://kea-alt-del.dk/twitter/api/?count=50/hashtag=kea";

let tweets = [];

let display = document.querySelector("section");
let template = document.querySelector("template");

document.addEventListener("DOMContentLoaded", hentJson);

async function hentJson() {
  let dataJson = await fetch(jsonUrl);

  tweets = await dataJson.json();
  tweets = tweets.statuses;
  console.log(tweets);
  showTweets();
}

function showTweets() {
  tweets.forEach(tweet => {
    console.log(tweet);

    let klon = template.cloneNode(true).content;

    console.log(klon);

    klon.querySelector("p").innerHTML = tweet.text;
    display.appendChild(klon);
  });
}
