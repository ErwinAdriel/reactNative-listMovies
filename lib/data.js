const API = "https://api.themoviedb.org/3/discover/movie?api_key=78e863d958fed3f6f359c6897586866c";

export async function getMovies(){
    return await fetch(API).then((res) => res.json());
}