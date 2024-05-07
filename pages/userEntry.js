const { I } = inject();

module.exports = {

  // insert your locators and methods here

  userNameText: "#txtUserName",
  loginButton: "#btnLogin",
  passwordText: "#txtPassword",
  loginButton2: "#btnEmailSelect",

  login: function(){
    I.waitForElement(this.userNameText,50);
    I.waitForElement(this.loginButton);
    I.click(this.loginButton);
    I.waitForElement(this.passwordText,50);
    I.fillField(this.passwordText, "1234Ks**");
    I.waitForElement(this.loginButton2);
    I.click(this.loginButton2);
  }
}
