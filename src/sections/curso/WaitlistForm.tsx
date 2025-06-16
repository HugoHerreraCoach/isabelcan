"use client"
import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  whatsapp: string;
}

interface BrevoContact {
  email: string;
  attributes: {
    FIRSTNAME: string;
    SMS: string;
  };
  listIds: number[];
}

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    whatsapp: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Validación especial para WhatsApp - solo números y máximo 9
    if (name === 'whatsapp') {
      const numbersOnly = value.replace(/\D/g, ''); // Solo números
      const truncated = numbersOnly.slice(0, 9); // Máximo 9 números
      setFormData(prev => ({
        ...prev,
        [name]: truncated
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Limpiar mensaje cuando el usuario empiece a escribir
    if (message) setMessage('');
  };

  const addContactToBrevo = async (contactData: BrevoContact) => {
    console.log('Enviando datos a:', '/api/brevo/add-contact');
    console.log('Datos:', contactData);
    
    const response = await fetch('/api/brevo/add-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    // Si es HTML (error 404), mostrarlo
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      const htmlText = await response.text();
      console.error('Recibido HTML instead of JSON:', htmlText.substring(0, 200));
      throw new Error('La API route no existe o no está configurada correctamente');
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
      throw new Error(error.message || 'Error al agregar contacto');
    }

    return response.json();
  };

  const handleSubmit = async () => {
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.whatsapp) {
      setMessage('Por favor, completa todos los campos');
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage('Por favor, ingresa un email válido');
      return;
    }

    // Validación de WhatsApp - exactamente 9 números
    if (formData.whatsapp.length !== 9) {
      setMessage('El WhatsApp debe tener exactamente 9 números');
      return;
    }

    // Verificar que WhatsApp solo contenga números
    if (!/^\d{9}$/.test(formData.whatsapp)) {
      setMessage('El WhatsApp debe contener solo números (9 dígitos)');
      return;
    }

    // Validación específica para números peruanos (empiezan con 9)
    if (!formData.whatsapp.startsWith('9')) {
      setMessage('Los números de celular en Perú deben empezar con 9');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Preparar datos para Brevo
      const brevoContact: BrevoContact = {
        email: formData.email,
        attributes: {
          FIRSTNAME: formData.nombre,
          SMS: `+51${formData.whatsapp}`, // Agregar código de país de Perú
        },
        listIds: [3], // Tu Lista 3
      };

      console.log('Enviando contacto con número formateado:', brevoContact.attributes.SMS);

      // Enviar a Brevo
      await addContactToBrevo(brevoContact);

      setMessage('¡Gracias por unirte a nuestra lista de espera!');
      
      // Limpiar formulario
      setFormData({
        nombre: '',
        email: '',
        whatsapp: ''
      });

    } catch (error) {
      console.error('Error completo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Hubo un error al procesar tu solicitud. Inténtalo de nuevo.';
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black flex items-center justify-center p-4">
      <div className="bg-gray-100 rounded-3xl p-6 w-[90%] sm:w-[70%] lg:w-[60%] shadow-xl">
        <div className="space-y-6">
          {/* Campo Nombre */}
          <div className="space-y-3">
            <label htmlFor="nombre" className="block text-2xl sm:text-3xl font-inter text-gray-900">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre Completo"
              className="w-full px-4 py-3 bg-white border border-[#0F7457] rounded-xl text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F7457] focus:border-transparent transition-all duration-200"
              required
              disabled={isLoading}
            />
          </div>

          {/* Campo Email */}
          <div className="space-y-3">
            <label htmlFor="email" className="block text-2xl sm:text-3xl font-inter text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-white border border-[#0F7457] rounded-xl text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F7457] focus:border-transparent transition-all duration-200"
              required
              disabled={isLoading}
            />
          </div>

          {/* Campo WhatsApp */}
          <div className="space-y-3">
            <label htmlFor="whatsapp" className="block text-2xl sm:text-3xl font-inter text-gray-900">
              WhatsApp
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 font-medium">
                +51
              </div>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="987654321"
                maxLength={9}
                className="w-full pl-12 pr-16 py-3 bg-white border border-[#0F7457] rounded-xl text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F7457] focus:border-transparent transition-all duration-200"
                required
                disabled={isLoading}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                {formData.whatsapp.length}/9
              </div>
            </div>
            <p className="text-sm text-gray-600">Número de celular que empiece con 9 (ejemplo: 987654321)</p>
          </div>

          {/* Mensaje de estado */}
          {message && (
            <div className={`p-3 rounded-lg text-center ${
              message.includes('Gracias') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {message}
            </div>
          )}

          {/* Botón de envío */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-4 px-6 rounded-xl font-bold font-inter transition-all duration-200 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#0F7457] hover:bg-green-900 active:scale-[0.98]'
            } text-white`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </div>
            ) : (
              'Unirme a la lista de espera'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;