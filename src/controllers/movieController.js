const movieService = require('../services/movieService');

const createMovie = async (req, res, next) => {
    try {
        const newMovie = await movieService.createMovie(req.body);
        res.status(201).json(newMovie);
    } catch (error) {
        next(error);
    }
};

const findAllMovies = async (req, res, next) => {
    try {
        const movies = await movieService.findAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        next(error);
    }
};

const updateMovie = async (req, res, next) => {
    try {
        const {id} = req.params;
        const updatedMovie = await movieService.updateMovie(id, req.body);
        res.status(200).json(updatedMovie);
    } catch (error) {
        next(error);
    }
};

const deleteMovie = async (req, res, next) => {
    try {
        const {id} = req.params;
        await movieService.deleteMovie(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

const searchMovies = async (req, res, next) => {
    try {
        const filters = req.query;
        const movies = await movieService.searchMovies(filters);
        res.status(200).json(movies);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createMovie,
    findAllMovies,
    updateMovie,
    deleteMovie,
    searchMovies,
};

