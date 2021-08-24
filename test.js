const templateToString = require('./index');

const language = "en";


const string = templateToString({
    template : "Hi {name}",
    data:{
        name: "nivedita",
    },
    /*interceptor:(variables,data) => {
       
        data = data.en;

        return data;
    }*/
})

console.log(string)