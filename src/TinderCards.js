import React, {useState} from 'react';
import './TinderCard.css';
//---------------------------------------
import TinderCard from "react-tinder-card";

function TinderCards() {

    const [people, setPeople] = useState([

        {
            name: 'AB Devilliars',
            url: "https://media.gettyimages.com/photos/de-villiers-of-south-africa-poses-for-a-portrait-at-royal-garden-on-picture-id690026948?s=2048x2048"    
        },
        {
            name: 'Virat Kohli',
            url: "https://media.gettyimages.com/photos/virat-kohli-of-india-celebrates-as-he-reaches-his-century-during-the-picture-id463481300?s=2048x2048"
        },
        {
            name: 'Rohit Sharma',
            url:"https://media.gettyimages.com/photos/rohit-sharma-of-india-in-action-batting-as-mushfiqur-rahim-of-looks-picture-id1159579854?s=2048x2048"
        },
        {
            name: 'Mahendra Singh Dhoni',
            url: "https://media.gettyimages.com/photos/dhoni-of-india-poses-during-the-india-2015-icc-cricket-world-cup-at-picture-id463104472?s=2048x2048"
        }
        

    ]);




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
                        style={{ backgroundImage: `url(${person.url})` }}
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
