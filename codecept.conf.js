const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: ['--disable-blink-features=AutomationControlled'] //to bypass the detection of site
        }
      },
      
      windowSize: "maximize"
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: "./pages/main.js",
    productDetailPage: "./pages/productDetail.js",
    userEntryPage: "./pages/userEntry.js"
  },
  name: 'hepsiBuradaUITestAutomationProject'
}