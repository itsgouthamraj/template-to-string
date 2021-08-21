const templateToString = require('./index');

const string = templateToString({
    template : "Hi {desc} {name}",
    data:{
        name:'Goutham'
    },
    interceptor:(variables,data) => {
        return data;
    }
})

console.log(string)