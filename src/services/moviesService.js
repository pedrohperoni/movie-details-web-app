import axios from "axios";

export async function getMovieDetails(movieName){
    const apiKey = process.env.OMDB_API_KEY;
    const apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`

    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error){
        throw new Error('Failed to fetch movie data')
    }
}