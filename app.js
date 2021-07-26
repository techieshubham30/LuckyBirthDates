var btn=document.querySelector('.but');
var lucky=document.querySelector(".lucky");
var unlucky=document.querySelector(".unlucky");
lucky.style.display="none";
unlucky.style.display="none";
btn.addEventListener('click',showOutput);

function showOutput(){
    lucky.style.display="none";
    unlucky.style.display="none";
    var input1=document.querySelector('#inp1');
    var input2=document.querySelector("#inp2");
    var str=input1.value;
    var luckyNum= parseInt(input2.value);
    var outputLabel=document.querySelector('#output');
    
    var res=0;


    for(var i=0;i<str.length;i++){
        if(str[i]!="-"){
            res=res+parseInt(str[i]);

        }
    }

    if(res%luckyNum==0){
        outputLabel.innerText="Hurray!!You are a lucky person!";
        lucky.style.display="block";

        

    }else{

        outputLabel.innerText="Oops!!Your birthday is not a lucky number!";
        unlucky.style.display="block";


    }

}