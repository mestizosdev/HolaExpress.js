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
profile:string,\
status:boolean \
--underscored
```
