import { addContent, toggleContent } from '../actions'
// console.log(addContent);

const sleep = ms => new Promise(resolve => setTimeout(resolve,ms))

export default (function showResults(values){
    console.log(values);
    console.log(values.memo);
    // dispatch(addContent(values.content))
    // window.alert(`Yout submitted:\n\n${JSON.stringify(values,null,2)} `)
});
