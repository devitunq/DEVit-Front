import _ from 'lodash'

describe('Full game test', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
  });

 it("renders without crashing", () => {
    cy.visit("/");
  });

  it('Play First level as a guest.', () => {
    cy.visit('/')
    cy.get('[data-testid=startButton]').click()
    cy.get('[data-testid=guestInputName').type('TestGuest')
    cy.get('[data-testid=guestNext]').click().should( () => expect(localStorage.getItem("accessToken")).to.exist)
    cy.get('[data-testid=guestJorgeChar]').click()
    cy.get('[data-testid=difSel_Easy]').click()
    cy.get('[data-testid="selectLevel_Easy_Level One"]').click()
    _.times(2, () => cy.get('[data-testid=upArrow]').click())
    _.times(3, () => cy.get('[data-testid=rightArrow]').click())
    cy.get('[data-testid=upArrow]').click()
    _.times(2, () => cy.get('[data-testid=rightArrow]').click())
    cy.get('[data-testid=upArrow]').click()
    cy.get('[data-testid=playButton]').click()
    cy.get('[data-testid=resText]', { timeout: 20000 }).should('contain', 'Excelente, lo has logrado de la mejor forma.')
    cy.get('[data-testid=selectLevelPopUp]').click()
  })
})