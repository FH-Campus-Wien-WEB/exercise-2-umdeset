/* Task 1.1. Add your movie data here
   and export it so it's available in server.js */
const movies ={
    "tt16428256": {
        "imdbID" : "tt16428256",
        "Title": "Suzume",
        "Released": "2023-04-14",
        "Runtime": 122,
        "Genres": ["Animation", "Adventure", "Drama"],
        "Directors": ["Makoto Shinkai"],
        "Writers": ["Makoto Shinkai"],
        "Actors": ["Nanoka Hara", "Hokuto Matsumura", "Eri Fukatsu"],
        "Plot": "A modern action adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing disasters all over in Japan.",
        "Poster": "https://i.etsystatic.com/41806432/r/il/380bcb/5263845797/il_fullxfull.5263845797_45wo.jpg",
        "Metascore": 77,
        "imdbRating": 7.6
    },
    "tt5311514": {
        "imdbID" : "tt5311514",
        "Title": "Your Name",
        "Released": "2016-04-07",
        "Runtime": 106,
        "Genres": ["Animation", "Drama", "Fantasy"],
        "Directors": ["Makoto Shinkai"],
        "Writers": ["Makoto Shinkai"],
        "Actors": ["Ryûnosuke Kamiki", "Mone Kamishiraishi", "Ryo Narita"],
        "Plot": "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
        "Poster": "https://i.imgur.com/xNPlWgd.jpeg",
        "Metascore": 81,
        "imdbRating": 8.4
    },
    "tt0983213": {
        "imdbID" : "tt0983213",
        "Title": "5 Centimeters per Second",
        "Released": "2007-03-03",
        "Runtime": 63,
        "Genres": ["Animation", "Drama", "Romance"],
        "Directors": ["Makoto Shinkai"],
        "Writers": ["Makoto Shinkai"],
        "Actors": ["Kenji Mizuhashi", "Yoshimi Kondou", "Satomi Hanamura"],
        "Plot": "A coming-of-age story told in three segments, following Takaki Tōno and his changing relationships as time, distance, and unspoken feelings shape their lives.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODVmZjhhYTYtYzRiOC00YzFiLThlZjMtZTQxNWY0MTI1MzlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Metascore": 78,
        "imdbRating": 7.5
    },
    "tt9426210": {
        "imdbID" : "tt9426210",
        "Title": "Weathering with You",
        "Released": "2020-01-17",
        "Runtime": 112,
        "Genres": ["Animation", "Fantasy", "Romance"],
        "Directors": ["Makoto Shinkai"],
        "Writers": ["Makoto Shinkai"],
        "Actors": ["Kotaro Daigo", "Nana Mori", "Tsubasa Honda"],
        "Plot": "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmJiYWI4ZjktMzgyZS00MjBiLThmOTYtZWJmOTUzOTFkMTFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "Metascore": 72,
        "imdbRating": 7.5
    }
};

module.exports = movies; //damit haben andere dateien zugriff auf die objekte