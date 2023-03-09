//get compatibility score for any 2 users based on user1's compatibility. 2 user objects as arguments
//use like this: // console.log(getCompatibility(data.data.users[0], data.data.users[1]));
function getCompatibility(user1, user2) {
    let comp = user1.compatibility;
    const result = comp.find(({type}) => type === user2.personality);
    return result.rating;
}

module.exports = {
    getCompatibility
}