const express = require('express');
const db = require ('../db/config');
const { index, show, create } = require('../db/queries');

const router = express.Router();

router.get('/', (req, res)=> {
    db.run(index)
    .then(resp => {
        const blogs = resp.rows
        res.json({blogs})
    })
    .catch(err => res.status(500).end())
})

router.get('/:id', (req, res) => {
    db.run(show, [req.params.id])
        .then(resp => {
            const blogs = resp.rows
            res.json({blogs})
        })
        .catch(err => res.status(500).end())
})

router.post('/', (req, res) => {
    db.run(create, [req.body.author, req.body.title, req.body.entry])
        .then(resp => {
            const blogs = resp.rows[0]
            res.status(201).json(blogs)
        })
        .catch(err => res.status(500).end())
})

    


module.exports = router;