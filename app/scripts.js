function monthDiff(dateFrom, dateTo) {
  var months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
  months -= dateFrom.getMonth();
  months += dateTo.getMonth() + 1;
  console.log(dateTo.getFullYear(), dateTo.getMonth(), dateTo.getDate());

  return months <= 0 ? 0 : months;
}

window.onload = function() {
  var startDate = new Date(2022, 9, 1);
  var now = new Date();

  var fullMonths = monthDiff(startDate, now).toString();

  document.getElementById("university-period").innerText = "(" + startDate.getMonth().toString() + ", " + startDate.getFullYear().toString() + "-...), " + fullMonths + " months";
  startDate = new Date(2023, 11, 1);
  fullMonths = monthDiff(startDate, now).toString();
  document.getElementById("job1-period").innerText = "(" + startDate.getMonth().toString() + ", " + startDate.getFullYear().toString() + "-...), " + fullMonths + " months";
};
