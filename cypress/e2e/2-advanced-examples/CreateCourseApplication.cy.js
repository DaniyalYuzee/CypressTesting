Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  describe('Visit the site, click on the Login link, and click on the Sign in button', () => {
      it('should visit the site, click on the Login link, and click on the Sign in button', () => {
  
        const randomName = generateRandomName();
        
        cy.visit('https://dev.yuzee.click');
  
      cy.contains('Sign in').click();
  //comment add
      cy.get('.row > :nth-child(1) > .form-control').clear()
      cy.get('.row > :nth-child(1) > .form-control').type('fdc65165a75b29@crankymonkey.info')
  
      cy.get('.pass-fild > .form-control').clear()
      cy.get('.pass-fild > .form-control').type('Admin12345!')
  
      cy.get('form.ng-dirty > .text-center > .btn').click()
      })
    })