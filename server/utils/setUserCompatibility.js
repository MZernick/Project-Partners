//switch to return array of objects that contain compatibility ratings by MBTI type

function setUserCompatibility(type){
switch (type) {

case 'ENFP': return [	        
    {'type' : 'INFP' , 'rating' : 4},
	{'type' : 'ENFP' , 'rating' : 4},
	{'type' : 'INFJ' , 'rating' : 5},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 5},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 4},
	{'type' : 'ENTP' , 'rating' : 4},
	{'type' : 'ISFP' , 'rating' : 1},
	{'type' : 'ESFP' , 'rating' : 1},
	{'type' : 'ISTP' , 'rating' : 1},
	{'type' : 'ESTP' , 'rating' : 1},
	{'type' : 'ISFJ' , 'rating' : 1},
	{'type' : 'ESFJ' , 'rating' : 1},
	{'type' : 'ISTJ' , 'rating' : 1},
	{'type' : 'ESTJ' , 'rating' : 1},
	];
case 'INFJ' : return [	
    {'type' : 'INFP' , 'rating' : 4},
	{'type' : 'ENFP' , 'rating' : 5},
	{'type' : 'INFJ' , 'rating' : 4},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 4},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 4},
	{'type' : 'ENTP' , 'rating' : 5},
	{'type' : 'ISFP' , 'rating' : 1},
	{'type' : 'ESFP' , 'rating' : 1},
	{'type' : 'ISTP' , 'rating' : 1},
	{'type' : 'ESTP' , 'rating' : 1},
	{'type' : 'ISFJ' , 'rating' : 1},
	{'type' : 'ESFJ' , 'rating' : 1},
	{'type' : 'ISTJ' , 'rating' : 1},
	{'type' : 'ESTJ' , 'rating' : 1},
	];
case 'ENFJ' : return [	
    {'type' : 'INFP' , 'rating' : 5},
	{'type' : 'ENFP' , 'rating' : 4},
	{'type' : 'INFJ' , 'rating' : 4},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 4},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 4},
	{'type' : 'ENTP' , 'rating' : 4},
	{'type' : 'ISFP' , 'rating' : 5},
	{'type' : 'ESFP' , 'rating' : 1},
	{'type' : 'ISTP' , 'rating' : 1},
	{'type' : 'ESTP' , 'rating' : 1},
	{'type' : 'ISFJ' , 'rating' : 1},
	{'type' : 'ESFJ' , 'rating' : 1},
	{'type' : 'ISTJ' , 'rating' : 1},
	{'type' : 'ESTJ' , 'rating' : 1},
	];
case 'INTJ' : return [	
    {'type' : 'INFP' , 'rating' : 4},
	{'type' : 'ENFP' , 'rating' : 5},
	{'type' : 'INFJ' , 'rating' : 4},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 4},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 4},
	{'type' : 'ENTP' , 'rating' : 5},
	{'type' : 'ISFP' , 'rating' : 3},
	{'type' : 'ESFP' , 'rating' : 3},
	{'type' : 'ISTP' , 'rating' : 3},
	{'type' : 'ESTP' , 'rating' : 3},
	{'type' : 'ISFJ' , 'rating' : 2},
	{'type' : 'ESFJ' , 'rating' : 2},
	{'type' : 'ISTJ' , 'rating' : 2},
	{'type' : 'ESTJ' , 'rating' : 2},
	];
case 'ENTJ' : return [	
    {'type' : 'INFP' , 'rating' : 5},
	{'type' : 'ENFP' , 'rating' : 4},
	{'type' : 'INFJ' , 'rating' : 4},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 4},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 5},
	{'type' : 'ENTP' , 'rating' : 4},
	{'type' : 'ISFP' , 'rating' : 3},
	{'type' : 'ESFP' , 'rating' : 3},
	{'type' : 'ISTP' , 'rating' : 3},
	{'type' : 'ESTP' , 'rating' : 3},
	{'type' : 'ISFJ' , 'rating' : 3},
	{'type' : 'ESFJ' , 'rating' : 3},
	{'type' : 'ISTJ' , 'rating' : 3},
	{'type' : 'ESTJ' , 'rating' : 3},
	];
