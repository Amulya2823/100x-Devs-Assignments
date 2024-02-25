Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let period ; 
function ap(){
    const a = new Date();
    if (a.getHours() < 12){
        period = "AM"
    }
    else{
        period = "PM"
    }

}
function clock(){
    const time = new Date();
    const hours = time.getDate();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    console.clear();
    ap();
    const ans = `${hours}:${minutes}:${seconds}`

    console.log(ans + " " +period);
}

clock();
setInterval(clock,1000)


