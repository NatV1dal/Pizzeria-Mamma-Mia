import { useState, useContext } from 'react'; 
import { UserContext } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

  // Acceso al UserContext
  const { login } = useContext(UserContext);

  // Estados del formulario
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  // Estado para errores
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para enviar formulario
  const validarDatos = async (e) => {
    e.preventDefault();

    // Validación
    if (!email.trim() || !pass.trim()) {
      setErrorMessage('Todos los campos son obligatorios');
      setError(true);
      return;
    }

    // Validar que tenga al menos 6 caracteres
    if (pass.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres');
      setError(true);
      return;
    }

    try {
      await login(email, pass); 
      setError(false);
      setErrorMessage('');
      setEmail('');
      setPass('');
    } catch (error) {
      setErrorMessage(error.message || 'Error al iniciar sesión'); 
      setError(true);
    }

  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div>
        <h1 className='mb-5'>Iniciar Sesión</h1>
        <Form className="formulario" onSubmit={validarDatos}>
          {error && <p className="text-danger">{errorMessage}</p>}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPass">
            <Form.Label className="fw-bold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </Form.Group>

          <Button variant="dark" className="w-100 mt-4" type="submit">
            Ingresar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
