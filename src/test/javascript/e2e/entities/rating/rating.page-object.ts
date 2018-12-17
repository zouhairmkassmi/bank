import { element, by, promise, ElementFinder } from 'protractor';

export class RatingComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-rating div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class RatingUpdatePage {
    pageTitle = element(by.id('jhi-rating-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    valueInput = element(by.id('field_value'));
    openionInput = element(by.id('field_openion'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setValueInput(value): promise.Promise<void> {
        return this.valueInput.sendKeys(value);
    }

    getValueInput() {
        return this.valueInput.getAttribute('value');
    }

    setOpenionInput(openion): promise.Promise<void> {
        return this.openionInput.sendKeys(openion);
    }

    getOpenionInput() {
        return this.openionInput.getAttribute('value');
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
