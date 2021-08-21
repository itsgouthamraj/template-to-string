const templateToString = require('./index');

const language = "en";


const string = templateToString({
    template : "Hi ",
    data:{
        en:{
            name:"Hello"
        },
        ta:{
            name:"Vanakkam"
        }
    },
    interceptor:(variables,data) => {
       
        data = data.en;

        return data;
    }
})

console.log(string)