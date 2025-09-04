class LoginPage {

    emailField(){
       return cy.get('[name="email"]');
    }

    passwordField(){
       return cy.get('[name="password"]');
    }

      loginButton(){
       return cy.get('#login');
    }

   //    forgotPasswordLink(){
   //     return cy.get('#login');
   //  }

    //  Actions
     enterEmail(email) {
        this.emailField().clear().type(email)
     }
     enterPassword(password) {
        this.passwordField().clear().type(password)
     }
     clickLogin() {
        this.loginButton().click()
     }

     clickForgotPassword() {
        this.forgotPasswordLink().click()
     }
     login(email, password){
        this.enterEmail(email)
        this.enterPassword(password)
        this.clickLogin()
     }
  

}
module.exports = new LoginPage();