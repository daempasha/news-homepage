import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ className, ...buttonProps }) => {
    return (
        <button className={`text-white px-5 p-2  tracking-widest font-semibold bg-orange-600 hover:bg-black transition-all ease-out ${className}`} {...buttonProps} />
    )
}

export default Button;