const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const notesRoutes = require('./routes/notes');



const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
