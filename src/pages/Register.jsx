import { useState } from 'react';
import { UserContext } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    // Estados del formulario
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');

    //Estado para errores
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [smsEnvio, setSmsEnvio] = useState(false);

    //funcion para enviar formulario
    const validarDatos = (e) => {
        e.preventDefault()

        //Validación;
        if (!email.trim() || !pass.trim() || !passConf.trim()) {
            setErrorMessage('Todos los campos son obligatorios');
            setError(true);
            return;
        }

        // validar que tenga almenos 6 caracteres
        if (pass.length < 6){
            setErrorMessage ('La contraseña debe tener almenos 6 caracteres');
            setError(true);
            return;
        }

        // validar contraseñas iguales
        if (pass !== passConf) {
            setErrorMessage('Las contraseñas no coinciden');
            setError(true);
            return;
        }

// Si el formulario se envía correctamente, se envia mensaje y limpia los campos

    alert ('¡Registro exitoso!')
            setError(false);
            setErrorMessage(false)
            setEmail('');
            setPass('');
            setPassConf('');

};

  return (
    <>
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div>
        <h1 className='mb-5'>Registrate</h1>
    <Form className='formulario' onSubmit={validarDatos}>
    {error && <p className="text-danger">{errorMessage}</p>}

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Ingresar Email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
            />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPass">
        <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Ingresar Contraseña" 
                onChange={(e) => setPass(e.target.value)} 
                value={pass} 
            />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassConf">
        <Form.Label className="fw-bold">Confirmar Contraseña</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="confirmar Contraseña" 
                onChange={(e) => setPassConf(e.target.value)} 
                value={passConf} 
            />
    </Form.Group>

      <Button variant="dark" className="w-100 mt-4" type="submit">
        Registrarse
      </Button>
    </Form>

        </div>
    </div>
    
    </>
  )
}

export default Register;