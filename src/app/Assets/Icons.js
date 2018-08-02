import React from 'react'
import PropTypes from 'prop-types'

const fillPropsVal = (props, propName, componentName) => {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(props[propName])) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Validation failed. Color should be hex syntax like "#ffffff"'
        );
    }
}

export const UrlIco = () => {
    return (
        <div>
            <svg width='48px' height='48px' viewBox="0 0 48 48">
                <path fill="none" d="m0 0h48v48h-48z" />
                <path d="m7.8 24c0-3.42 2.78-6.2 6.2-6.2h8v-3.8h-8c-5.52 0-10 4.48-10 10s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4h-16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8v3.8h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
            </svg>
        </div>
    )
}

export const LabelIco = () => {
    return (
        <div>
            <svg width='48px' height='48px' viewBox="0 0 48 48">
                <path d="m0 0h48v48h-48z" fill="none" />
                <path d="m35.27 11.69c-0.73-1.02-1.92-1.69-3.27-1.69l-22 0.02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98l22 0.02c1.35 0 2.54-0.67 3.27-1.69l8.73-12.31-8.73-12.31z" />
            </svg>
        </div>
    )
}




//Przykład ikony do importu z proptypes
// const fillPropsVal = (props, propName, componentName) => {
//     if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(props[propName])) {
//         return new Error(
//             'Invalid prop `' + propName + '` supplied to' +
//             ' `' + componentName + '`. Validation failed. Color should be hex syntax like "#ffffff"'
//         );
//     }
// }

// export const UrlIco = ({ style, width, className, height }) => {
//     return (
//         <div>
//             <svg style={style} className={className} width={`${width}px`} height={`${height}px`} viewBox="0 0 48 48">
//                 <path fill="none" d="m0 0h48v48h-48z" />
//                 <path d="m7.8 24c0-3.42 2.78-6.2 6.2-6.2h8v-3.8h-8c-5.52 0-10 4.48-10 10s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4h-16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8v3.8h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
//             </svg>
//         </div>
//     )
// }

// UrlIco.propTypes = {
//     style: PropTypes.shape({
//         fill: fillPropsVal
//     }),
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired
// }