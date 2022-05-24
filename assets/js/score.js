var clearBtn = document.getElementById("clear");

var getScores = function() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {

        return b.score - a.score;

    });

    highscores.forEach(function(score) {

        var listItem = document.createElement("li");
        listItem.textContent = score.initials + ": " + score.score;
        var list = document.querySelector("#highscore-list");
        list.appendChild(listItem);

    });
};

var clearScores = function() {

    window.localStorage.removeItem("highscores");
    window.location.reload();
    
}

clearBtn.onclick = clearScores;

getScores();