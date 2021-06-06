import { query as queryMethod } from 'faunadb';
import { faunaClient } from '../../../lib/fauna';

export default async (req, res) => {
  try {
    const query = await faunaClient.query(
      queryMethod.Map(
        queryMethod.Paginate(
          queryMethod.Documents(queryMethod.Collection('town_entries'))
        ),
        queryMethod.Lambda((town) => queryMethod.Get(town))
      )
    );
    res.status(200).json({ data: query.data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
