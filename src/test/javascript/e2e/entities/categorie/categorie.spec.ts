import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { CategorieComponentsPage, CategorieUpdatePage } from './categorie.page-object';

describe('Categorie e2e test', () => {
    let navBarPage: NavBarPage;
    let categorieUpdatePage: CategorieUpdatePage;
    let categorieComponentsPage: CategorieComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Categories', () => {
        navBarPage.goToEntity('categorie');
        categorieComponentsPage = new CategorieComponentsPage();
        expect(categorieComponentsPage.getTitle()).toMatch(/bankApp.categorie.home.title/);
    });

    it('should load create Categorie page', () => {
        categorieComponentsPage.clickOnCreateButton();
        categorieUpdatePage = new CategorieUpdatePage();
        expect(categorieUpdatePage.getPageTitle()).toMatch(/bankApp.categorie.home.createOrEditLabel/);
        categorieUpdatePage.cancel();
    });

    it('should create and save Categories', () => {
        categorieComponentsPage.clickOnCreateButton();
        categorieUpdatePage.setNomInput('nom');
        expect(categorieUpdatePage.getNomInput()).toMatch('nom');
        // categorieUpdatePage.produitSelectLastOption();
        categorieUpdatePage.save();
        expect(categorieUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
