$.ajax({
        async: true,
        type: "GET",
        url: "https://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          btcData = JSON.parse(result);
          data = btcData.last;
          document.getElementById("btc").innerHTML = 'Latest BitCoin price is: $'.concat(data);
                
          responsiveVoice.speak("Bitcoin is now at ", "Russian Female");
          responsiveVoice.speak('$'.concat(data), "US English Female");
                
                
          var voicelist = responsiveVoice.getVoices();     
                
          responsiveVoice.speak("hashtag pyramid scheme", "Latvian Male", {volume: 0.5});
                
          }
});
