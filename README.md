## General Information

This repository contains the backend for a Currency Converter application. Users can select a currency to convert from and another currency to convert to. They can enter the desired amount to be converted, and the application will automatically display the result.

Additionally, the application includes a feature that enables users to save their conversions. It incorporates a login system and provides a list of all conversions made by the logged-in user. Each conversion entry includes the currencies, amounts, and the date and time of the conversion.

IMPORTANT: After setting up the database and backend application as instructed in the README of this repository, you will then need to configure the frontend part of the project by following the instructions provided in the frontend repository: https://github.com/thomasalbuquerque/currency-converter_frontend

Link for the deployed app: https://coincalc-currency-converter.vercel.app/

![Image](https://github.com/thomasalbuquerque/currency-converter_frontend/assets/7840248/1f011922-ba90-4202-90bb-7a1aaa2bb059)

## Stack
This project was made with:
 - React with Next.js
 - Node.js
 - Javascript
 - Typescript
 - [Express](https://www.npmjs.com/package/express)
 - [Sequelize](https://www.npmjs.com/package/sequelize)
 - [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
 - [SequelizeCli](https://www.npmjs.com/package/sequelize-cli)
 - [Pg](https://www.npmjs.com/package/pg)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
 - [Env-var](https://www.npmjs.com/package/env-var)
 - [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
 - [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
 - [Cors](https://www.npmjs.com/package/cors)
 - [Ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

## Installation
To begin, make sure you have Node.js with npm installed on your system. If you don't have them, please refer to the [official documentation](https://nodejs.org/en/download) for instructions on how to install them.

Next, follow the steps below:

1. Clone the repository by running:
```bash
    git clone https://github.com/thomasalbuquerque/currency-converter_frontend
```
2. Open the newly created folder **currency-converter_backend** using Visual Studio Code (or any preferred code editor).

3. Run the command below to install all the necessary dependencies.
```bash
    npm install
```

4. Install PostgreSQL. To install on Linux, please follow the steps below. If you are using Windows or Mac, you can refer to the following tutorial for installation instructions: https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/
### Install on Linux
| Step | Description | Command |
| --- | --- | --- |
| 1 | Create the repository configurations | `sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'` |
| 2 | Import the repository's signature key | `$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc \| sudo apt-key add -` |
| 3 | Update the package list | `sudo apt-get update` |
| 4 | Connect to the postgres user (created during installation) of the database | `sudo -i -u postgres` |
| 5 | (enter the password you previously chose) | |
| 6 | Access the command-line tool of the database | `psql` |
| 7 | For future access, simply run the following command | `sudo -i -u postgres psql` |

5. With the terminal open, after runned sudo -i -u postgres psql to access the command-line tool, create an user with password and CREATEDB role
```bash
    CREATE USER coincalc_user WITH PASSWORD 'coincalc_user_password' CREATEDB;
```

6. Create a database with the recently created user set as the owner
```bash
    CREATE DATABASE coincalc_db OWNER coincalc_user;
```

7. To configure the required environment variables for the project, create a file named '.env' within the project's root directory. Inside the '.env' file, specify the necessary environment variables as shown below:
```bash
    DATABASE_URL=postgres://coincalc_user:coincalc_user_password@localhost:5432/coincalc_db
    COOKIE_PASSWORD=ABCDEFGJK00000anythingyouwant00000LMNOPQRST
    JWT_KEY=0123456789anythingyouwant0123456789
```
Note: DATABASE_URL follows the structure: DATABASE_URL=postgres://db_user_name:db_user_password@localhost:5432/db_name , with 5432 generally being the default port for local databases.

8. Run the following command inside project's folder to run all migrations - there are three, for Users, Currencies and Convertions tables
```bash
    npx sequelize-cli db:migrate
```

9. Run the following command inside project's folder to run all seeders - there is one, to populate Users table with an admin user
```bash
    npx sequelize-cli db:seed:all
```

10. Run the following command to run the project in development mode
```bash
    npm run dev
```

11. Or if you want to run the application in production mode, run
```bash
    npm run build
    npm run start
```

12. Now, with the application running at localhost:3000, you can proceed to run the frontend application, which will be accessible at localhost:3001. Repository's url: https://github.com/thomasalbuquerque/currency-converter_frontend

