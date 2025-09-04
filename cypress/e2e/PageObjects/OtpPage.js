class OtpPage{
    
    otpField(){
        return cy.get('input [name="otp"')
    }

    submitOtpButton(){
        return cy.contains('button', 'Verify OTP')
    }

    resendOtpButton(){
        return cy.contains('button', 'Resend OTP')
    }

    timer () {
        return cy.get('otp-timer')
    }


    //  ENTERING RANDOM OTP

    enterRandomOtp(){
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otpField().clear().type(randomOtp, { delay: 200 });
    }

    enterShortOtp(){
    this.otpField().clear().type('123');
    }

    enterLongOtp(){
    this.otpField().clear().type('123676772');
    }
    
    submitOtp(){
        this.submitOtpButton().click()
    }
    loginWithRandomOtp() {
        this.enterRandomOtp();
        this.submitOtpButton();
    }
}

module.exports = new OtpPage()