const config = require('./config.js').config;

function appendDataToView(data) {
    clearList();
    createSummaryText(data)

    data.results.forEach(function (value) {
        let element = document.createElement('p');
        element.className = 'movie';
        createIcon(element, value);
        createTitle(element, value);
        createGradeInfo(element, value);
        element.addEventListener('click', function() {
            window.open(config.moviePath + value.id, '_blank');
        });

        document.getElementById('result-list').appendChild(element);
    })
};

function createTitle(element, movie) {  
    let title = document.createElement('div');
    title.className = 'movie-title';
    let text = document.createTextNode(movie.original_title);
    title.appendChild(text);
    element.appendChild(title);
}

function createGradeInfo(element, movie) {  
    let grade = document.createElement('div');
    grade.className = 'movie-grade';
    let text = document.createTextNode(movie.vote_average + '/10 (' + movie.vote_count + ' votes in total)');
    grade.appendChild(text);
    element.appendChild(grade);
}

function createIcon(element, movie) {
    let icon = new Image(120, 120);
    if (movie.poster_path) {
        icon.src = config.posterPath + movie.poster_path;
    }
    element.appendChild(icon);
}

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

function showError(errorObj) {
    let error = document.createElement('div');
    let text = document.createTextNode('Error(s) occurred during search.');
    error.appendChild(text);
    document.getElementById('result-info').appendChild(error);

    errorObj.errors.forEach(function (value) {
        let errorElement = document.createElement('p');
        let text = document.createTextNode(value);
        errorElement.className += 'text-danger';

        errorElement.appendChild(text);
        document.getElementById('result-list').appendChild(errorElement);
    });
};

exports.appendList = appendDataToView;
exports.appendError = showError;