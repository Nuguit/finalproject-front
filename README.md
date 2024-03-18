# SAFEWALK: built using MERN STACK (Mongo, Express, React.JS, Node)

SafeWalk is the first collaborative app that allows you to know in advance safe public spaces based on the experience of other users.

# Deployed Application

The deployed application can be found at the following link: "####".

To install all the dependencies used in the project, simply run the command:

```
npm install
```

# Environment Variables

You will need to create a .env (or .env.local) file if you want to run this project locally. In order to do so you will also need variable:

- REACT_APP_GOOGLE_MAPS_API_KEY
- REACT_APP_API_URL

# Application Routes:

|              URL path               |        Description        | Protected |
| :---------------------------------: | :-----------------------: | :-------: |
|                  /                  |         Home page         |    ❌     |
|               /login                |        Login page         |    ❌     |
|               /signup               |        Signup page        |    ❌     |
|              /howworks              |    How App Works Page     |    ❌     |
|              /aboutus               |       About Us Page       |    ❌     |
|            /profile                 |     Profile Page          |    ✅     |
|            /contributions           |Personal Contributions Page|    ✅     |
|            /safemap                 |     Safemap Page          |    ✅     |
|          /safemap/added            |    New Warning Added      |    ✅     |


