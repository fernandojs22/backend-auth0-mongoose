# Version 0.1.0

# Env Variables

MONGODB_SERVER=""
MONGODB_DATABASE=""
MONGODB_PORT=""
MONGODB_USER=""
MONGODB_PASSWORD=""

ACCESS_TOKEN_SECRET=""

PORT_AUTHENTICATION = 9099


# EndPoints

### Register

#### Request

```rest
POST http://localhost:,<PORT>/register
content-type: application/json

{
    "email": "user@test.com",
    "password": "123456"
}
```
#### Response

```json
{
  "message": "Signup successful",
  "user": {
    "email": "user@test.com",
    "_id": "614bed619fe87bba4030f1ed",
    "__v": 0
  }
}
```

### Login

#### Request

```rest
POST http://localhost:,<PORT>/login/local
content-type: application/json

{
    "email": "user@test.com",
    "password": "123456"
}
```
#### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxM2ZlMjdlMjQ1ZDA3ZTdmYjYwMWFhNiIsImVtYWlsIjoidGVzdDEwMEBnbWFpbC5jb20ifSwiaWF0IjoxNjMyMzY1Mzk4fQ.iGUjlgqVaNQ1lz8TvhkcxswY8hHcKianNptP54glUu0",
  "isAuthenticated": true
}
```

### Logout

#### Request

```rest
POST http://localhost:,<PORT>/logout
```
#### Response

```
Found. Redirecting to /
```

### Profile

#### Request

```rest
POST http://localhost:,<PORT>/profile
```
#### Response

```json
{
  "message": "You did it!",
  "user": {
    "email": "user@test.com"
  }
}
```

