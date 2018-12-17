import { element, by, promise, ElementFinder } from 'protractor';

export class ContratComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-contrat div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ContratUpdatePage {
    pageTitle = element(by.id('jhi-contrat-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    refInput = element(by.id('field_ref'));
    quantiteCommanderInput = element(by.id('field_quantiteCommander'));
    produitSelect = element(by.id('field_produit'));
    empruntSelect = element(by.id('field_emprunt'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setRefInput(ref): promise.Promise<void> {
        return this.refInput.sendKeys(ref);
    }

    getRefInput() {
        return this.refInput.getAttribute('value');
    }

    setQuantiteCommanderInput(quantiteCommander): promise.Promise<void> {
        return this.quantiteCommanderInput.sendKeys(quantiteCommander);
    }

    getQuantiteCommanderInput() {
        return this.quantiteCommanderInput.getAttribute('value');
    }

    produitSelectLastOption(): promise.Promise<void> {
        return this.produitSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    produitSelectOption(option): promise.Promise<void> {
        return this.produitSelect.sendKeys(option);
    }

    getProduitSelect(): ElementFinder {
        return this.produitSelect;
    }

    getProduitSelectedOption() {
        return this.produitSelect.element(by.css('option:checked')).getText();
    }

    empruntSelectLastOption(): promise.Promise<void> {
        return this.empruntSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    empruntSelectOption(option): promise.Promise<void> {
        return this.empruntSelect.sendKeys(option);
    }

    getEmpruntSelect(): ElementFinder {
        return this.empruntSelect;
    }

    getEmpruntSelectedOption() {
        return this.empruntSelect.element(by.css('option:checked')).getText();
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
