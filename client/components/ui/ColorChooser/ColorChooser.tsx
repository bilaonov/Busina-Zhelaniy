import React, { useState } from 'react'

const ColorChooser = ({ availableColors, onSelectedColorChange }: any) => {
    const [selectedColor, setSelectedColor] = useState('')

    const setColor = (color: any) => {
        setSelectedColor(color)
        onSelectedColorChange(color)
    }
    return (
        <div className="color-chooser">
            {availableColors.map((color: any) => (
                <div
                    className={
                        selectedColor === color ? 'color-item color-item-selected' : 'color-item'
                    }
                    key={color}
                    onClick={() => setColor(color)}
                    style={{ backgroundColor: color }}
                    role="presentation"
                />
            ))}
        </div>
    )
}
