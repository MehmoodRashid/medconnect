import app from './app.js'
import { env } from './config/env.js'

app.get('/', (req, res) => {
  res.send('MedConnect API is running!');
});

// Server ko port par listen karwane ke liye:
const PORT = env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});