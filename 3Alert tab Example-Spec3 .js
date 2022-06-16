///<reference types = 'Cypress'/>

describe('Switch To Alert ',function(){

  it ('Alert Example',function(){
   
   //Switch To Alert Example
    c
    
   //Alert

    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()

    cy.on('window:alert',(string1) => {
    expect(string1).to.be.equal('Hello , share this practice page and share your knowledge')

    })

    cy.on('window:confirm',(string2) => {
      expect(string2).to.be.equal('Hello , Are you sure you want to confirm?')
  
    })

   //Switch Tab Example
   
   cy.get('#opentab').invoke('removeAttr','target').click()
   cy.url().should('include','https://www.rahulshettyacademy.com/#/index')
   //cy.url().contains('rahulshettyacademy')


   
  })
})
