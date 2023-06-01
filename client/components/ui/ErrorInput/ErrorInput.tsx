import React from 'react'

interface IErrorInput {
    errors: string | undefined
    label: string
}

const ErrorInput: React.FC<IErrorInput> = ({ errors, label }) => {
    return (
        <>
            {errors ? (
                <span id="Label" style={{ color: 'red' }}>
                    {errors.toString()}
                </span>
            ) : (
                <span id="Label">{label}</span>
            )}
            <span id="FocusBg"></span>
        </>
    )
}

export default ErrorInput
