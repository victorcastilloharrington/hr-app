## Fullstack HR Application

### Description

The following is an app suite with the purpose of showcasing individual
fullstack skills in several technologies.

It consists of the following apps:

- Frontend app in Next.js (SSR, Moment.js, Tailwindcss)
- Backend Graphql API in Nest.js (Prisma ORM, Apollo Graphql)
- Postgres Database (Postgres Docker Image)

The app suite shows a list of employees records on startup. The employees
records consists of their personal information, the current department
they work for and a historic table of departmental changes.

The app allows users to modify their current department, and deactivate
employees.

### Technical Walkthrough

The app suite is containerized using docker-compose. When command `docker-compose up`
is run, the database will be created using the latest postgres docker image.

Then the _Nest.js_ app is initialized and the database is seeded through the _prisma_ ORM
with placeholder data coming from the _faker_ npm package.

Afterwards, the NextJS app is initialized and the index page is initialized via SSR using `getServerSideProps` to issue a Graphql call to the API fetching the employee list details.

Every page in the frontend app has a builder that transforms the Graphql data into the ready to consume format that is expected by the components, akin to a simplified _ViewModel_ architecture.

## Setup

- Note: The app requires _Docker_ and _docker-compose_ to be run

- Run `docker-compose up` on the project root (where this README is found)
- Once the app is running, navigate to `localhost:3000` to begin using it.
