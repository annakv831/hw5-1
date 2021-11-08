const LOGIN = "anna";
const PASSWORD = "qwer";

const authorize = () =>{
    let userPassword;
    let userLogin;
    let counter=3;
    
    do{
        userLogin = prompt("Ваш логин:");
        
        if(!userLogin){
            alert("Введите логин:");
            continue;
        }

        userPassword = prompt("Пароль:");
        if(!userPassword){
            alert("Введите пароль:");
            continue;
        }
        
        if(userPassword !== PASSWORD || userLogin !== LOGIN){
            counter--;
            alert("Данные неверны!");
            alert("У вас осталось " +counter+ " попытки ввести правильно логин и пароль");
            continue;

        } else {
            alert("Welcome!");
        }
        break;
      
    } while(counter!==0);
    
    

};
authorize();