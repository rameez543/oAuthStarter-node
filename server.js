const express = require('express')

// Import the axios library, to make HTTP requests
const axios = require('axios')

// This is the client ID and client secret that you obtained
// while registering the application
const clientID = 'd75218aec263ad3edfb0'
const clientSecret = '2f1945916c9b474c45cea9dce464c6cc52eab309'

const app = express()

// Declare the redirect route
app.get('/oauth/redirect', (req, res) => {
  // The req.query object has the query params that
  // were sent to this route. We want the `code` param
  const requestToken = req.query.code
  axios({
    // make a POST request
    method: 'post',
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    // Once we get the response, extract the access token from
    // the response body
    const accessToken = response.data.access_token
    // redirect the user to the welcome page, along with the access token
    // res.redirect(`/welcome?access_token=${accessToken}`)
     res.json({token:accessToken})
  })
})

// app.get('/welcome',(req,res)=>{
//     if(req.query.access_token){

//      return res.json({token:req.query.access_token})
//     }
//     return res.json({token:null})
// })

app.use(express.static(__dirname + '/dist'))
app.listen(8000)