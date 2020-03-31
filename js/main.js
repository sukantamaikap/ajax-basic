var request = new XMLHttpRequest(), data;
request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
request.onload = function() {
    data = request.responseText;
    console.log(data);
};

request.send();