var p = document.getElementById('fechaIngreso');
var mydate = new Date();
var day = mydate.getDay();
var month = mydate.getMonth();
var year = mydate.getYear() + 1900;
var d = mydate.getDate();
var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10","11","12"];
p.innerHTML = d + "/" + months[month] + "/" + year;