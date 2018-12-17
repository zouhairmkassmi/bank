import { element, by, promise, ElementFinder } from 'protractor';

export class ProduitComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-produit div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProduitUpdatePage {
    pageTitle = element(by.id('jhi-produit-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nomInput = element(by.id('field_nom'));
    quantiteDisponibleInput = element(by.id('field_quantiteDisponible'));
    pictureInput = element(by.id('file_picture'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setNomInput(nom): promise.Promise<void> {
        return this.nomInput.sendKeys(nom);
    }

    getNomInput() {
        return this.nomInput.getAttribute('value');
    }

    setQuantiteDisponibleInput(quantiteDisponible): promise.Promise<void> {
        return this.quantiteDisponibleInput.sendKeys(quantiteDisponible);
    }

    getQuantiteDisponibleInput() {
        return this.quantiteDisponibleInput.getAttribute('value');
    }

    setPictureInput(picture): promise.Promise<void> {
        return this.pictureInput.sendKeys(picture);
    }

    getPictureInput() {
        return this.pictureInput.getAttribute('value');
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
