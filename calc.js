//a simple calculator which takes in three input and output their mathematical operation
function calculate(){
 let input11 = document.getElementById("input1");
 let input21 = document.getElementById("input2");
 let input31 = document.getElementById("input3");
 let input1 = input11.value;
 let input2 = input21.value;
 let input3 = input31.value;
 let output=  document.getElementById("output");
 if(typeof Number(input1) ==="number" && typeof Number(input3)){
  if(input2 === "+"){
    let calc= +input1 + +input3;
    output.innerHTML = `The output of ${input1} ${input2} ${input3} = ${calc}`

  }
  else if(input2 === "-"){
    let calc= +input1 - +input3;
    output.innerHTML = `The output of ${input1} ${input2} ${input3} = ${calc}`
  }
  else if(input2 === "/"){
    let calc= +input1 / +input3;
    output.innerHTML = `The output of ${input1} ${input2} ${input3} = ${calc}`
  }
  else if(input2 === "*"){
    let calc= +input1 * +input3;
    output.innerHTML = `The output of ${input1} ${input2} ${input3} = ${calc}`
  }
  else{
    alert(input1)
  }
 }
}