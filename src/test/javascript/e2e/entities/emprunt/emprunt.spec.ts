import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { EmpruntComponentsPage, EmpruntUpdatePage } from './emprunt.page-object';
import * as path from 'path';

describe('Emprunt e2e test', () => {
    let navBarPage: NavBarPage;
    let empruntUpdatePage: EmpruntUpdatePage;
    let empruntComponentsPage: EmpruntComponentsPage;
    const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Emprunts', () => {
        navBarPage.goToEntity('emprunt');
        empruntComponentsPage = new EmpruntComponentsPage();
        expect(empruntComponentsPage.getTitle()).toMatch(/bankApp.emprunt.home.title/);
    });

    it('should load create Emprunt page', () => {
        empruntComponentsPage.clickOnCreateButton();
        empruntUpdatePage = new EmpruntUpdatePage();
        expect(empruntUpdatePage.getPageTitle()).toMatch(/bankApp.emprunt.home.createOrEditLabel/);
        empruntUpdatePage.cancel();
    });

    it('should create and save Emprunts', () => {
        empruntComponentsPage.clickOnCreateButton();
        empruntUpdatePage
            .getActivatedInput()
            .isSelected()
            .then(selected => {
                if (selected) {
                    empruntUpdatePage.getActivatedInput().click();
                    expect(empruntUpdatePage.getActivatedInput().isSelected()).toBeFalsy();
                } else {
                    empruntUpdatePage.getActivatedInput().click();
                    expect(empruntUpdatePage.getActivatedInput().isSelected()).toBeTruthy();
                }
            });
        empruntUpdatePage.setMontantInput('5');
        expect(empruntUpdatePage.getMontantInput()).toMatch('5');
        empruntUpdatePage.setDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(empruntUpdatePage.getDateInput()).toContain('2001-01-01T02:30');
        empruntUpdatePage.setPictureInput(absolutePath);
        empruntUpdatePage.save();
        expect(empruntUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
