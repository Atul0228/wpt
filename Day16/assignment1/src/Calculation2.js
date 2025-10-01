export default function Calculation2(props)
{
        let num1=Number(props.num11);
        let num2=Number(props.num2);
        let operation=props.operation;
    let sum=0
        switch(operation)
        {
            case "Addition":
                {
                    return sum=num1+num2;
                }
            break;

            case "Subtraction":
                {
                    return sum=num1-num2;
                }
            break;

            case "Multiplication":
                {
                    return sum=num1*num2;
                }
            break;

            case "Division":
                {
                    return sum=num1/num2;
                }
            break;

            default:
                console.log("Enter the value first");
        }
    

    return(<>
    <h1>Calculation is : {sum}</h1>
    </>)
}