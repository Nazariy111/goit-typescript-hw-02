import { Toaster } from "react-hot-toast";

const ErrorMessage: React.FC = () => {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default ErrorMessage;