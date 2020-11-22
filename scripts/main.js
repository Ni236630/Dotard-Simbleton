import { useBusiness } from "./BusinessProvider.js";
import { businessList } from "./BusinessList.js";
import { businessListNY } from "./BusinessListNY.js";

businessList()
businessListNY()

// test to make sure that the list of business is being returned
const businessOrder = useBusiness()
console.log("test: return business list", businessOrder)