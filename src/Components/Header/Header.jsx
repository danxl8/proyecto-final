import React from 'react';
function Header( { modo, manejarModo } ) {
    return (
        <div className={ `${modo? "":"modo-dark "}` }>
            <div className="header justify-content-between flex align-items-center">
                <img className="margin-left-69 " src={ `${modo ?"/resource/logo-desktop.svg":"/resource/logo-mobile-modo-noct.svg"}` } width="59px" alt="logo"/>
                <button onClick={ manejarModo } className={ `${modo? "btn-modo margin-right-69 weight-900 color font ":"btn-modo-dark margin-right-69 weight-900 color-white font "}` }> { `${modo?"MODO DARK":"MODO LIGHT"}` } </button>
            </div>
        </div>
    )
}

export default Header
