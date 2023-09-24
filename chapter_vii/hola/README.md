# Login

## JSON Web Token (JWT)
```
pnpm add jsonwebtoken
```
## Add middlewares
## Add middleware in routers of the version module and the others endpoints
## Add configuration to swagger
https://swagger-autogen.github.io/docs/openapi-3/authentication/bearer-auth
Bearer Auth

The security example below was taken from the original Swagger documentation.
```
const doc = {
    ...
    components: {
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
};
```
To see more about the properties of the doc object, see the Advanced Usage section.

At the endpoint, add the #swagger.security, for example:
```
app.get('/path', (req, res) => {
    ...
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    ...
});
```
## Cross-origin resource sharing
```
pnpm i cors
```
