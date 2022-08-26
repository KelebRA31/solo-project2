import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../../components/Layout';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   const video = await .findByPk(id);
//   const { data } = response;
//   console.log(data);
//   res.json({ name: student.name, git: student.git, avatar: data.avatar_url });
// });

export default router;
