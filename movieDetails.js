const movieDetail = document.querySelector("#movieDetail")

const params = new URLSearchParams(location.search);
const id = params.get("id");
console.log(id);
searchMovies(id);

async function searchMovies(id) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=939e3f3e&i=${id}&plot=full`)
    const data = await response.json()
    if(data.Response==="True"){
        displayDetails(data)
        console.log(data);
    }
}

function displayDetails(data) {
    movieDetail.innerHTML = `
      <div>
            <img src=${data.Poster} alt="">
        </div>

        <div>
            <p>${data.Title}</p>
            <div>
                <p>${data.Year}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>${data.Genre}</p>
                <p>${data.imdbRating}/10</p>
            </div>
            <p>Plot Overview</p>
            <p>${data.Plot}</p>
            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>
            <div>
                <p>Actors</p>
                <p>${data.Actors}</p>
            </div>
            <div>
                <section>
                    <p>Languages</p>
                    <p${data.Language}</p>
                </section>
                <section>
                    <p>Country</p>
                    <p>${data.Country}</p>
                </section>
            </div>
            <button><a href=https://www.imdb.com/title/${id} target="blank" >View on IMDb</a></button>

        </div>`
}