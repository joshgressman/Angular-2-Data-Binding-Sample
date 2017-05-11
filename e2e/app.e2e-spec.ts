import { DataBindingSamplePage } from './app.po';

describe('data-binding-sample App', () => {
  let page: DataBindingSamplePage;

  beforeEach(() => {
    page = new DataBindingSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
