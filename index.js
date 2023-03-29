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

function titleCased()
{
  tutorials.forEach((item, index) => {

    let splited = item.split(" ");

    let capitalized = splited.map(argument => argument.charAt(0).toUpperCase() + argument.slice(1));
  
    capitalized = capitalized.join(" ");

    tutorials[index] = capitalized;
  })
  return tutorials;
}

console.log(titleCased());
