# MAG bingo mundialista

Bingo temático mundial Qatar 2022.

Incluye código necesario para imprimir cartones y jugar bingos de selecciones históricas participantes de mundiales y jugadores argentinos históricos.

## Organización del repo

### Numérico

Contiene un tablero dígital que permite llevar el control de los números que salieron. No contempla la impresión de cartones ni la selección al azar de números.

### Server

Backend con la data (`server/data`) de países y jugadores que utiliza el cliente y la impresión de cartones. Toma imagenes de países y jugadores de los directorios `server/data/img_jugadores` e `server/data/img_paises` no pusheados al repo.

Diseñado con express.js permite obtener el listado de países, jugadores y la foto de cada jugador/país.

### Cartones

Apps python para imprimir los cartones utilizando la data del server. Imprime la cantidad de cartones requerida por el usuario respetando el layout debajo descripto.

Layout de cartones:

1. Cada carton tiene 3 filas
2. Cada cartón tiene 6 columnas
3. Cada fila tiene 4 casilleros completos
4. Los valores de los casilleros completos se ordenan alfabéticamente primero por columna, luego por fila.

Desarrollado en python, `cartones/requirements.txt` contiene las librerías necesarias. Instalar con `pip install -r requirements.txt`

### Client

React app que modela el proceso de jugar al bingo, "sacando" un jugador/país por vez y permitiendo llevar un control de los items que ya salieron para chequeo de posibles ganadores del juego.
