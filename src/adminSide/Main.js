import React, { useEffect, useState } from "react";
import Axios from "axios";


export default function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

  return (
    <div>
    
    </div>
  );
}
