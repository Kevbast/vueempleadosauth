// Importamos la función 'ref' de Vue para el estado reactivo
import { ref } from 'vue'; 

const API_URL = "https://apiempleadoscoreoauth.azurewebsites.net/auth/login";

export default class AuthService {
    
    // El estado reactivo que reemplaza al BehaviorSubject
    // Es una propiedad pública a la que accederás con .isLoggedIn.value
    isLoggedIn = ref(this.hasToken());

    constructor() {
        console.log("AuthService inicializado.");
    }

    // --- Métodos de Ayuda ---

    hasToken() {
        // Chequea si el token existe
        return !!localStorage.getItem('authToken');
    }

    getToken() {
        return localStorage.getItem('authToken');
    }

    // Función síncrona para acceder al valor (opcional, puedes usar this.isLoggedIn.value)
    isLoggedInSync() {
        return this.isLoggedIn.value;
    }

    // --- Métodos Principales ---

    /**
     * Realiza la petición de login.
     */
    async login(nombre, contraseña) {
        const credentials = {
            userName: nombre,
            password: contraseña
        };
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error de autenticación');
        }

        // Retorna la respuesta (ej. { token: "..." })
        return response.json();
    }

    /**
     * Guarda el token y actualiza el estado reactivo.
     */
    setToken(token) {
        localStorage.setItem('authToken', token);
        this.isLoggedIn.value = true; // <-- Actualiza el estado reactivo
        console.log('Token guardado y estado actualizado a logueado.');
    }

    /**
     * Elimina el token y actualiza el estado.
     */
    logout() {
        localStorage.removeItem('authToken');
        this.isLoggedIn.value = false; // <-- Actualiza el estado reactivo
        console.log('Token eliminado y estado actualizado a no logueado.');
    }
}

// ⚠️ Exportamos una única instancia de la clase (Singleton Pattern)
// De esta manera, todos los componentes usarán el mismo estado reactivo.
