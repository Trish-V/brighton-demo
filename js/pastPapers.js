

document.addEventListener("DOMContentLoaded", function (event) {
  [1, 2, 3, 4, 5, 6, 7].forEach(e => {
    document.getElementById('blog' + e).style.display = 'none'
  })

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(JSON.parse(this.responseText));
      JSON.parse(this.responseText).forEach((element, i) => {
        setData(element, i)
      });
    }
  });

  xhr.open("GET", "https://brightoninstitute-colombo.org/php/courses.php?query=(pageType:" + pageType + ")");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
});




function setData(e, i) {
  document.getElementById('blog' + i).style.display = 'block'

  var img = document.getElementById('img' + (i + 1))
  var head = document.getElementById('head' + (i + 1))
  var date = document.getElementById('date' + (i + 1))
  var des = document.getElementById('des' + (i + 1))


  img.src = 'data:image/jpeg;base64,' + e.thumbnail
  head.text = 'Download : ' + e.title
  head.href = ''
  date.text = e.createdDate
  des.innerHTML = e.description

}