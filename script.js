let form = document.querySelector("#form");
let input = document.querySelector("#input");
let movieList = document.querySelector("#movieList");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const movieName = input.value.trim();
    if (!movieName) {
            return
    } else {
        searchMovie(movieName);
    }
    

})

async function searchMovie(movieName) {
    movieList.innerHTML = "Movie is getting searched..."
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=939e3f3e&s=${encodeURIComponent(movieName)}`)
    const data = await response.json()
    console.log(data);
    if (data.Response==="True") {
        displayMovies(data.Search)
    } else {
        movieList.innerHTML = ""
        const p = document.createElement("p");
        p.innerHTML = "Movie Not Found";
        movieList.append(p)
    }
    

}

function displayMovies(data) {
    movieList.innerHTML = ""
    data.forEach((movie)=>{
        let div = document.createElement("div");
        div.className = "movieCard";
        div.dataset.id = movie.imdbID
    div.innerHTML = `
    <div>
            <img src=${movie.Poster} alt="">
        </div>
        <div>
            <p>Title : ${movie.Title}</p>
        </div>
        <div>
            <p>Year : ${movie.Year}</p>
        </div>`
    movieList.append(div) 
    })   
}


movieList.addEventListener("click",(e)=>{
    e.stopPropagation();
    let id = e.target.closest(".movieCard").dataset.id;
    location.href = `movieDetails.html?id=${id}`
    console.log(id);
})