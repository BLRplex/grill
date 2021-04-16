export const extractGrillItems = (grillItems) => {
  return [...grillItems]
    .map((grillItemConfiguration) =>
      Array.from(
        { length: grillItemConfiguration.count },
        () => grillItemConfiguration
      )
    )
    .flat()
    .map((element) => ({
      ...element,
      title: element.title,
    }));
};
