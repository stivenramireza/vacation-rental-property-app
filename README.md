# Vacation Rental Property App

Vacation rental property management application that allows users to manage properties and bookings.

## Setup

First of all, you need to install [Node.js 20.17.0](https://nodejs.org), [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose) as the main technologies to use in this project.

Now you have an environment to run both backend and frontend applications because their dependencias are installed when the Docker containers are up.

## Applications

### Backend

#### Execution

1. Clone the file `.env.template` and rename to `.env`.

2. Fill the environment variables defined in the `.env` file.

3. Run the application in **development** mode:

```bash
$ docker-compose -f backend/docker-compose.yml up --build
```

#### Database

Before the application is running, you need to ensure the database and their tables are created. For this purpose, we are going to use **migrations**. They are very important to have a versioning of the database changes.

Here you can find some commands related to them:

1. Generate a new migration.

```bash
$ docker exec -it vacation-rental-property-api npm run migration:generate ./src/migrations/<MIGRATION_NAME>
```

2. Run the latest or missing migrations.

```bash
$ docker exec -it vacation-rental-property-api npm run migration:run
```

3. Revert the last migration.

```bash
$ docker exec -it vacation-rental-property-api npm run migration:revert
```

**Posdata:** It's really important to execute the second command first in order to have the recent changes of the database and the application runs correctly.

### Frontend

#### Execution

1. Clone the file `.env.template` and rename to `.env`.

2. Fill the environment variables defined in the `.env` file.

3. Run the application in **development** mode:

```bash
$ docker-compose -f frontend/docker-compose.yml up --build
```

## Technologies stack

<p align="left">
<a href="https://nestjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg" width="36" height="36" alt="NestJS" /></a>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>
<a href="https://react.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" /></a>
</p>
