/* eslint-disable react/no-unescaped-entities */

function Page1() {
  return (
    <div className="notice-redux">
      <p className="truc">
        Pas d'installation, contextAPI est inclus dans React.
      </p>
      <p>On crée le fichier XXXProvider.jsx</p>
      <p>on hydrate le fichier main.jsx à partir duquel tout découlera.</p>
      <p>
        on importe useContext dans chaque fihier devznt recevoir infos et/ou
        fonctions
      </p>
      <p>
        on appelle les données et fonctions par (useContext) dans le fichier
        cible
      </p>
      <p>
        on appelle les données et fonctions par (APIContext) dans le fichier
        cible
      </p>

      <p>changer le state dans un composant le modifie de partout</p>
    </div>
  );
}

export default Page1;
