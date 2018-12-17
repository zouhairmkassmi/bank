import { element, by, promise, ElementFinder } from 'protractor';

export class FournisseurComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-fournisseur div h2#page-heading span')).first();

    clickOnCreateButton(): promise.Promise<void> {
        return this.createButton.click();
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class FournisseurUpdatePage {
    pageTitle = element(by.id('jhi-fournisseur-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nomInput = element(by.id('field_nom'));
    telInput = element(by.id('field_tel'));
    faxInput = element(by.id('field_fax'));
    mailInput = element(by.id('field_mail'));
    logoInput = element(by.id('file_logo'));
    userSelect = element(by.id('field_user'));
    produitSelect = element(by.id('field_produit'));
    categorieSelect = element(by.id('field_categorie'));
    adresseSelect = element(by.id('field_adresse'));
    ratingSelect = element(by.id('field_rating'));
    contratSelect = element(by.id('field_contrat'));
    empruntSelect = element(by.id('field_emprunt'));

    getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    setNomInput(nom): promise.Promise<void> {
        return this.nomInput.sendKeys(nom);
    }

    getNomInput() {
        return this.nomInput.getAttribute('value');
    }

    setTelInput(tel): promise.Promise<void> {
        return this.telInput.sendKeys(tel);
    }

    getTelInput() {
        return this.telInput.getAttribute('value');
    }

    setFaxInput(fax): promise.Promise<void> {
        return this.faxInput.sendKeys(fax);
    }

    getFaxInput() {
        return this.faxInput.getAttribute('value');
    }

    setMailInput(mail): promise.Promise<void> {
        return this.mailInput.sendKeys(mail);
    }

    getMailInput() {
        return this.mailInput.getAttribute('value');
    }

    setLogoInput(logo): promise.Promise<void> {
        return this.logoInput.sendKeys(logo);
    }

    getLogoInput() {
        return this.logoInput.getAttribute('value');
    }

    userSelectLastOption(): promise.Promise<void> {
        return this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    userSelectOption(option): promise.Promise<void> {
        return this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
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

    categorieSelectLastOption(): promise.Promise<void> {
        return this.categorieSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    categorieSelectOption(option): promise.Promise<void> {
        return this.categorieSelect.sendKeys(option);
    }

    getCategorieSelect(): ElementFinder {
        return this.categorieSelect;
    }

    getCategorieSelectedOption() {
        return this.categorieSelect.element(by.css('option:checked')).getText();
    }

    adresseSelectLastOption(): promise.Promise<void> {
        return this.adresseSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    adresseSelectOption(option): promise.Promise<void> {
        return this.adresseSelect.sendKeys(option);
    }

    getAdresseSelect(): ElementFinder {
        return this.adresseSelect;
    }

    getAdresseSelectedOption() {
        return this.adresseSelect.element(by.css('option:checked')).getText();
    }

    ratingSelectLastOption(): promise.Promise<void> {
        return this.ratingSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    ratingSelectOption(option): promise.Promise<void> {
        return this.ratingSelect.sendKeys(option);
    }

    getRatingSelect(): ElementFinder {
        return this.ratingSelect;
    }

    getRatingSelectedOption() {
        return this.ratingSelect.element(by.css('option:checked')).getText();
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
