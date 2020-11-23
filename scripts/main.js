import { useBusiness } from "./BusinessProvider.js";
import { businessList } from "./BusinessList.js";
import { businessListNY } from "./BusinessListNY.js";
import { businessListManufacturing } from "./BusinessListManufacturer.js";
import { useAgents } from "./purchasingAgents.js";

useAgents()
businessList()
businessListNY()
businessListManufacturing()

// test to make sure that the list of business is being returned
const businessOrder = useBusiness()
console.log("test: return business list", businessOrder)