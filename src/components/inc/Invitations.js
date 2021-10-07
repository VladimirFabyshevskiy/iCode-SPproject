import { useState} from "react";
import Create from "../images/Create.jpg";
import {useHistory} from "react-router-dom";


const Invitations = () => {
    const [City, setCity] = useState("");
    const [Gender, setGender] = useState("");
    const [Age, setAge] = useState("");
    const [Sport, setSport] = useState("");
    const [Date, setDate] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const Database = { City, Gender, Age, Sport, Date };

        setIsPending(true);

        fetch("http://localhost:8000/Database", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Database)
        }).then(() =>{
            setIsPending(false);
            history.push("/Archive");
        }

        )
    }

    return (
        <section className="Contacts text-center pt-5 align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="bg-light col-12">
                            <div className="d-flex my-5 pt-5 justify-content-center">
                                <div>
                                    <h5 className="col-12 px-3 pb-3"> Create a sport event invitation </h5>
                                    <form onSubmit={handleSubmit} className="block col-12 gy-2 gx-3 align-items-center">
                                        <div className="col-auto mb-2 pb-2">
                                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                                            <select value={City}
                                            onChange={(e) => setCity(e.target.value)} className="form-select" id="autoSizingSelect">
                                                <option selected>Choose the city...</option>
                                                <option value="Calgary">Calgary</option>
                                                <option value="Edmonton">Edmonton</option>
                                            </select>
                                        </div>
                                        <div className="col-auto mb-2 pb-2">
                                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                                            <select value={Gender}
                                            onChange={(e) => setGender(e.target.value)}  className="form-select" id="autoSizingSelect">
                                                <option selected>Choose the gender...</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-auto mb-2 pb-2">
                                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                                            <select value={Age}
                                            onChange={(e) => setAge(e.target.value)} className="form-select" id="autoSizingSelect">
                                                <option selected>Choose the age...</option>
                                                <option value="18-25">18-25</option>
                                                <option value="25-35">25-35</option>
                                                <option value="35-50">35-50</option>
                                                <option value="50+">50+</option>
                                            </select>
                                        </div>
                                        <div className="col-auto mb-2 pb-2">
                                            <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                                            <select value={Sport}
                                            onChange={(e) => setSport(e.target.value)} className="form-select" id="autoSizingSelect">
                                                <option selected>Choose the activity...</option>
                                                <option value="Badminton">Badminton</option>
                                                <option value="Basketball">Basketball</option>
                                                <option value="Running">Running</option>
                                                <option value="Tennis">Tennis</option>
                                                <option value="Voleyball">Voleyball</option>
                                                <option value="Wrestling">Wrestling</option>
                                                <option value="Yoga">Yoga</option>
                                            </select>
                                        </div>
                                        <div className="col-auto mb-2 pb-2">
                                            <label for="Sporteventtime">Sport event date (date and time):</label>
                                            <input value={Date}
                                            onChange={(e) => setDate(e.target.value)} type="datetime-local" id="Sporteventtime" name="Sporteventtime"/>
                                        </div>
                                        <div className="col-auto">
                                            { !isPending && <button onClick={handleSubmit} type="Submit" className="btn btn-primary mt-3">Submit</button>}
                                            { isPending && <button disabled onClick={handleSubmit} type="Submit" className="btn btn-primary mt-3">Adding the invitation</button>}
                                        </div>         
                                    </form>
                                </div>
                                            <img className="img-fluid d-none d-md-block col-5 ms-3 ps-3" src={Create} alt=""/>

                            </div>
                    </div>
                </div> 
            </div>
        </section>
       


    )
}

export default Invitations;