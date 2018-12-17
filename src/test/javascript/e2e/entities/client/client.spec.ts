import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { ClientComponentsPage, ClientUpdatePage } from './client.page-object';
import * as path from 'path';

describe('Client e2e test', () => {
    let navBarPage: NavBarPage;
    let clientUpdatePage: ClientUpdatePage;
    let clientComponentsPage: ClientComponentsPage;
    const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
    const absolutePath = path.resolve(__dirname, fileToUpload);

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Clients', () => {
        navBarPage.goToEntity('client');
        clientComponentsPage = new ClientComponentsPage();
        expect(clientComponentsPage.getTitle()).toMatch(/bankApp.client.home.title/);
    });

    it('should load create Client page', () => {
        clientComponentsPage.clickOnCreateButton();
        clientUpdatePage = new ClientUpdatePage();
        expect(clientUpdatePage.getPageTitle()).toMatch(/bankApp.client.home.createOrEditLabel/);
        clientUpdatePage.cancel();
    });

    it('should create and save Clients', () => {
        clientComponentsPage.clickOnCreateButton();
        clientUpdatePage.setNomInput('nom');
        expect(clientUpdatePage.getNomInput()).toMatch('nom');
        clientUpdatePage.setTelInput('5');
        expect(clientUpdatePage.getTelInput()).toMatch('5');
        clientUpdatePage.setPictureInput(absolutePath);
        clientUpdatePage.userSelectLastOption();
        // clientUpdatePage.ratingSelectLastOption();
        // clientUpdatePage.adresseSelectLastOption();
        // clientUpdatePage.contratSelectLastOption();
        clientUpdatePage.empruntSelectLastOption();
        clientUpdatePage.save();
        expect(clientUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
