
export interface RawAncestryCard {
  value: string;
  label: string;
  feature_1: string;
  feature_2: string;
  modifiers?: any[];
}

export const ANCESTRY_CARDS_DATA: RawAncestryCard[] = [
  {
    "value": "CLANK",
    "label": "CLANK",
    "feature_1": "Diseño con Propósito: Decide quién te creó y con qué propósito. Al crear el personaje, elige una de tus Experiencias que mejor se alinee con este propósito y obtén una bonificación permanente de +1 a ella.",
    "feature_2": "Eficiente: Cuando tomas un descanso corto, puedes elegir un movimiento de descanso largo en lugar de un movimiento de descanso corto."
  },
  {
    "value": "DRAKONA",
    "label": "DRAKONA",
    "feature_1": "Escamas: Tus escamas actúan como protección natural. Cuando fueras a recibir daño Severo, puedes marcar un Estrés para marcar 1 Punto de Golpe menos.",
    "feature_2": "Aliento Elemental: Elige un elemento para tu aliento (como electricidad, fuego o hielo). Puedes usar este aliento contra un objetivo o grupo de objetivos a Muy Corto alcance, tratándolo como un arma de Instinto que inflige d8 de daño mágico usando tu Pericia."
  },
  {
    "value": "DWARF",
    "label": "DWARF",
    "feature_1": "Piel Gruesa: Cuando recibes daño Menor, puedes marcar 2 Estrés en lugar de marcar un Punto de Golpe.",
    "feature_2": "Fortaleza Aumentada: Gasta 3 Esperanzas para reducir a la mitad el daño físico entrante."
  },
  {
    "value": "ELF",
    "label": "ELF",
    "feature_1": "Reacciones Rápidas: Marca un Estrés para obtener ventaja en una tirada de reacción.",
    "feature_2": "Trance Celestial: Durante un descanso, puedes entrar en un trance para elegir un movimiento de tiempo libre adicional."
  },
  {
    "value": "FAERIE",
    "label": "FAERIE",
    "feature_1": "Doblador de Suerte: Una vez por sesión, después de que tú o un aliado dispuesto a Corto alcance realicen una tirada de acción, puedes gastar 3 Esperanzas para volver a lanzar los Dados de Dualidad.",
    "feature_2": "Alas: Puedes volar. Mientras vuelas, puedes marcar un Estrés después de que un adversario te ataque para obtener una bonificación de +2 a tu Evasión contra ese ataque."
  },
  {
    "value": "FAUN",
    "label": "FAUN",
    "feature_1": "Salto Caprino: Puedes saltar a cualquier lugar a Corto alcance como si usaras movimiento normal, lo que te permite sortear obstáculos, saltar huecos o escalar barreras con facilidad.",
    "feature_2": "Patada: Cuando tienes éxito en un ataque contra un objetivo en rango Cuerpo a Cuerpo, puedes marcar un Estrés para impulsarte pateándolo, infligiendo 2d6 de daño extra y derribando a ti mismo o al objetivo hasta Muy Corto alcance."
  },
  {
    "value": "FIRBOLG",
    "label": "FIRBOLG",
    "feature_1": "Carga: Cuando tienes éxito en una Tirada de Agilidad para moverte desde Largo o Muy Largo alcance hasta rango Cuerpo a Cuerpo con uno o más objetivos, puedes marcar un Estrés para infligir 1d12 de daño físico a todos los objetivos en rango Cuerpo a Cuerpo.",
    "feature_2": "Inquebrantable: Cuando fueras a marcar un Estrés, lanza un d6. Con un resultado de 6, no lo marques."
  },
  {
    "value": "FUNGRIL",
    "label": "FUNGRIL",
    "feature_1": "Red Fúngica: Realiza una Tirada de Instinto (12) para usar tu red micelial para hablar con otros de tu linaje. Si tienes éxito, puedes comunicarte a cualquier distancia.",
    "feature_2": "Conexión con la Muerte: Mientras tocas un cadáver que murió recientemente, puedes marcar un Estrés para extraer un recuerdo del cadáver relacionado con una emoción o sensación específica de tu elección."
  },
  {
    "value": "GALAPA",
    "label": "GALAPA",
    "feature_1": "Caparazón: Obtienes una bonificación a tus umbrales de daño igual a tu Pericia. (Ajusta tus umbrales manualmente).",
    "feature_2": "Retraerse: Marca un Estrés para retraerte en tu caparazón. Mientras estás en tu caparazón, tienes resistencia al daño físico, tienes desventaja en las tiradas de acción y no puedes moverte.",
    "modifiers": [
      { "stat": "umbral-menor", "value": 1},
      { "stat": "umbral-mayor", "value": 1}
    ]
  },
  {
    "value": "GIANT",
    "label": "GIANT",
    "feature_1": "Resistencia: Ganas una casilla de Punto de Golpe adicional en la creación del personaje. (Ajusta tu HP Max manualmente).",
    "feature_2": "Alcance: Trata cualquier arma, habilidad, hechizo u otra característica que tenga un rango Cuerpo a Cuerpo como si tuviera un rango Muy Corto en su lugar.",
    "modifiers": [
      { "stat": "hp-max", "value": 1 }
    ]
  },
  {
    "value": "GOBLIN",
    "label": "GOBLIN",
    "feature_1": "Pies Firmes: Ignoras la desventaja en Tiradas de Agilidad.",
    "feature_2": "Sentido del Peligro: Una vez por descanso, marca un Estrés para forzar a un adversario a volver a lanzar un ataque contra ti o un aliado dentro de rango Muy Corto."
  },
  {
    "value": "HALFLING",
    "label": "HALFLING",
    "feature_1": "Portador de Suerte: Al comienzo de cada sesión, todos en tu grupo ganan una Esperanza.",
    "feature_2": "Brújula Interna: Cuando sacas un 1 en tu Dado de Esperanza, puedes volver a lanzarlo."
  },
  {
    "value": "HUMAN",
    "label": "HUMAN",
    "feature_1": "Alta Resistencia: Ganas una ranura de Estrés adicional en la creación del personaje. (Ajusta tu Estrés Max manualmente).",
    "feature_2": "Adaptabilidad: Cuando fallas una tirada que utilizó una de tus Experiencias, puedes marcar un Estrés para volver a tirar."
  },
  {
    "value": "INFERNIS",
    "label": "INFERNIS",
    "feature_1": "Sin Miedo: Cuando tiras con Miedo, puedes marcar 2 Estrés para cambiarlo a una tirada con Esperanza en su lugar.",
    "feature_2": "Rostro Temible: Tienes ventaja en las tiradas para intimidar a criaturas hostiles."
  },
  {
    "value": "KATARI",
    "label": "KATARI",
    "feature_1": "Instintos Felinos: Cuando haces una Tirada de Agilidad, puedes gastar 2 Esperanzas para volver a lanzar tu Dado de Esperanza.",
    "feature_2": "Garras Retráctiles: Haz una Tirada de Agilidad para rasguñar a un objetivo dentro del rango Cuerpo a Cuerpo. Si tienes éxito, se vuelve temporalmente Vulnerable."
  },
  {
    "value": "ORC",
    "label": "ORC",
    "feature_1": "Robusto: Cuando tienes 1 Punto de Golpe restante, los ataques contra ti tienen desventaja.",
    "feature_2": "Colmillos: Cuando tienes éxito en un ataque contra un objetivo dentro del rango Cuerpo a Cuerpo, puedes gastar una Esperanza para cornear al objetivo con tus colmillos, infligiendo 1d6 de daño extra."
  },
  {
    "value": "RIBBET",
    "label": "RIBBET",
    "feature_1": "Anfibio: Puedes respirar y moverte naturalmente bajo el agua.",
    "feature_2": "Lengua Larga: Puedes usar tu lengua larga para agarrar cosas dentro de rango Corto. Marca un Estrés para usar tu lengua como un arma de Finura a Corto alcance que inflige d12 de daño físico usando tu Pericia."
  },
  {
    "value": "SIMIAH",
    "label": "SIMIAH",
    "feature_1": "Escalador Natural: Tienes ventaja en Tiradas de Agilidad que impliquen equilibrio y escalada.",
    "feature_2": "Ágil: Gana una bonificación permanente de +1 a tu Evasión en la creación del personaje. (Ajusta tu Evasión manualmente).",
    "modifiers": [
      { "stat": "evasion", "value": 1, "requires": "feature_2" }
    ]
  }
];
