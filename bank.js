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
                    fs.appendFile("bank.txt", ", "+ value, function(error){
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
                function lotto(){
        
                    fs.appendFile("bank.txt", ', -.25', function(error){
                        if (error){
                            return console.log("error")
                        }
                    })
                        var chance=Math.floor((Math.random()*10)+1);
                        if (chance === 1){
                        
                            fs.appendFile("bank.txt", ", 2", function(error){
                                if(error){
                                    return console.log("error")
                                }
                            })

                            console.log("Congrats you won the lottery!");

                            // Otherwise we will tell them they lost 25 cents.
                        }
                           
                        else {
                            console.log("Sorry. You just lost 25 cents. Maybe you should get a job instead.");
                          }
                        
                }


        }

})
