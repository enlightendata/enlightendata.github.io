$.ajax({
        async: true,
        type: "GET",
             url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        success: function(result) {
          btcData = JSON.parse(result);
          btcPrice = parseFloat(btcData.bpi.USD.rate.replace(",","")).toFixed(2);
          document.getElementById("btc").innerHTML = 'The latest BitCoin price is: $'.concat(btcPrice);
                
          responsiveVoice.speak("The latest Bitcoin price is ".concat(btcPrice), "UK English Female");
               
          responsiveVoice.speak("hashtag pyramid scheme", "UK English Male", {volume: 0.5});
                
          }
});

function listenAgain() {
          responsiveVoice.speak(document.getElementById("btc").innerHTML, "US English Female");
              
          responsiveVoice.speak("hashtag pyramid scheme", "US English Male", {volume: 0.5});
       
}
