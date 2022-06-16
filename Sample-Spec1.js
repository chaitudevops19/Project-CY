/// <reference types="cypress" />

describe('Testing UL',function(){

    it('CHeck Cisco UI log in',function(){

        cy.visit('https://ultimateqa.com/automation')
        //cy.get('#subscribe-field-blog_subscription-2').type('abc@gmail.com{enter}')

        cy.url().should('include','ultimateqa.com')
        cy.contains('Big page with many elements').click()

       Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
           return false
          })


          Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test

            if (err.message.includes('Failed to fetch'))
            return false
          })

        
        
    })

})