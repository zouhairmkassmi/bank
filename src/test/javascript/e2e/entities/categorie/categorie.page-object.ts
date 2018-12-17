import { element, by, promise, ElementFinder } from 'protractor';

export class CategorieComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-categorie div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CategorieUpdatePage {
    pageTitle = element(by.id('jhi-categorie-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nomInput = element(by.id('field_nom'));
    produitSelect = element(by.id('field_produit'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setNomInput(nom): promise.Promise<void> {
        return this.nomInput.sendKeys(nom);
    }

    getNomInput() {
        return this.nomInput.getAttribute('value');
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
