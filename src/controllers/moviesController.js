import { getMovieDetails } from "../services/moviesService.js";

export async function searchMovie(req, res){
    const movieName = req.query.movieName
    console.log(movieName)

    try{
        const movie = await getMovieDetails(movieName)
        if(!movie || movie.Response == 'False'){
            res.render('index', {movie:null, error: 'Movie not found, try another movie'})
        } else {
            res.render('index', {movie: movie, error : null})
        }
    } catch (error) {
        res.render('index', { movie: null, error: 'Error fetching movie data' });
    }
}
