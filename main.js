// Get access to all the items that need 
let user=document.querySelector(".userName");
let tweet=document.querySelector(".tweett");
let submit =document.querySelector(".submit");
let tweetsDiv = document.querySelector(".tweetss");
let arrayOfTweets=[];
submit.onclick=function(){
    if (user.value !== "" && tweet.value !== ""){
        const tweets={
        userName:user.value,
        Tweet:tweet.value,
    }
    arrayOfTweets.push(tweets);
    console.log(arrayOfTweets);
    let div=document.createElement("div");
    div.className="UserAndTweet";                                        
    let divUser=document.createElement("div")
    let myTextUser=document.createTextNode(tweets.userName);
    let divTweet=document.createElement("div");
    let myTextTwwet=document.createTextNode(tweets.Tweet);
    divUser.appendChild(myTextUser);
    divTweet.appendChild(myTextTwwet);
    div.appendChild(divUser);
    div.appendChild(divTweet)
    //tweetsDiv.appendChild(div);                         هنحطو بالاخر عشان 2 سبان 
    let divIcon=document.createElement("div");
    let span = document.createElement("span");
    span.className="likee";
    let span2=document.createElement("span");
    span2.className="ReTweet";                               //هنجرب هنا
    let spanText=document.createTextNode("Like");
    let spanTextR=document.createTextNode("Retweet");
    span.appendChild(spanText);
    span2.appendChild(spanTextR);
    divIcon.appendChild(span);
    divIcon.appendChild(span2);
    div.appendChild(divIcon);
    tweetsDiv.appendChild(div);                               
    // ------------------------ Tring to save in local storge ----------------------- //
   // ------------------------------------------------------------------------------ //
localStorage.setItem('TWEETS', JSON.stringify(tweets));
var Object = localStorage.getItem('TWEETS');
console.log('Obj: ', JSON.parse(Object));
    user.value = ""; 
    tweet.value ="";
    }
}
    // ------------------------ EventListener to change color ----------------------- //
   // ------------------------------------------------------------------------------ //
document.addEventListener("click" ,function(e){
    if(e.target.className==="likee"){
        e.target.parentElement.parentElement.style.color="red";
    }
});
    // ------------------------ EventListener to clone divTweet----------------------- //
   // ------------------------------------------------------------------------------ //
document.addEventListener("click" ,function(e){
    if(e.target.className==="ReTweet"){
        //console.log(e.target.parentElement.parentElement.parentElement);
        let n=e.target.parentElement.parentElement.cloneNode(true);
        n.className="nn";
        tweetsDiv.prepend(n);
    }
});