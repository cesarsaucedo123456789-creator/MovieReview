import interstellar from "../assets/posters/interstellar.jpg";
import dune from "../assets/posters/dune.jpg";
import batman from "../assets/posters/batman.jpg";
import oppenheimer from "../assets/posters/oppenheimer.jpg";

const movies = [

    {
        id: 1,
        title: "Interstellar",
        year: 2014,
        genre: ["Ciencia ficción", "Drama", "Aventura"],
        rating: 8.7,
        duration: "169 min",
        director: "Christopher Nolan",
        cast: [
            "Matthew McConaughey",
            "Anne Hathaway",
            "Jessica Chastain"
        ],
        featured: true,
        poster: interstellar,
        hero: interstellar,
        description:
          "Un grupo de astronautas viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad.",
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },

    {
        id: 2,
        title: "Dune",
        year: 2021,
        genre: ["Ciencia ficción", "Aventura"],
        rating: 8.2,
        duration: "155 min",
        director: "Denis Villeneuve",
        cast: [
            "Timothée Chalamet",
            "Zendaya",
            "Rebecca Ferguson"
        ],
        featured: true,
        poster: dune,
        hero: dune,
        description:
          "Paul Atreides debe enfrentar su destino en el planeta Arrakis mientras distintas casas luchan por controlar la especia más valiosa del universo.",
        trailer: "https://www.youtube.com/watch?v=8g18jFHCLXk"
    },

    {
        id: 3,
        title: "The Batman",
        year: 2022,
        genre: ["Acción", "Crimen", "Misterio"],
        rating: 8.0,
        duration: "176 min",
        director: "Matt Reeves",
        cast: [
            "Robert Pattinson",
            "Zoë Kravitz",
            "Paul Dano"
        ],
        featured: true,
        poster: batman,
        hero: batman,
        description:
          "Batman investiga una serie de asesinatos cometidos por Enigma mientras descubre una red de corrupción en Ciudad Gótica.",
        trailer: "https://www.youtube.com/watch?v=O7zY1X9XG4Q"
    },

    {
        id: 4,
        title: "Oppenheimer",
        year: 2023,
        genre: ["Drama", "Historia"],
        rating: 8.5,
        duration: "180 min",
        director: "Christopher Nolan",
        cast: [
            "Cillian Murphy",
            "Emily Blunt",
            "Matt Damon"
        ],
        featured: true,
        poster: oppenheimer,
        hero: oppenheimer,
        description:
          "La historia del físico J. Robert Oppenheimer y el desarrollo de la primera bomba atómica durante la Segunda Guerra Mundial.",
        trailer: "https://www.youtube.com/watch?v=wv5dZ7feu3k"
    }

];

export default movies;