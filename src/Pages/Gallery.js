import {Link} from 'react-router-dom'
import PT from "prop-types";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import PlanVisit from '../Components/PlanVisit'

// Image import
import img1 from '../Images/gallery-image1.jpg'
import img2 from '../Images/gallery-image2.jpg'
import img3 from '../Images/gallery-image3.jpg'
import img4 from '../Images/gallery-image4.jpg'
import img5 from '../Images/gallery-image5.jpg'
import img6 from '../Images/gallery-image6.jpg'
import img7 from '../Images/gallery-image7.jpg'
import img8 from '../Images/gallery-image8.jpg'


const GROUP1 = [
    [img1, img1],
    [img2, img2],
    [img3, img3],
    [img4, img4],
    [img5, img5],
    [img6, img6],
    [img7, img7],
    [img8, img8],
  ];
  
  const PhotoItem = ({ image, thumb, group }) => (
    <div className="w-full mx-auto">
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} alt="gallery" className="w-full rounded-sm cursor-pointer hover:opacity-70 hover:ease-in-out duration-300"/>
      </LightgalleryItem>
    </div>
  );
  
  PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired,
  };

const Gallery = () => {
    return (
        <div>
            {/* Banner */}
            <div className="banner text-white flex justify-center text-center items-center px-5">
              <div>
                  <h3 className="text-2xl md:text-4xl font-medium pb-1">Gallery</h3>
                    <h4 className="font-medium"><Link to="/" className="text-secondary">Home</Link> / Gallery</h4>
              </div>
            </div> 

               {/* the gallery */}
              <div className="container px-8 mx-auto my-16 w-full">
              <LightgalleryProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {GROUP1.map((p, idx) => (
            <PhotoItem key={idx} image={p[0]} thumb={p[1]} group="group1" />
          ))}
        
        </div>
      </LightgalleryProvider>
    
              </div>

              <PlanVisit/>
        </div>
     
    )
}

export default Gallery
