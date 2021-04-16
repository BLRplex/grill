import { packer, SortStrategy, SelectionStrategy } from "guillotine-packer";

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

export const packGrillItems = (width, height, grillItems) => {
  return packer({
    binWidth: width,
    binHeight: height,
    items: grillItems,
  },{
    allowRotation: false,
    sortStrategy: SortStrategy.Ratio,
    selectionStrategy: SelectionStrategy.BEST_LONG_SIDE_FIT,
  })
}