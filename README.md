## Register

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

## Login

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
