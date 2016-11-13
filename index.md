# Instant run off


<body>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="handleData.js"></script>
  <script type="text/javascript">
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var votes = $.get("data/votes.csv",function(data){
        var arr = data.split("\n");
        arr = arr.map(function(x){ return x.split(",")})
        arr = arr.map(function(x){ return x.slice(1,x.length)})
        console.log(arr);
        //debugger
        findCounts(arr);
        dataTable = makeDataTable()
        var data = google.visualization.arrayToDataTable(dataTable);
              

        var view = new google.visualization.DataView(data);
        var options = {
        width: 700,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);

        $("#runoff").on("click",function(memes){
          doRunoff(arr);
          dataTable = makeDataTable()
          var data = google.visualization.arrayToDataTable(dataTable);
              
g
          var view = new google.visualization.DataView(data);
          var options = {
          width: 700,
          height: 400,
          legend: { position: 'top', maxLines: 3 },
          bar: { groupWidth: '75%' },
          isStacked: true,
          };
          var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
          chart.draw(view, options);

        })
      });
  }
  </script>
  <input type="button" id="runoff" name="dorunoff" value="DO A RUN OFF FAM"></input>
<div id="columnchart_values" style="width: 900px; height: 300px;"></div>
</body>

  