import ifetch from 'isomorphic-fetch'

const searchUrl = "https://app.swiftype.com/api/v1/public/engines/search"
const suggestUrl = "https://app.swiftype.com/api/v1/public/engines/suggest"

const search = (config) => ifetch(`${searchUrl}?engine_key=${config.engine_key}`, {
  method: "POST",
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  redirect: "follow",
  body: JSON.stringify(config)
})
.then(r => r.json())
.catch(err => console.log(new Error(err)))


const suggestions = (config) => ifetch(`${suggestUrl}?engine_key=${config.engine_key}`, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  redirect: "follow",
  body: JSON.stringify(config)
})
.then(r => r.json())
.catch(err => console.log(new Error(err)))

export default { search, suggestions }