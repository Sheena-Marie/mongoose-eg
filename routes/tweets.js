/* jshint esversion:6 */

const router = require('express').Router();

const newCtrl = (req, res) => {
  res.send('at new tweet ctrl');
};

const createCtrl = (req, res) => {
  res.send('at create tweet ctrl');
};

const showCtrl = (req, res) => {
  res.send('at show tweet ctrl');
};

router.get('/new', newCtrl);
router.get('/create', createCtrl);
router.get('/show', showCtrl);



module.exports = router;
