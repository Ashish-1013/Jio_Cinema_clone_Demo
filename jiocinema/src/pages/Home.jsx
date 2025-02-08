import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import Channels from "../components/channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Shows from "../components/shows/Shows";
import Tags from "../components/tags/Tags";
import Spotlight from "../components/spotlight/Spotlight";

export default function Home()
{

    let [movies,setMovies] = useState([]);
    let [featuredMovies,setFeaturedMovies] = useState([])
    let [dramaMovies,setDramaMovies] = useState([])
    let [hindiMovies,setHindiMovies] = useState([])
    let [topMovies,setTopMovies] = useState([])
    let [japaneseMovies,setJapaneseMovies]=useState([])

    useEffect(async ()=>{

        try 
        {
            let movieResponse  = await fetch("http://localhost:3000/movies");
            let moviesData = await movieResponse.json();

            setMovies(moviesData);

            // filter for featured movies 
            let featMovies = moviesData.filter((movie)=>{return movie.featured===true})
            setFeaturedMovies(featMovies.slice(0,4))

            // filter for drama movies 
            let draMovies = moviesData.filter((movie)=>{return movie.genre.includes("Drama")})
            setDramaMovies(draMovies.slice(0,6))

             // filter for hindi movies 
            let hinMovies = moviesData.filter((movie)=>{return movie.language==="Hindi"})
            setHindiMovies(hinMovies.slice(0,6))

            let topRatedMovies = moviesData.filter((movie)=>{return movie.imdb>=8.5})
            setTopMovies(topRatedMovies.slice(0,6))

            let japanMovies = moviesData.filter((movie)=>{return movie.country==="Japan"})
            setJapaneseMovies(japanMovies.slice(0,6))

            
        }
        catch(err)
        {
            console.log(err);
        }

    },[])


    return (
        <>
            <Header movies = {movies}/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Spotlight/>
            <Featured movies={featuredMovies}/>

            <Shows title="Drama Movies" movies={dramaMovies}/>
            <Shows title="Hindi Language Movies" movies={hindiMovies}/>
            <Shows title="Highly Rated Movies" movies={topMovies}/>
            {/* <Shows title="Japaneses Movies" movies={japaneseMovies}/> */}
        </>
    )
}