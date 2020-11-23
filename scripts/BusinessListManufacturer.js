import { useBusiness } from "./BusinessProvider.js";
import { business } from "./Business.js";

const contentTarget = document.querySelector(".businessList--manufacturing")

export const businessListManufacturing = () => {
  const businessArray = useBusiness()
  contentTarget.innerHTML = "<h1>Manufaturing Businesses</h1>"
  
  businessArray.filter(
    function(businessObject){
    if (businessObject.companyIndustry === "Manufacturing"){
      return contentTarget.innerHTML += business(businessObject)}
    }
  );
}