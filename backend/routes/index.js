const Router = require('express').Router;
const tooBusy = require('toobusy-js');


const handlers = require('../handlers');

const router = Router();
module.exports = router;

router.post('/todos', handlers.add);
router.get('/todos', handlers.get);
router.put('/todos/:ID', handlers.update);
router.delete('/todos/:ID', handlers.delete);

router.get('/health', (req, res) => res.end(`${tooBusy.lag()}`));
