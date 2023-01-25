import { useEffect, useState } from "react"
import Artlist from "./components/ArtList"

function ArtsSection() {
const [artworks,setArtworks]=useState([])

useEffect(()=>{
  fetch("https://api.artic.edu/api/v1/artworks")
  .then((res) => res.json())
  .then((data)=>{

    setArtworks(data.data)
    console.log(data)
  })
},[])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
      <ul class="art-list">
     
        {artworks.map((art,index) => {
           return(
              <li>
                <div class="frame">
                  <img
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}

                  />
                </div>
                <h3>{art.title}</h3>
                <p>Artist: {art.artist_title}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                    {art.subject_titles.map((term,index) =>{
                      return(
                        <li>{term}</li>

                        )
                  
                      })
                      }
                  
                </ul>
              </li>
            )
          })}

        
      </ul>
      </div>
    </section>
  )
}

export default ArtsSection
