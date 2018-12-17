import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { CompteComponentsPage, CompteUpdatePage } from './compte.page-object';

describe('Compte e2e test', () => {
    let navBarPage: NavBarPage;
    let compteUpdatePage: CompteUpdatePage;
    let compteComponentsPage: CompteComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Comptes', () => {
        navBarPage.goToEntity('compte');
        compteComponentsPage = new CompteComponentsPage();
        expect(compteComponentsPage.getTitle()).toMatch(/bankApp.compte.home.title/);
    });

    it('should load create Compte page', () => {
        compteComponentsPage.clickOnCreateButton();
        compteUpdatePage = new CompteUpdatePage();
        expect(compteUpdatePage.getPageTitle()).toMatch(/bankApp.compte.home.createOrEditLabel/);
        compteUpdatePage.cancel();
    });

    it('should create and save Comptes', () => {
        compteComponentsPage.clickOnCreateButton();
        compteUpdatePage.setAdressSolidtyInput('adressSolidty');
        expect(compteUpdatePage.getAdressSolidtyInput()).toMatch('adressSolidty');
        compteUpdatePage.clientSelectLastOption();
        compteUpdatePage.fournisseurSelectLastOption();
        compteUpdatePage.transactionSelectLastOption();
        compteUpdatePage.save();
        expect(compteUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
