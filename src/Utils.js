import { ItemShelves, ShelveConainer } from "./Components";

 
// Central function that loop on shelves data in all category
export const shelvesDataloop = (shelvesObj, data) => {
    return Object.values(shelvesObj).map(({ href, title, dataName, extraPath }) => (
      <ShelveConainer href={href} title={title} key={title}>
        {data?.[dataName]?.map((item) => (
          <ItemShelves
            className={"item-cards"}
            extraPath={extraPath}
            item={item}
            key={item.id}
          />
        ))}
      </ShelveConainer>
    ));
  };