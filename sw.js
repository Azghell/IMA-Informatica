const CACHE_NAME = 'informatica-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/pseudocode.html',
  '/interactivo.html',
  '/sw.js',
  '/js/main.js',
  '/js/perifericos_juego.js',
  '/js/webmaster_quiz_juego.js',
  '/js/destreza_teclado.js',
  '/juegos/perifericos.html',
  '/juegos/webmaster_quiz.html',
  '/juegos/destreza_teclado.html',
  '/imagenes/logo.png',
  '/imagenes/bandera-de-honduras.png',
  '/imagenes/whatsapp.png',
  '/imagenes/inicio_xp.png',
  '/imagenes/gamepad.png',
  '/imagenes/monitor.png',
  '/imagenes/My Documents.png',
  '/imagenes/pantalla_tactil.png',
  '/imagenes/altavoces.png',
  '/imagenes/disco_duro_externo.png',
  '/imagenes/macos_logo.png',
  '/imagenes/Notepad.png',
  '/imagenes/descargas.png',
  '/imagenes/gestion_io_devices.png',
  '/imagenes/My Pictures.png',
  '/imagenes/raton.png',
  '/imagenes/desktop_gui.jpg',
  '/imagenes/seguridad_so.jpg',
  '/imagenes/teclado.png',
  '/imagenes/escaner.png',
  '/imagenes/fondo.jpg',
  '/imagenes/windows_logo.png',
  '/imagenes/terminal_cli.png',
  '/imagenes/tableta_grafica.png',
  '/imagenes/ia_intro_os.png',
  '/imagenes/My Videos.png',
  '/Informatica_I/historia_computacion.htm',
  '/Informatica_I/Partes_Computadora.html',
  '/Informatica_I/perifericos_entrada_salida.html',
  '/Informatica_I/software_concepto.html',
  '/Informatica_I/sistema_operativo.html',
  '/Informatica_I/seguridad_informatica.html',
  '/Informatica_I/medidas_navegacion_extensiones.html',
  '/Informatica_I/prosesadores_texto.html',
  '/Informatica_I/texto_tablas.html',
  '/Informatica_I/insertar_formato.html',
  '/Informatica_I/hojas_calculo.html',
  '/Informatica_I/estilos1.css',
  '/Informatica_I/presentacion_estilos.css',
  '/Informatica_I/fullscreen_styles.css',
  '/Informatica_I/historia_de_la_computacion.pdf',
  '/Informatica_I/partes_y_tipos_de_computadora.pdf',
  '/Informatica_I/perifericos_entrada_salida.pdf',
  '/Informatica_I/software_concepto.pdf',
  '/Informatica_I/Sistema_Operativo.pdf',
  '/Informatica_I/seguridad_informatica.pdf',
  '/Informatica_I/procesadores_palabras.pdf',
  '/Informatica_I/texto_tablas.pdf',
  '/Informatica_I/formato_insercion.pdf',
  '/Informatica_I/hojas_calculo.pdf',
  '/II_BTP_A/Informatica_Aplicada_I/dipositivos_almac.html',
  '/II_BTP_A/Informatica_Aplicada_I/sistemas_operativos.html',
  '/II_BTP_A/Informatica_Aplicada_I/terminal_comando.html',
  '/II_BTP_A/Informatica_Aplicada_I/instalacion_software.html',
  '/II_BTP_A/Informatica_Aplicada_I/redes_ip.html',
  '/II_BTP_A/Informatica_Aplicada_I/sistemas_numeracion.html',
  '/II_BTP_A/Informatica_Aplicada_I/hexadecimales.html',
  '/II_BTP_A/Informatica_Aplicada_I/manejo_archivos.html',
  '/II_BTP_A/Ofimatica_I/procesadores_texto.html',
  '/II_BTP_A/Ofimatica_I/hojas_calculo.html',
  '/II_BTP_A/Ofimatica_I/hojas_calculo2.html',
  '/II_BTP_A/Ofimatica_I/referencias_relayabso.html',
  '/II_BTP_A/Ofimatica_I/formato_condicional.html',
  '/II_BTP_A/Ofimatica_I/tablas_dinamicas.html',
  '/II_BTP_A/Ofimatica_I/validacion-datos.html',
  '/II_BTP_A/Ofimatica_I/fundamentos_VBA.html',
  '/II_BTP_A/analisis_diseno/analisis_y_diseno_s.html',
  '/II_BTP_A/analisis_diseno/rol_analista_sistemas.html',
  '/II_BTP_A/analisis_diseno/ciclo_desarrollo.html',
  '/II_BTP_A/analisis_diseno/gestion_proyectos_software.html',
  '/II_BTP_A/analisis_diseno/tecnicas_de_recoleccion_requisitos.html',
  '/III_BTP_A/dw_II/backend_frontend.html',
  '/III_BTP_A/dw_II/fundamentos_js.html',
  '/III_BTP_A/dw_II/DOM.html',
  '/III_BTP_A/dw_II/tablas_columnas.html',
  '/III_BTP_A/dw_II/eventos_javascript.html',
  '/guia_estudios/GDESR-Info-Decimo.pdf',
  '/guia_estudios/GE_infoA.pdf',
  '/guia_estudios/GDESR-infapli-IIBTP.pdf',
  '/guia_estudios/GE_Info_Apli.pdf',
  '/guia_estudios/GDESR-OFI-IIBTP.pdf',
  '/guia_estudios/GE_OFIMATICA.pdf',
  '/guia_estudios/GDESR-AYD-IIBTP.pdf',
  '/guia_estudios/GE_AYD.pdf',
  '/guia_estudios/GDESR-DW-IIIBTP.pdf',
  '/guia_estudios/GDESR-DW-IIIBTP_4parcial.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return Promise.all(
          urlsToCache.map(url => {
            return fetch(url).then(response => {
              if (response.ok) {
                return cache.put(url, response);
              }
              console.warn(`Skipping ${url} due to fetch error: ${response.status}`);
              return Promise.resolve();
            }).catch(error => {
              console.error(`Failed to fetch and cache ${url}`, error);
            });
          })
        );
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
