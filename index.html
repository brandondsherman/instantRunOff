# Instant run off

Instant run-off or ranked choice voting is a different way for an election to be held.

In America our current system is called first past the post. This means that the person that gets the majority of the votes wins. You might think that this is the obvious way to hold an election, but it has a lot of shortcomings when it comes to an election with more than two choices. Essentially these flaws boil down to two major flaws. 

* Any vote not cast for one of the top two candidates is a waste. 
* It leads to strategic voting where you vote for candidate 2 just because you hate candidate 1 and not because you think candidate 2 is the best choice.

The 2016 main party candidates had the lowest favorability ratings of all time so it's likely that a lot of voters voted strategically. This isn't a particularly satisfying way to vote and has left many wanting.

Instant run-off voting lets you rank the candidates in your preferred order as your vote. Like this.

1. Harry Johnson
2. Hillary Duff
3. Frank N. Stein
4. HaramBAE
5. Donald Glover

For this vote, the voter wants Harry Johnson to be the president the most. The second most preferred candidate is Hillary Duff and so on.

The way that a winner is chosen follows this:

a. Tally all of the ranked 1st voters
b. Does a candidate have 50% or more of these votes? If yes, that candidate wins.
c. If no, find the candidate with the least votes
d. All votes at any rank with that candidate are removed and the rest of the candidates are moved up in rank. (If Harry Johnson had the least amount of votes in the above ballot the new order would be 1. Hillary Duff 2. Frank N. Stein, 3. HaramBAE, 4. Donald Glover).
e. Go back to step a.

Instant run-off voting has many advantages. It's textbook criticism is that it's too complicated and the voters won't be able to understand this. While finding the winner is significantly more complicated than first past the post elections, you can still cast a vote in this method without fully understanding this. How hard is it to explain to someone to list the candidates in order?

In Maine's 2016 election they had a question on the ballot to convert their electoral system to instant run-off. Hopefully future successful elections in Maine will inspire more states to switch too!

Below is a demonstration of an instant run-off election to help visualize the process.


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

  