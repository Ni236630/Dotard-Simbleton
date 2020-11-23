import { agent } from "./agent.js";
import { useBusiness } from "./BusinessProvider.js";

const contentTarget = document.querySelector(".agents")



export const useAgents = ()=> {
  const businessList = useBusiness()
  contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"
  
businessList.map(agentObject => {
     const agents = {
       name: agentObject.purchasingAgent,
       phoneWork: agentObject.phoneWork,
       companyName: agentObject.companyName,
      } 
    console.log("test:map from inside function",agents)
    //return agents
    return contentTarget.innerHTML += agent(agents)

  })
 
   
}
  
