import { useEffect, useState } from "react";
import axios from "axios";
import Signup from "../components/Signup";

const CreateAccount = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    //const [confirmPassword, setConfirmPassword] = useState("");
    //const [errorPassword, setErrorPassword] = useState(false);

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
      <Signup 
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setNewsletter={setNewsletter}
        name={name}
        email={email}
        password={password}    
        newsletter={newsletter}/>
    </div>
  );
};

export default CreateAccount;