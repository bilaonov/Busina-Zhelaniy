import cName from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    errors?: string
    className?: string
}

const Input: React.FC<InputProps> = ({ label, errors, className, ...props }) => {
    // const rootClassName = cName(className, styles.btn, styles[variant])
    return (
        <label htmlFor="inp" id="Input" className={className}>
            <input {...props} />

            {errors ? (
                <span id="Label" style={{ color: 'red' }}>
                    {errors.toString()}
                </span>
            ) : (
                <span id="Label">{label}</span>
            )}
            <span id="FocusBg"></span>
        </label>
    )
}

export default Input
