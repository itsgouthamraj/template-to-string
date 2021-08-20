# template-to-string
Javascript library to convert templates into string

## Example

const templateToString = require('template-to-string');

let a = templateToString({
    template:"Hi {name}, Welcome to {country}",
    data:{
        name:"Goutham",
        country:"India"
    }
})

console.log(a); // Hi Goutham, Welcome to India
