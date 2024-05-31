import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ results, onModalOpen }: ImageGalleryProps) => {

    return (
        <ul className={css.gallery}>
            {results.map((result) => {
                return (
                    <li key={result.id} className={css.galleryImg}>
                        <ImageCard
                            imageUrlFull={result.urls.regular}
                            imageUrl={result.urls.small}
                            title={result.alt_description}
                            onModalOpen={onModalOpen} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ImageGallery;