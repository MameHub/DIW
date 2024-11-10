# Práctica 8
### Menú multinivel

En este repositorio se muestra como se realiza un menú multinivel como el mostrado en la siguiente imagen:

![Imagen de ejemplo menú multinivel](Practica8.png)

Para realizar el siguiente menú multinivel, he utilzado el siguiente código HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Álvaro Cañas González</title>
</head>
<body>
    <header>
        <nav class="menu">
            <ul>
                <li>Home</li>
                <li>Servicios
                    <ul>
                        <li>Diseño gráfico
                            <ul></ul>
                        </li>
                        <li>Diseño web
                            <ul></ul>
                        </li>
                        <li>Marketing
                            <ul>
                                <li>Submenu 1</li>
                                <li>Submenu 2</li>
                                <li>Submenu 3
                                    <ul>
                                        <li>Submenu 1</li>
                                        <li>Submenu 2</li>
                                        <li>Submenu 3</li>
                                        <li>Submenu 4</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>SEO</li>
                    </ul>
                </li>
                <li>Acerca
                    <ul></ul>
                </li>
                <li>Contacto</li>
            </ul>
        </nav>
    </header>
</body>
</html>
```

Para darle formato se ha utilizado el siguiente estilo en css:

```css

```

El resultado final es el siguiente:

![]()