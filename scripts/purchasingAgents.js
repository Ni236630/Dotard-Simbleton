import { business } from "./Business.js";
import { useBusiness } from "./BusinessProvider.js";

const contentTarget = document.querySelector(".agents")

export const useAgents = ()=> {
  const businessList = useBusiness()
  contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"
  
  businessList.map(businessObject => {
  return contentTarget.innerHTML += business(businessObject.purchasingAgent.nameFirst, businessObject.purchasingAgent.nameLast)
}) }
  
