google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
  var spreadsheetId = "1uGopZFDGGgWaSM70kXzdqGVbd6_tmFcaTfYJpwRFONs";
  var range = "qtys_by_regions!A1:C5";

  var query = new google.visualization.Query(
    "https://docs.google.com/spreadsheets/d/" +
      spreadsheetId +
      "/gviz/tq?gid=0&range=" +
      range
  );
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    console.error("Error: " + response.getMessage());
    return;
  }

  var data = response.getDataTable();
  drawCharts(data);
}

function drawCharts(data) {
  var options = {
    title: "Grafik Ketersediaan Kategori Makanan di Berbagai Wilayah",
    width: 450,
    height: 300,
  };

  var options_bar = {
    title: "Grafik Ketersediaan Kategori Makanan di Berbagai Wilayah",
    width: 1600,
    height: 800,
  };

  var chart1 = new google.visualization.ColumnChart(
    document.getElementById("chart1")
  );
  chart1.draw(data, options_bar);

  var chart2 = new google.visualization.PieChart(
    document.getElementById("chart2")
  );
  chart2.draw(data, options);

  var chart3 = new google.visualization.PieChart(
    document.getElementById("chart3")
  );
  chart3.draw(data, options);

  var chart4 = new google.visualization.ScatterChart(
    document.getElementById("chart4")
  );
  chart4.draw(data, options);

  // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}
