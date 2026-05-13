# Casos de Prueba – SauceDemo

---

# Módulo: Inicio de Sesión

## CP-LOGIN-001 – Login exitoso con credenciales válidas

### Objetivo
Verificar que un usuario válido pueda iniciar sesión correctamente.

### Precondiciones
- Usuario registrado válido.

### Datos de prueba
| Usuario | Contraseña |
|----------|-------------|
| standard_user | secret_sauce |

### Pasos
1. Ingresar al sitio.
2. Completar el campo usuario.
3. Completar el campo contraseña.
4. Hacer clic en el botón "Login".

### Resultado esperado
- El usuario accede correctamente al sistema.
- Se visualiza la pantalla de productos.
- La URL contiene `/inventory.html`.

---

## CP-LOGIN-002 – Login con contraseña incorrecta

### Objetivo
Validar mensaje de error cuando la contraseña es inválida.

### Datos de prueba
| Usuario | Contraseña |
|----------|-------------|
| standard_user | incorrecta |

### Pasos
1. Ingresar usuario válido.
2. Ingresar contraseña inválida.
3. Presionar "Login".

### Resultado esperado
- El acceso es rechazado.
- Se muestra el mensaje:
  `Epic sadface: Username and password do not match any user in this service`

---

## CP-LOGIN-003 – Login con usuario inexistente

### Datos de prueba
| Usuario | Contraseña |
|----------|-------------|
| usuario_fake | secret_sauce |

### Resultado esperado
- El sistema rechaza el acceso.
- Se muestra mensaje de error correspondiente.

---

## CP-LOGIN-004 – Login con campos vacíos

### Pasos
1. No completar ningún campo.
2. Presionar "Login".

### Resultado esperado
- Se muestra el mensaje:
  `Epic sadface: Username is required`

---

## CP-LOGIN-005 – Login sin contraseña

### Datos de prueba
| Usuario | Contraseña |
|----------|-------------|
| standard_user | vacío |

### Resultado esperado
- Se muestra el mensaje:
  `Epic sadface: Password is required`

---

## CP-LOGIN-006 – Login sin usuario

### Datos de prueba
| Usuario | Contraseña |
|----------|-------------|
| vacío | secret_sauce |

### Resultado esperado
- Se muestra el mensaje:
  `Epic sadface: Username is required`

---

## CP-LOGIN-007 – Login con usuario bloqueado

### Objetivo
Verificar comportamiento de usuario bloqueado.

### Datos de prueba
| Usuario | Contraseña |
|----------|-------------|
| locked_out_user | secret_sauce |

### Resultado esperado
- El login es rechazado.
- Se muestra mensaje indicando que el usuario está bloqueado.

---

## CP-LOGIN-008 – Acceso directo sin autenticación

### Pasos
1. Intentar ingresar manualmente a:
   `https://www.saucedemo.com/inventory.html`

### Resultado esperado
- El sistema redirige al login.
- No permite acceso sin autenticación.

---

# Módulo: Carrito de Compras

## CP-CART-001 – Agregar un producto al carrito

### Precondiciones
- Usuario autenticado.

### Pasos
1. Presionar "Add to cart" sobre un producto.

### Resultado esperado
- El producto se agrega correctamente (nombre, precio y descripción correctos)
- El badge del carrito muestra `1`.

---

## CP-CART-002 – Agregar múltiples productos

### Precondiciones
- Usuario autenticado.

### Pasos
1. Agregar varios productos al carrito.

### Resultado esperado
- El contador refleja la cantidad correcta.
- Todos los productos se agregan correctamente (nombres, precios y descripciones correctos)

---

## CP-CART-003 – Remover producto desde el listado de productos

### Precondiciones
- Usuario autenticado.

### Pasos
1. Agregar un producto.
2. Presionar "Remove".

### Resultado esperado
- El producto se elimina correctamente.
- El badge se actualiza.

---

## CP-CART-004 – Remover producto desde el carrito

### Precondiciones
- Usuario autenticado.

### Pasos
1. Agregar producto.
2. Ingresar al carrito.
3. Eliminar producto.

### Resultado esperado
- El producto desaparece del carrito.

---

## CP-CART-005 – Persistencia del carrito

### Precondiciones
- Usuario autenticado.

### Pasos
1. Agregar productos.
2. Navegar entre distintas páginas.

### Resultado esperado
- Los productos permanecen en el carrito.

---

## CP-CART-006 – Validar carrito vacío

### Precondiciones
- Usuario autenticado.

### Pasos
1. Ingresar al carrito sin productos agregados.

### Resultado esperado
- El carrito se muestra vacío.

---

## CP-CART-007 – Agregar producto desde detalle

### Precondiciones
- Usuario autenticado.

### Pasos
1. Ingresar al detalle de un producto.
2. Presionar "Add to cart".

### Resultado esperado
- El producto se agrega correctamente.
- El carrito refleja el cambio.

---