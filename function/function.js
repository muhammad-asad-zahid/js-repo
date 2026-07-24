function total(){
    let input1 = parseInt( document.getElementById('g1').value);
    let input2 = parseInt(document.getElementById('g2').value);
    let input3 = parseInt(document.getElementById('g3').value);

    console.log();
     
    const totalnum = input1+input2+input3;

    let result =document.getElementById('result');

    result.innerText += totalnum;

}