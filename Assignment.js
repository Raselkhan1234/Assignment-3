function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
 var result=feetToMile(feet);
 var result2=Math.ceil(result);
 console.log(result2);
 

function woodCalculator(chair, table, bed){
    while(chair*1){
        console.log(chair);
        break;
    }
    while(table*3){
        console.log(table);
        break;
    }
    while(bed*5){
        console.log(bed);
        break;
    }
}
woodCalculator(chair,table,bed);

function brickCalculator(n){
    var brick=1000;
    if(n<=10){
    var result = n*brick*15;
    console.log(result);
    }
    else if(10<n<=20){
    var result = n*brick*12;
    console.log(result);
    }
    else{
    var result = n*brick*10
    console.log(result);
    }
    return result;
}
brickCalculator(n);
