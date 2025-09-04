const loginPage = require ('../PageObjects/LoginPage.js')
const OtpPage = require ('../PageObjects/OtpPage.js')
describe('Login Page Test',() => {

    beforeEach(()=>{
     cy.visit('https://qa-zeus-dashboard.hydrogenpay.com/')   
     
    });

       it('login with valid', () => {
         loginPage.login('Chimezule.uchendu@gmail.com', 'Password321$')
        OtpPage.loginWithRandomOtp()
      
    })

    // Login with correct credentials and enter otp
    // it('login with shortOTP', () => {
    //     OtpPage.enterShortOtp();
    //     OtpPage.submitOtp()
    //     cy.contains('Inavalid OTP').should('be.visible')
    // })
    // it('login with longOTP', () => {
    //     OtpPage.enterLongOtp();
    //     OtpPage.submitOtp()
    //     cy.contains('Inavalid OTP').should('be.visible')
    // })
})