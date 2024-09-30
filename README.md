# Vacation Rental Property App

Vacation rental property management application that allows users to manage properties and bookings.

## Architecture

![Architecture](https://github.com/user-attachments/assets/8428dd31-9f4d-4515-966a-aca208e5cc56)

## Setup

First of all, you need to install [Node.js 20.17.0](https://nodejs.org), [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose) as the main technologies to use in this project.

Now you have an environment to run both backend and frontend applications because their dependencies are installed when the Docker images are built.

## Applications

### Backend

#### Environment variables

1. Clone the file `backend/.env.template` and rename to `backend/.env`.

2. Fill the environment variables defined in the `.env` file.

Here you can find possible values for those secrets.

- **PORT:** Application port, e.g **8000**.
- **ENV:** Application environment, e.g **development**.
- **HOST:** Application host, e.g **localhost**.
- **API_VERSION:** API version, e.g **v1**.
- **ORIGIN_CORS_URL:** Frontend URL if the API endpoints are requested from an external resource and allow to establish a secure connection between backend and frontend, e.g **http://localhost:3000**.
- **DB_HOST:** Database host, e.g **localhost**.
- **DB_PORT:** Database port, e.g **5432**.
- **DB_NAME:** Database name, e.g **vacation_rental_property**.
- **DB_USER:** Database user.
- **DB_PASSWORD:** Database password.

#### Execution

You can run this application in **development** mode with the following command:

```bash
$ docker-compose -f backend/docker-compose.yml up --build
```

**Note:** As I mentioned before, the Docker images will be built with this command and 2 containers will be up for both backend application and database server.

#### Database

After the application is running, you need to ensure their database tables are created. For this purpose, we are going to use **migrations**. They are very important to have a versioning of the database changes.

Here you can find some important notes related to this topic:

First of all, you need to run this command in a different terminal in order to execute the required database changes to keep the application running successfully.

```bash
$ docker exec -it vacation-rental-property-api npm run migration:run
```

After that and if you continue developing a new feature and you need to change something related to the entities, you should execute this command in order to generate a new migration:

```bash
$ docker exec -it vacation-rental-property-api npm run migration:generate ./app/src/migrations/<MIGRATION_NAME>
```

For example:

```bash
$ docker exec -it vacation-rental-property-api npm run migration:generate ./app/src/migrations/addStatusColumnToBookingEntity
```

**Note:** If you want to apply those changes inmediately, you should execute the first command again.

Finally, if somethings fails and you need to revert the database changes, you can run this command:

```bash
$ docker exec -it vacation-rental-property-api npm run migration:revert
```

**Note:** This previous command will only revert changes from the last migration. So, you need to revert more than one, you should execute it again until get the version you want.

#### Demo

You can interact with the API Swagger documentation in this link: http://localhost:8000/api/docs.



### Frontend

#### Environment variables

1. Clone the file `frontend/.env.template` and rename to `frontend/.env`.

2. Fill the environment variables defined in the `.env` file.

Here you can find possible values for those secrets.

- **REACT_APP_PORT:** Application port, e.g **3000**.
- **REACT_APP_API_URL:** Backend API url, e.g **http://localhost:8000/api/v1**.

#### Execution

You can run this application in **development** mode with the following command:

```bash
$ docker-compose -f frontend/docker-compose.yml up --build
```

**Note:** As I mentioned before, the Docker image will be built with this command and 1 container will be up, the frontend application.

## Debugging

If you want to debug these applications, you could use **VSCode Workspace**, which is an interesting tool to configure the development environment.

You need follow these steps to get the configured workspace for this project:

1. Clone the file `.vscode/template.code-workspace` and rename to `.vscode/<YOUR_NICKNAME>.code-workspace`.

    You can use whatever nickame. You should try not using sensitive words neither special characters.

2. In the cloned file, replace the `eslint.runtime` configuration from `<REPLACE WITH nvm which 20>` to the specific binary route where **Node 20** was installed, e.g `/home/stivenramireza/.nvm/versions/node/v20.17.0/bin/node`.

3. Click on "Open Workspace".

3. Install the recommended workspace extensions. It is necessary to finish this setup.

**Note:** We are running Docker containers, that's the reason why we need to attach our machine to exposed container ports which are different to the backend and frontend apps.

For example, for backend you could use the port `9229`. In a similar situation, you could use the port `9230` for frontend side.

When the debugger is executed for each app configuration, our machine will be attached to the `localhost` address in the `app` root directory of that container using an inspector protocol.

## Technologies stack

<p align="left">
<a href="https://nestjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg" width="36" height="36" alt="NestJS" /></a>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" /></a>
<a href="https://react.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" /></a>
</p>
