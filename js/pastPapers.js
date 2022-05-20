// WARNING: For GET requests, body is set to null by browsers.

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    var array = JSON.parse(this.responseText)
    array.array.forEach((e, i) => {
    });
  }
});

// setData(e, 1)


xhr.open("GET", "https://lms.brightoninstitute-colombo.org:8881/services/education/api/home/_search/release-paper-news?query=(pageType:" + pageType + ")");
 

xhr.send();

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