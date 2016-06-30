/* jshint esversion:6 */

const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/new', (req, res) => {
  res.render('users/new');
});

router.post('/create', (req, res) => {
  // create user here,
  // then redirect
  console.log('body', req.body);
  return User.create(req.body).then(user => {
    console.log(`User created ${user._id}`);
    res.redirect('/');
    res.redirect('/');
  });
  // User.create(req.que);
});

router.get('/show/:id', (req, res) => {
  res.render('users/show');
});

router.get('/edit', (req, res) => {
  res.render('users/edit');
});

router.patch('/update', (req, res) => {
  res.send('at user create');
});

router.delete('/destroy', (req, res) => {
  res.send('at user destroy');
});

module.exports = router;
