///<reference types = 'Cypress'/>
///<reference types = 'cypress-iframe'/>
import 'cypress-iframe'


describe('Fraames',function(){

  it ('Frames test',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    //switch tab
    //cypress cant handle new tab & window the only suggection cypress suggect is to 
    //cypress dont support cross domain/ changing main domain 

    //Cypress recentlt start supporting frames

    // frame is nothing but a html document embedded in another html document
    //for i frame we need to install a pllugin where node modules are present
    //C:\Users\chakomma\CypressAutomation
    //npm install - D cypress-iframe

    cy.get('#opentab').then(function(e1){
      const url =e1.prop('href')
      cy.visit(url)
    })


    cy.frameLoaded('courses-iframe')
    cy.iframe().find('a[href="#/mentorship"]').eq(1).click()
   
    
  })
})
