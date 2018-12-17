import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { FournisseurComponentsPage, FournisseurUpdatePage } from './fournisseur.page-object';
import * as path from 'path';

describe('Fournisseur e2e test', () => {
    let navBarPage: NavBarPage;
    let fournisseurUpdatePage: FournisseurUpdatePage;
    let fournisseurComponentsPage: FournisseurComponentsPage;
    const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Fournisseurs', () => {
        navBarPage.goToEntity('fournisseur');
        fournisseurComponentsPage = new FournisseurComponentsPage();
        expect(fournisseurComponentsPage.getTitle()).toMatch(/bankApp.fournisseur.home.title/);
    });

    it('should load create Fournisseur page', () => {
        fournisseurComponentsPage.clickOnCreateButton();
        fournisseurUpdatePage = new FournisseurUpdatePage();
        expect(fournisseurUpdatePage.getPageTitle()).toMatch(/bankApp.fournisseur.home.createOrEditLabel/);
        fournisseurUpdatePage.cancel();
    });

    it('should create and save Fournisseurs', () => {
        fournisseurComponentsPage.clickOnCreateButton();
        fournisseurUpdatePage.setNomInput('nom');
        expect(fournisseurUpdatePage.getNomInput()).toMatch('nom');
        fournisseurUpdatePage.setTelInput('5');
        expect(fournisseurUpdatePage.getTelInput()).toMatch('5');
        fournisseurUpdatePage.setFaxInput('5');
        expect(fournisseurUpdatePage.getFaxInput()).toMatch('5');
        fournisseurUpdatePage.setMailInput('mail');
        expect(fournisseurUpdatePage.getMailInput()).toMatch('mail');
        fournisseurUpdatePage.setLogoInput(absolutePath);
        fournisseurUpdatePage.userSelectLastOption();
        // fournisseurUpdatePage.produitSelectLastOption();
        // fournisseurUpdatePage.categorieSelectLastOption();
        // fournisseurUpdatePage.adresseSelectLastOption();
        // fournisseurUpdatePage.ratingSelectLastOption();
        // fournisseurUpdatePage.contratSelectLastOption();
        fournisseurUpdatePage.empruntSelectLastOption();
        fournisseurUpdatePage.save();
        expect(fournisseurUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
