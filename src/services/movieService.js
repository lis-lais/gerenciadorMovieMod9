const movieRepository = require('../repositories/movieRepository');

const createMovie = async (data) => {
    if (!data.title || !data.director || !data.year || !data.genre) {
        throw new Error ('Todos os campos (title, director, year, genre) devem ser preenchidos!');
    }
    return await movieRepository.createMovie(data);
};

const findAllMovies = async () => {
    return await movieRepository.findAllMovies();
}; 

const updateMovie = async (id, data) => {
    const updatedMovie = await movieRepository.updateMovie(id, data);
    if (!updatedMovie) {
        throw new Error(`Filme com ID ${id} não encontrado.`);
    }
    return updatedMovie;
};

const deleteMovie = async (id) => {
    const deletedMovie = await movieRepository.deleteMovie(id);
    if (!deletedMovie) {
        throw new Error(`Filme com ID ${id} não encontrado.`);
    }
    return deletedMovie;
};

const searchMovies = async (filters) => {
    if (Object.keys(filters).length === 0) {
        throw new Error('Nenhum filtro fornecido.');
    }
    return await movieRepository.searchMovies(filters);
};

module.exports = {
    createMovie,
    findAllMovies,
    updateMovie,
    deleteMovie,
    searchMovies
}