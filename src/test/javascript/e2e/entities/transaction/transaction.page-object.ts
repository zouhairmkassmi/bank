import { element, by, promise, ElementFinder } from 'protractor';

export class TransactionComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-transaction div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TransactionUpdatePage {
    pageTitle = element(by.id('jhi-transaction-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    refTInput = element(by.id('field_refT'));
    montantInput = element(by.id('field_montant'));
    dateInput = element(by.id('field_date'));
    contratSelect = element(by.id('field_contrat'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setRefTInput(refT): promise.Promise<void> {
        return this.refTInput.sendKeys(refT);
    }

    getRefTInput() {
        return this.refTInput.getAttribute('value');
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

    contratSelectLastOption(): promise.Promise<void> {
        return this.contratSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    contratSelectOption(option): promise.Promise<void> {
        return this.contratSelect.sendKeys(option);
    }

    getContratSelect(): ElementFinder {
        return this.contratSelect;
    }

    getContratSelectedOption() {
        return this.contratSelect.element(by.css('option:checked')).getText();
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
