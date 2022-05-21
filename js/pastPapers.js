 
// var xhr = new XMLHttpRequest();
// // xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

var url ='https://lms.brightoninstitute-colombo.org/services/education/api/home/_search/release-paper-news?query=*'
var url2 ="https://lms.brightoninstitute-colombo.org/services/education/api/home/_search/release-paper-news?query="+pageType
xhr.open("GET", url);
xhr.setRequestHeader("Accept", "application/json");  
xhr.send();



// var settings = {
//   "url": "https://lms.brightoninstitute-colombo.org/services/education/api/home/_search/release-paper-news?query=*",
//   "method": "GET",
//   "timeout": 0,
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });


function setData(e, i) {
  var img = document.getElementById('img' + (i + 1))
  var head = document.getElementById('head' + (i + 1))
  var date = document.getElementById('date' + (i + 1))
  var des = document.getElementById('des' + (i + 1))


  img.src= e.thumbnail
  head.text= e.title
  date.text= e.createdDate
  des.text= e.description
   
}