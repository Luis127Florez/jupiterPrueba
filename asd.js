function makeGood(s) {
  let greatString = s;
  const isUpperCase = (string) => /^[A-Z]*$/.test(string);

  const hasImperfection = (chain) => {
    for (let i = 0; i < chain.length; i++) {
      if (
        (isUpperCase(chain[i]) || isUpperCase(chain[i + 1])) &&
        chain[i].toLowerCase() === chain[i + 1].toLowerCase()
      ) {
        return {
          has: true,
          locations: i,
        };
      }
    }

    return {
      has: false,
      locations: null,
    };
  };

  const betterChain = (chain) => {
    let ubication = hasImperfection(chain).locations;
    let res = chain
      ?.split("")
      ?.filter((x, i) => i !== ubication)
      .join("");
    return res;
  };

  let asd = hasImperfection(greatString);
  while (asd.has) {
    asd = hasImperfection(greatString);
    console.log("asfdasfaf");
    greatString = betterChain(greatString);
  }

  return greatString;
}

console.log(makeGood("leEeetcode"));