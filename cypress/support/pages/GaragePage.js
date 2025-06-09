export class GaragePage {
  get addCarButton() {
    return cy.get('div.panel-page_heading .btn-primary');
  }

  get brandDropdown() {
    return cy.get('#addCarBrand');
  }

  get modelDropdown() {
    return cy.get('#addCarModel');
  }

  get mileageField() {
    return cy.get('#addCarMileage');
  }

  get submitAddingFormButton() {
    return cy.get('app-add-car-modal .btn-primary')
  }

  get addCarFormModalHeader() {
    return cy.get('.modal-header');
  }

  get carNamesList() {
    return cy.get('p.car_name');
  }

  visit() {
    cy.visit('/panel/garage')
  }

  addNewCar(brand, model, mileage) {
    this.addCarButton.click();
    this.brandDropdown.select(brand);
    this.modelDropdown.select(model);
    this.mileageField.type(mileage);
    this.submitAddingFormButton.click();
  }

  getLastCarFromList() {
    return this.carNamesList.first();
  }

  openFuelExpenseFormForLastCar() {
  cy.get('.car')
    .first()
    .within(() => {
      cy.get('button.car_add-expense').click();
    });
}
}

export default new GaragePage();