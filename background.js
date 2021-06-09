//Liten for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name == "fetchWords"){

        const apiKey = "kl0tfda6h1bl6z4r206csv205ugh2jip3cxx7k2os0g00gx39";
        const datestr = new Date().toISOString().slice(0,10); //2021-05-20
        console.log(datestr);
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+datestr+'&'+'api_key='+apiKey;
        //we call api...
        //response({api: apiCall, date: datestr});
        fetch(apiCall).then(function(res){
            //wait for response...
            if(res.response==200){
                response({word: 'Error', desc: 'There was a problem loading the word of the day!!!'});
                return;
            }
            res.json().then(function(data){
                //send the response...
                response({word: data.word, desc: data.note});
            });
            }).catch(function(err){
                response({word: 'Error', desc: 'There was a problem loading the word of the day!'});
        });
        
    }
    return true;
});