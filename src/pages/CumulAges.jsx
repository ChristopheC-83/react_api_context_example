/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { APIContext } from "../Context/API Provider";

function CumulAges() {
    
  const { membersFamily, vieillir, grandir} = useContext(APIContext);

  const totalAge = membersFamily.reduce((acc, person) => acc + person.age, 0);


  
  return (
    <div>
      <h2>{totalAge} années d'xp au cumul</h2>

    </div>
  )
}

export default CumulAges
