// app/api/brevo/add-contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface BrevoContact {
  email: string;
  attributes: {
    FIRSTNAME: string;
    SMS: string;
  };
  listIds: number[];
}

export async function POST(request: NextRequest) {
  console.log('API Route llamada - método POST');
  
  try {
    const body: BrevoContact = await request.json();
    console.log('Datos recibidos:', body);
    
    // Validar que tenemos los datos necesarios
    if (!body.email || !body.attributes?.FIRSTNAME) {
      console.error('Datos faltantes:', { email: body.email, nombre: body.attributes?.FIRSTNAME });
      return NextResponse.json(
        { message: 'Email y nombre son requeridos' },
        { status: 400 }
      );
    }

    // Obtener API key de variables de entorno
    const apiKey = process.env.BREVO_API_KEY;
    console.log('API Key configurada:', apiKey ? 'Sí' : 'No');
    
    if (!apiKey) {
      console.error('BREVO_API_KEY no está configurada en las variables de entorno');
      return NextResponse.json(
        { message: 'Error de configuración del servidor - API Key faltante' },
        { status: 500 }
      );
    }

    console.log('Enviando a Brevo:', {
      url: 'https://api.brevo.com/v3/contacts',
      method: 'POST',
      body: body
    });

    // Llamar a la API de Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const responseData = await brevoResponse.json();
    console.log('Respuesta de Brevo:', { status: brevoResponse.status, data: responseData });

    if (!brevoResponse.ok) {
      // Manejar diferentes tipos de errores de Brevo
      if (brevoResponse.status === 400 && responseData.code === 'duplicate_parameter') {
        console.log('Contacto duplicado, intentando actualizar...');
        
        // El contacto ya existe, intentar actualizarlo
        const updateResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(body.email)}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
          body: JSON.stringify({
            attributes: body.attributes,
            listIds: body.listIds,
          }),
        });

        if (updateResponse.ok) {
          console.log('Contacto actualizado exitosamente');
          return NextResponse.json({ 
            message: 'Contacto actualizado exitosamente',
            updated: true 
          });
        } else {
          const updateError = await updateResponse.json();
          console.error('Error actualizando contacto:', updateError);
        }
      }

      console.error('Error de Brevo:', {
        status: brevoResponse.status,
        data: responseData
      });
      
      return NextResponse.json(
        { 
          message: `Error de Brevo: ${responseData.message || 'Error desconocido'}`,
          details: responseData
        },
        { status: brevoResponse.status }
      );
    }

    console.log('Contacto agregado exitosamente con ID:', responseData.id);
    return NextResponse.json({ 
      message: 'Contacto agregado exitosamente',
      id: responseData.id 
    });

  } catch (error) {
    console.error('Error en API route:', error);
    return NextResponse.json(
      { 
        message: 'Error interno del servidor',
        error: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}

// Opcional: Manejar otros métodos
export async function GET() {
  return NextResponse.json(
    { message: 'Esta API solo acepta método POST' },
    { status: 405 }
  );
}