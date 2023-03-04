const sixteenTypes = ["INFP, ENFP, INFJ, ENFJ, INTJ, ENTJ, INTP, ENTP, ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ"]
const allPairs = ["INFP,INFP","INFP,ENFP","INFP,INFJ","INFP,ENFJ","INFP,INTJ","INFP,ENTJ","INFP,INTP","INFP,ENTP","INFP,ISFP","INFP,ESFP","INFP,ISTP","INFP,ESTP","INFP,ISFJ","INFP,ESFJ","INFP,ISTJ","INFP,ESTJ","ENFP,ENFP","ENFP,INFJ","ENFP,ENFJ","ENFP,INTJ","ENFP,ENTJ","ENFP,INTP","ENFP,ENTP","ENFP,ISFP","ENFP,ESFP","ENFP,ISTP","ENFP,ESTP","ENFP,ISFJ","ENFP,ESFJ","ENFP,ISTJ","ENFP,ESTJ","INFJ,INFJ","INFJ,ENFJ","INFJ,INTJ","INFJ,ENTJ","INFJ,INTP","INFJ,ENTP","INFJ,ISFP","INFJ,ESFP","INFJ,ISTP","INFJ,ESTP","INFJ,ISFJ","INFJ,ESFJ","INFJ,ISTJ","INFJ,ESTJ","ENFJ,ENFJ","ENFJ,INTJ","ENFJ,ENTJ","ENFJ,INTP","ENFJ,ENTP","ENFJ,ISFP","ENFJ,ESFP","ENFJ,ISTP","ENFJ,ESTP","ENFJ,ISFJ","ENFJ,ESFJ","ENFJ,ISTJ","ENFJ,ESTJ","INTJ,INTJ","INTJ,ENTJ","INTJ,INTP","INTJ,ENTP","INTJ,ISFP","INTJ,ESFP","INTJ,ISTP","INTJ,ESTP","INTJ,ISFJ","INTJ,ESFJ","INTJ,ISTJ","INTJ,ESTJ","ENTJ,ENTJ","ENTJ,INTP","ENTJ,ENTP","ENTJ,ISFP","ENTJ,ESFP","ENTJ,ISTP","ENTJ,ESTP","ENTJ,ISFJ","ENTJ,ESFJ","ENTJ,ISTJ","ENTJ,ESTJ","INTP,INTP","INTP,ENTP","INTP,ISFP","INTP,ESFP","INTP,ISTP","INTP,ESTP","INTP,ISFJ","INTP,ESFJ","INTP,ISTJ","INTP,ESTJ","ENTP,ENTP","ENTP,ISFP","ENTP,ESFP","ENTP,ISTP","ENTP,ESTP","ENTP,ISFJ","ENTP,ESFJ","ENTP,ISTJ","ENTP,ESTJ","ISFP,ISFP","ISFP,ESFP","ISFP,ISTP","ISFP,ESTP","ISFP,ISFJ","ISFP,ESFJ","ISFP,ISTJ","ISFP,ESTJ","ESFP,ESFP","ESFP,ISTP","ESFP,ESTP","ESFP,ISFJ","ESFP,ESFJ","ESFP,ISTJ","ESFP,ESTJ","ISTP,ISTP","ISTP,ESTP","ISTP,ISFJ","ISTP,ESFJ","ISTP,ISTJ","ISTP,ESTJ","ESTP,ESTP","ESTP,ISFJ","ESTP,ESFJ","ESTP,ISTJ","ESTP,ESTJ","ISFJ,ISFJ","ISFJ,ESFJ","ISFJ,ISTJ","ISFJ,ESTJ","ESFJ,ESFJ","ESFJ,ISTJ","ESFJ,ESTJ","ISTJ,ISTJ","ISTJ,ESTJ","ESTJ,ESTJ"]

function deDupe(string1, string2) {
    if (list.includes(string1) && list.includes(string2)){
        console.log("good choices, now...");
        if (string1===string2){
        console.log("same!")
        const pair = string1 + "," + string2
        return pair
        } else {
        var p = string1 + "," + string2
        if (!pairs.includes(p)){
        console.log("swapping...")
        p = string2 + "," + string1
        }
        const pair = p
        return pair
    }
  }
}

console.log("Two of the same: " + deDupe("ENTP","ENTP"))
console.log("Already in order: " + deDupe("ISFJ","ESTJ"))
console.log("Bass Ackwards: " + deDupe("INTP","ESTJ"))

