// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
        return "This Saturday, I want to roller-skate!";
    } else {
        return `This Saturday, I want to ${activity}!`;
    }
}
function mondayWork(work) {
    if (work === undefined) {
        return "This Monday, I will go to the office.";
    } else {
        return `This Monday, I will ${work}.`;
    }
}
function wrapAdjective(wrapper) {
    return function (adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}