import { element, by, promise, ElementFinder } from 'protractor';

export class AdresseComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-adresse div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class AdresseUpdatePage {
    pageTitle = element(by.id('jhi-adresse-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    paysInput = element(by.id('field_pays'));
    regionInput = element(by.id('field_region'));
    villeInput = element(by.id('field_ville'));
    rueInput = element(by.id('field_rue'));
    codePostalInput = element(by.id('field_codePostal'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setPaysInput(pays): promise.Promise<void> {
        return this.paysInput.sendKeys(pays);
    }

    getPaysInput() {
        return this.paysInput.getAttribute('value');
    }

    setRegionInput(region): promise.Promise<void> {
        return this.regionInput.sendKeys(region);
    }

    getRegionInput() {
        return this.regionInput.getAttribute('value');
    }

    setVilleInput(ville): promise.Promise<void> {
        return this.villeInput.sendKeys(ville);
    }

    getVilleInput() {
        return this.villeInput.getAttribute('value');
    }

    setRueInput(rue): promise.Promise<void> {
        return this.rueInput.sendKeys(rue);
    }

    getRueInput() {
        return this.rueInput.getAttribute('value');
    }

    setCodePostalInput(codePostal): promise.Promise<void> {
        return this.codePostalInput.sendKeys(codePostal);
    }

    getCodePostalInput() {
        return this.codePostalInput.getAttribute('value');
    }

    save(): promise.Promise<void> {
        return this.saveButton.click();
    }

    cancel(): promise.Promise<void> {
        return this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
