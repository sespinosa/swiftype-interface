## Test:

```
npm run test
```

##### test are pending.

Usage:

You can import or require this library as:

```
import SwiftypeInterface from 'swiftype-interface'
```

Comes with 2 methods

- search.

- suggestions.


**The `search` and `suggestions` methods return a promise.**

### Search Example:


```
import SwiftypeInterface from 'swiftype-interface'

SwiftypeInterface.search({
  engine_key: 'xxxxxxx',
  q: 'query terms'
}).then(r => {
  // Do something with the response json object.
  console.log(r)
}).catch(err => console.log(err))

```

### Suggestions example

```
import SwiftypeInterface from 'swiftype-interface'

SwiftypeInterface.suggestions({
  engine_key: 'xxxxxxx',
  q: 'query terms'
}).then(r => {
  // Do something with the response json object.
  console.log(r)
}).catch(err => console.log(err))

```
