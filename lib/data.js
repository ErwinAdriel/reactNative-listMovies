/*const API = "https://api.themoviedb.org/3/discover/movie?api_key=78e863d958fed3f6f359c6897586866c";

export async function getMovies(){
    return await fetch(API).then((res) => res.json());
}*/

export async function getMovies(){

    const API = "https://api.themoviedb.org/3/movie/now_playing?api_key=78e863d958fed3f6f359c6897586866c";

    const rawData = await fetch(API);

    const json = await rawData.json();

    const { results } = json;

    return results.map((movie) => {
        const { id, original_title, original_language, vote_average, overview, release_date, poster_path} = movie;

        //Creo la imagen
        const img = `https://image.tmdb.org/t/p/w200/${poster_path}`;

        return {
            id,
            original_title,
            original_language,
            vote_average,
            overview,
            release_date,
            poster_path: img,
        };
    });
}



