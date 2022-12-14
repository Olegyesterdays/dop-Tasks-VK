'use strict';

const user1 = {
    name: 'Oleg Yesterday`s',
    age: 19
}

const user2 = '{"name":"Oleg Yesterday`s","age":19}';

const strToJsonAndViceVersa = (user) => {
    if (typeof user === 'object' && user !== null) {
        console.log(JSON.stringify(user));
    } else if(typeof user === 'string'){
        console.log(JSON.parse(user));
    }
}

strToJsonAndViceVersa(user1);
strToJsonAndViceVersa(user2);
