const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/', movieController.createMovie);
router.get('/', movieController.listAllMovies);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);
router.get('/busca', movieController.searchMovies);

module.exports = router;
