// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const results=[]
    const strArr= str.split('');
    for(let i =0; i<str.length;i++){
        if(i===0){
           results.push(strArr[0].toUpperCase()); 
        }else{
            if(strArr[i-1]===' '){
                results.push(strArr[i].toUpperCase());
            }
            else{
                results.push(strArr[i]);
            }
        }
    }
    return results.join('');
    
}

module.exports = capitalize;



// function capitalize(str) {
//     const words = str.split(' ');
//     const results = [];
//     for (let word of words){
//         results.push(word[0].toUpperCase()+ word.slice(1));
//     }
//     return results.join(' ');
// }