## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

for(i = 0 ; i <= 100 ; i++){
    setTimeout(function(){
        console.clear();
        count += 1;
        console.log(count);
    },i*1000);
}






































































(Hint: setTimeout)