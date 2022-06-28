function saturdayFun(activity = 'roller-skate'){
    const toDo = `This Saturday, I want to ${activity}!`
    return toDo
}

saturdayFun();
saturdayFun('bathe my dog');

//////

function mondayWork(activity = 'go to the office'){
    const toDo = `This Monday, I will ${activity}.`
    return toDo
}

mondayWork();
mondayWork('work from home')

// function wrapAdjective(special = '*'){
//     if (special === '*'){
//         return `"You are ${special}a hard worker${special}!"`
//     } else if (special === '||') {
//         return `"You are ${special}a dedicated programmer${special}"`
//     }
// }

// let result = wrapAdjective('*')
// wrapAdjective('||')

function wrapAdjective(special = '*'){ 
    const result = function (emphatic) {
        return `You are ${special}${emphatic}${special}!`;
    };
return result;
}

wrapAdjective('*')('a hard worker');
wrapAdjective('||')('a good programmer');