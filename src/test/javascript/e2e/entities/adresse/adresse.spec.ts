import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { AdresseComponentsPage, AdresseUpdatePage } from './adresse.page-object';

describe('Adresse e2e test', () => {
    let navBarPage: NavBarPage;
    let adresseUpdatePage: AdresseUpdatePage;
    let adresseComponentsPage: AdresseComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Adresses', () => {
        navBarPage.goToEntity('adresse');
        adresseComponentsPage = new AdresseComponentsPage();
        expect(adresseComponentsPage.getTitle()).toMatch(/bankApp.adresse.home.title/);
    });

    it('should load create Adresse page', () => {
        adresseComponentsPage.clickOnCreateButton();
        adresseUpdatePage = new AdresseUpdatePage();
        expect(adresseUpdatePage.getPageTitle()).toMatch(/bankApp.adresse.home.createOrEditLabel/);
        adresseUpdatePage.cancel();
    });

    it('should create and save Adresses', () => {
        adresseComponentsPage.clickOnCreateButton();
        adresseUpdatePage.setPaysInput('pays');
        expect(adresseUpdatePage.getPaysInput()).toMatch('pays');
        adresseUpdatePage.setRegionInput('region');
        expect(adresseUpdatePage.getRegionInput()).toMatch('region');
        adresseUpdatePage.setVilleInput('ville');
        expect(adresseUpdatePage.getVilleInput()).toMatch('ville');
        adresseUpdatePage.setRueInput('rue');
        expect(adresseUpdatePage.getRueInput()).toMatch('rue');
        adresseUpdatePage.setCodePostalInput('5');
        expect(adresseUpdatePage.getCodePostalInput()).toMatch('5');
        adresseUpdatePage.save();
        expect(adresseUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
