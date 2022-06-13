onmessage = (message) =>{
    let sum = 0; 
    let i =0;
    for( ; i<1000000000; i+=1){
        sum+= i;
    }
    postMessage(sum);
}