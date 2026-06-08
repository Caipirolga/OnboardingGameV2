// ============================================================
//  CONFIGURACIÓN POR EMPRESA  —  config.js
//  Cambia estos valores para cada cliente.
//
//  ✅ Este archivo YA NO contiene el token de Airtable.
//     El token vive seguro en el proxy de Cloudflare.
//     Por eso este config.js se puede subir a GitHub sin problema.
// ============================================================
window.CONFIG = {

  // --- Proxy (Cloudflare Worker) ---
  // URL de tu Worker. Mantén la barra final '/'.
  proxyUrl: 'https://onboarding-proxy.olga-760.workers.dev/',

  // --- Datos de la empresa ---
  empresaNombre: 'Mostaza Comunicación',
  empresaColor: '#d4ac39',          // color de acento del juego
  empresaLogo: 'logo.png',          // ruta o URL del logo. '' = icono por defecto

  // --- Acceso de administración ---
  adminUser: 'admin',
  adminPass: 'entrar',

  // --- Pistas (orden = orden en que se revelan en el juego) ---
  // campo = nombre EXACTO de la columna en Airtable
  pistas: [
    { campo: 'rol_empresa',    icono: 'ti-briefcase',  etiqueta: 'Mi rol en la empresa' },
    { campo: 'como_soy',       icono: 'ti-mood-smile', etiqueta: '¿Cómo soy?' },
    { campo: 'donde_naci',     icono: 'ti-map-pin',    etiqueta: '¿Dónde nací?' },
    { campo: 'hobby',          icono: 'ti-heart',      etiqueta: 'Mi hobby' },
    { campo: 'plan_perfecto',  icono: 'ti-sparkles',   etiqueta: 'Mi plan perfecto' },
    { campo: 'peor_pesadilla', icono: 'ti-ghost',      etiqueta: 'Mi peor pesadilla' }
  ]

};
