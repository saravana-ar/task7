var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload=function(){
  var arr = JSON.parse(request.response);
  var result = arr.filter((ele)=>ele.population<200000);
  console.log(result);
}