$(document).ready(function () {
    $("#search").click(
        function () {
            var divResults = document.getElementById('searchResults');
            while (divResults.firstChild) {
                divResults.removeChild(divResults.firstChild);
            };
            var response = $.ajax({
                type: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                data: { 'api_key': '9dee7d7081b8f982ccbb7663750267d6', 'query': document.getElementById("inputFilm").value },

                success: function (data) {
                    data.results.forEach(function (item) {
                        let divTitle = divResults.appendChild(document.createElement("div"));
                        divTitle.innerHTML = item.title;
                        divTitle.setAttribute("id", "title");

                        let language = divTitle.appendChild(document.createElement("div"));
                        language.innerHTML = "Language: " + item.original_language;
                        language.setAttribute("id", "language");

                        let releaseDate = divTitle.appendChild(document.createElement("div"));
                        releaseDate.innerHTML = "Release Date: " + item.release_date;
                        releaseDate.setAttribute("id", "releaseDate");

                        let voteAverage = divTitle.appendChild(document.createElement("div"));
                        voteAverage.innerHTML = "Rating: " + item.vote_average;
                        voteAverage.setAttribute("id", "voteAverage");

                        let voteCount = divTitle.appendChild(document.createElement("div"));
                        voteCount.innerHTML = "Number of votes: " + item.vote_count;
                        voteCount.setAttribute("id", "voteCount");

                        let overview = divTitle.appendChild(document.createElement("div"));
                        overview.innerHTML = "Overview: " + "\n" + item.overview;
                        overview.setAttribute("id", "overview");
                    });
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    );

    $("#clean").click(
        function () {
            var searchResults = document.getElementById('searchResults');
            while (searchResults.firstChild) {
                searchResults.removeChild(searchResults.firstChild);
            };
            document.getElementById('inputFilm').value = '';
        }
    )
})