import { app } from './app';
import { config } from 'dotenv';

config(); // load .env file

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 FinLogging backend running on port ${PORT}`);
});
