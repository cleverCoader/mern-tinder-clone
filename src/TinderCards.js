import React, {useState, useEffect } from 'react';
import './TinderCard.css';
//---------------------------------------
import TinderCard from "react-tinder-card";
//---------------------------------------------
import axios from './axios';


function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();

    },[])
    



    return (
        <div className="tinderCards" >
            <div className="tinderCards_container">
            {people.map((person) => (    
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                   
                >

                    <div
                        style={{ backgroundImage: `url(${person.imgUrl})` }}
                        className="card"
                    >
                        <h3> {person.name} </h3>

                    </div>
                    

               </TinderCard>
                
            ))}

            </div>
        </div>
    )
}

export default TinderCards;
