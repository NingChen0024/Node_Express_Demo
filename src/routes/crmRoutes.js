import { addNewContact, 
         getContact,
         getContactWithId,
         updateContact,
         deleteContact
} from '../controllers/crmController'

const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      //middleware
      console.log(`Request from ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next()
    }, getContact)
    
    //post end point
    .post(addNewContact)
  
  app.route('/contact/:contactID')
    //get a specific contact
    .get(getContactWithId)
    
    //updating a specific contact
    .put(updateContact)

    //deleting a specific contact
    .delete(deleteContact)

}

export default routes