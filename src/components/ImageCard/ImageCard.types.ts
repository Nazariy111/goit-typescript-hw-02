import { ModalOpenType } from "../App/App.types";

export type ImageCardProps = {
    imageUrl: string;
    imageUrlFull: string;
    title: string;
    onModalOpen: ModalOpenType;
};