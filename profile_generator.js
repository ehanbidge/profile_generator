/*
To help out our fellow users, let's create a quick survey app which asks
the user a bunch of questions like their favourite music, activity, food,
sport, etc. It will then generate a profile description for them to use online, 
like the example demonstrated above

Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:


*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = [];

rl.question(`What's your name? Nicknames are also acceptable : `, (answer) => {
  profile.push(`Hi, my name is ${answer}`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    profile.push(`I love to ${answer}`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.push(`I listen to ${answer}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        profile.push(`${answer} is my favourit meal.`);
     
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          profile.push(`I love to eat ${answer}`);
       
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.push(`I love ${answer}`);
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.push(`I have a supperpower! ${answer}`);
              console.log(profile);
              rl.close();
            });
          });
        });
      });  
    }); 
  });
});








