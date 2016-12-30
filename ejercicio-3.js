function factorial(n){
    var total=1;
    
    if(n>0){
        for(i=1;i<=n;i++)
        {
            total=total*i;
        }
        return total;
    }
    else{
        return "null";
    }
}