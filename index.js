// code your solution here
function saturdayFun(interest = "roller-skate") {
    return (`This Saturday, I want to ${interest}!`)
}
function mondayWork(interest="go to the office") {
    return (`This Monday, I will ${interest}.`);

}
const wrapAdjective = function(wrap="*"){
    return function(parameter="special"){
        return `You are ${wrap}${parameter}${wrap}!`
    }

}