import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { ContratComponentsPage, ContratUpdatePage } from './contrat.page-object';

describe('Contrat e2e test', () => {
    let navBarPage: NavBarPage;
    let contratUpdatePage: ContratUpdatePage;
    let contratComponentsPage: ContratComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Contrats', () => {
        navBarPage.goToEntity('contrat');
        contratComponentsPage = new ContratComponentsPage();
        expect(contratComponentsPage.getTitle()).toMatch(/bankApp.contrat.home.title/);
    });

    it('should load create Contrat page', () => {
        contratComponentsPage.clickOnCreateButton();
        contratUpdatePage = new ContratUpdatePage();
        expect(contratUpdatePage.getPageTitle()).toMatch(/bankApp.contrat.home.createOrEditLabel/);
        contratUpdatePage.cancel();
    });

    it('should create and save Contrats', () => {
        contratComponentsPage.clickOnCreateButton();
        contratUpdatePage.setRefInput('ref');
        expect(contratUpdatePage.getRefInput()).toMatch('ref');
        contratUpdatePage.setQuantiteCommanderInput('5');
        expect(contratUpdatePage.getQuantiteCommanderInput()).toMatch('5');
        // contratUpdatePage.produitSelectLastOption();
        contratUpdatePage.empruntSelectLastOption();
        contratUpdatePage.save();
        expect(contratUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
