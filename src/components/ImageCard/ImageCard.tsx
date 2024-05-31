import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({
    imageUrl,
    imageUrlFull,
    title,
    onModalOpen,
}: ImageCardProps) => {
    return (
        <div
            className={css.imgContainer}
            onClick={() => {
                onModalOpen(imageUrlFull, title);
            }}>
            <img className={css.image} src={imageUrl} alt={title} width="250" />
        </div>
    );
};

export default ImageCard;