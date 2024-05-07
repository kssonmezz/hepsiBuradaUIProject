/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type mainPage = typeof import('./pages/main.js');
type productDetailPage = typeof import('./pages/productDetail.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, mainPage: mainPage, productDetailPage: productDetailPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
