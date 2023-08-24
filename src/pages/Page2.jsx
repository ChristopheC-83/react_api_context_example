/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { APIContext } from "../Context/API Provider";
import BtnFam from "./BtnFam";
import CumulAges from "./CumulAges";
import AgeKiki from "./AgeKiki";

function Page2() {

  const { membersFamily, vieillir, grandir} = useContext(APIContext);

  return (
    <div>
      <h1>test API Context</h1>

      <div className="familyFrame">
        {membersFamily.map((member) => (
          <div className="userFam" key={member.id}>
            <h3>{member.name}</h3>
            <p>age : {member.age} ans</p>
            <p>mesure {member.taille} cm</p>
            <div className="btnFam">
              <BtnFam foo={()=>vieillir(member.id)} btnName="Vieillir" />
              <BtnFam foo={()=>grandir(member.id)} btnName="Grandir ?" />
            </div>
          </div>
        ))}
      </div>

      <div className="extra">
        
         <AgeKiki/>
        <CumulAges membersFamily={membersFamily} />
      </div>
    </div>
  );
}

export default Page2;
