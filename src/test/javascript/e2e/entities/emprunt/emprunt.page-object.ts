import { element, by, promise, ElementFinder } from 'protractor';

export class EmpruntComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-emprunt div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class EmpruntUpdatePage {
    pageTitle = element(by.id('jhi-emprunt-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    activatedInput = element(by.id('field_activated'));
    montantInput = element(by.id('field_montant'));
    dateInput = element(by.id('field_date'));
    pictureInput = element(by.id('file_picture'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    getActivatedInput() {
        return this.activatedInput;
    }
    setMontantInput(montant): promise.Promise<void> {
        return this.montantInput.sendKeys(montant);
    }

    getMontantInput() {
        return this.montantInput.getAttribute('value');
    }

    setDateInput(date): promise.Promise<void> {
        return this.dateInput.sendKeys(date);
    }

    getDateInput() {
        return this.dateInput.getAttribute('value');
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
