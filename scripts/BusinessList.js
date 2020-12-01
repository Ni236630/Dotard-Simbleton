import { useBusiness } from "./BusinessProvider.js";
import { business } from "./Business.js";


const contentTarget = document.querySelector(".business")

export const businessList = () => {
  const businessArray = useBusiness()
  contentTarget.innerHTML = "<h1>Active Businesses</h1>"
  
  businessArray.forEach(
    (businessObject) => {
      contentTarget.innerHTML += business(businessObject)
    }
  );
}

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                   
            */
// implement .find() for business here method here
            const businessArray = useBusiness()
             const foundBusiness =  
              businessArray.find(business => business.companyName.includes(keyPressEvent.target.value) || business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value))
            

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.phoneWork}
                </section>
                <section>
                <p>${foundBusiness.companyName}</p>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
            
            
            
            
        }
    });