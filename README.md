## Request

```rest
POST http://localhost:,<PORT>/login/local
content-type: application/json

{
    "email": "user@test.com",
    "password": "123456"
}
```
### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxM2ZlMjdlMjQ1ZDA3ZTdmYjYwMWFhNiIsImVtYWlsIjoidGVzdDEwMEBnbWFpbC5jb20ifSwiaWF0IjoxNjMyMzY1Mzk4fQ.iGUjlgqVaNQ1lz8TvhkcxswY8hHcKianNptP54glUu0",
  "isAuthenticated": true
}
```
