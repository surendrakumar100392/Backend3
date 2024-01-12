const express = require('express')
require ('dotenv').config()
//import express from "express"
const app = express()
const port = 3000

const gitHubData = 
  {
    "login": "surendrakumar100392",
    "id": 151502707,
    "node_id": "U_kgDOCQe_cw",
    "avatar_url": "https://avatars.githubusercontent.com/u/151502707?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/surendrakumar100392",
    "html_url": "https://github.com/surendrakumar100392",
    "followers_url": "https://api.github.com/users/surendrakumar100392/followers",
    "following_url": "https://api.github.com/users/surendrakumar100392/following{/other_user}",
    "gists_url": "https://api.github.com/users/surendrakumar100392/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/surendrakumar100392/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/surendrakumar100392/subscriptions",
    "organizations_url": "https://api.github.com/users/surendrakumar100392/orgs",
    "repos_url": "https://api.github.com/users/surendrakumar100392/repos",
    "events_url": "https://api.github.com/users/surendrakumar100392/events{/privacy}",
    "received_events_url": "https://api.github.com/users/surendrakumar100392/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-11-20T06:49:04Z",
    "updated_at": "2024-01-11T15:36:31Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('surendrakumar')

})

app.get('/login',(req, res)=>{
    res.send('<h1> Please login at chai aur code </h1>')

})

app.get('/github',(req,res)=>{
  res.json(gitHubData)
})

app.get('/youtube',(req, res)=>{
    res.send('<h2> Hello Youtube </h2>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})