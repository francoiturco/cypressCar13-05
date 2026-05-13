# 🚀 Proyecto de Automatización QA - Cypress + JavaScript + Allure

Framework de automatización E2E y API Testing desarrollado con:

* Cypress
* JavaScript
* Allure Reports
* Page Object Model (POM)
* Variables de entorno con dotenv

---

# 📁 Estructura del Proyecto

```bash
CROWDAR/
│
├── allure-report/                # Reporte generado por Allure
├── allure-results/               # Resultados crudos de Allure
│
├── cypress/
│   ├── docs/
│   │   └── testCasesLoginAndCart.md
│   │
│   ├── e2e/
│   │   ├── api/
│   │   │   └── api.cy.js
│   │   │
│   │   ├── cart/
│   │   │   └── cart.cy.js
│   │   │
│   │   └── login/
│   │       └── login.cy.js
│   │
│   ├── fixtures/
│   │   ├── api/
│   │   │   └── APIData.js
│   │   │
│   │   ├── cart/
│   │   │   └── CartPageData.js
│   │   │
│   │   ├── login/
│   │   │
│   │   └── runData/
│   │
│   ├── pages/
│   │   ├── cart/
│   │   │   └── CartPage.js
│   │   │
│   │   └── login/
│   │
│   ├── screenshots/
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .env
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🧩 Tecnologías Utilizadas

| Tecnología        | Uso                           |
| ----------------- | ----------------------------- |
| Cypress           | Automatización E2E y API      |
| JavaScript        | Lenguaje principal            |
| Allure Reports    | Reportería avanzada           |
| dotenv            | Variables de entorno          |
| Page Object Model | Organización y mantenibilidad |

---

# ⚙️ Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/francoiturco/cypressCar13-05.git
```

## 2. Instalar dependencias

```bash
npm install
```

---

# 🔐 Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

```env
BASE_URL=https://www.saucedemo.com

STANDARD_USERNAME=standard_user
LOCKED_USERNAME=locked_out_user
PASSWORD=secret_sauce
```

---

# ▶️ Ejecución de Tests

## Abrir Cypress UI

```bash
npx cypress open
```

## Ejecutar todos los tests en modo headless

```bash
npx cypress run
```

## Ejecutar tests en Chrome

```bash
npx cypress run --browser chrome
```

## Ejecutar tests en Firefox

```bash
npx cypress run --browser firefox
```

---

# 📊 Reportes con Allure

## Limpiar resultados anteriores

```bash
npm run allure:clean
```

## Ejecutar tests

```bash
npm run cy:chrome
```

## Generar reporte

```bash
npm run allure:generate
```

## Abrir reporte

```bash
npm run allure:open
```

---

# 🧪 Casos Cubiertos

## Login

* Login exitoso
* Validación de usuarios bloqueados
* Validaciones de credenciales

## Cart

* Agregar productos al carrito
* Eliminar productos
* Verificación de productos
* Validación del badge del carrito

## API

* Validación de endpoints
* Verificación de status code
* Validación de response body

---

# 🏗️ Arquitectura

El proyecto utiliza el patrón:

## ✅ Page Object Model (POM)

Separando:

* Tests
* Selectores
* Acciones
* Datos de prueba

Beneficios:

* Mayor mantenibilidad
* Reutilización de código
* Mejor escalabilidad
* Tests más limpios

---

# 🛠️ Custom Commands

Los comandos personalizados se encuentran en:

```bash
cypress/support/commands.js
```

Ejemplos:

* saveText()
* returnData()
* comandos reutilizables de UI y API

---

# 📸 Screenshots

Las capturas automáticas se almacenan en:

```bash
cypress/screenshots
```

---

# 📄 Documentación de Casos

Los casos funcionales documentados se encuentran en:

```bash
cypress/docs/testCasesLoginAndCart.md
```

---

# 👨‍💻 Buenas Prácticas Implementadas

* Uso de Page Object Model
* Separación de data de prueba
* Uso de fixtures
* Variables de entorno
* Custom commands
* Reportería profesional con Allure
* Código reutilizable y escalable

---

# 📌 Requisitos

* Node.js 18+
* npm 9+
* Java JDK instalado (para Allure)

Verificar instalación:

```bash
node -v
npm -v
java -version
```

---

# 📬 Autor

Proyecto desarrollado como framework de automatización QA utilizando Cypress + JavaScript + Allure.