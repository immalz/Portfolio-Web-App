const { Router } = require('express');
const courses = require('../config/models/cursos');
const projects = require('../config/models/proyectos')

const router = Router();
router.get('/portfolio', (req, res) => {
    res.render('portfolio', {courses, projects})
})

module.exports = router;