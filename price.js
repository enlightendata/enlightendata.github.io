$.ajax({
        async: true,
        type: "GET",
        url: "https://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          btcData = JSON.parse(result);
          data = parseInt(btcData.last);
          document.getElementById("btc").innerHTML = data;
          }
});
