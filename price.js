
function getBTCPrice() {
        $.ajax({
                async: true,
                type: "GET",
                     url: "https://api.coindesk.com/v1/bpi/currentprice.json",
                success: function(result) {
                        var btcData = JSON.parse(result);
                        var btcPrice = parseFloat(btcData.bpi.USD.rate.replace(",","")).toFixed(0);
                        var content = 'The latest Bitcoin price is: $'.concat(btcPrice);
                        document.getElementById("btc").innerHTML = content;

                        responsiveVoice.speak(content, "UK English Female");
                        responsiveVoice.speak("hashtag pyramid scheme", "UK English Male", {volume: 0.5});
                
                        var btn = document.getElementById("btn");
                        btn.style.display === "block";
        });
}
