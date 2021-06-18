import { query as queryMethod } from 'faunadb';
import { faunaClient } from '../../../lib/fauna';

export default async (req, res) => {
  console.log('addTown API call, the req.body is ', req.body);

  try {
    // const body = JSON.parse(req.body);
    // const { body } = req;
    const body = req.body.townVisit;

    const query = await faunaClient.query(
      queryMethod.Create(queryMethod.Collection('town_entries'), {
        data: {
          user: body.username,
          townName: body.townName,
          description: body.description,
        },
      })
    );

    res.status(200).json({ data: query });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
