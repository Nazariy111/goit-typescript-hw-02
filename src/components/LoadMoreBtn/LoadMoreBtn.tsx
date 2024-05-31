import { LoadMoreBtnType } from "./LoadMoreBtn.types";
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn: React.FC<LoadMoreBtnType> = ({ onClick }: LoadMoreBtnType) => {
    return <button onClick={onClick} className={css.loadMoreBtn}>Load more</button>;
};

export default LoadMoreBtn;