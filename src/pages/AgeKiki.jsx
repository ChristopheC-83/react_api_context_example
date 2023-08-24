/* eslint-disable no-unused-vars */
import BtnFam from "./BtnFam";
import { useContext } from "react";
import { APIContext } from "../Context/API Provider";

function AgeKiki() {
  
  const { membersFamily, vieillir, grandir} = useContext(APIContext);
  const kiki = membersFamily.find((person) => person.name === "kiki");
  const ageOfKiki = kiki && kiki.age;
  const idOfKiki = kiki && kiki.id;



  return (
    <div>
      <h3>Kiki a {ageOfKiki} ans !</h3>
      <BtnFam foo={()=>vieillir(kiki.id)} btnName="Vieillir" />
    </div>
  );
}

export default AgeKiki;
