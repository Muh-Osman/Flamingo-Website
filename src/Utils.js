import { ItemShelves, ShelveConainer } from "./Components";

// Central function that loop on shelves data in all category
export const shelvesDataloop = (shelvesObj, data, category) =>
  Object.entries(shelvesObj).map(
    // key is the name of the object(shelve name) ex: apple, samsung..
    ([key, { href, title, dataName, extraPath }]) => (
      <ShelveConainer href={href} title={title} key={key}>
        {data?.entities?.[category]?.[dataName]?.map((item) => (
          <ItemShelves
            className={"item-cards"}
            extraPath={extraPath}
            item={item}
            key={item.id}
          />
        )) ?? <p>No data found in Database</p>}
      </ShelveConainer>
    )
  );
