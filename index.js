// code your solution here

let symbol = "*"; "||";

function saturdayFun(txt = "roller-skate") {
    return "This Saturday, I want to " + txt + "!";
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
console.log (mondayWork());
console.log (mondayWork("work from home"))


let wrapAdjective = function(AFG="*") {
    return function (adjective = "special") {
        return `You are ${AFG}${adjective}${AFG}!`
    } 
               
}