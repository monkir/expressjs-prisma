const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const postRoutes = require('./src/routes/postRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
