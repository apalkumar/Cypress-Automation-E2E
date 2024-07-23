import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'
const registerObj = new registerPage()

describe('test automation', () =>{


    it('register flow', ()=>{

        registerObj.openUrl()
        registerObj.enterFirstName(registerData.FirstName)
        registerObj.enterLastName(registerData.LastName)
        registerObj.enteremailID(registerData.email)
        registerObj.enterTelePhone(registerData.Telephone)
        registerObj.enterpassword(registerData.Password)
        registerObj.selectcheckbox()
        registerObj.selectcontinuebutton()
    })
} )