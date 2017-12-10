$.ajax({
        async: true,
        type: "GET",
        url: "https://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          btcData = JSON.parse(result);
          data = btcData.last;
          document.getElementById("btc").innerHTML = '$'.concat(data);
                
          responsiveVoice.speak("Bitcoin is now at ", "Romanian Male");
          responsiveVoice.speak('$'.concat(data), "US English Male");
          }
});
