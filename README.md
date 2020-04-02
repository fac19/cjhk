# cjhk
Week 5 project

## Heroku disclaimer
We are currently have issues deploying on Heroku - helpful suggestion on how to set up our remote database extremely welcome! ;)

## Project description
We have created the SRVVRS app to provide you with tech tools to aid in your survival during self-isolation. The user can view and add to the list of tools on the remote database.

## Set up instructions
1. Clone this repo
2. Run `$ npm install` on your terminal
3. Run `npm run dev` to check server runs
4. Run these commands in your terminal to set up user and database

```
$ psql -c "CREATE USER myuser WITH PASSWORD 'mypassword'"
$ psql -c "ALTER USER myuser WITH SUPERUSER"
$ psql -c "CREATE DATABASE srvvrs_db WITH OWNER myuser"
```

5. Run `psql` to enter Postgres CLI
6. Connect to database `# \c srvvrs_db`
7. Initialise database `# \i source/database/init.sql`
8. Run `npm run dev`