import { useState , useEffect} from 'react'
import Button from './Button'
import DogPhoto from './DogPhoto'

function DogGallary() {
    const[dogPhotos , setDogPhotos] = useState([]);
    function getDogPhoto(){
        return fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogPhotos([ ...dogPhotos , data.message])
        })
    }

    return (
        <div>
            <Button getADog={getDogPhoto}/>
            {dogPhotos && dogPhotos.map((photo)=><DogPhoto imgSrc={photo}/>)}
        </div>
    )
}

export default DogGallary
