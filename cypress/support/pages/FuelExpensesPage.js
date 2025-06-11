export class ExpensesModal {
  get carSelectDropdown() {
    return cy.get('#carSelectDropdown');
  }
}

export default new ExpensesModal();