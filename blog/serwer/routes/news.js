const express = require('express');
const router = express.Router();

var fakenews = [{
    id: '1',
    title: 'Mad owl chases car',
    text: 'Mad owl seen tormenting drivers in Morecambe'
}, {
    id: '2',
    title: 'Owl stowaway',
    text: 'Despicable owl impersonates passenger to board flight to Luton'
}];

router.get('/', function (req,res, next) {
    res.status(200).send({
        data:fakenews
    })
});

router.get('./:id', function (req, res, next) {
    const id = req.params.id;
    const checked = fakenews.find(o => o.id === id);
    res.status(200).send({
        data:checked
    })

});

module.exports = router;