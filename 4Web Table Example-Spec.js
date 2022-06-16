///<reference types = 'Cypress'/>

describe('Web Table Example',function(){

  it ('web Table',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#product.table-display tr td:nth-child(2)').each(($e1,index,$list) => {
    
      if ($e1.text().includes('Python')){
      cy.log($e1.text())

      //cy.get('#product.table-display tr td:nth-child(2)').eq(index).next().contains('25')
      //then 
      cy.get('#product.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
      { 
        const pricecopy = price.text()
        expect(pricecopy).to.be.equal('25')
      })

      /* 
      cy.get('.brand').then(function(logoelement)
      {
      cy.log(logoelement.text()) }) */
 
      

      }


    })
   
   
   
   
  })
})
