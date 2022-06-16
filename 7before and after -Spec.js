/// <reference types = 'cypress' />
import HomePage from '../4-PageObjects/HomePage';
import ProductPage from '../4-PageObjects/ProductPage';

describe ('Before functionality check', function(){

  before (() => {
  // root-level hook
  // runs once before all tests
  

  cy.fixture('example1').then(function(data)
  {
    this.data=data
   })

  })

  it('before each',function(){

    const homePage = new HomePage()
    const productPage = new ProductPage()
  
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    homePage.getnameEditBox().type(this.data.name)
    homePage.getGenderDropdown().select(this.data.gender)
    homePage.TwowaydatabindingBox().should('have.value',this.data.name) 
    homePage.getnameEditBox().should('have.attr','minlength','2')

    homePage.EntrepreneurRadioButton().should('be.disabled')
    //cy.get('#inlineRadio3').should('not.be.checked')
    //cy.get('.nav-link').contains('Shop').click()
    homePage.ShopTab().click()

    /*
    cy.get('div.card.h-100 div h4.card-title a').each(($el,index,$list) =>{
    cy.log($el.text())
    if($el.text().includes('Nokia'))
    {       
      cy.get('button.btn.btn-info').eq(index).click()
    }
 
    })0
    */

    //cy.selectproduct('Blackberry')
    //cy.selectproduct('Nokia')
    //cy.selectproduct(this.data.ProductName)
    
    //const array1 = this.data.ProductName;
    //cy.pause()  //Test will be paused here//Foe debugging
    //cy.debug() //Test will be paused here//Foe debugging

    this.data.ProductName.forEach(element => {
      
      cy.selectproduct(element)
      console.log(element)
    })

    //or
    /*
    this.data.ProductName.forEach(function(element)  {
      
      cy.selectproduct(element)
      console.log(element)
    })
    */

    productPage.getcheckoutButton().click()
    



  })
  

})  