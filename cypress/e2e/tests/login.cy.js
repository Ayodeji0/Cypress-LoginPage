const loginPage = require ('../PageObjects/LoginPage.js')
const OtpPage = require ('../PageObjects/OtpPage.js')
describe('Login Page Test',() => {

    beforeEach(()=>{
     cy.visit('https://qa-zeus-dashboard.hydrogenpay.com/')   
     
    });

       it('login with valid', () => {
         loginPage.login('Chimezule.uchendu@gmail.com', 'Password321$')

            // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    cy.log(`Generated OTP: ${otp}`);

    // Enter OTP and verify
    OtpPage.enterOtp(otp);
    OtpPage.verifyOtp();

    // Assert successful login
    cy.url().should('include', '/merchants-list');
        // OtpPage.loginWithRandomOtp()
      
    })

  
})



