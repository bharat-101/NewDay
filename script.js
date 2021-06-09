//send message to background
chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {
    //wait for response

    
    console.log(response);

    document.querySelector('h1').innerHTML = response.word;
    document.querySelector('p').innerHTML = response.desc;
})
