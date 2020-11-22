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