import { element, by, promise, ElementFinder } from 'protractor';

export class CompteComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-compte div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CompteUpdatePage {
    pageTitle = element(by.id('jhi-compte-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    adressSolidtyInput = element(by.id('field_adressSolidty'));
    clientSelect = element(by.id('field_client'));
    fournisseurSelect = element(by.id('field_fournisseur'));
    transactionSelect = element(by.id('field_transaction'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setAdressSolidtyInput(adressSolidty): promise.Promise<void> {
        return this.adressSolidtyInput.sendKeys(adressSolidty);
    }

    getAdressSolidtyInput() {
        return this.adressSolidtyInput.getAttribute('value');
    }

    clientSelectLastOption(): promise.Promise<void> {
        return this.clientSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    clientSelectOption(option): promise.Promise<void> {
        return this.clientSelect.sendKeys(option);
    }

    getClientSelect(): ElementFinder {
        return this.clientSelect;
    }

    getClientSelectedOption() {
        return this.clientSelect.element(by.css('option:checked')).getText();
    }

    fournisseurSelectLastOption(): promise.Promise<void> {
        return this.fournisseurSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    fournisseurSelectOption(option): promise.Promise<void> {
        return this.fournisseurSelect.sendKeys(option);
    }

    getFournisseurSelect(): ElementFinder {
        return this.fournisseurSelect;
    }

    getFournisseurSelectedOption() {
        return this.fournisseurSelect.element(by.css('option:checked')).getText();
    }

    transactionSelectLastOption(): promise.Promise<void> {
        return this.transactionSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    transactionSelectOption(option): promise.Promise<void> {
        return this.transactionSelect.sendKeys(option);
    }

    getTransactionSelect(): ElementFinder {
        return this.transactionSelect;
    }

    getTransactionSelectedOption() {
        return this.transactionSelect.element(by.css('option:checked')).getText();
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
