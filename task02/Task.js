'use strict';

const user1 = {
    name: 'Oleg Yesterday`s',
    age: 19
}

const user2 = '{"name":"Oleg Yesterday`s","age":"19"}';

const strToJsonAndViceVersa = (user) => {
    if (typeof user === 'object') {
        const userAnswer = JSON.stringify(user);
        console.log(userAnswer);
    } else {
        const userAnswer = JSON.parse(user);
        console.log(userAnswer);
    }
}

strToJsonAndViceVersa(user1);
strToJsonAndViceVersa(user2);
