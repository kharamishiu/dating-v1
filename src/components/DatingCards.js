import React, { useState } from 'react';
import TinderCard from 'react-tinder-card'
import './DatingCards.css';

const DatingCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Random Guy",
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
        },
        {
            name: "Another Guy",
            imgUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
        },
        {
            name: "Random Girl",
            imgUrl: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
        },
        {
            name: "Another Girl",
            imgUrl: "https://images.unsplash.com/photo-1554683312-8ff7fc11a74b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400"
        }
    ]);

    const swiped = (direction, nametodelete) => {
        console.log('you swiped', direction)
    };
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    };

    console.log(people)

    return (
        <div className='datingCards'>
            <div className='datingCards__container'>
                {
                    people.map((p) => (
                        <TinderCard
                            className='swipe'
                            key={p.name}
                            preventSwipe={['right', 'left']}
                            onSwipe={(dir) => swiped(dir, p.name)}
                            onCardLeftScreen={() => onCardLeftScreen(p.name)}
                        >
                            <div style={{ backgroundImage: `url(${p.imgUrl})` }} className='card'>
                                <h3>{p.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }

            </div>

        </div>
    )

}

export default DatingCards;