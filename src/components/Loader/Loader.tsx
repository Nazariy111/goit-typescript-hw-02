import { RotatingLines, _Props3 } from "react-loader-spinner";
import css from "./loader.module.css";

const Loader: React.FC<_Props3> = () => {
    const defaultProps: _Props3 = {
        width: "55",
        strokeWidth: "5",
        animationDuration: "0.75",
        ariaLabel: "rotating-lines-loading",
    };
    return (
        <div className={css.loaderContainer}>
            <RotatingLines {...defaultProps} visible={true} />
        </div>
    );
};

export default Loader;