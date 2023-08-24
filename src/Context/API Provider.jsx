/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const APIContext = createContext();

export default function ACProvider(props) {
  const [membersFamily, setMembersFamily] = useState([
    {
      id: 1,
      name: "kiki",
      age: 44,
      taille: 184,
    },
    {
      id: 2,
      name: "van",
      age: 46,
      taille: 169,
    },
    {
      id: 3,
      name: "lucas",
      age: 16,
      taille: 188,
    },
    {
      id: 4,
      name: "loris",
      age: 13,
      taille: 172,
    },
  ]);

  function vieillir(id) {
    setMembersFamily((prevMembers) => {
      return prevMembers.map((member) => {
        if (member.id === id) {
          return { ...member, age: member.age + 1 };
        }
        return member;
      });
    });
  }
  function grandir(id) {
    setMembersFamily((prevMembers) => {
      return prevMembers.map((member) => {
        if (member.id === id) {
          if (member.age <= 39) {
            return { ...member, taille: member.taille + 2 };
          } else if (member.age >= 40) {
            return { ...member, taille: member.taille - 1 };
          }
        }
        return member;
      });
    });
  }

  return (
    <APIContext.Provider value={{ membersFamily, vieillir, grandir }}>
      {props.children}
    </APIContext.Provider>
  );
}
