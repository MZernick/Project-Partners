//this is only for development, will not be used in production

const MBTItypes = [ENTP, ENTJ, ENFP, ENFJ, ESTP, ESTJ, ESFP, ESFJ, INTP, INTJ, INFP, INFJ, ISTP, ISTJ, ISFP, ISFJ ]

//create a list of all unique MBTItypes combinations
for (let i = 0; i < MBTItypes.length; i++) {
    let combinations = [];
    while (combinations.length < 136) {
        const pool = MBTItypes
        for (let j = 0; j < pool.length; j++) {
            combinations.push(pool[j]+pool[j])
                if (pool.length > 1) {
                combinations.push(pool[j]+pool[j+1])
                }

        }

    }
}