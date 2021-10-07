import React from "react";
import {useState, useEffect} from "react";
import List from "../inc/List"


const Archive = () => {
    const [Database, setDatabase] = useState (null);

    useEffect(() => {
        fetch("http://localhost:8000/Database")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDatabase(data);
        });
    }, []);

    return (
        <div>
            <div className="Title mt-5 pt-5 text-center bg-light">
                <h2> The list of created invitations:</h2>
            </div>
              <div className="DataBase container-flex bg-light">
            {Database && <List Database={Database} title="Database"/>}
            </div>
        </div>
      
      );
}
 
export default Archive ;