# Create model

## Sequelize CLI
```
pnpm add -g sequelize-cli
```
## Create model user
```
sequelize model:generate --name User --attributes \
username:string,\
password:string,\
email:string,\
role:string,\
status:boolean \
--underscored
```
## Refactor and move class User
- Move User class to modules folder
## Migrate
```
sequelize db:migrate
```
## Undo migrate
```
sequelize db:migrate:undo
```
## Create file password.js
```
touch src/utils/password.js
```
## bcrypt
A library to help you hash passwords.
```
pnpm add bcrypt
```
## Create seeder
```
sequelize seed:create --name users
```
## Seed
```
sequelize db:seed:all
```
## Undo seed
```
sequelize db:seed:undo:all
```
## Password generate
```
pnpm add generate-password
```
