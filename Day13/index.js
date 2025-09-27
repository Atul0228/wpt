let express = require('express');
let file1 = require('./MOCK_DATA.json');
let file2 = require('./MOCK_DATA.json');


let app=express();


let f=require('fs');
value=JSON.stringify(file1, null, 2); 
value123=JSON.stringify(file1);

app.get("/",(req,res)=>{
    res.end("Hello");
});

app.get("/user",(req,res)=>{

   f.writeFile('GetData.txt', value, (err) => {
  if (err) console.log("Error storing file");
});

res.end(value);
});

app.post("/userp",(req,res)=>{
     f.appendFile('PostData.txt',value+'\n',(err)=>{if(err){console.log("Error to store file")}});
    res.end(value);
});

app.get("/user/:id", (req, res) => {
  let id = Number(req.params.id);
//let parsedValue = JSON.parse(value); // value is a JSON string
  let user = file2.find(user => user.id === id);

  if (user) {
    res.json(user); // Sends JSON response
  } else {
    res.status(404).send("User not found");
  }
//res.json(user);
});

app.delete('/user/:id', (req, res) => {
    const id = Number(req.params.id);  // 15
    // console.log(id);
    const userIndex = file2.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = file2.splice(userIndex, 1);
    return res.json("Dae ");
});

// app.get("/user/:id",(req,res)=>{ 

//     let id = Number(req.params.id);

//     f.readFile("GetData.txt",'utf8',(err,value1)=>{ 
//         if(err) { res.write("error"); }
//         else{ 

//             for(let i=0;i<value.length;i++) 
//                 { 
//                 if(id===value1[i]) 
//                 { 
//                     res.write(value[i]); 
//                 }
//                 } 
//             } 
//         }
//     )
// }
// )


app.listen(7500);