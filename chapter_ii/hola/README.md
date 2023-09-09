# Sequelize ORM

## Create user and database in PostgreSQL.
```
sudo su - postgres
```
```
psql
```
```
CREATE ROLE hola WITH LOGIN NOSUPERUSER CREATEDB NOCREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'h';
```
```
show hba_file;
```
```
vim /var/lib/pgsql/data/pg_hba.conf
```
```
host    all             all             127.0.0.1/32            trust
```
```
sudo systemctl restart postgresql.service
```
```
pgcli -u hola -w h -d postgres
```
```
create database hola
```
```
pgcli -u hola -w h -d hola
```
## Sequelize
Feature-rich ORM for modern Node.js.
```
pnpm add sequelize
```
## pg and pg-hstore
PostgreSQL client for node.js and a node package for serializing and deserializing JSON data to hstore format.
```
pnpm add pg pg-hstore
```
## sequelize-cli
The Sequelize CLI 
```
pnpm add -g sequelize-cli
```
## Create configuration file
This is a special configuration file. It lets you specify the following options that you would usually pass as arguments to CLI:
* env: The environment to run the command in
* config: The path to the config file
* migrations-path: The path to the migrations folder
* seeders-path: The path to the seeders folder
* models-path: The path to the models folder
```
touch .sequelizerc
```
```
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'config.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
```
## sequelize init 
```
sequelize init
```
### Show option
```
sequelize --help
```
## winston logger
```
pnpm add winston
```
