import ImageCard from "../ImageCard/ImageCard"
import { nanoid } from "nanoid"

export default function ImageGallery({ images, openModal }) {
    const handleImgClick = (image) => {
        openModal(image);
    }
    return (
        <ul>
            {images.map((image) => (
                <li key={nanoid()} onClick={() => handleImgClick(image)} >
                    <ImageCard image={image} />
</li>
            
            ))}
</ul>
    )
};
   