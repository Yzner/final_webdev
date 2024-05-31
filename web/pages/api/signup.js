
import { query } from '../../utils/db';

export default async function handler(req, res) {
  const { firstname, lastname, email, password } = req.body;
  const result = await query(
    `INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
    [firstname, lastname, email, password]
  );
  res.status(201).json(result);
}
