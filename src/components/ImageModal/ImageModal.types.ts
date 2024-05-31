import { ModalCloseType } from "../App/App.types";

export type ImageModalType = {
    modalIsOpen: boolean;
    closeModal: ModalCloseType;
    src: string;
    alt: string;
};

export type CustomStylesType = {
    overlay: {
        [key: string]: string;
    };

    content: {
        [key: string]: string;
    };
};