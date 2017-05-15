import { NgforNgifRecapPage } from './app.po';

describe('ngfor-ngif-recap App', function() {
  let page: NgforNgifRecapPage;

  beforeEach(() => {
    page = new NgforNgifRecapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
