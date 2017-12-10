$.ajax({
        async: true,
        type: "GET",
        url: "https://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          btcData = JSON.parse(result);
          data = btcData.last;
          document.getElementById("btc").innerHTML = '$'.concat(data);
                
          var msg = new SpeechSynthesisUtterance('Hello World');
window.speechSynthesis.speak(msg);
//           responsiveVoice.speak("Bitcoin is now at " + '$'.concat(data), "Romanian Male");
          }
});


speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :'');
});
