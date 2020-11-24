import { useBusiness } from "./BusinessProvider.js";
import { business } from "./Business.js";

const contentTarget = document.querySelector(".businessList--newYork")

export const businessListNY = () => {
  //const businessArray = useBusiness()
  contentTarget.innerHTML = "<h1>New York Businesses</h1>"
  
  // useBusiness().filter(
  //   function(businessObject){
  //   if (businessObject.addressStateCode === "NY"){
  //     return contentTarget.innerHTML += business(businessObject)}
  //   }
  // );
  
  useBusiness().forEach(
    (businessObject) => {
      if (businessObject.addressStateCode === "NY"){
        return  contentTarget.innerHTML += business(businessObject)
      }
     
    }
  );
}