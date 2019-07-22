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
                    for (i=0; i<dataArr.length;i++){

                        if(parseFloat(dataArr[i])){
                            sum+=parseFloat(dataArr[i])
                        }
                        
                    }
                    console.log("You have a total of " + sum.toFixed(2));
                }

                function deposit(){
                    fs.appendFile("bank.txt", ","+value, function(error){
                        if (error){
                            return console.log("error")
                        }
                        console.log("Deposited " + value + ".");
                    })
                }

                function withdraw(){
                    fs.appendFile("bank.txt", ', -'+ value, function(error){
                        if (error){
                            return console.log("error")
                        }
                        console.log("withdrew " + value + ".");
                    })

                }
        }

})
