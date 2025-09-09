
class OtpPage {

  otpField(index) {
    return cy.get(`[aria-label="Please enter OTP character ${index}"]`);
  }

  verifyButton() {
    return cy.get('#login');
  }

  enterOtp(otp) {
    // Wait for first OTP field to appear (up to 20 seconds)
    this.otpField(1).should('be.visible', { timeout: 15000 });

    // Enter each OTP digit
    otp.split('').forEach((digit, index) => {
      this.otpField(index + 1).type(digit);
    });
  }

  verifyOtp() {
    this.verifyButton().should('not.be.disabled').click();
  }
}

module.exports = new OtpPage();
