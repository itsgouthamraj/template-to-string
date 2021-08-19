module.exports = templateToString;

function templateToString({template,data,dataFormatter}){
    let result = '';
    let start = 0;
    function splitString(i,j){
      let str = '';
      for(;i<j;i++){
        str += template[i];
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
      console.log(varAndIndex);
      if(typeof data === 'object'){
        varAndIndex.forEach(variable => {
          let iValue = variable;
            let tempString = splitString(start,iValue.start);
            result += tempString; 
            start = iValue.end+1;
            if(data.hasOwnProperty(variable.value)){
              result += data[variable.value]
            }
        })
        result += splitString(start,template.length-1)
      }
    }
    return result;
  }
