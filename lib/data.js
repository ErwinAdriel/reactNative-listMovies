/*const API = "https://api.themoviedb.org/3/discover/movie?api_key=78e863d958fed3f6f359c6897586866c";

export async function getMovies(){
    return await fetch(API).then((res) => res.json());
}*/

export async function getMovies(){

    const API = "https://api.themoviedb.org/3/discover/movie?api_key=78e863d958fed3f6f359c6897586866c";

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

export async function getMovieById(id){

    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=78e863d958fed3f6f359c6897586866c`;

    const rawData = await fetch(API);

    const json = await rawData.json();

    const { original_title, original_language, vote_average, overview, runtime, release_date, backdrop_path, genres } = json;

    //Creo la imagen
    const img = `https://image.tmdb.org/t/p/w200/${backdrop_path}`;

    //Obtengo info de generos
    const genero = json.genres.map((genre) => {
        const {id, name } = genre;

        return{
            id,
            name,
        };
    });
    
    return{
        original_title,
        original_language,
        vote_average, 
        overview, 
        runtime, 
        release_date, 
        backdrop_path: img,
        genres: genero,
    };


}

export async function getTvs(){

    const API = "https://api.themoviedb.org/3/discover/tv?api_key=78e863d958fed3f6f359c6897586866c";

    const rawData = await fetch(API);

    const json = await rawData.json();

    const { results } = json;

    return results.map((tv) => {
        const { id, original_name, original_language, vote_average, overview, first_air_date, poster_path} = tv;

        //Creo la imagen
        const img = `https://image.tmdb.org/t/p/w200/${poster_path}`;

        return {
            id,
            original_name,
            original_language,
            vote_average,
            overview,
            first_air_date,
            poster_path: img,
        };
    });

}
