# MeoukTalk_Backend

## API Document

* POST /auth/signup : User register

> Params

    id : User's ID [String]

    passwd : User's Password [String]

    name : Users name [String]

> Response

    HTTP 200 : User's token

    HTTP 412 : User duplicate


* POST /auth/signin : User Login

> Params

    id : User's ID [String]

    passwd : User's Password [String]

> Response

    HTTP 200 : {message : "Login success!"}

    HTTP 404 : {message : "Users Not found"}

    HTTP 500 : {message : "Login failed"}

* GET /auth/auto/:token : User Login

> Params

    token : User's token [String]

> Response

    HTTP 200 : User's json

    HTTP 404 : {message : "Users Not found"}

    HTTP 401 : {message : "User is not logined"}

* GET /auth/signout/:token : User Login

> Params

    token : User's token [String]

> Response

    HTTP 200 : {message : "Logout success!"}

    HTTP 500 : {message : "Logout failed"}
