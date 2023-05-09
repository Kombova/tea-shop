import fs from 'fs';
import path from 'path';
export default function handler(req, res) {
    if (req.method === 'GET') {
      const textPath = path.join(process.cwd(), 'public', 'text.txt');
      const textData = fs.readFileSync(textPath);
  
      res.status(200).end(textData);
    }
    
  }