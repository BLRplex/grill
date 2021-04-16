export const extractGrillItems = (grillItems) => {
  const indexRegistry = {};

  const pushIndexRegistry = (key) => {
    if (!(key in indexRegistry)) {
      indexRegistry[key] = 0;
    } else {
      indexRegistry[key] += 1;
    }

    return indexRegistry[key];
  };

  return [...grillItems]
    .map((grillItemConfiguration) =>
      Array.from(
        { length: grillItemConfiguration.count },
        () => grillItemConfiguration
      )
    )
    .flat()
    .map((element) => ({
      width: element.width,
      height: element.height,
      title: element.title,
      id: `${element.title}-${element.width}-${
        element.height
      }#${pushIndexRegistry(element.title)}`
    }));
};
