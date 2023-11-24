
type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string

    }
}
// ANTES  function showWelcomeMessage(user) {  
// DEPOIS function showWelcomeMessage(user: User) {

// E AGORA COMEÇOU A OCORRER ERROS
    // A propriedade 'city' não existe no tipo 'User'.ts(2339) 
    // A propriedade 'state' não existe no tipo 'User'.ts(2339)
    // O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'User'.ts(2345)

function showWelcomeMessage(user: User) {

    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is 
    ${user.address.city} and your state is ${user.address.state}` ;
    
    
}

showWelcomeMessage({
   name:'John Doe',
   email: 'john@doe.com',
   address: {
    city: 'New York',
    state:'NY'
   }
});
