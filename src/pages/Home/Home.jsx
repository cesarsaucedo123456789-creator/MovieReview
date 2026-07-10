import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import SearchBar from "../../components/SearchBar/SearchBar";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";

import movies from "../../data/movies";

export default function Home(){

    return(

        <Layout>

            <Hero />

            <SearchBar />

            <SectionTitle
                title="🔥 Tendencias"
            />

            <MovieCarousel
                movies={movies}
            />

            <SectionTitle
                title="⭐ Mejor valoradas"
            />

            <MovieCarousel
                movies={movies}
            />

            <SectionTitle
                title="🎬 Estrenos"
            />

            <MovieCarousel
                movies={movies}
            />

        </Layout>

    );
}
