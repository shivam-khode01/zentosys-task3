const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note');
const auth = require('../middleware/auth');

// Get all notes
router.get('/', auth, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// Add a note
router.post('/', [
  auth,
  body('title', 'Title is required').not().isEmpty()
], async (req, res) => {
  const { title, content, tags } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const note = new Note({ user: req.user.id, title, content, tags });
  await note.save();
  res.json(note);
});

// Update note
router.put('/:id', auth, async (req, res) => {
  const { title, content, tags } = req.body;

  let note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ msg: 'Note not found' });
  if (note.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

  note = await Note.findByIdAndUpdate(req.params.id, { $set: { title, content, tags } }, { new: true });
  res.json(note);
});

// Delete note
router.delete('/:id', auth, async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ msg: 'Note not found' });
  if (note.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

  await Note.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Note deleted' });
});

module.exports = router;
