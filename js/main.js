var pageCount = 1;
var container = document.getElementById('animal-info');

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var request = new XMLHttpRequest(), data;
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCount + '.json');
    request.onload = function() {
        data = JSON.parse(request.responseText);
        renderHTML(data);
    };
request.send();
pageCount++;

if(pageCount > 3) {
    btn.classList.add("hide-me");
}
});


function renderHTML(data) {
    // add html to empty div element
    var htmlString = '', i = 0;
    for (; i < data.length; i++) {
        htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + '</p>';
    }
     container.insertAdjacentHTML('beforeend', htmlString);
}