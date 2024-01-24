function details( name,rollno,classes,section,marks ){
    this.name=name,
    this.rollno=rollno,
    this.classes=classes,
    this.section =section ,
    this.marks= marks
    
    };

let ans=new details("shibu",
67,
"X"
,"B",
{
    
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});
function sumi(){
    let totalmarks=(ans.marks.maths+ans.marks.science+ans.marks.english+ans.marks.hindi+ans.marks.social_science);
    let percent=(totalmarks/500)*100;
    return(percent)
}
let finalpercent=sumi();




    
    
function printReportCard(){
    console.log("+----------------------+")
    console.log("|     REPORT CARD      |")
    console.log("+----------------------+")
    console.log(`|    Name    -   ${ans.name} |`)
    console.log(`|   Roll no   -      ${ans.rollno}|`)
    console.log(`|    Class  -    ${ans.classes}     |`)
    console.log(`|     Section   -    ${ans.section} |`)
    console.log(`|      Science - ${ans.marks.science}    |  `)
    console.log(`|   S.Sc     -       ${ans.marks. social_science}|`)
    console.log(`|       Maths-      ${ans.marks.maths} |`)
    console.log(`|     English- ${ans.marks.english}      |`)
    console.log(`|        Hindi-${ans.marks.hindi}      |`)
    console.log(`|      Prectage-${finalpercent}   |`)
    console.log("+----------------------+")

};
printReportCard()


