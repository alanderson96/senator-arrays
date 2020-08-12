const Senators = require ("./data/senators");

const reducedCount = () => {
  let result = {
    republican: 0,
    democrat: 0,
    independent: 0
  }
  let count = Senators.reduce((acc,cur) => {
    
    if(cur.party === "Republican") {
      result.republican = result.republican + 1;
    }
    if(cur.party === "Democrat") {
      result.democrat = result.democrat + 1;
    }
    if(cur.party === "Independent") {
      result.independent = result.independent + 1;
    }
  }, {})
  console.log(result, "reduce count")
  return result;
};
reducedCount()