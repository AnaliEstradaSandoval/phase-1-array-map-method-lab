const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
// // const arr1 = tutorials[0].split(' ');
// if (tutorials) {
//   return tutorials.map(function(tutorial){
//   return tutorial.split(' ')
// })
// }
// if (tutorials) {
//   return tutorials.map(function(tutorial){
//     return tutorial.charAt(0).toUpperCase() + tutorial.slice(1)
//   })
// }
// return tutorials.join(' ')
// }


// const titleCased = () => {
//   if (tutorials) {
//    return tutorials.map(function(tutorial){
//    return tutorial.split(' ')
//  } 
//  }

// let newArray = tutorials[0].split(' ')
// console.log(newArray[0][0])

// function titleCased(tutorials){
//   return tutorials.toLowerCase().split(' ').map(
//   function(word){
//   return (word.chartAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }

const titleCased = () => {
  const newArray = [];
  tutorials.map(function(elemet){
    const words = elemet.split(" ");
    const capitalizer = words.map(function(word){
      return word[0].toUpperCase() + word.substring(1)
    }).join(" ");
    newArray.push(capitalizer);
  })
  return newArray;
}
