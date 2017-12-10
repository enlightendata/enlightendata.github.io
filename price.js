$.ajax({
        async: true,
        type: "GET",
        url: "https://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          btcData = JSON.parse(result);
          data = btc.last;
          document.getElementById("btc").innerHTML = data;
          }
});
