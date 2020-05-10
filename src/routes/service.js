const { Router } = require('express')

const router = Router();

router.get('/service', (req, res) => {
    res.render('service')
})

module.exports = router;