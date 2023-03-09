//get compatibility score for any 2 users based on user1's compatibility. 2 user objects as arguments
//use like this: // console.log(getCompatibility(data.data.users[0], data.data.users[1]));
function getCompatibility(user1, user2) {
    let comp = user1.compatibility;
    const result = comp.find(({type}) => type === user2.personality);
    return result.rating;
};

function getCompatibilityandUsername(user1, user2) {
    let comp = user1.compatibility;
    const result = comp.find(({type}) => type === user2.personality);
    return {username: `${user2.username}`, rating: `${result.rating}`};
};

// a basic reusable average function for an array of numbers
function avg(numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum/numArray.length;
};

//a function that returns array of compatibility rating between each of the users and an identified user
//NOTE that this function will return an array, NOT an average for the team
function indivTeamScores(teamArray, user1) {
    let tempTeamArray = [];
    tempTeamArray.push(...teamArray);
    const user1index = tempTeamArray.findIndex(({_id}) => _id === user1._id);
    tempTeamArray.splice(user1index, 1);
    let scores = [];
    tempTeamArray.forEach(member => {
            scores.push(getCompatibility(user1, member));
    });
    return scores
};
//a function that returns the avarage compatibility score for a team for a given user
function myTeamScore(teamArray, User1) {
    let arrayToAverage = indivTeamScores(teamArray, User1);
    return avg(arrayToAverage);
}
//a function returns the avarage compatibility score for the entire team
function oneBigTeamScore(teamArray) {
    const bigScores = [];
    for (let i = 0; i < teamArray.length; i++) {
        let lilScores = indivTeamScores(teamArray, teamArray[i]);
        bigScores.push(...lilScores)
    }
    return avg(bigScores);
}


module.exports = {
    getCompatibility, getCompatibilityandUsername, avg, indivTeamScores, myTeamScore, oneBigTeamScore
}