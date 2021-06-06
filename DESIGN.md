# App Design

Simplest Possible Function:

- A list of town(s)/suburbs I've visited, with some records associated, and photo(s)

Expanded Functions:

- Many photos, with a gallery view
- A list of towns I'd like to visit (e.g. all suburbs in Auckland)
- Group by City (e.g. Auckland suburbs, Palmy Suburbs)
- Date based scrolling / views
- Auth / accounts

Shape of data:

- Entry

  - User
  - Name of town
  - City
  - Description / notes
  - DateVisited
  - Photos
  - Created@

- Index (of all entries)
- Index of city

Layout:

- List view, reverse chronological order, cards, app-like

Tech:

- NextJS, FaunaDB, Cloudinary
