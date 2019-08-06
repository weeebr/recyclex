import React from "react";
import Firebase from './firebase';
import OverviewItem from './OverviewItem'

const Overview = () => {
  const [ pickups, setPickups ] = React.useState([]);

  if (pickups.length === 0) {
    Firebase.get().then((querySnapshot) => { 
      setPickups( querySnapshot.docs.map(doc => doc.data()) )
    });
  }

  React.useEffect(() => {
    console.log(pickups)
  }, [pickups])

  return (
    <>
      {(pickups || []).map(pickup => (
        <OverviewItem 
          key={pickup.date}
          data={pickup}
        />
      ))}
    </>
  );
};

export default Overview;
