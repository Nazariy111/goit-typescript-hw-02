import { ModalOpenType } from "../App/App.types";

type Urls = {
    regular: string;
    small: string;
};

type ImageCardObject = {
    id: string;
    urls: Urls;
    alt_description: string;
};

export type ImageGalleryProps = {
    results: Array<ImageCardObject> | [];
    onModalOpen: ModalOpenType;
};