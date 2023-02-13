const express = require('express');
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create(req.body);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    newUser.password = undefined;

    res.cookie('token', token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
});

router.get('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      email: req.body.email,
    });

    if (!userData) throw new Error('Email not found');

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!passwordMatch) throw new Error('Password is incorrect');

    const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    userData.password = undefined;

    res.cookie('token', token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(200).json({
      status: 'success',
      data: {
        token,
        data: userData,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    // Protecting this route from non-logged in users

    let token;

    if (req.cookies.token) {
      token = req.cookies.token;
    } else if (
      // for postman
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    )
      token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error('You are not logged in! Please log in to get access.');
    }

    const users = await User.find();

    res.status(200).json({
      status: 'success',
      total: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
});

module.exports = router;
