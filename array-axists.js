// const friends = ['rubi', 'tusar', 'rakib', 'rochita', 'Arisha'];
// let bigBuddyFriend = friends[0];
// for (const friend of friends) {
//     if (bigBuddyFriend.length < friend.length) {
//         bigBuddyFriend=friend;
//     }
// }
// console.log(bigBuddyFriend);


const bigOrSmall = (nameList, isBigOrSmall) => {
    if (!Array.isArray(nameList)) {
        return 'Please send the valid data!'
    } else {
        let bigOrSmallName = nameList[0];
        for (const name of nameList) {
            if (isBigOrSmall) {
                if (name.length > bigOrSmallName.length) {
                    bigOrSmallName =name;
                }
            } else {
                if (name.length < bigOrSmallName.length) {
                    bigOrSmallName = name;
                }
            }
        }    
        return bigOrSmallName;
    }    
    
}

const friends = ['rubi', 'tusar', 'rakib', 'rochita', 'Arisha'];
const bigName = bigOrSmall(friends, true);
console.log(bigName);