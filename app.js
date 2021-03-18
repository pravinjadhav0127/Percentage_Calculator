const totalBtn = document.getElementById('btn1');
const averageBtn = document.getElementById('btn2');
const gradeBtn = document.getElementById('btn3');
let totalMarks;
let averageMarks;
totalBtn.addEventListener("click", function (e) {
    let sub1 = document.getElementById('os').value;
    let sub2 = document.getElementById('dms').value;
    let sub3 = document.getElementById('php').value;
    let sub4 = document.getElementById('stat').value;
    let sub5 = document.getElementById('env').value;

  if (sub1>100 ||sub2>100 ||sub3>100 ||sub4>100 ||sub5>100 ) {
      alert('Please Enter the marks in range of 100 ');
  }else{
    totalMarks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
    document.getElementById('total').innerHTML = "Operating System : "+sub1+ " <br> DBMS-MySQL: "+sub2+  "<br> PHP : "+sub3+ "<br> Statistic: "+sub4+ "<br> Environment : "+sub5+ "<br>        <br> Total Marks = " +totalMarks;  
}

    console.log(`total marks = ${totalMarks}`);
})

averageBtn.addEventListener("click", function (e) {
    // if (sub1>100 ||sub2>100 ||sub3>100 ||sub4>100 ||sub5>100 ) {
    //     alert('Please Enter the marks in range of 100 ');
    // }else{
        averageMarks = (totalMarks / 500) * 100;
        document.getElementById('ave').innerHTML = " Your percentage is : " +averageMarks;
     
// 
   
    console.log(`total peracentage = ${averageMarks}`);
})

gradeBtn.addEventListener("click",function(e){
    let grade = "";

    if (averageMarks >= 80 ) {
        console.log("The Grade is A");
        grade = "A";
    }else if (averageMarks >= 60) {
        console.log("The Grade is B");
         grade = "B";
    }else if (averageMarks >= 40) {
        console.log("The Grade is c");  
         grade = "C"; 
    }else if (averageMarks >= 35) {
        console.log("The Grade is D");   
         grade = "D";
    }else{
        console.log(" Your are faild ");
          grade =  "Your are faild" ;
    }
     document.getElementById('grade').innerHTML = " Your Grade is : " +grade;
})


