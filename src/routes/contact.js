const { Router } = require('express')

const router = Router();

router.get('/contact', (req, res) => {
    res.render('contact')
})

module.exports = router;