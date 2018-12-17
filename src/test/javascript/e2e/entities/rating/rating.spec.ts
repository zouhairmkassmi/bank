import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { RatingComponentsPage, RatingUpdatePage } from './rating.page-object';

describe('Rating e2e test', () => {
    let navBarPage: NavBarPage;
    let ratingUpdatePage: RatingUpdatePage;
    let ratingComponentsPage: RatingComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Ratings', () => {
        navBarPage.goToEntity('rating');
        ratingComponentsPage = new RatingComponentsPage();
        expect(ratingComponentsPage.getTitle()).toMatch(/bankApp.rating.home.title/);
    });

    it('should load create Rating page', () => {
        ratingComponentsPage.clickOnCreateButton();
        ratingUpdatePage = new RatingUpdatePage();
        expect(ratingUpdatePage.getPageTitle()).toMatch(/bankApp.rating.home.createOrEditLabel/);
        ratingUpdatePage.cancel();
    });

    it('should create and save Ratings', () => {
        ratingComponentsPage.clickOnCreateButton();
        ratingUpdatePage.setValueInput('5');
        expect(ratingUpdatePage.getValueInput()).toMatch('5');
        ratingUpdatePage.setOpenionInput('openion');
        expect(ratingUpdatePage.getOpenionInput()).toMatch('openion');
        ratingUpdatePage.save();
        expect(ratingUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
