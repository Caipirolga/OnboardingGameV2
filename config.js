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
  proxyUrl: 'https://onboarding-proxy.olga-760.workers.dev/',

  // --- Datos de la empresa ---
  empresaNombre: 'Mostaza Comunicación',
  empresaColor: '#d4ac39',
  empresaLogo: 'logo.svg',

  // --- Acceso de administración ---
  adminUser: 'admin',
  adminPass: 'm0stazaM',

  // --- Pistas (orden = orden en que aparecen en el formulario) ---
  // campo = nombre EXACTO de la columna en Airtable
  pistas: [
    { campo: 'superpoder',     icono: 'ti-bolt',             etiqueta: 'Mi superpoder' },
    { campo: 'mania',          icono: 'ti-mood-crazy-happy', etiqueta: 'Mi manía' },
    { campo: 'hobby',          icono: 'ti-heart',            etiqueta: 'Mi hobby' },
    { campo: 'plan_perfecto',  icono: 'ti-sparkles',         etiqueta: 'Mi plan perfecto' },
    { campo: 'peor_pesadilla', icono: 'ti-ghost',            etiqueta: 'Mi peor pesadilla' },
    { campo: 'rol_empresa',    icono: 'ti-briefcase',        etiqueta: 'Mi rol en la empresa' }
  ]

};
