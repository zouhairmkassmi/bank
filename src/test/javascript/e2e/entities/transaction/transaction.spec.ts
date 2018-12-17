import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { TransactionComponentsPage, TransactionUpdatePage } from './transaction.page-object';

describe('Transaction e2e test', () => {
    let navBarPage: NavBarPage;
    let transactionUpdatePage: TransactionUpdatePage;
    let transactionComponentsPage: TransactionComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Transactions', () => {
        navBarPage.goToEntity('transaction');
        transactionComponentsPage = new TransactionComponentsPage();
        expect(transactionComponentsPage.getTitle()).toMatch(/bankApp.transaction.home.title/);
    });

    it('should load create Transaction page', () => {
        transactionComponentsPage.clickOnCreateButton();
        transactionUpdatePage = new TransactionUpdatePage();
        expect(transactionUpdatePage.getPageTitle()).toMatch(/bankApp.transaction.home.createOrEditLabel/);
        transactionUpdatePage.cancel();
    });

    it('should create and save Transactions', () => {
        transactionComponentsPage.clickOnCreateButton();
        transactionUpdatePage.setRefTInput('refT');
        expect(transactionUpdatePage.getRefTInput()).toMatch('refT');
        transactionUpdatePage.setMontantInput('5');
        expect(transactionUpdatePage.getMontantInput()).toMatch('5');
        transactionUpdatePage.setDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(transactionUpdatePage.getDateInput()).toContain('2001-01-01T02:30');
        // transactionUpdatePage.contratSelectLastOption();
        transactionUpdatePage.save();
        expect(transactionUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
