var fs=require('fs');

var operand=process.argv[2];
var value=process.argv[3];

fs.readFile("bank.txt", "utf8", function(error, data){

if (error){
    return console.log("error")
}
else{ 

switch(operand){

    case "total":
        total();
        break;
    case "deposit":
        deposit();
        break;
    case "withdraw":
        withdraw();
        break;
    case "lotto":
        lotto();
        break;

}
function total(){

    var dataArr=data.split(',');
    var sum=0;
    for (i=0; i<dataArr.length,i++){
          sum+=parseFloat(dataArr[i])
    }
}

function deposit(){
    fs.appendFile("bank.txt", value, function(error){
        if (error){
            return console.log("error")
        }
    })
}

function withdraw(){
    fs.appendFile("bank.txt", ', -'+ value, function(error){
        if (error){
            return console.log("error")
        }
    })

}


}

})
