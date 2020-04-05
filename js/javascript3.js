function changeParaText() {
    //after . you will see attributes and methods of this object
    //. means mine, his, her, your
    // document is my file
    // getElementById is one method belongs to document
    targetPara = document.getElementById("mypara");
    //my paragraph is an object
    //my paragraph has attribute innerText
    targetPara.innerText = "Hello World";
    targetPara.style.fontSize="50px";
    targetPara.style.backgroundColor= "red";
    targetPara.style.color = "white";
}

function changeMyValue(e) {
    e.innerHTML = "I changed";
}
