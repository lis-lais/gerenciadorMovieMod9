const Movie = require('../models/movie');

const createMovie = async (movieData) => await Movie.create(movieData);
const findAllMovies = async () => await Movie.find ();
const findMovieById = async (id) => await Movie.findById (id);
const updateMovie = async (id, data) => await Movie.findByIdAndUpdate (id, data, { new: true });
const deleteMovie = async (id) => await Movie.findByIdAndDelete (id);
const searchMovies = async (filters) => await Movie.find(filters);

module.exports = {
    createMovie,
    findAllMovies,
    findMovieById,
    updateMovie,
    deleteMovie,
    searchMovies,
};
