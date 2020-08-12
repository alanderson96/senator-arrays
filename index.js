import Senators from "./data/senators";

export const republicans = () => {
  const republicans = Senators.filter((senators) => {
    if (senators.party === "Republican") {
      return true;
    }
  });
  return republicans;
};

export const democrats = () => {
  const democrats = Senators.filter((senators) => {
    if (senators.party === "Democrat") {
      return true;
    }
  });
  return democrats;
};

export const independents = () => {
  const independents = Senators.filter((senators) => {
    if (senators.party === "Independent") {
      return true;
    }
  });
  return independents;
};

export const males = () => {
  const male = Senators.filter((senators) => {
    if (senators.person.gender === "male") {
      return true;
    }
  });
  return male;
};

export const females = () => {
  const femaleList = Senators.filter(
    (senator) => senator.person.gender === "female"
  );
  return femaleList;
};

export const byState = (state) => {
  const senators = Senators.filter((senator) => {
    if (state === senator.state) {
      return true;
    }
  });
  return senators;
};

export const mapping = () => {
  const senator = Senators.map((senator) => {
    let newSenator = {
     firstName: senator.person.firstname,
     lastName: senator.person.lastname,
     gender: senator.person.gender,
     party: senator.party
    }
   // console.log(newSenator);
    return newSenator;
     });
     return senator;
};

export const reducedCount = () => {
  let result = {
    republican: 0,
    democrat: 0,
    independent: 0
  }
   Senators.reduce((acc,cur) => {
    
    if(cur.party === "Republican") {
      result.republican = result.republican + 1;
    }
    if(cur.party === "Democrat") {
      result.democrat = result.democrat + 1;
    }
    if(cur.party === "Independent") {
      result.independent = result.independent + 1;
    }
  } , {})
  return result;
};


