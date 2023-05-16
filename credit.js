module.exports=getCredit;

function getCredit(subject) {

    if (subject>=90) return 10;
    else if(subject>=80 && subject<90) return 9;
    else if(subject>=70 && subject<80) return 8;
    else if(subject>=60 && subject<70) return 7;
    else if(subject>=50 && subject<60) return 6;
    else if(subject>=45 && subject<50) return 5;    
    else if(subject>=40 && subject<45) return 4;
    else return 0;

    
}