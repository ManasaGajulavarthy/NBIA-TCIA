import { browser, by, element } from 'protractor';

export class NbiaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nbia-root h1')).getText();
  }
}
