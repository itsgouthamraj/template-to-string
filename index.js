module.exports = templateToString;

function templateToString({template,data,interceptor}){
    let result = '';
    let start = 0;
    function splitString(i,j){
      let str = '';
      for(;i<j;i++){
        let c = template[i];
        if(c===' ' && i===result.length && result[result.length - 1] === ' '){
          //
        }else{
          str += c;
        }
      }
      return str;
    }
    function findVariablesAndIndices(string){
      
      let variables = [];
      let length = string.length;
      let vStart = false;
      let tempVar = '';
      let curStart = 0;
      let curEnd = 0;
      for(let i=0;i<length;i++){
        let c = string[i];
        switch(c){
          case '{' : {
            vStart = true;
            curStart = i;
            tempVar = ''
            break;
          }
          case '}' : {
            if(vStart){
              if(tempVar !== ''){
               curEnd = i;
                  variables.push({
                    value:tempVar,
                    start:curStart,
                    end:curEnd
                  });               
              }
              tempVar = '';
              vStart = false;
            }
            break;
          }  
          case ' ': {
            if(vStart){
              vStart = false;
            }
            break;
          }
          default: {
            if(vStart && c!==' '){
              tempVar += c;
            }
          }  
        }
      }
      return variables;
    }
    if(template && typeof template === 'string'){
      let varAndIndex = findVariablesAndIndices(template);
      if(interceptor && typeof interceptor === 'function'){
        data = interceptor(Array.from(new Set(varAndIndex.map(v => v.value))),data);
      }

      if(typeof data === 'object'){
        varAndIndex.forEach(variable => {
          let iValue = variable;
            let tempString = splitString(start,iValue.start);
            result += tempString; 
            start = iValue.end+1;
            if(data.hasOwnProperty(variable.value)){
              result += data[variable.value]
            }
            else{
              start = template[start] == ' ' ? start+1: start;
            }
        })
        result += splitString(start,template.length)
      }
    }
    return result;
  }
