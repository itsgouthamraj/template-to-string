# Foobar

Javascript library to convert templates into string.

## Installation



```bash
npm i template-to-string
```

## Usage
```javascript
const templateToString = require('template-to-string');

let myString = templateToString({
    template:"Hi {name}, Welcome to {country}",
    data:{
        name:"Goutham",
        country:"India"
    }
})

console.log(myString); // Hi Goutham, Welcome to India
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)