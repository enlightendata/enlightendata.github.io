$.ajax({
        async: true,
        type: "GET",
        url: "http://cors.io/?https://www.bitstamp.net/api/ticker/",
        success: function(result) {
          data = result.last;
          document.getElementById("btc").innerHTML = data;
          }
});
