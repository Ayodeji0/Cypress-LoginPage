
class LoginPage {

  // Locators
  emailField() {
    return cy.get('[name="email"]');
  }

  passwordField() {
    return cy.get('[name="password"]');
  }

  loginButton() {
    return cy.get('#login');
  }

  // Actions
  enterEmail(email) {
    this.emailField().clear().type(email).blur();
  }

  enterPassword(password) {
    this.passwordField().clear().type(password).blur();
  }

  clickLogin() {
    this.loginButton().should('not.be.disabled').click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}

module.exports = new LoginPage();
