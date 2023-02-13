import { useEffect, useState } from "react";
import axios from "axios";
import Login from "../components/Login";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        //setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <Login 
        setEmail={setEmail}
        setPassword={setPassword}
        email={email}
        password={password}
      />
    </div>
  );
};

export default Home;
