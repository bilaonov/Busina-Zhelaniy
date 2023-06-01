import cName from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    errors?: string
    className?: string
}

const Input: React.FC<InputProps> = ({ label, errors, className, ...props }) => {
    return (
        <label htmlFor="inp" id="Input">
            <input type="tel" id="inp" placeholder="&nbsp;" />
        </label>
    )
}

export default Input
