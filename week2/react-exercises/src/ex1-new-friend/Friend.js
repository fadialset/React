import { useState , useEffect } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile'
function Friend() {
    const [friend, setFriend] = useState(null);
    const [isLoading,setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const getFriend = async()=>{
        try{
            setLoading(true);
            const response = await fetch("https://www.randomuser.me/api?results=1");
            const data = await response.json();
            setFriend(data.results[0])
            setLoading(false);
            
        }catch{
            setError(true);
            setLoading(false);
        }

    }
    return (
        <div>
        <Button getAFrined={getFriend}/>
        {isLoading && <p>Loading...</p>}
        {!hasError && friend && <FriendProfile friend={friend}/>}
        {hasError && <p>Something went wrong</p>}
        </div>
    )
}

export default Friend