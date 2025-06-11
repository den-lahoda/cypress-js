export class ExpensesModal {
  get mileageField() {
    return cy.get('#addExpenseMileage');
  }

  get expenseLitersField() {
    return cy.get('#addExpenseLiters');
  }

  get expenseTotalCostField() {
    return cy.get('#addExpenseTotalCost');
  }

  get addExpenseButton() {
    return cy.get('app-add-expense-modal').find('button.btn.btn-primary');
  }

  updateMileage(mileage) {
    this.mileageField.type(mileage);
  }

  addLitersExpense(liters) {
    this.expenseLitersField.type(liters);
  }

  addTotalCostExpanse(totalCost) {
    this.expenseTotalCostField.type(totalCost);
  }

  saveExpenseChanges() {
    this.addExpenseButton.click();
  }
}

export default new ExpensesModal();