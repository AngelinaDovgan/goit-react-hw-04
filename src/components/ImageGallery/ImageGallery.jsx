import ImageCard from "../ImageCard/ImageCard"
export default function ImageGallery({ images }) {
    return (
        <ul>
            {images.map((image) => 
            <li key={image.id}>
		<div>
		  <ImageCard item={image}> </ImageCard>
		</div>
	</li>
    )}
</ul>
    )
};
   