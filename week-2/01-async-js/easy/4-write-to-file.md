## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


// syntax goes as fs.writeFile('File which you want to write','what u wanna write',callback function)


const fs = require('fs');
fs.writeFile('a.txt','Hi , I learnt how to write a file in JS , Yayyy!',function(err){
    console.log("Done!")
})
/