///<reference types = 'Cypress'/>

describe('Web Table Example',function(){

  it ('web Table',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    
    //Cypress dont support mouse hover 
    //cypress uses jquerry we have a method show which will actully open any menu which is hiding under that.
    //invoke is useed to call jquerry method's
    

    //Top is not immediate child #mousehover is not immediate parent  so it wont work 
    // cy.get('#mousehover').invoke('show')
    //cy.contains('Top').23wed3ce f-()
    // cy.url().should('include','top')
    

    //Resolving the issue issue 1
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    cy.url().should('include','top')


    //cypress has the ability to click hidden elements as well using force click -- method 2

    cy.contains('Top').click({force:true})
    cy.url().should('include','top')
    
   
   
   
  })
})
