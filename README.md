# 🎮 Onboarding Game V2

Juego de onboarding gamificado para empresas. Permite a nuevos empleados conocer a sus compañeros a través de pistas, de forma divertida y sin esfuerzo administrativo.

---

## 🏗️ Arquitectura

### Stack
- **Frontend:** HTML/CSS/JS puro — una sola página (`index.html`)
- **Base de datos:** Airtable (API REST) — reemplaza el localStorage de la v1
- **Hosting:** GitHub Pages
- **Fotos:** Base64 almacenadas en Airtable o URLs externas

### Diferencias respecto a la v1
| Característica | V1 (Mostaza) | V2 |
|---|---|---|
| Datos | localStorage + JSON en HTML | Airtable por empresa |
| Gestión de perfiles | Panel Admin en el juego | Airtable directamente |
| Multi-empresa | No | Sí (por API Key) |
| Fotos | Base64 en HTML | Base64 en Airtable |
| Actualización | Editar HTML en GitHub | Editar fila en Airtable |

---

## 📁 Estructura de archivos

```
OnboardingGameV2/
├── index.html          # Juego completo
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker
├── icon-192.png        # Icono PWA
├── icon-512.png        # Icono PWA
├── config.js           # Configuración por empresa (API Key Airtable)
└── README.md           # Este archivo
```

---

## 🗄️ Estructura de Airtable

### Base: `OnboardingGame`
### Tabla: `Perfiles`

| Campo | Tipo | Descripción |
|---|---|---|
| `nombre` | Single line text | Nombre completo |
| `email` | Email | Email para invitar a café |
| `foto` | Attachment o Long text (base64) | Foto de perfil |
| `departamento` | Single line text | Pista 1 |
| `antiguedad` | Single line text | Pista 2 |
| `como_soy` | Long text | Pista 3 |
| `dato_curioso` | Long text | Pista 4 |
| `plan_perfecto` | Long text | Pista 5 |
| `peor_pesadilla` | Long text | Pista 6 |
| `empresa` | Single line text | Identificador de empresa (para multi-empresa) |

---

## ⚙️ Configuración por empresa

Cada empresa necesita:
1. Una **Airtable Base** con la tabla `Perfiles`
2. Una **API Key** de Airtable (o token de acceso personal)
3. El **Base ID** de su base de Airtable

Estos datos se configuran en `config.js`:

```javascript
const CONFIG = {
  airtableToken: 'patXXXXXXXXXXXXXX',
  airtableBaseId: 'appXXXXXXXXXXXXXX',
  airtableTable: 'Perfiles',
  empresaNombre: 'Nombre Empresa',
  empresaColor: '#d4ac39'
};
```

---

## 🚀 Flujo de trabajo

1. Cliente contrata el servicio
2. Se crea una Base en Airtable para esa empresa
3. RRHH rellena los perfiles directamente en Airtable
4. Se despliega el juego en GitHub Pages con el `config.js` de esa empresa
5. RRHH actualiza Airtable cuando hay cambios — sin tocar código

---

## 📋 TODO

- [ ] Crear estructura base del `index.html` (basado en v1)
- [ ] Crear `config.js`
- [ ] Implementar carga de perfiles desde Airtable API
- [ ] Adaptar el juego para leer de Airtable en lugar de localStorage
- [ ] Crear tabla en Airtable de prueba
- [ ] Probar con datos reales
- [ ] Configurar GitHub Pages
- [ ] Documentar proceso para nuevas empresas

---

## 🔑 Credenciales de desarrollo (NO subir a producción)

> Guardar en archivo local `.env` o en las notas seguras

- Airtable Token: (pendiente)
- Airtable Base ID: (pendiente)

---

## 📝 Historial

- **v1** — Mostaza Comunicación — `github.com/Caipirolga/onboarding-mostaza`
- **v2** — Multi-empresa con Airtable — `github.com/Caipirolga/OnboardingGameV2`