case 'INTP' : return [	
    {'type' : 'INFP' , 'rating' : 4},
	{'type' : 'ENFP' , 'rating' : 4},
	{'type' : 'INFJ' , 'rating' : 5},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 5},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 4},
	{'type' : 'ENTP' , 'rating' : 4},
	{'type' : 'ISFP' , 'rating' : 3},
	{'type' : 'ESFP' , 'rating' : 3},
	{'type' : 'ISTP' , 'rating' : 3},
	{'type' : 'ESTP' , 'rating' : 3},
	{'type' : 'ISFJ' , 'rating' : 2},
	{'type' : 'ESFJ' , 'rating' : 2},
	{'type' : 'ISTJ' , 'rating' : 2},
	{'type' : 'ESTJ' , 'rating' : 5},
	];
case 'ENTP' : return [	
    {'type' : 'INFP' , 'rating' : 4},
	{'type' : 'ENFP' , 'rating' : 4},
	{'type' : 'INFJ' , 'rating' : 5},
	{'type' : 'ENFJ' , 'rating' : 4},
	{'type' : 'INTJ' , 'rating' : 5},
	{'type' : 'ENTJ' , 'rating' : 4},
	{'type' : 'INTP' , 'rating' : 4},
	{'type' : 'ENTP' , 'rating' : 4},
	{'type' : 'ISFP' , 'rating' : 3},
	{'type' : 'ESFP' , 'rating' : 3},
	{'type' : 'ISTP' , 'rating' : 3},
	{'type' : 'ESTP' , 'rating' : 3},
	{'type' : 'ISFJ' , 'rating' : 2},
	{'type' : 'ESFJ' , 'rating' : 2},
	{'type' : 'ISTJ' , 'rating' : 2},
	{'type' : 'ESTJ' , 'rating' : 2},
	];
case 'ISFP' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 5},
	{'type' : 'INTJ' , 'rating' : 3},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 3},
	{'type' : 'ENTP' , 'rating' : 3},
	{'type' : 'ISFP' , 'rating' : 2},
	{'type' : 'ESFP' , 'rating' : 2},
	{'type' : 'ISTP' , 'rating' : 2},
	{'type' : 'ESTP' , 'rating' : 2},
	{'type' : 'ISFJ' , 'rating' : 3},
	{'type' : 'ESFJ' , 'rating' : 5},
	{'type' : 'ISTJ' , 'rating' : 3},
	{'type' : 'ESTJ' , 'rating' : 5},
	];
case 'ESFP' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 5},
	{'type' : 'INTJ' , 'rating' : 3},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 3},
	{'type' : 'ENTP' , 'rating' : 3},
	{'type' : 'ISFP' , 'rating' : 2},
	{'type' : 'ESFP' , 'rating' : 2},
	{'type' : 'ISTP' , 'rating' : 2},
	{'type' : 'ESTP' , 'rating' : 2},
	{'type' : 'ISFJ' , 'rating' : 3},
	{'type' : 'ESFJ' , 'rating' : 5},
	{'type' : 'ISTJ' , 'rating' : 3},
	{'type' : 'ESTJ' , 'rating' : 5},
	];
case 'ISTP' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 1},
	{'type' : 'INTJ' , 'rating' : 3},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 3},
	{'type' : 'ENTP' , 'rating' : 3},
	{'type' : 'ISFP' , 'rating' : 2},
	{'type' : 'ESFP' , 'rating' : 2},
	{'type' : 'ISTP' , 'rating' : 2},
	{'type' : 'ESTP' , 'rating' : 2},
	{'type' : 'ISFJ' , 'rating' : 3},
	{'type' : 'ESFJ' , 'rating' : 5},
	{'type' : 'ISTJ' , 'rating' : 3},
	{'type' : 'ESTJ' , 'rating' : 5},
	];
