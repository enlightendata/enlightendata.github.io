$.ajax({
        async: true,
        type: "GET",
        url: "https://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          btcData = JSON.parse(result);
          data = btcData.last;
          document.getElementById("btc").innerHTML = 'The latest BitCoin price is: $'.concat(data);
                
          responsiveVoice.speak("The latest Bitcoin price is ", "Russian Female");
          responsiveVoice.speak('$'.concat(data), "US English Female");
               
          responsiveVoice.speak("hashtag pyramid scheme", "US English Male", {volume: 0.5});
                
          }
});

function listenAgain() {
          responsiveVoice.speak(document.getElementById("btc").innerHTML, "US English Female");
              
          responsiveVoice.speak("hashtag pyramid scheme", "US English Male", {volume: 0.5});
       
}
