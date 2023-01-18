function generateSternSeries() {
  var n = parseInt(document.getElementById("input").value);
  if (n < 0 || n > 100) {
    alert("Please enter a number between 0 and 100.");
    return;
  }
  var series = "";
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    series += "1/" + i + " + ";
    sum += 1/i;
  }
  document.getElementById("output").innerHTML = series.slice(0, -3);
  document.getElementById("sum").innerHTML = "Sum: " + sum.toFixed(2);
}