case 'ESTP' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 1},
	{'type' : 'INTJ' , 'rating' : 3},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 3},
	{'type' : 'ENTP' , 'rating' : 3},
	{'type' : 'ISFP' , 'rating' : 2},
	{'type' : 'ESFP' , 'rating' : 2},
	{'type' : 'ISTP' , 'rating' : 2},
	{'type' : 'ESTP' , 'rating' : 2},
	{'type' : 'ISFJ' , 'rating' : 5},
	{'type' : 'ESFJ' , 'rating' : 3},
	{'type' : 'ISTJ' , 'rating' : 5},
	{'type' : 'ESTJ' , 'rating' : 3},
	];
case 'ISFJ' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 1},
	{'type' : 'INTJ' , 'rating' : 2},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 2},
	{'type' : 'ENTP' , 'rating' : 2},
	{'type' : 'ISFP' , 'rating' : 3},
	{'type' : 'ESFP' , 'rating' : 5},
	{'type' : 'ISTP' , 'rating' : 3},
	{'type' : 'ESTP' , 'rating' : 5},
	{'type' : 'ISFJ' , 'rating' : 4},
	{'type' : 'ESFJ' , 'rating' : 4},
	{'type' : 'ISTJ' , 'rating' : 4},
	{'type' : 'ESTJ' , 'rating' : 4},
	];
case 'ESFJ' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 1},
	{'type' : 'INTJ' , 'rating' : 2},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 2},
	{'type' : 'ENTP' , 'rating' : 2},
	{'type' : 'ISFP' , 'rating' : 5},
	{'type' : 'ESFP' , 'rating' : 3},
	{'type' : 'ISTP' , 'rating' : 5},
	{'type' : 'ESTP' , 'rating' : 3},
	{'type' : 'ISFJ' , 'rating' : 4},
	{'type' : 'ESFJ' , 'rating' : 4},
	{'type' : 'ISTJ' , 'rating' : 4},
	{'type' : 'ESTJ' , 'rating' : 4},
	];
case 'ISTJ' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 1},
	{'type' : 'INTJ' , 'rating' : 2},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 2},
	{'type' : 'ENTP' , 'rating' : 2},
	{'type' : 'ISFP' , 'rating' : 3},
	{'type' : 'ESFP' , 'rating' : 5},
	{'type' : 'ISTP' , 'rating' : 3},
	{'type' : 'ESTP' , 'rating' : 5},
	{'type' : 'ISFJ' , 'rating' : 4},
	{'type' : 'ESFJ' , 'rating' : 4},
	{'type' : 'ISTJ' , 'rating' : 4},
	{'type' : 'ESTJ' , 'rating' : 4},
	];
case 'ESTJ' : return [	
    {'type' : 'INFP' , 'rating' : 1},
	{'type' : 'ENFP' , 'rating' : 1},
	{'type' : 'INFJ' , 'rating' : 1},
	{'type' : 'ENFJ' , 'rating' : 1},
	{'type' : 'INTJ' , 'rating' : 2},
	{'type' : 'ENTJ' , 'rating' : 3},
	{'type' : 'INTP' , 'rating' : 5},
	{'type' : 'ENTP' , 'rating' : 2},
	{'type' : 'ISFP' , 'rating' : 5},
	{'type' : 'ESFP' , 'rating' : 3},
	{'type' : 'ISTP' , 'rating' : 5},
	{'type' : 'ESTP' , 'rating' : 3},
	{'type' : 'ISFJ' , 'rating' : 4},
	{'type' : 'ESFJ' , 'rating' : 4},
	{'type' : 'ISTJ' , 'rating' : 4},
	{'type' : 'ESTJ' , 'rating' : 4},
	];
    default : console.log('The compatibility switch in setUserCompatibility.js is unhappy');
};
};

//TO DO: make this function a module export
module.exports = {
    setUserCompatibility
}