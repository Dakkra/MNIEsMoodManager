interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>{props.children}</button>
}

export default Button;