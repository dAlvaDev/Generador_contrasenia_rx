import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator__header">
            Generador de contraseña
          </h2>
          <div className="generator__password">
            <h3>Credencial</h3>
            <button className="copy__btn">
              <i className='far fa-clipboard'></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-strength">Tamaño de Contraseña</label>
            <input type="number" id='password-strength' name='password-strength' max={20} min={10} />
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Incluir letras mayúsculas</label>
            <input type="checkbox" id='uppercase-letters' name='uppercase-letters' />
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Incluir letras minúsculas</label>
            <input type="checkbox" id='lowercase-letters' name='lowercase-letters' />
          </div>

          <div className="form-group">
            <label htmlFor="include-numbers">Incluir números</label>
            <input type="checkbox" id='include-numbers' name='include-numbers' />
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Incluir símbolos</label>
            <input type="checkbox" id='include-symbols' name='include-symbols' />
          </div>

          <button className="generator__btn">
            Generar Contraseña
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
