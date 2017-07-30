const config = require('./config.js').config;

function appendDataToView(data) {
    clearList();
    createSummaryText(data)

    data.results.forEach(function (value) {
        let element = document.createElement('p');
        let text = document.createTextNode(value.original_title);
        let icon =  new Image(120, 120);
        if (value.poster_path) {
            icon.src = config.posterPath + value.poster_path;
            element.appendChild(icon);
        }
        element.appendChild(text);
        document.getElementById('result-list').appendChild(element);
    })
};

function createSummaryText(data) {
    let summary = document.createElement('div');
    let text = document.createTextNode('Showing ' + data.results.length + ' of total ' + data.total_results);
    summary.appendChild(text);
    document.getElementById('result-info').appendChild(summary);
}

function clearList() {
    let list = document.getElementById('result-list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    let summary = document.getElementById('result-info');
    summary.removeChild(summary.firstChild);
};

exports.appendList = appendDataToView;