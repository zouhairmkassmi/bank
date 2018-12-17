import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { ProduitComponentsPage, ProduitUpdatePage } from './produit.page-object';
import * as path from 'path';

describe('Produit e2e test', () => {
    let navBarPage: NavBarPage;
    let produitUpdatePage: ProduitUpdatePage;
    let produitComponentsPage: ProduitComponentsPage;
    const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Produits', () => {
        navBarPage.goToEntity('produit');
        produitComponentsPage = new ProduitComponentsPage();
        expect(produitComponentsPage.getTitle()).toMatch(/bankApp.produit.home.title/);
    });

    it('should load create Produit page', () => {
        produitComponentsPage.clickOnCreateButton();
        produitUpdatePage = new ProduitUpdatePage();
        expect(produitUpdatePage.getPageTitle()).toMatch(/bankApp.produit.home.createOrEditLabel/);
        produitUpdatePage.cancel();
    });

    it('should create and save Produits', () => {
        produitComponentsPage.clickOnCreateButton();
        produitUpdatePage.setNomInput('nom');
        expect(produitUpdatePage.getNomInput()).toMatch('nom');
        produitUpdatePage.setQuantiteDisponibleInput('5');
        expect(produitUpdatePage.getQuantiteDisponibleInput()).toMatch('5');
        produitUpdatePage.setPictureInput(absolutePath);
        produitUpdatePage.save();
        expect(produitUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
