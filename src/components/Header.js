import { Link } from "react-router-dom";

const Header = ({ handleToken, token, search, setSearch }) => {
  // const token = Cookies.get("token-vinted");

  return (
    <header>
      {/* Si le token existe, on affiche déconnexion, sinon s'inscrire et se connecter */}
      {token ? (
        <button
          onClick={() => {
            // Cookies.remove("token-vinted");
            handleToken(null);
          }}
        >
          Se Déconnecter
        </button>
      ) : (
        <>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </>
      )}
      <input
        value={search}
        type="text"
        placeholder="Rechercher des articles ..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </header>
  );
};

export default Header;
