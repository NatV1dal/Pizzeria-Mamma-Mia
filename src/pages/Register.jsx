import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  // Acceso al método de registro desde el UserContext
  const { register } = useContext(UserContext);

  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConf, setPassConf] = useState("");

  // Estados para errores y mensajes de éxito
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [smsEnvio, setSmsEnvio] = useState(false);

  // Validar datos del formulario
  const validarDatos = async (e) => {
    e.preventDefault();

    // Validaciones del formulario
    if (!email.trim() || !password.trim() || !passConf.trim()) {
      setErrorMessage("Todos los campos son obligatorios");
      setError(true);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      setError(true);
      return;
    }

    if (password !== passConf) {
      setErrorMessage("Las contraseñas no coinciden");
      setError(true);
      return;
    }

    // Mostrar los datos enviados al backend (para depuración)
    console.log("Datos enviados al backend:", { email, password });

    // Intentar el registro
    try {
      await register(email, password);
      setError(false);
      setErrorMessage("");
      setSmsEnvio(true);
      setTimeout(() => setSmsEnvio(false), 3000);

      // Limpiar campos
      setEmail("");
      setPassword("");
      setPassConf("");
    } catch (error) {
      // Manejo de errores específicos y genéricos
      if (error.message === "User already exists") {
        setErrorMessage("El correo ingresado ya está registrado. Por favor, intenta con otro.");
      } else if (error.message === "Server error") {
        setErrorMessage("Hubo un problema en el servidor. Intenta más tarde.");
      } else {
        setErrorMessage(error.message || "Hubo un problema al registrar");
      }
      setError(true);
    }
  };
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div>
          <h1 className="mb-5">Regístrate</h1>
          <Form className="formulario" onSubmit={validarDatos}>
            {error && <p className="text-danger">{errorMessage}</p>}
            {smsEnvio && <p className="text-success">¡Registro exitoso!</p>}

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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassConf">
              <Form.Label className="fw-bold">Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar Contraseña"
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
  );
};

export default Register;
