import { query as queryMethod } from 'faunadb';
import { faunaClient } from '../../../lib/fauna';

export default async (req, res) => {
  console.log('addTown API call, the req.body is ', req.body.townName);

  try {
    // const body = JSON.parse(req.body);
    const { body } = req;

    const query = await faunaClient.query(
      queryMethod.Create(queryMethod.Collection('town_entries'), {
        data: {
          user: 'Jason',
          townName: body.townName,
        },
      })
    );

    res.status(200).json({ data: query });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
