"use client"
import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  whatsapp: string;
}

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    whatsapp: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar los datos
    alert('¡Gracias por unirte a nuestra lista de espera!');
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
              className="w-full px-4 py-3  bg-white border border-[#0F7457] rounded-xl text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F7457] focus:border-transparent transition-all duration-200"
              required
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
             className="w-full px-4 py-3  bg-white border border-[#0F7457] rounded-xl text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F7457] focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Campo WhatsApp */}
          <div className="space-y-3">
            <label htmlFor="whatsapp" className="block text-2xl sm:text-3xl font-inter text-gray-900">
              WhatsApp
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="WhatsApp"
              className="w-full px-4 py-3  bg-white border border-[#0F7457] rounded-xl text-gray-900 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0F7457] focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Botón de envío */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#0F7457] hover:bg-green-900 text-white font-bold font-inter py-4  px-6 rounded-xl"
          >
            Unirme a la lista de espera
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;