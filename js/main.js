var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    var request = new XMLHttpRequest(), data;
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    request.onload = function() {
        data = JSON.parse(request.responseText);
        console.log(data[0]);
    };
request.send();
});
