export class registerPage{


    weblocators={
        firstname:'#input-firstname',
        lastname:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        confirmpassword:'#input-confirm',
        confirmcheckbox:'input[type="checkbox"]',
        continurButton:'input[type="submit"]'
    }

    openUrl(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(Fname){
        cy.get(this.weblocators.firstname).type(Fname)
    }

    enterLastName(Lname){
        cy.get(this.weblocators.lastname).type(Lname)
    }

    enteremailID(email){
        cy.get(this.weblocators.email).type(email)
    }

    enterTelePhone(telephone){
        cy.get(this.weblocators.telephone).type(telephone)
    }

    enterpassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmpassword).type(password)
    }

    selectcheckbox(){
        cy.get(this.weblocators.confirmcheckbox).click();
    }

    selectcontinuebutton(){
        cy.get(this.weblocators.continurButton).click();
    }

}