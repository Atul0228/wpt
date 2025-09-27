function prime()
{
    // let num=process.argv[2];
    // for(let i=2;i<num/2;i++)
    // {
    //     if(num%i==0)
    //     {
    //         console.log(i);
    //     }
        
    // }

    let count=0;
    let sum3=0;
    let arr=[1,2,3,4,5,6,7,8,9,10]

     for(let i=0;i<10;i++)
    {
        let num=arr[i];
        if(arr[i]==1 || arr[i]==2)
        {
            sum3+=arr[i];
            count++;
        }

        if(arr[i]!=1 || arr[i]!=2)
        {
            for(let j=2;j<(num/2);j++)
            {
                if(arr[i]%j!=0)
                {
                    sum3+=arr[i];
                    count++;
                    console.log(arr[i]);
                }
            }
        }
    }
    
    console.log("Sum of even number are ",sum3);
    console.log("count are ",count);
}
prime()