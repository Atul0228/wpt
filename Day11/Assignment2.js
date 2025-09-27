function print(){
    console.log("Printing number from 1 - 100");

    for(let i=1;i<=100;i++)
    {
       
        if(i%3==0 && i%5==0 )
        {
            console.log("Foo Bar ",i);
           
        }
        else if(i%5==0)
        {
            console.log("Bar ",i);
        } else if(i%3==0)
        {
             console.log("Foo ",i);
        }else{
            console.log(i);
        }
    }
}
print();