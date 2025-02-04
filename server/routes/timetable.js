const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/:year', authMiddleware, async (req, res) => {
  try {
    const year = req.params.year;
    let query = `
      SELECT t.*, s.name as subject, tr.name as teacher, r.room_no, d.name as day, ts.start_time, ts.end_time 
      FROM timetable t
      JOIN subjects s ON t.subject_id = s.id
      JOIN teachers tr ON t.teacher_id = tr.id
      JOIN classrooms r ON t.room_id = r.id
      JOIN days d ON t.day_id = d.id
      JOIN time_slots ts ON t.time_slot_id = ts.id
      JOIN classes c ON t.class_id = c.id
      WHERE c.year = ?`;
    
    if (req.user.role === 'student') {
      query += ' AND c.id = ?';
    } else if (req.user.role === 'teacher') {
      query += ' AND tr.id = ?';
    }
    
    const params = req.user.role === 'hod' ? [year] : [year, req.user.id];
    const [timetable] = await db.promise().query(query, params);
    res.json(timetable);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

