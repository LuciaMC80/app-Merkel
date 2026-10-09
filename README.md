# Manejo del carcinoma de células de Merkel

Herramienta web de apoyo a la decisión clínica para estadificar el carcinoma de
células de Merkel (CCM) y obtener las recomendaciones de manejo de las guías
**ESMO‑EURACAN 2024** (European Society for Medical Oncology), **EADO 2022**
(European Association of Dermato‑Oncology, con EDF y EORTC) y **AEDV 2019**
(Academia Española de Dermatología y Venereología), del protocolo anatomopatológico
**CAP 2026** (College of American Pathologists) y de la evidencia posterior más
relevante. Cada recomendación indica la guía de la que procede.

## Qué hace

A partir de los datos del caso (edad, inmunodepresión, fragilidad, localización,
diámetro clínico, extensión, invasión linfovascular, MCPyV, márgenes, ganglio
centinela, estado ganglionar, metástasis en tránsito y a distancia) la aplicación devuelve:

- **TNM y estadio AJCC‑8 / UICC‑8** (la UICC 9.ª edición mantiene las mismas
  categorías), distinguiendo el estadio **clínico** del **patológico**, con la
  supervivencia global a 5 años de la serie de la AJCC‑8.
- **Factores de alto riesgo de recidiva** de EADO 2022 (adaptados de NCCN).
- **Actitud tras la exéresis** según el margen clínico y la distancia histológica al margen.
- **Veredictos** de margen quirúrgico, ganglio centinela, pruebas de imagen,
  radioterapia del lecho, manejo de la cuenca ganglionar y tratamiento sistémico.
- Recomendaciones de **clasificación y pronóstico, diagnóstico y anatomía patológica,
  cirugía, radioterapia, manejo ganglionar, estudio de extensión, tratamiento sistémico,
  paciente inmunodeprimido, paciente mayor o frágil y seguimiento**.
- **Evidencia posterior a las guías** (etiqueta «Post‑EADO»): nivolumab adyuvante
  (ADMEC‑O, *Lancet* 2023) y estado de los ensayos fase 3 STAMP y ADAM.
- **Filtro** para ver todas las recomendaciones o sólo las de una guía
  (ESMO, EADO, AEDV, AJCC/UICC, CAP, NCCN citada o evidencia posterior).
- **Resumen imprimible** del caso.

## Uso en el móvil

Se abre desde el navegador. Para dejarla como una app:

- **Android (Chrome):** menú ⋮ → *Añadir a pantalla de inicio*.
- **iPhone (Safari):** botón de compartir → *Añadir a pantalla de inicio*.

Instalada de este modo funciona **sin conexión**.

## Compartir un caso

El botón **Compartir caso** genera un enlace que lleva los datos del caso en la
propia dirección (después de `#`). Los datos **no salen del dispositivo**: la
aplicación no tiene servidor, no guarda nada y no registra ninguna información.

## Aviso

Herramienta de apoyo a la decisión. **No sustituye el juicio clínico ni la
valoración del comité multidisciplinar de tumores.** No es un producto sanitario
certificado y no debe usarse como única base de una decisión asistencial.

## Fuentes

- Lugowska I, et al. Merkel-cell carcinoma: ESMO‑EURACAN Clinical Practice Guideline
  for diagnosis, treatment and follow-up. *ESMO Open* 2024;9(5):102977.
- Gauci ML, et al. Diagnosis and treatment of Merkel cell carcinoma: European
  consensus-based interdisciplinary guideline — Update 2022. *Eur J Cancer* 2022;171:203–231.
- Vázquez Doval J, et al. Carcinoma de células de Merkel: diagnóstico y tratamiento en
  atención especializada dermatológica. Guía de práctica clínica de la AEDV.
  *Actas Dermosifiliogr* 2019;110(6):460–468, y texto completo de 2018.
- College of American Pathologists. Protocol for the Examination of Specimens from
  Patients with Merkel Cell Carcinoma of the Skin, v4.2.0.0, abril de 2026.
- AJCC Cancer Staging Manual, 8.ª ed.; UICC TNM, 8.ª ed., y hoja de datos UICC TNM 9.ª ed. (v1.1, 2025).
- Las posiciones de NCCN se recogen tal como las citan EADO 2022, ESMO 2024 y AEDV 2019.
- Evidencia posterior: Becker JC, et al. ADMEC‑O. *Lancet* 2023;402:798–808.
  Tai P, et al. *Cancers* 2025;17:3272.

## Contenido del repositorio

| Archivo | Descripción |
| --- | --- |
| `index.html` | La aplicación completa (interfaz y lógica en un único archivo). |
| `manifest.webmanifest` | Datos de instalación como app (nombre, iconos, colores). |
| `sw.js` | *Service worker*: permite el uso sin conexión. |
| `fonts/` | Tipografías IBM Plex Sans y JetBrains Mono (licencia SIL Open Font License). |
| `icons/` | Iconos de la app. |
