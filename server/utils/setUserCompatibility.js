//switch to return array of objects that contain compatibility ratings by MBTI type

function setUserCompatibility(type){
switch (type) {

    case 'INFP': return [	
            {'INFP' : 4},
            {'ENFP' : 4},
            {'INFJ' : 4},
            {'ENFJ' : 5},
            {'INTJ' : 4},
            {'ENTJ' : 5},
            {'INTP' : 4},
            {'ENTP' : 4},
            {'ISFP' : 1},
            {'ESFP' : 1},
            {'ISTP' : 1},
            {'ESTP' : 1},
            {'ISFJ' : 1},
            {'ESFJ' : 1},
            {'ISTJ' : 1},
            {'ESTJ' : 1}
        ];
        
    case 'ENFP': return [	
            {'INFP' : 4},
            {'ENFP' : 4},
            {'INFJ' : 5},
            {'ENFJ' : 4},
            {'INTJ' : 5},
            {'ENTJ' : 4},
            {'INTP' : 4},
            {'ENTP' : 4},
            {'ISFP' : 1},
            {'ESFP' : 1},
            {'ISTP' : 1},
            {'ESTP' : 1},
            {'ISFJ' : 1},
            {'ESFJ' : 1},
            {'ISTJ' : 1},
            {'ESTJ' : 1}
        ];
        
    case 'INFJ' : return [	
            { 'type': 'INFP','rating' : 4},
            {'type' : 'ENFP', 'rating' : 5},
            {'type': 'INFJ', 'rating' : 4},
            {'type':'ENFJ', 'rating' : 4},
            {'type':'INTJ', 'rating' : 4},
            {'type': 'ENTJ', 'rating' : 4},
            {'type' : 'INTP', 'rating' : 4},
            {'type' : 'ENTP', 'rating' : 5},
            {'type' : 'ISFP', 'rating' : 1},
            {'type' : 'ESFP', 'rating' : 1},
            {'type':'ISTP', 'rating' : 1},
            {'type': 'ESTP', 'rating' : 1},
            {'type': 'ISFJ', 'rating' : 1},
            {'type':  'ESFJ', 'rating' : 1},
            {'type' : 'ISTJ', 'rating' : 1},
            {'type': 'ESTJ', 'rating' : 1}
        ];
        
    case 'ENFJ' : return [	
            {'INFP' : 5},
            {'ENFP' : 4},
            {'INFJ' : 4},
            {'ENFJ' : 4},
            {'INTJ' : 4},
            {'ENTJ' : 4},
            {'INTP' : 4},
            {'ENTP' : 4},
            {'ISFP' : 5},
            {'ESFP' : 1},
            {'ISTP' : 1},
            {'ESTP' : 1},
            {'ISFJ' : 1},
            {'ESFJ' : 1},
            {'ISTJ' : 1},
            {'ESTJ' : 1}
        ];
        
    case 'INTJ' : return [	
            {'INFP' : 4},
            {'ENFP' : 5},
            {'INFJ' : 4},
            {'ENFJ' : 4},
            {'INTJ' : 4},
            {'ENTJ' : 4},
            {'INTP' : 4},
            {'ENTP' : 5},
            {'ISFP' : 3},
            {'ESFP' : 3},
            {'ISTP' : 3},
            {'ESTP' : 3},
            {'ISFJ' : 2},
            {'ESFJ' : 2},
            {'ISTJ' : 2},
            {'ESTJ' : 2}
        ];
        
    case 'ENTJ' : return [	
            {'INFP' : 5},
            {'ENFP' : 4},
            {'INFJ' : 4},
            {'ENFJ' : 4},
            {'INTJ' : 4},
            {'ENTJ' : 4},
            {'INTP' : 5},
            {'ENTP' : 4},
            {'ISFP' : 3},
            {'ESFP' : 3},
            {'ISTP' : 3},
            {'ESTP' : 3},
            {'ISFJ' : 3},
            {'ESFJ' : 3},
            {'ISTJ' : 3},
            {'ESTJ' : 3}
        ];
        
    case 'INTP' : return [	
            {'INFP' : 4},
            {'ENFP' : 4},
            {'INFJ' : 5},
            {'ENFJ' : 4},
            {'INTJ' : 5},
            {'ENTJ' : 4},
            {'INTP' : 4},
            {'ENTP' : 4},
            {'ISFP' : 3},
            {'ESFP' : 3},
            {'ISTP' : 3},
            {'ESTP' : 3},
            {'ISFJ' : 2},
            {'ESFJ' : 2},
            {'ISTJ' : 2},
            {'ESTJ' : 5}
        ];
        
    case 'ENTP' : return [	
            {'INFP' : 4},
            {'ENFP' : 4},
            {'INFJ' : 5},
            {'ENFJ' : 4},
            {'INTJ' : 5},
            {'ENTJ' : 4},
            {'INTP' : 4},
            {'ENTP' : 4},
            {'ISFP' : 3},
            {'ESFP' : 3},
            {'ISTP' : 3},
            {'ESTP' : 3},
            {'ISFJ' : 2},
            {'ESFJ' : 2},
            {'ISTJ' : 2},
            {'ESTJ' : 2}
        ];
        
    case 'ISFP' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 5},
            {'INTJ' : 3},
            {'ENTJ' : 3},
            {'INTP' : 3},
            {'ENTP' : 3},
            {'ISFP' : 2},
            {'ESFP' : 2},
            {'ISTP' : 2},
            {'ESTP' : 2},
            {'ISFJ' : 3},
            {'ESFJ' : 5},
            {'ISTJ' : 3},
            {'ESTJ' : 5}
        ];
        
    case 'ESFP' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 5},
            {'INTJ' : 3},
            {'ENTJ' : 3},
            {'INTP' : 3},
            {'ENTP' : 3},
            {'ISFP' : 2},
            {'ESFP' : 2},
            {'ISTP' : 2},
            {'ESTP' : 2},
            {'ISFJ' : 3},
            {'ESFJ' : 5},
            {'ISTJ' : 3},
            {'ESTJ' : 5}
        ];
        
    case 'ISTP' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 1},
            {'INTJ' : 3},
            {'ENTJ' : 3},
            {'INTP' : 3},
            {'ENTP' : 3},
            {'ISFP' : 2},
            {'ESFP' : 2},
            {'ISTP' : 2},
            {'ESTP' : 2},
            {'ISFJ' : 3},
            {'ESFJ' : 5},
            {'ISTJ' : 3},
            {'ESTJ' : 5}
        ];
        
    case 'ESTP' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 1},
            {'INTJ' : 3},
            {'ENTJ' : 3},
            {'INTP' : 3},
            {'ENTP' : 3},
            {'ISFP' : 2},
            {'ESFP' : 2},
            {'ISTP' : 2},
            {'ESTP' : 2},
            {'ISFJ' : 5},
            {'ESFJ' : 3},
            {'ISTJ' : 5},
            {'ESTJ' : 3}
        ];
        
    case 'ISFJ' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 1},
            {'INTJ' : 2},
            {'ENTJ' : 3},
            {'INTP' : 2},
            {'ENTP' : 2},
            {'ISFP' : 3},
            {'ESFP' : 5},
            {'ISTP' : 3},
            {'ESTP' : 5},
            {'ISFJ' : 4},
            {'ESFJ' : 4},
            {'ISTJ' : 4},
            {'ESTJ' : 4}
        ];
        
    case 'ESFJ' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 1},
            {'INTJ' : 2},
            {'ENTJ' : 3},
            {'INTP' : 2},
            {'ENTP' : 2},
            {'ISFP' : 5},
            {'ESFP' : 3},
            {'ISTP' : 5},
            {'ESTP' : 3},
            {'ISFJ' : 4},
            {'ESFJ' : 4},
            {'ISTJ' : 4},
            {'ESTJ' : 4}
        ];
        
    case 'ISTJ' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 1},
            {'INTJ' : 2},
            {'ENTJ' : 3},
            {'INTP' : 2},
            {'ENTP' : 2},
            {'ISFP' : 3},
            {'ESFP' : 5},
            {'ISTP' : 3},
            {'ESTP' : 5},
            {'ISFJ' : 4},
            {'ESFJ' : 4},
            {'ISTJ' : 4},
            {'ESTJ' : 4}
        ];
        
    case 'ESTJ' : return [	
            {'INFP' : 1},
            {'ENFP' : 1},
            {'INFJ' : 1},
            {'ENFJ' : 1},
            {'INTJ' : 2},
            {'ENTJ' : 3},
            {'INTP' : 5},
            {'ENTP' : 2},
            {'ISFP' : 5},
            {'ESFP' : 3},
            {'ISTP' : 5},
            {'ESTP' : 3},
            {'ISFJ' : 4},
            {'ESFJ' : 4},
            {'ISTJ' : 4},
            {'ESTJ' : 4}
        ];
    default : console.log('The compatibility switch in rating.js is unhappy');
};
};

//console.log(setUserCompatibility('INTJ')) 

//TO DO: make this function a module export
module.exports = {
    setUserCompatibility
}