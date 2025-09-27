function promiseFunction()
{
    let a = new Promise(function (resolve,reject){

        let name="Mukund";

        if(name === "Mukund")
        {
            console.log("ok");
             resolve();
        }else{
            console.log("Error");
           
        }

    });
a.then(
    function(value){console.log("This is write name")},
    function(error){console.log("This is Error")}
);

}

promiseFunction();