import { useContext } from "react";
import { APIContext } from "../Context/API Provider";

function Header() {
  const { membersFamily } = useContext(APIContext);
  console.log(membersFamily)
  return (
    <div className="header">
      <h2>Header</h2>

      <div className="headerPlus">
        {membersFamily.map((member) => (
          <p key={member.id}>{member.name}</p>
        ))}
      </div>
      <div className="headerPlus">
        {membersFamily.map((member) => (
          <p key={member.id}>{member.age} ans</p>
        ))}
      </div>
    </div>
  );
}

export default Header;
