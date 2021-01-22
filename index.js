// librerie
const fetch = require("node-fetch")

// programma
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(json => {
      let output = "response from api: "+json.title
      console.log(output)
  })