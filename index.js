const express = require("express");
const axios = require("axios");
const app = express()
const port = 9000

const ZK_HOST = "https://zk-oauth.vercel.app/api/getId"

app.get('/', (req, res) => {
	res.sendFile('views/index.html', {root: __dirname })
})

app.get('/verify', (req,res) => {
	const token = req.query.token
	//console.log(token)
	axios.get(ZK_HOST,{
		headers:{
			authorization: token
		}
	})
	  .then(function (response) {
	    //console.log();
	   res.send(`User is successfully authenticated<br><b>USER ID:</b><i>${response["data"]["id"]}</i>`)
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
