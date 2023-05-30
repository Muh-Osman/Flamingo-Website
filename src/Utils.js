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
        )) ?? <p>No data found</p>}
      </ShelveConainer>
    )
  );

  

// Central function that loop on shelves data in all category
// export const shelvesDataloop = (shelvesObj, data, category) => {

//   return Object.values(shelvesObj).map(
//     ({ href, title, dataName, extraPath }) => (

//       <ShelveConainer href={href} title={title} key={title}>

//         {data?.entities?.[category]?.[dataName]?.map((item) => (
//           <ItemShelves
//             className={"item-cards"}
//             extraPath={extraPath}
//             item={item}
//             key={item.id}
//           />
//         ))}
//       </ShelveConainer>
//     )
//   );
// };
