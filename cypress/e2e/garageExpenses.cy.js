import GaragePage from '../support/pages/GaragePage';
import ExpensesModal from '../support/pages/ExpensesModal';
import FuelExpensesPage from '../support/pages/FuelExpensesPage';
import { users } from '../fixtures/users';
import '../support/commands';

describe('Adding new cars', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.login(users.validUser);
  });

  it('Add [BMW-X5] car', () => {
    GaragePage.addNewCar('BMW', 'X5', 100);
    GaragePage.getLastCarFromList().should('have.text', 'BMW X5')
  });

  it('Add fuel expensive for new added car', () => {
    GaragePage.addNewCar('Porsche', 'Cayenne', 99);
    GaragePage.getLastCarFromList().should('have.text', 'Porsche Cayenne');
    GaragePage.openFuelExpenseFormForLastCar();
    ExpensesModal.updateMileage(140);
    ExpensesModal.addLitersExpense(54);
    ExpensesModal.addTotalCostExpanse(10);
    ExpensesModal.saveExpenseChanges();
    FuelExpensesPage.carSelectDropdown.should('be.visible')
      .and('contain.text', 'Porsche Cayenne');
  });
});
