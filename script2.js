const LOGIN = "anna";
const PASSWORD = "qwer";

const authorize = () =>{
    let userPassword;
    let userLogin;
    
    
    for(let i=3; i>0; i--){
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
            let counter=i-1;
            alert("Данные не верны! У вас осталось " +counter+ " попытки ввести правильно логин и пароль");
        } else {
            alert("Welcome!");
            break;
        }
     
    }
  
};
authorize();





