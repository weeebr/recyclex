import React from "react";
import { get } from "./firebase";
import OverviewItem from "./OverviewItem";

const Overview = () => {
  const [pickups, setPickups] = React.useState([]);

  if (pickups.length === 0) {
    get("pickups").then(querySnapshot => {
      setPickups(querySnapshot.docs.map(doc => doc.data()));
    });
  }

  React.useEffect(() => {
    console.log(pickups);
  }, [pickups]);

  return (
    <>
      {(pickups || []).map(pickup => (
        <OverviewItem key={pickup.date} data={pickup} />
      ))}
    </>
  );
};

export default Overview;
