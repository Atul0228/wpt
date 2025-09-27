function acceptCallback(name,callback)
{
   console.log(name);
   callback();
}
 function display()
    {
        console.log("Hello from User");
    }
acceptCallback("Atul",display);