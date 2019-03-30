import { NgStuffPage } from './app.po';

describe('ng-stuff App', function() {
  let page: NgStuffPage;

  beforeEach(() => {
    page = new NgStuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
