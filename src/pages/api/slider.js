import fs from 'fs';
import path from 'path';


export default function handler(req, res) {
  if (req.method === 'GET') {
    const imagePath = path.join(process.cwd(), 'public', 'slider', 'slider-photo-1.jpg');
    const imageData = fs.readFileSync(imagePath);

    res.status(200).end(imageData);
  }
  
}