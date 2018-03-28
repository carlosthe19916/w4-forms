import { W4FormsDemoPage } from './app.po';

describe('w4-forms-demo App', () => {
  let page: W4FormsDemoPage;

  beforeEach(() => {
    page = new W4FormsDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
