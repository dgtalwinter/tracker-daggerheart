export interface RawDomainCard {
  name: string;
  level: number;
  domain: string;
  recall_cost: number;
  type: string;
  feature_text: string;
}

export const DOMAIN_CARDS_DATA: RawDomainCard[] = [
  // ARCANA
  {
      "name": "RUNE WARD",
      "level": 1,
      "domain": "Arcana",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Tienes un amuleto profundamente personal que puede ser infundido con magia protectora y sostenido como un resguardo por ti o un aliado. Describe qué es y por qué es importante para ti. El portador del resguardo puede gastar una Esperanza para reducir el daño entrante en 1d8.\nSi el resultado del Dado de Resguardo es 8, el poder del resguardo termina después de reducir el daño en este turno. Puede recargarse gratis en tu próximo descanso."
  },
  {
      "name": "UNLEASH CHAOS",
      "level": 1,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Al comienzo de una sesión, coloca un número de fichas igual a tu rasgo de Lanzamiento de Hechizos en esta carta.\nRealiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance y gasta cualquier número de fichas para canalizar energía pura desde tu interior para desatarla contra él. Si tienes éxito, lanza un número de d10s igual a las fichas que gastaste e inflige esa cantidad de daño mágico al objetivo. Marca un Estrés para reponer esta carta con fichas (hasta tu rasgo de Lanzamiento de Hechizos).\nAl final de cada sesión, retira todas las fichas no gastadas."
  },
  {
      "name": "WALL WALK",
      "level": 1,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para permitir que una criatura que puedas tocar trepe por paredes y techos con la misma facilidad que caminar por el suelo. Esto dura hasta el final de la escena o hasta que lances Caminar por la Pared de nuevo."
  },
  {
      "name": "CINDER GRASP",
      "level": 2,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo en rango Cuerpo a Cuerpo. Si tienes éxito, el objetivo estalla instantáneamente en llamas, recibe 1d20+3 de daño mágico y queda temporalmente En Llamas.\nCuando una criatura actúa mientras está En Llamas, debe recibir 2d6 de daño mágico extra si todavía está En Llamas al final de su acción."
  },
  {
      "name": "FLOATING EYE",
      "level": 2,
      "domain": "Arcana",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para crear un único y pequeño orbe flotante que puedes mover a cualquier lugar a Muy Largo alcance. Mientras este hechizo está activo, puedes ver a través del orbe como si estuvieras mirando desde su posición. Puedes cambiar libremente entre usar tus propios sentidos y ver a través del orbe. Si el orbe recibe daño o se sale de rango, el hechizo termina."
  },
  {
      "name": "COUNTERSPELL",
      "level": 3,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Puedes interrumpir un efecto mágico que esté ocurriendo haciendo una tirada de reacción con tu rasgo de Lanzamiento de Hechizos. Si tienes éxito, el efecto se detiene y se evitan todas las consecuencias, y esta carta se coloca en tu bóveda."
  },
  {
      "name": "FLIGHT",
      "level": 3,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (15). Si tienes éxito, coloca un número de fichas igual a tu Agilidad en esta carta (mínimo 1). Cuando realizas una tirada de acción mientras vuelas, gasta una ficha de esta carta. Después de que se resuelva la acción que gasta la última ficha, desciendes al suelo directamente debajo de ti."
  },
  {
      "name": "BLINK OUT",
      "level": 4,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (12). Si tienes éxito, gasta una Esperanza para teletransportarte a otro punto que puedas ver a Largo alcance. Si hay criaturas dispuestas a Muy Corto alcance, gasta una Esperanza adicional por cada criatura para llevarlas contigo."
  },
  {
      "name": "PRESERVATION BLAST",
      "level": 4,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra todos los objetivos en rango Cuerpo a Cuerpo. Los objetivos contra los que tengas éxito son empujados hasta Largo alcance y reciben d8+3 de daño mágico usando tu rasgo de Lanzamiento de Hechizos."
  },
  {
      "name": "CHAIN LIGHTNING",
      "level": 5,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Marca 2 Estrés para realizar una Tirada de Lanzamiento de Hechizos, desatando un relámpago sobre todos los objetivos a Corto alcance. Los objetivos contra los que tengas éxito deben hacer una tirada de reacción con una Dificultad igual al resultado de tu Tirada de Lanzamiento de Hechizos. Los objetivos que fallen reciben 2d8+4 de daño mágico. Adversarios adicionales que no hayan sido objetivo de Rayo en Cadena y que estén a Corto alcance de objetivos anteriores que recibieron daño también deben hacer la tirada de reacción. Los objetivos que fallen reciben 2d8+4 de daño mágico. Esta cadena continúa hasta que no haya más adversarios al alcance."
  },
  {
      "name": "PREMONITION",
      "level": 5,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Puedes canalizar energía arcana para tener visiones del futuro. Una vez por descanso largo, inmediatamente después de que el GM comunique las consecuencias de una tirada que hiciste, puedes anular el movimiento y las consecuencias como si nunca hubieran ocurrido y realizar otro movimiento en su lugar."
  },
  {
      "name": "RIFT WALKER",
      "level": 6,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (15). Si tienes éxito, colocas una marca arcana en el suelo donde te encuentras actualmente. La próxima vez que lances con éxito Caminante de la Grieta, se abre una grieta en el espacio, proporcionando un pasaje seguro de regreso al lugar exacto donde se colocó la marca. Esta grieta permanece abierta hasta que decidas cerrarla o lances otro hechizo.\nPuedes abandonar el hechizo en cualquier momento para volver a lanzar Caminante de la Grieta y colocar la marca en un lugar nuevo."
  },
  {
      "name": "TELEKINESIS",
      "level": 6,
      "domain": "Arcana",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance. Si tienes éxito, puedes usar tu mente para moverlo a cualquier lugar a Largo alcance de su posición original. Puedes lanzar al objetivo levantado como un ataque realizando una Tirada de Lanzamiento de Hechizos adicional contra el segundo objetivo que intentas atacar. Si tienes éxito, inflige d12+4 de daño físico al segundo objetivo usando tu Pericia. Este hechizo entonces termina."
  },
  {
      "name": "ARCANA‑TOUCHED",
      "level": 7,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Arcano, obtienes los siguientes beneficios:\n• +1 de bonificación a tus Tiradas de Lanzamiento de Hechizos\n• Una vez por descanso, puedes intercambiar los resultados de tus Dados de Esperanza y Miedo."
  },
  {
      "name": "CLOAKING BLAST",
      "level": 7,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Cuando realizas con éxito una Tirada de Lanzamiento de Hechizos para lanzar un hechizo diferente, puedes gastar una Esperanza para volverte Oculto. Mientras estás Oculto, permaneces invisible si estás inmóvil cuando un adversario se mueve a un lugar donde normalmente te vería. Cuando te mueves hacia o dentro de la línea de visión de un adversario o realizas un ataque, dejas de estar Oculto."
  },
  {
      "name": "ARCANE REFLECTION",
      "level": 8,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Cuando vayas a recibir daño mágico, puedes gastar cualquier número de Esperanza para lanzar esa misma cantidad de d6s. Si alguno saca un 6, el ataque se refleja de vuelta al lanzador, infligiéndole el daño a él en su lugar."
  },
  {
      "name": "CONFUSING AURA",
      "level": 8,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (14). Una vez por descanso largo, si tienes éxito, creas una capa de ilusión sobre tu cuerpo que hace difícil saber exactamente dónde estás. Marca cualquier número de Estrés para crear esa misma cantidad de capas adicionales. Cuando un adversario te ataca, lanza un número de d6s igual al número de capas actualmente activas. Si alguno saca 5 o más, una capa del aura se destruye y el ataque falla. Si todos los resultados son 4 o menos, recibes el daño y este hechizo termina."
  },
  {
      "name": "EARTHQUAKE",
      "level": 9,
      "domain": "Arcana",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (16). Una vez por descanso, si tienes éxito, todos los objetivos a Muy Largo alcance que no estén volando deben hacer una Tirada de Reacción (18). Los objetivos que fallen reciben 3d10+8 de daño físico y son temporalmente Vulnerables. Los objetivos que tengan éxito reciben la mitad del daño.\nAdemás, cuando tienes éxito en la Tirada de Lanzamiento de Hechizos, todo el terreno a Muy Largo alcance se vuelve difícil de atravesar y las estructuras dentro de este rango pueden sufrir daños o derrumbarse."
  },
  {
      "name": "SENSORY PROJECTION",
      "level": 9,
      "domain": "Arcana",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Una vez por descanso, realiza una Tirada de Lanzamiento de Hechizos (15). Si tienes éxito, caes en una visión que te permite ver y oír claramente cualquier lugar en el que hayas estado antes como si estuvieras allí en este momento. Puedes moverte libremente en esta visión y no estás limitado por la física o los impedimentos de un cuerpo físico. Este hechizo no puede ser detectado por medios mundanos o mágicos. Sales de esta visión al recibir daño o lanzar otro hechizo."
  },
  {
      "name": "ADJUST REALITY",
      "level": 10,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Después de que tú o un aliado dispuesto realicen cualquier tirada, puedes gastar 5 Esperanzas para cambiar el resultado numérico de esa tirada a un resultado de tu elección. El resultado debe ser plausible dentro del rango de los dados."
  },
  {
      "name": "FALLING SKY",
      "level": 10,
      "domain": "Arcana",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra todos los adversarios a Largo alcance. Marca cualquier número de Estrés para hacer que lluevan fragmentos de arcana desde arriba. Los objetivos contra los que tengas éxito reciben 1d20+2 de daño mágico por cada Estrés marcado."
  },
  // BLADE
  {
      "name": "GET BACK UP",
      "level": 1,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando recibes daño Severo, puedes marcar un Estrés para reducir la severidad en un umbral."
  },
  {
      "name": "NOT GOOD ENOUGH",
      "level": 1,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando lanzas tus dados de daño, puedes volver a lanzar cualquier 1 o 2."
  },
  {
      "name": "WHIRLWIND",
      "level": 1,
      "domain": "Blade",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando realizas un ataque exitoso contra un objetivo a Muy Corto alcance, puedes gastar una Esperanza para usar el ataque contra todos los demás objetivos a Muy Corto alcance. Todos los adversarios adicionales contra los que tengas éxito con esta habilidad reciben la mitad del daño."
  },
  {
      "name": "A SOLDIER’S BOND",
      "level": 2,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, cuando felicitas a alguien o le preguntas sobre algo en lo que es bueno, ambos pueden ganar 3 Esperanzas."
  },
  {
      "name": "RECKLESS",
      "level": 2,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Marca un Estrés para obtener ventaja en un ataque."
  },
  {
      "name": "SCRAMBLE",
      "level": 3,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Una vez por descanso, cuando una criatura en rango Cuerpo a Cuerpo te vaya a infligir daño, puedes evitar el ataque y moverte de forma segura fuera del rango Cuerpo a Cuerpo del enemigo."
  },
  {
      "name": "VERSATILE FIGHTER",
      "level": 3,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Puedes usar un rasgo de personaje diferente para un arma equipada, en lugar del rasgo que el arma requiere.\nCuando infliges daño, puedes marcar un Estrés para usar el resultado máximo de uno de tus dados de daño en lugar de lanzarlo."
  },
  {
      "name": "DEADLY FOCUS",
      "level": 4,
      "domain": "Blade",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Una vez por descanso, puedes aplicar todo tu enfoque hacia un objetivo de tu elección. Hasta que ataques a otra criatura, derrotes al objetivo o la batalla termine, obtienes una bonificación de +1 a tu Pericia."
  },
  {
      "name": "FORTIFIED ARMOR",
      "level": 4,
      "domain": "Blade",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Mientras llevas armadura, obtienes una bonificación de +2 a tus umbrales de daño."
  },
  {
      "name": "CHAMPION’S EDGE",
      "level": 5,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando obtienes un éxito crítico en un ataque, puedes gastar hasta 3 Esperanzas y elegir una de las siguientes opciones por cada Esperanza gastada:\n• Eliminas un Punto de Golpe.\n• Eliminas una Casilla de Armadura.\n• El objetivo debe marcar un Punto de Golpe adicional.\nNo puedes elegir la misma opción más de una vez."
  },
  {
      "name": "VITALITY",
      "level": 5,
      "domain": "Blade",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando eliges esta carta, obtienes permanentemente dos de los siguientes beneficios:\n• Una casilla de Estrés\n• Una casilla de Punto de Golpe\n• +2 de bonificación a tus umbrales de daño\nLuego, coloca esta carta en tu bóveda permanentemente."
  },
  {
      "name": "BATTLE‑HARDENED",
      "level": 6,
      "domain": "Blade",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, cuando vayas a realizar un Movimiento de Muerte, puedes gastar una Esperanza para eliminar un Punto de Golpe en su lugar."
  },
  {
      "name": "RAGE UP",
      "level": 6,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Antes de realizar un ataque, puedes marcar un Estrés para obtener una bonificación a tu tirada de daño igual al doble de tu Fuerza.\nPuedes Enfurecerte dos veces por ataque."
  },
  {
      "name": "BLADE‑TOUCHED",
      "level": 7,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Filo, obtienes los siguientes beneficios:\n• +2 de bonificación a tus tiradas de ataque\n• +4 de bonificación a tu umbral de daño Severo"
  },
  {
      "name": "GLANCING BLOW",
      "level": 7,
      "domain": "Blade",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando fallas un ataque, puedes marcar un Estrés para infligir daño de arma usando la mitad de tu Pericia."
  },
  {
      "name": "BATTLE CRY",
      "level": 8,
      "domain": "Blade",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, mientras cargas hacia el peligro, puedes lanzar un grito de guerra que inspire a tus aliados. Todos los aliados que puedan oírte eliminan un Estrés y ganan una Esperanza. Además, tus aliados obtienen ventaja en las tiradas de ataque hasta que tú o un aliado obtengan un fallo con Miedo."
  },
  {
      "name": "FRENZY",
      "level": 8,
      "domain": "Blade",
      "recall_cost": 3,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, puedes entrar en un Frenesí hasta que no haya más adversarios a la vista.\nMientras estás en Frenesí, no puedes usar Casillas de Armadura, y obtienes una bonificación de +10 a tus tiradas de daño y una bonificación de +8 a tu umbral de daño Severo."
  },
  {
      "name": "GORE AND GLORY",
      "level": 9,
      "domain": "Blade",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando obtienes un éxito crítico en un ataque con arma, ganas una Esperanza adicional o eliminas un Estrés adicional.\nAdemás, cuando infliges suficiente daño para derrotar a un enemigo, ganas una Esperanza o eliminas un Estrés."
  },
  {
      "name": "REAPER’S STRIKE",
      "level": 9,
      "domain": "Blade",
      "recall_cost": 3,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, gasta una Esperanza para hacer una tirada de ataque. El GM te dice contra qué objetivos dentro del alcance tendría éxito. Elige uno de estos objetivos y oblígalo a marcar 5 Puntos de Golpe."
  },
  {
      "name": "BATTLE MONSTER",
      "level": 10,
      "domain": "Blade",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando realizas un ataque exitoso contra un adversario, puedes marcar 4 Estrés para forzar al objetivo a marcar un número de Puntos de Golpe igual al número de Puntos de Golpe que tienes marcados actualmente en lugar de tirar por daño."
  },
  {
      "name": "ONSLAUGHT",
      "level": 10,
      "domain": "Blade",
      "recall_cost": 3,
      "type": "Ability",
      "feature_text": "Cuando realizas con éxito un ataque con tu arma, nunca infliges daño por debajo del umbral de daño Mayor de un objetivo (el objetivo siempre marca un mínimo de 2 Puntos de Golpe).\nAdemás, cuando una criatura dentro del alcance de tu arma inflige daño a un aliado con un ataque que no te incluye, puedes marcar un Estrés para obligarla a hacer una Tirada de Reacción (15). Si falla, el objetivo debe marcar un Punto de Golpe."
  },
  // BONE
  {
      "name": "DEFT MANEUVERS",
      "level": 1,
      "domain": "Bone",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Una vez por descanso, marca un Estrés para esprintar a cualquier lugar a Largo alcance sin hacer una Tirada de Agilidad para llegar allí.\nSi terminas este movimiento en rango Cuerpo a Cuerpo de un adversario e inmediatamente realizas un ataque contra él, obtienes una bonificación de +1 a la tirada de ataque."
  },
  {
      "name": "I SEE IT COMING",
      "level": 1,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando eres objetivo de un ataque realizado desde más allá del rango Cuerpo a Cuerpo, puedes marcar un Estrés para lanzar un d4 y obtener una bonificación a tu Evasión igual al resultado contra el ataque."
  },
  {
      "name": "UNTOUCHABLE",
      "level": 1,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Obtienes una bonificación a tu Evasión igual a la mitad de tu Agilidad."
  },
  {
      "name": "FEROCITY",
      "level": 2,
      "domain": "Bone",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando haces que un adversario marque 1 o más Puntos de Golpe, puedes gastar 2 Esperanzas para aumentar tu Evasión en el número de Puntos de Golpe que marcaron. Esta bonificación dura hasta después del siguiente ataque realizado contra ti."
  },
  {
      "name": "STRATEGIC APPROACH",
      "level": 2,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Después de un descanso largo, coloca un número de fichas igual a tu Conocimiento en esta carta (mínimo 1). La primera vez que te muevas a Corto alcance de un adversario y realices un ataque contra él, puedes gastar una ficha para elegir una de las siguientes opciones:\n• Realizas el ataque con ventaja.\n• Eliminas un Estrés en un aliado en rango Cuerpo a Cuerpo del adversario.\n• Añades un d8 a tu tirada de daño.\nCuando tomas un descanso largo, retira todas las fichas no gastadas."
  },
  {
      "name": "BRACE",
      "level": 3,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando marcas una Casilla de Armadura para reducir el daño entrante, puedes marcar un Estrés para marcar una Casilla de Armadura adicional."
  },
  {
      "name": "TACTICIAN",
      "level": 3,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando Ayudas a un Aliado, este puede gastar una Esperanza para añadir una de tus Experiencias a su tirada junto con tu dado de ventaja.\nAl realizar una Tirada en Equipo, puedes lanzar un d20 como tu Dado de Esperanza."
  },
  {
      "name": "BOOST",
      "level": 4,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Marca un Estrés para impulsarte desde un aliado dispuesto a Corto alcance, lanzarte al aire y realizar un ataque aéreo contra un objetivo a Largo alcance. Tienes ventaja en el ataque, añades un d10 a la tirada de daño y terminas tu movimiento en rango Cuerpo a Cuerpo del objetivo."
  },
  {
      "name": "REDIRECT",
      "level": 4,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando un ataque realizado contra ti desde más allá del rango Cuerpo a Cuerpo falla, lanza un número de d6s igual a tu Pericia. Si alguno saca un 6, puedes marcar un Estrés para redirigir el ataque y dañar a un adversario a Muy Corto alcance en su lugar."
  },
  {
      "name": "KNOW THY ENEMY",
      "level": 5,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Al observar a una criatura, puedes hacer una Tirada de Instinto contra ella. Si tienes éxito, gasta una Esperanza y pide al GM un conjunto de información sobre el objetivo de las siguientes opciones:\n• Sus Puntos de Golpe y Estrés no marcados.\n• Su Dificultad y umbrales de daño.\n• Sus tácticas y dados de daño de ataque estándar.\n• Sus características y Experiencias.\nAdemás, si tienes éxito, puedes marcar un Estrés para eliminar un Miedo de la Reserva de Miedo del GM."
  },
  {
      "name": "SIGNATURE MOVE",
      "level": 5,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Nombra y describe tu movimiento de combate característico. Una vez por descanso, cuando realices este movimiento característico como parte de una acción que estás tomando, puedes lanzar un d20 como tu Dado de Esperanza. Si tienes éxito, elimina un Estrés."
  },
  {
      "name": "RAPID RIPOSTE",
      "level": 6,
      "domain": "Bone",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando un ataque realizado contra ti desde rango Cuerpo a Cuerpo falla, puedes marcar un Estrés y aprovechar la oportunidad para infligir el daño del arma de una de tus armas activas al atacante."
  },
  {
      "name": "RECOVERY",
      "level": 6,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Durante un descanso corto, puedes elegir un movimiento de tiempo libre de descanso largo en su lugar. Puedes gastar una Esperanza para permitir que un aliado haga lo mismo."
  },
  {
      "name": "BONE‑TOUCHED",
      "level": 7,
      "domain": "Bone",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Hueso, obtienes los siguientes beneficios:\n• +1 de bonificación a la Agilidad\n• Una vez por descanso, puedes gastar 3 Esperanzas para hacer que un ataque que tuvo éxito contra ti falle en su lugar."
  },
  {
      "name": "CRUEL PRECISION",
      "level": 7,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando realizas un ataque exitoso con un arma, obtienes una bonificación a tu tirada de daño igual a tu Finura o Agilidad."
  },
  {
      "name": "BREAKING BLOW",
      "level": 8,
      "domain": "Bone",
      "recall_cost": 3,
      "type": "Ability",
      "feature_text": "Cuando realizas un ataque exitoso, puedes marcar un Estrés para hacer que el siguiente ataque exitoso contra ese mismo objetivo inflija 2d12 de daño extra."
  },
  {
      "name": "WRANGLE",
      "level": 8,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Realiza una Tirada de Agilidad contra todos los objetivos a Corto alcance. Gasta una Esperanza para mover a los objetivos contra los que tuviste éxito, y a cualquier aliado dispuesto a Corto alcance, a otro punto a Corto alcance."
  },
  {
      "name": "ON THE BRINK",
      "level": 9,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando tienes 2 o menos Puntos de Golpe sin marcar, no recibes daño Menor."
  },
  {
      "name": "SPLINTERING STRIKE",
      "level": 9,
      "domain": "Bone",
      "recall_cost": 3,
      "type": "Ability",
      "feature_text": "Gasta una Esperanza y realiza un ataque contra todos los adversarios dentro del alcance de tu arma. Una vez por descanso largo, si tienes éxito contra algún objetivo, suma el daño infligido y luego redistribuye ese daño como desees entre los objetivos contra los que tuviste éxito. Cuando infliges daño a un objetivo, lanza un dado de daño adicional y añade su resultado al daño que infliges a ese objetivo."
  },
  {
      "name": "DEATHRUN",
      "level": 10,
      "domain": "Bone",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Gasta 3 Esperanzas para correr en línea recta a través del campo de batalla hasta un punto a Largo alcance, realizando un ataque contra todos los adversarios dentro del alcance de tu arma a lo largo de ese camino. Elige el orden en que infliges daño a los objetivos contra los que tuviste éxito. Para el primero, lanza el daño de tu arma con una bonificación de +1 a tu Pericia. Luego, retira un dado de tu tirada de daño e inflige el daño restante al siguiente objetivo. Continúa retirando un dado por cada objetivo subsiguiente hasta que no tengas más dados de daño o adversarios.\nNo puedes apuntar al mismo adversario más de una vez por ataque."
  },
  {
      "name": "SWIFT STEP",
      "level": 10,
      "domain": "Bone",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando un ataque realizado contra ti falla, elimina un Estrés. Si no puedes eliminar un Estrés, gana una Esperanza."
  },
  // CODEX
  {
      "name": "BOOK OF AVA",
      "level": 1,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Empujón de Poder: Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo en rango Cuerpo a Cuerpo. Si tienes éxito, son derribados hasta Largo alcance y reciben d10+2 de daño mágico usando tu Pericia.\nArmadura de Tava: Gasta una Esperanza para dar a un objetivo que puedas tocar una bonificación de +1 a su Puntuación de Armadura hasta su próximo descanso o hasta que lances Armadura de Tava de nuevo.\nPico de Hielo: Realiza una Tirada de Lanzamiento de Hechizos (12) para invocar un gran pico de hielo a Largo alcance. Si lo usas como arma, realiza la Tirada de Lanzamiento de Hechizos contra la Dificultad del objetivo en su lugar. Si tienes éxito, inflige d6 de daño físico usando tu Pericia."
  },
  {
      "name": "BOOK OF ILLIAT",
      "level": 1,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Sueño: Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Muy Corto alcance. Si tienes éxito, están Dormidos hasta que reciban daño o el GM gaste un Miedo en su turno para eliminar esta condición.\nAndanada Arcana: Una vez por descanso, gasta cualquier cantidad de Esperanza y dispara proyectiles mágicos que golpean a un objetivo de tu elección a Corto alcance. Lanza un número de d6s igual a la Esperanza gastada e inflige esa cantidad de daño mágico al objetivo.\nTelepatía: Gasta una Esperanza para abrir una línea de comunicación mental con un objetivo que puedas ver. Esta conexión dura hasta tu próximo descanso o hasta que lances Telepatía de nuevo."
  },
  {
      "name": "BOOK OF TYFAR",
      "level": 1,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Llama Salvaje: Realiza una Tirada de Lanzamiento de Hechizos contra hasta tres adversarios en rango Cuerpo a Cuerpo. Los objetivos contra los que tengas éxito reciben 2d6 de daño mágico y deben marcar un Estrés mientras las llamas brotan de tu mano.\nMano Mágica: Conjuras una mano mágica del mismo tamaño y fuerza que la tuya a Largo alcance.\nNiebla Misteriosa: Realiza una Tirada de Lanzamiento de Hechizos (13) para lanzar una espesa niebla temporal que se acumula en un área estacionaria a Muy Corto alcance. La niebla oscurece intensamente esta área y todo lo que hay en ella."
  },
  {
      "name": "BOOK OF SITIL",
      "level": 2,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Ajustar Apariencia: Cambias mágicamente tu apariencia y vestimenta para evitar ser reconocido.\nParallela: Gasta 2 Esperanzas para lanzar este hechizo sobre ti o un aliado a Corto alcance. La próxima vez que el objetivo realice un ataque, puede golpear a un objetivo adicional dentro del alcance contra el que su tirada de ataque tendría éxito. Solo puedes mantener este hechizo en una criatura a la vez.\nIlusión: Realiza una Tirada de Lanzamiento de Hechizos (14).\nSi tienes éxito, crea una ilusión visual temporal no más grande que tú a Corto alcance que dura mientras la mires. Resiste el escrutinio hasta que un observador esté en rango Cuerpo a Cuerpo."
  },
  {
      "name": "BOOK OF VAGRAS",
      "level": 2,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Cerradura Rúnica: Realiza una Tirada de Lanzamiento de Hechizos (15) sobre un objeto que estés tocando y que pueda cerrarse (como una cerradura, un cofre o una caja). Una vez por descanso, si tienes éxito, puedes cerrar el objeto para que solo pueda ser abierto por criaturas de tu elección. Alguien con acceso a la magia y una hora de tiempo para estudiar el hechizo puede romperlo.\nPuerta Arcana: Cuando no tengas adversarios en rango Cuerpo a Cuerpo, realiza una Tirada de Lanzamiento de Hechizos (13). Si tienes éxito, gasta una Esperanza para crear un portal desde donde estás hasta un punto a Largo alcance que puedas ver. Se cierra una vez que una criatura ha pasado a través de él.\nRevelar: Realiza una Tirada de Lanzamiento de Hechizos. Si hay algo mágicamente oculto a Corto alcance, se revela."
  },
  {
      "name": "BOOK OF KORVAX",
      "level": 3,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Levitación: Realiza una Tirada de Lanzamiento de Hechizos para levantar temporalmente a un objetivo que puedas ver en el aire y moverlo a Corto alcance de su posición original.\nRetractarse: Gasta una Esperanza para forzar a un objetivo en rango Cuerpo a Cuerpo a hacer una Tirada de Reacción (15). Si falla, olvida el último minuto de su conversación.\nCírculo Rúnico: Marca un Estrés para crear un círculo mágico temporal en el suelo donde te encuentras. Todos los adversarios en rango Cuerpo a Cuerpo, o que entren en rango Cuerpo a Cuerpo, reciben 2d12+4 de daño mágico y son derribados hasta Muy Corto alcance."
  },
  {
      "name": "BOOK OF NORAI",
      "level": 3,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Atadura Mística: Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance. Si tienes éxito, quedan temporalmente Inmovilizados y deben marcar un Estrés. Si apuntas a una criatura voladora, este hechizo los derriba y los Inmoviliza temporalmente.\nBola de Fuego: Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Muy Largo alcance. Si tienes éxito, lanza una esfera de fuego hacia ellos que explota al impactar. El objetivo y todas las criaturas a Muy Corto alcance de ellos deben hacer una Tirada de Reacción (13). Los objetivos que fallen reciben d20+5 de daño mágico usando tu Pericia. Los objetivos que tengan éxito reciben la mitad del daño."
  },
  {
      "name": "BOOK OF EXOTA",
      "level": 4,
      "domain": "Codex",
      "recall_cost": 3,
      "type": "Grimoire",
      "feature_text": "Repudiar: Puedes interrumpir un efecto mágico que esté ocurriendo. Realiza una tirada de reacción usando tu rasgo de Lanzamiento de Hechizos. Una vez por descanso, si tienes éxito, el efecto se detiene y se evitan todas las consecuencias.\nCrear Constructo: Gasta una Esperanza para elegir un grupo de objetos a tu alrededor y crear un constructo animado con ellos que obedece órdenes básicas. Realiza una Tirada de Lanzamiento de Hechizos para ordenarles que realicen una acción. Cuando sea necesario, comparten tu Evasión y rasgos y sus ataques infligen 2d10+3 de daño físico. Solo puedes mantener un constructo a la vez, y se deshacen cuando reciben cualquier cantidad de daño."
  },
  {
      "name": "BOOK OF GRYNN",
      "level": 4,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Desvío Arcano: Una vez por descanso largo, gasta una Esperanza para anular el daño de un ataque dirigido a ti o a un aliado a Muy Corto alcance.\nBloqueo Temporal: Apunta a un objeto a Largo alcance. Ese objeto se detiene en el tiempo y el espacio exactamente donde está hasta tu próximo descanso. Si una criatura intenta moverlo, realiza una Tirada de Lanzamiento de Hechizos contra ella para mantener este hechizo.\nMuro de Fuego: Realiza una Tirada de Lanzamiento de Hechizos (15). Si tienes éxito, crea un muro de llama mágica entre dos puntos a Largo alcance. Todas las criaturas en su camino deben elegir un lado en el que estar, y cualquier cosa que posteriormente pase a través del muro recibe 4d10+3 de daño mágico."
  },
  {
      "name": "MANIFEST WALL",
      "level": 5,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (15). Una vez por descanso, si tienes éxito, gasta una Esperanza para crear un muro mágico temporal entre dos puntos a Largo alcance. Puede tener hasta 50 pies de alto y formarse en cualquier ángulo. Las criaturas u objetos en su camino son empujados hacia un lado de tu elección. El muro permanece levantado hasta tu próximo descanso o hasta que lances Muro Manifiesto de nuevo."
  },
  {
      "name": "TELEPORT",
      "level": 5,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, puedes teletransportarte instantáneamente a ti mismo y a cualquier número de objetivos dispuestos a Corto alcance a un lugar en el que hayas estado antes. Elige una de las siguientes opciones, luego realiza una Tirada de Lanzamiento de Hechizos (16):\n• Si conoces el lugar muy bien, obtienes una bonificación de +3.\n• Si has visitado el lugar con frecuencia, obtienes una bonificación de +1.\n• Si has visitado el lugar con poca frecuencia, no obtienes modificador.\n• Si solo has estado allí una vez, obtienes una penalización de -2.\nSi tienes éxito, apareces donde tenías la intención de ir. Si fallas, apareces fuera de curso, y el rango del fallo determina qué tan lejos te desvías."
  },
  {
      "name": "BANISH",
      "level": 6,
      "domain": "Codex",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Corto alcance. Si tienes éxito, lanza un número de d20s igual a tu rasgo de Lanzamiento de Hechizos. El objetivo debe hacer una tirada de reacción con una Dificultad igual a tu resultado más alto. Si tiene éxito, el objetivo debe marcar un Estrés pero no es desterrado. Una vez por descanso, si falla, es desterrado de este reino.\nCuando los PJs tiran con Miedo, la Dificultad obtiene una penalización de -1 y el objetivo hace otra tirada de reacción. Si tiene éxito, regresa del destierro."
  },
  {
      "name": "SIGIL OF RETRIBUTION",
      "level": 6,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Marca a un adversario a Corto alcance con un sigilo de retribución. El GM gana un Miedo. Cuando el adversario marcado inflige daño a ti o a tus aliados, coloca un d8 en esta carta. Puedes tener un número de d8s igual a tu nivel. Cuando atacas con éxito al adversario marcado, lanza los dados en esta carta y suma el total a tu tirada de daño, luego retira los dados. Este efecto termina cuando el adversario marcado es derrotado o cuando lanzas Sigilo de Retribución de nuevo."
  },
  {
      "name": "BOOK OF HOMET",
      "level": 7,
      "domain": "Codex",
      "recall_cost": 0,
      "type": "Grimoire",
      "feature_text": "Atravesar: Realiza una Tirada de Lanzamiento de Hechizos (13). Una vez por descanso, si tienes éxito, tú y todas las criaturas que te toquen pueden pasar a través de una pared o puerta a Corto alcance. El efecto termina una vez que todos están del otro lado.\nPortal de Plano: Realiza una Tirada de Lanzamiento de Hechizos (14). Una vez por descanso largo, si tienes éxito, abre un portal a una ubicación en otra dimensión o plano de existencia en el que hayas estado antes. Este portal dura hasta tu próximo descanso."
  },
  {
      "name": "CODEX‑TOUCHED",
      "level": 7,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Códice, obtienes los siguientes beneficios:\n• Puedes marcar un Estrés para añadir tu Pericia a una Tirada de Lanzamiento de Hechizos.\n• Una vez por descanso, reemplaza esta carta con cualquier carta de tu bóveda sin pagar su Coste de Recuperación."
  },
  {
      "name": "BOOK OF VYOLA",
      "level": 8,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Indagar en la Memoria: Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance. Si tienes éxito, mira en la mente del objetivo y hazle una pregunta al GM. El GM describe cualquier recuerdo que el objetivo tenga relacionado con la respuesta."
  },
  {
      "name": "SAFE HAVEN",
      "level": 8,
      "domain": "Codex",
      "recall_cost": 3,
      "type": "Spell",
      "feature_text": "Cuando tengas unos minutos de calma para concentrarte, puedes gastar 2 Esperanzas para invocar tu Refugio Seguro, un gran hogar interdimensional donde tú y tus aliados pueden refugiarse. Cuando lo haces, una puerta mágica aparece en algún lugar a Corto alcance. Solo las criaturas de tu elección pueden entrar. Una vez dentro, puedes hacer la entrada invisible. Tú y cualquier otra persona dentro siempre pueden salir. Una vez que te vas, la puerta debe ser invocada de nuevo.\nCuando descansas dentro de tu propio Refugio Seguro, puedes elegir un movimiento de tiempo libre adicional."
  },
  {
      "name": "BOOK OF RONIN",
      "level": 9,
      "domain": "Codex",
      "recall_cost": 4,
      "type": "Grimoire",
      "feature_text": "Transformar: Realiza una Tirada de Lanzamiento de Hechizos (15). Si tienes éxito, te transformas en un objeto inanimado no más grande que el doble de tu tamaño normal. Puedes permanecer en esta forma hasta que recibas daño.\nEnervación Eterna: Una vez por descanso largo, realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Corto alcance. Si tienes éxito, se vuelven permanentemente Vulnerables. No pueden eliminar esta condición por ningún medio."
  },
  {
      "name": "DISINTEGRATION WAVE",
      "level": 9,
      "domain": "Codex",
      "recall_cost": 4,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (18). Una vez por descanso largo, si tienes éxito, el GM te dice qué adversarios a Largo alcance tienen una Dificultad de 18 o menos. Marca un Estrés por cada uno que desees golpear con este hechizo. Son asesinados y no pueden volver a la vida por ningún medio."
  },
  {
      "name": "BOOK OF YARROW",
      "level": 10,
      "domain": "Codex",
      "recall_cost": 2,
      "type": "Grimoire",
      "feature_text": "Bloqueador de Tiempo: Realiza una Tirada de Lanzamiento de Hechizos (18). Si tienes éxito, el tiempo se detiene temporalmente para todos a Largo alcance excepto para ti. Se reanuda la próxima vez que realices una tirada de acción que apunte a otra criatura.\nInmunidad Mágica: Gasta 5 Esperanzas para volverte inmune al daño mágico hasta tu próximo descanso."
  },
  {
      "name": "TRANSCENDENT UNION",
      "level": 10,
      "domain": "Codex",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, gasta 5 Esperanzas para lanzar este hechizo sobre dos o más criaturas dispuestas. Hasta tu próximo descanso, cuando una criatura conectada por esta unión vaya a marcar Estrés o Puntos de Golpe, las criaturas conectadas pueden elegir quién lo marca."
  },
  // GRACE
  {
      "name": "DEFT DECEIVER",
      "level": 1,
      "domain": "Grace",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Gasta una Esperanza para obtener ventaja en una tirada para engañar o hacer que alguien crea una mentira que le dices."
  },
  {
      "name": "ENRAPTURE",
      "level": 1,
      "domain": "Grace",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Corto alcance. Si tienes éxito, quedan temporalmente Cautivados. Mientras están Cautivados, la atención del objetivo está fija en ti, estrechando su campo de visión y ahogando cualquier sonido que no sea tu voz. Una vez por descanso, si tienes éxito, puedes marcar un Estrés para forzar al objetivo Cautivado a marcar un Estrés también."
  },
  {
      "name": "INSPIRATIONAL WORDS",
      "level": 1,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Tu discurso está imbuido de poder. Después de un descanso largo, coloca un número de fichas en esta carta igual to tu Presencia. Cuando hables con un aliado, puedes gastar una ficha de esta carta para darle uno de los siguientes beneficios:\n• Tu aliado elimina un Estrés.\n• Tu aliado elimina un Punto de Golpe.\n• Tu aliado gana una Esperanza.\nCuando tomas un descanso largo, retira todas las fichas no gastadas."
  },
  {
      "name": "TELL NO LIES",
      "level": 2,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Muy Corto alcance. Si tienes éxito, no pueden mentirte mientras permanezcan a Corto alcance, pero no están obligados a hablar. Si les haces una pregunta y se niegan a responder, deben marcar un Estrés y el efecto termina. El objetivo generalmente no es consciente de que este hechizo ha sido lanzado sobre ellos hasta que les hace decir la verdad."
  },
  {
      "name": "TROUBLEMAKER",
      "level": 2,
      "domain": "Grace",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando te burlas o provocas a un objetivo a Largo alcance, realiza una Tirada de Presencia contra ellos. Una vez por descanso, si tienes éxito, lanza un número de d4s igual a tu Pericia. El objetivo debe marcar un Estrés igual al resultado más alto obtenido."
  },
  {
      "name": "HYPNOTIC SHIMMER",
      "level": 3,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra todos los adversarios frente a ti a Corto alcance. Una vez por descanso, si tienes éxito, crea una ilusión de colores y luces parpadeantes que Aturde temporalmente a los objetivos contra los que tuviste éxito y los obliga a marcar un Estrés. Mientras están Aturdidos, no pueden usar reacciones ni realizar ninguna otra acción hasta que eliminen esta condición."
  },
  {
      "name": "INVISIBILITY",
      "level": 3,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (10). Si tienes éxito, marca un Estrés y elige a ti mismo o a un aliado en rango Cuerpo a Cuerpo para volverse Invisible. Una criatura Invisible no puede ser vista excepto por medios mágicos y las tiradas de ataque contra ella se hacen con desventaja. Coloca un número de fichas en esta carta igual a tu rasgo de Lanzamiento de Hechizos. Cuando la criatura Invisible realiza una acción, gasta una ficha de esta carta. Después de que se resuelve la acción que gasta la última ficha, el efecto termina.\nSolo puedes mantener la Invisibilidad en una criatura a la vez."
  },
  {
      "name": "SOOTHING SPEECH",
      "level": 4,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Durante un descanso corto, cuando te tomas el tiempo para consolar a otro personaje mientras usas el movimiento de tiempo libre 'Atender Heridas' en ellos, elimina un Punto de Golpe adicional en ese personaje. Cuando lo haces, tú también eliminas 2 Puntos de Golpe."
  },
  {
      "name": "THROUGH YOUR EYES",
      "level": 4,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Elige un objetivo a Muy Largo alcance. Puedes ver a través de sus ojos y oír a través de sus oídos. Puedes cambiar libremente entre usar tus propios sentidos o los del objetivo hasta que lances otro hechizo o hasta tu próximo descanso."
  },
  {
      "name": "THOUGHT DELVER",
      "level": 5,
      "domain": "Grace",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Puedes asomarte a las mentes de otros. Gasta una Esperanza para leer los pensamientos superficiales y vagos de un objetivo a Largo alcance. Realiza una Tirada de Lanzamiento de Hechizos contra el objetivo para indagar en pensamientos más profundos y ocultos.\nEn una tirada con Miedo, el objetivo podría, a discreción del GM, darse cuenta de que estás leyendo sus pensamientos."
  },
  {
      "name": "WORDS OF DISCORD",
      "level": 5,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Susurra palabras de discordia a un adversario en rango Cuerpo a Cuerpo y realiza una Tirada de Lanzamiento de Hechizos (13). Si tienes éxito, el objetivo debe marcar un Estrés y realizar un ataque contra otro adversario en lugar de contra ti o tus aliados.\nUna vez que este ataque termina, el objetivo se da cuenta de lo que sucedió. La próxima vez que lances Palabras de Discordia sobre ellos, obtienes una penalización de -5 a la Tirada de Lanzamiento de Hechizos."
  },
  {
      "name": "NEVER UPSTAGED",
      "level": 6,
      "domain": "Grace",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando marcas 1 o más Puntos de Golpe de un ataque, puedes marcar un Estrés para colocar un número de fichas igual al número de Puntos de Golpe que marcaste en esta carta. En tu próximo ataque exitoso, obtén una bonificación de +5 a tu tirada de daño por cada ficha en esta carta, luego retira todas las fichas."
  },
  {
      "name": "SHARE THE BURDEN",
      "level": 6,
      "domain": "Grace",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Una vez por descanso, asume el Estrés de una criatura dispuesta en rango Cuerpo a Cuerpo. El objetivo describe qué conocimiento íntimo o emociones se filtran telepáticamente de su mente en este momento entre ustedes. Transfiere cualquier cantidad de su Estrés marcado a ti, luego gana una Esperanza por cada Estrés transferido."
  },
  {
      "name": "ENDLESS CHARISMA",
      "level": 7,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Después de realizar una tirada de acción para persuadir, mentir o ganar favor, puedes gastar una Esperanza para volver a lanzar el Dado de Esperanza o de Miedo."
  },
  {
      "name": "GRACE‑TOUCHED",
      "level": 7,
      "domain": "Grace",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio de Gracia, obtienes los siguientes beneficios:\n• Puedes marcar una Casilla de Armadura en lugar de marcar un Estrés.\n• Cuando fuerces a un objetivo a marcar una cantidad de Puntos de Golpe, puedes elegir en su lugar forzarlos a marcar esa cantidad de Estrés."
  },
  {
      "name": "ASTRAL PROJECTION",
      "level": 8,
      "domain": "Grace",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, marca un Estrés para crear una copia proyectada de ti mismo que puede aparecer en cualquier lugar en el que hayas estado antes.\nPuedes ver y oír a través de la proyección como si fueras tú y afectar el mundo como si estuvieras allí. Una criatura que investigue la proyección puede decir que es de origen mágico. Este efecto dura hasta tu próximo descanso o hasta que tu proyección reciba algún daño."
  },
  {
      "name": "MASS ENRAPTURE",
      "level": 8,
      "domain": "Grace",
      "recall_cost": 3,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra todos los objetivos a Largo alcance. Los objetivos contra los que tengas éxito quedan temporalmente Cautivados. Mientras están Cautivados, la atención del objetivo está fija en ti, estrechando su campo de visión y ahogando cualquier sonido que no sea tu voz. Marca un Estrés para forzar a todos los objetivos Cautivados a marcar un Estrés, terminando este hechizo."
  },
  {
      "name": "COPYCAT",
      "level": 9,
      "domain": "Grace",
      "recall_cost": 3,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, esta carta puede imitar las características de otra carta de dominio de nivel 8 o inferior en el equipamiento de otro jugador. Gasta una Esperanza igual a la mitad del nivel de la carta para obtener acceso a la característica. Dura hasta tu próximo descanso o hasta que coloquen la carta en su bóveda."
  },
  {
      "name": "MASTER OF THE CRAFT",
      "level": 9,
      "domain": "Grace",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Obtén una bonificación permanente de +2 a dos de tus Experiencias o una bonificación permanente de +3 a una de tus Experiencias. Luego, coloca esta carta en tu bóveda permanentemente."
  },
  {
      "name": "ENCORE",
      "level": 10,
      "domain": "Grace",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Cuando un aliado a Corto alcance inflige daño a un adversario, puedes realizar una Tirada de Lanzamiento de Hechizos contra ese mismo objetivo. Si tienes éxito, infliges al objetivo el mismo daño que infligió tu aliado. Si tu Tirada de Lanzamiento de Hechizos tiene éxito con Miedo, coloca esta carta en tu bóveda."
  },
  {
      "name": "NOTORIOUS",
      "level": 10,
      "domain": "Grace",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "La gente sabe quién eres y qué has hecho, y te tratan de manera diferente por ello. Cuando aprovechas tu notoriedad para conseguir lo que quieres, puedes marcar un Estrés antes de tirar para obtener una bonificación de +10 al resultado. Tu comida y bebida son siempre gratis dondequiera que vayas, y todo lo demás que compres se reduce de precio en una bolsa de oro (hasta un mínimo de un puñado).\nEsta carta no cuenta para el máximo de 5 cartas de dominio de tu equipamiento y no puede ser colocada en tu bóveda."
  },
  // MIDNIGHT
  {
      "name": "PICK AND PULL",
      "level": 1,
      "domain": "Midnight",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Tienes ventaja en las tiradas de acción para forzar cerraduras no mágicas, desarmar trampas no mágicas o robar objetos de un objetivo (ya sea con sigilo o por la fuerza)."
  },
  {
      "name": "RAIN OF BLADES",
      "level": 1,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para realizar una Tirada de Lanzamiento de Hechizos y conjurar cuchillas arrojadizas que atacan a todos los objetivos a Muy Corto alcance. Los objetivos contra los que tengas éxito reciben d8+2 de daño mágico usando tu Pericia.\nSi un objetivo que golpeas es Vulnerable, recibe 1d8 de daño extra."
  },
  {
      "name": "UNCANNY DISGUISE",
      "level": 1,
      "domain": "Midnight",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Cuando tienes unos minutos para prepararte, puedes marcar un Estrés para adoptar la apariencia de cualquier humanoide que puedas imaginar claramente. Mientras estás disfrazado, tienes ventaja en las Tiradas de Presencia para evitar el escrutinio.\nColoca un número de fichas igual a tu rasgo de Lanzamiento de Hechizos en esta carta. Cuando realizas una acción mientras estás disfrazado, gasta una ficha de esta carta. Después de que se resuelve la acción que gasta la última ficha, el disfraz se desvanece."
  },
  {
      "name": "MIDNIGHT SPIRIT",
      "level": 2,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para invocar un espíritu de tamaño humanoide que puede moverse o llevar cosas por ti hasta tu próximo descanso.\nTambién puedes enviarlo a atacar a un adversario. Cuando lo hagas, realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Muy Largo alcance. Si tienes éxito, el espíritu se mueve a rango Cuerpo a Cuerpo con ese objetivo. Lanza un número de d6s igual a tu rasgo de Lanzamiento de Hechizos e inflige esa cantidad de daño mágico al objetivo. El espíritu entonces se disipa. Solo puedes tener un espíritu a la vez."
  },
  {
      "name": "SHADOWBIND",
      "level": 2,
      "domain": "Midnight",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra todos los adversarios a Muy Corto alcance. Los objetivos contra los que tengas éxito quedan temporalmente Inmovilizados mientras su sombra los ata en su lugar."
  },
  {
      "name": "CHOKEHOLD",
      "level": 3,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando te posicionas detrás de una criatura de aproximadamente tu tamaño, puedes marcar un Estrés para aplicarle una llave de estrangulamiento, haciéndola temporalmente Vulnerable.\nCuando una criatura ataca a un objetivo que es Vulnerable de esta manera, inflige 2d6 de daño extra."
  },
  {
      "name": "VEIL OF NIGHT",
      "level": 3,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (13). Si tienes éxito, puedes crear una cortina temporal de oscuridad entre dos puntos a Largo alcance. Solo tú puedes ver a través de esta oscuridad. Se te considera Oculto para los adversarios al otro lado del velo, y tienes ventaja en los ataques que realices a través de la oscuridad. El velo permanece hasta que lances otro hechizo."
  },
  {
      "name": "STEALTH EXPERTISE",
      "level": 4,
      "domain": "Midnight",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando obtienes un resultado con Miedo mientras intentas moverte sin ser notado por un área peligrosa, puedes marcar un Estrés para tirar con Esperanza en su lugar.\nSi un aliado a Corto alcance también intenta moverse sin ser notado y obtiene un resultado con Miedo, puedes marcar un Estrés para cambiar su resultado a una tirada con Esperanza."
  },
  {
      "name": "GLYPH OF NIGHTFALL",
      "level": 4,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Muy Corto alcance. Si tienes éxito, gasta una Esperanza para conjurar un glifo oscuro sobre su cuerpo que expone sus puntos débiles, reduciendo temporalmente la Dificultad del objetivo en un valor igual a tu Conocimiento (mínimo 1)."
  },
  {
      "name": "HUSH",
      "level": 5,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Corto alcance. Si tienes éxito, gasta una Esperanza para conjurar magia supresora alrededor del objetivo que abarca todo a Muy Corto alcance de él y lo sigue mientras se mueve.\nEl objetivo y todo lo que esté dentro del área queda Silenciado hasta que el GM gaste un Miedo en su turno para eliminar esta condición, lances Silencio de nuevo, o recibas daño Mayor. Mientras están Silenciados, no pueden hacer ruido y no pueden lanzar hechizos."
  },
  {
      "name": "PHANTOM RETREAT",
      "level": 5,
      "domain": "Midnight",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para activar Retirada Fantasma donde te encuentras actualmente. Gasta otra Esperanza en cualquier momento antes de tu próximo descanso para desaparecer de donde estás y reaparecer donde estabas cuando activaste Retirada Fantasma. Este hechizo termina después de que reaparezcas."
  },
  {
      "name": "DARK WHISPERS",
      "level": 6,
      "domain": "Midnight",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Puedes hablar en la mente de cualquier persona con la que hayas hecho contacto físico. Una vez que has abierto un canal con ellos, pueden responderte en tu mente. Además, puedes marcar un Estrés para realizar una Tirada de Lanzamiento de Hechizos contra ellos. Si tienes éxito, puedes hacerle al GM una de las siguientes preguntas y recibir una respuesta:\n• ¿Dónde están?\n• ¿Qué están haciendo?\n• ¿A qué le temen?\n• ¿Qué es lo que más aprecian en el mundo?"
  },
  {
      "name": "MASS DISGUISE",
      "level": 6,
      "domain": "Midnight",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Cuando tienes unos minutos de silencio para concentrarte, puedes marcar un Estrés para cambiar la apariencia de todas las criaturas dispuestas a Corto alcance. Sus nuevas formas deben compartir una estructura corporal y tamaño general, y pueden ser alguien o algo que hayas visto antes o completamente fabricado. Una criatura disfrazada tiene ventaja en las Tiradas de Presencia para evitar el escrutinio.\nActiva una Cuenta Atrás (8). Disminuye como una consecuencia que elija el GM. Cuando se activa, el disfraz se desvanece."
  },
  {
      "name": "MIDNIGHT‑TOUCHED",
      "level": 7,
      "domain": "Midnight",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Medianoche, obtienes los siguientes beneficios:\n• Una vez por descanso, cuando tienes 0 Esperanza y el GM fuera a ganar un Miedo, puedes ganar una Esperanza en su lugar.\n• Cuando realizas un ataque exitoso, puedes marcar un Estrés para añadir el resultado de tu Dado de Miedo a tu tirada de daño."
  },
  {
      "name": "VANISHING DODGE",
      "level": 7,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Cuando un ataque realizado contra ti que infligiría daño físico falla, puedes gastar una Esperanza para envolverte en sombras, volviéndote Oculto y teletransportándote a un punto a Corto alcance del atacante. Permaneces Oculto hasta la próxima vez que realices una tirada de acción."
  },
  {
      "name": "SHADOWHUNTER",
      "level": 8,
      "domain": "Midnight",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Tu destreza se ve mejorada bajo el amparo de la sombra. Mientras estás envuelto en poca luz u oscuridad, obtienes una bonificación de +1 a tu Evasión y realizas tiradas de ataque con ventaja."
  },
  {
      "name": "SPELLCHARGE",
      "level": 8,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Cuando recibes daño mágico, coloca fichas iguales al número de Puntos de Golpe que marcaste en esta carta. Puedes almacenar un número de fichas igual a tu rasgo de Lanzamiento de Hechizos.\nCuando realizas un ataque exitoso contra un objetivo, puedes gastar cualquier número de fichas para añadir un d6 por cada ficha gastada a tu tirada de daño."
  },
  {
      "name": "NIGHT TERROR",
      "level": 9,
      "domain": "Midnight",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, elige cualquier objetivo a Muy Corto alcance para que te perciban como un horror de pesadilla. Los objetivos deben tener éxito en una Tirada de Reacción (16) o quedar temporalmente Aterrorizados. Mientras están Aterrorizados, son Vulnerables. Roba un número de Miedos del GM igual al número de objetivos Aterrorizados (hasta el número de Miedos en la reserva del GM). Lanza un número de d6s igual al número de Miedos robados e inflige el daño total a cada objetivo Aterrorizado. Descarta los Miedos robados."
  },
  {
      "name": "TWILIGHT TOLL",
      "level": 9,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Elige un objetivo a Largo alcance. Cuando tienes éxito en una tirada de acción contra él que no resulta en una tirada de daño, coloca una ficha en esta carta. Cuando infliges daño a este objetivo, gasta cualquier número de fichas para añadir un d12 por cada ficha gastada a tu tirada de daño. Solo puedes mantener Peaje del Crepúsculo en una criatura a la vez.\nCuando eliges un nuevo objetivo o tomas un descanso, retira todas las fichas no gastadas."
  },
  {
      "name": "ECLIPSE",
      "level": 10,
      "domain": "Midnight",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (16). Una vez por descanso largo, si tienes éxito, sumerge toda el área a Largo alcance en una oscuridad total que solo tú y tus aliados podéis ver. Las tiradas de ataque tienen desventaja al apuntar a ti o a un aliado dentro de esta sombra.\nAdemás, cuando tú o un aliado tenéis éxito con Esperanza contra un adversario dentro de esta sombra, el objetivo debe marcar un Estrés.\nEste hechizo dura hasta que el GM gaste un Miedo en su turno para eliminar este efecto o recibas daño Severo."
  },
  {
      "name": "SPECTER OF THE DARK",
      "level": 10,
      "domain": "Midnight",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Marca un Estrés para volverte Espectral hasta que realices una tirada de acción contra otra criatura. Mientras eres Espectral, eres inmune al daño físico y puedes flotar y atravesar objetos sólidos. Otras criaturas aún pueden verte mientras estás en esta forma."
  },
  // SAGE
  {
      "name": "GIFTED TRACKER",
      "level": 1,
      "domain": "Sage",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando estás rastreando a una criatura o grupo de criaturas específico basándote en las señales de su paso, puedes gastar cualquier cantidad de Esperanza y hacerle al GM esa misma cantidad de preguntas de la siguiente lista.\n• ¿En qué dirección fueron?\n• ¿Hace cuánto tiempo pasaron por aquí?\n• ¿Qué estaban haciendo en este lugar?\n• ¿Cuántos de ellos había aquí?\nCuando te encuentres con criaturas que has rastreado de esta manera, obtienes una bonificación de +1 a tu Evasión contra ellas."
  },
  {
      "name": "NATURE’S TONGUE",
      "level": 1,
      "domain": "Sage",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Puedes hablar el lenguaje del mundo natural. Cuando quieras hablar con las plantas y animales a tu alrededor, realiza una Tirada de Instinto (12). Si tienes éxito, te darán la información que conocen. En una tirada con Miedo, su conocimiento puede ser limitado o tener un costo.\nAdemás, antes de realizar una Tirada de Lanzamiento de Hechizos mientras estás en un entorno natural, puedes gastar una Esperanza para obtener una bonificación de +2 a la tirada."
  },
  {
      "name": "VICIOUS ENTANGLE",
      "level": 1,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance. Si tienes éxito, raíces y enredaderas surgen del suelo, infligiendo 1d8+1 de daño físico e Inmovilizando temporalmente al objetivo.\nAdemás, si tienes éxito, puedes gastar una Esperanza para Inmovilizar temporalmente a otro adversario a Muy Corto alcance de tu objetivo."
  },
  {
      "name": "CONJURE SWARM",
      "level": 2,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Escarabajos Acorazados de Tekaira: Marca un Estrés para conjurar escarabajos acorazados que te rodean. La próxima vez que recibas daño, reduce la severidad en un umbral. Puedes gastar una Esperanza para mantener a los escarabajos conjurados después de recibir daño.\nLuciérnagas: Realiza una Tirada de Lanzamiento de Hechizos contra todos los adversarios a Corto alcance. Gasta una Esperanza para infligir 2d8+3 de daño mágico a los objetivos contra los que tuviste éxito."
  },
  {
      "name": "NATURAL FAMILIAR",
      "level": 2,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para invocar un pequeño espíritu de la naturaleza o criatura del bosque a tu lado hasta tu próximo descanso, hasta que lances Familiar Natural de nuevo, o el familiar sea objetivo de un ataque. Si gastas una Esperanza adicional, puedes invocar un familiar que vuela. Puedes comunicarte con ellos, realizar una Tirada de Lanzamiento de Hechizos para ordenarles que realicen tareas sencillas, y marcar un Estrés para ver a través de sus ojos.\nCuando infliges daño a un adversario en rango Cuerpo a Cuerpo de tu familiar, añades un d6 a tu tirada de daño."
  },
  {
      "name": "CORROSIVE PROJECTILE",
      "level": 3,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance. Si tienes éxito, inflige d6+4 de daño mágico usando tu Pericia. Además, marca 2 o más Estrés para hacerlos permanentemente Corroídos. Mientras un objetivo está Corroído, obtiene una penalización de -1 a su Dificultad por cada 2 Estrés que gastaste. Esta condición puede acumularse."
  },
  {
      "name": "TOWERING STALK",
      "level": 3,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Una vez por descanso, puedes conjurar un tallo grueso y retorcido a Corto alcance que se puede escalar fácilmente. Su altura puede crecer hasta Largo alcance.\nMarca un Estrés para usar este hechizo como un ataque. Realiza una Tirada de Lanzamiento de Hechizos contra un adversario o grupo de adversarios a Corto alcance. El tallo en erupción levanta a los objetivos contra los que tienes éxito en el aire y los deja caer, infligiendo d8 de daño físico usando tu Pericia."
  },
  {
      "name": "DEATH GRIP",
      "level": 4,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Corto alcance y elige una de las siguientes opciones:\n• Atrae al objetivo a rango Cuerpo a Cuerpo o te atraes a ti mismo a rango Cuerpo a Cuerpo de ellos.\n• Constriñes al objetivo y los obligas a marcar 2 Estrés.\n• Todos los adversarios entre tú y el objetivo deben tener éxito en una Tirada de Reacción (13) o ser golpeados por enredaderas, recibiendo 3d6+2 de daño físico.\nSi tienes éxito, enredaderas surgen de tus manos, causando el efecto elegido e Inmovilizando temporalmente al objetivo."
  },
  {
      "name": "HEALING FIELD",
      "level": 4,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, puedes conjurar un campo de plantas curativas a tu alrededor. Todo a Corto alcance de ti cobra vida con naturaleza vibrante, permitiéndote a ti y a todos los aliados en el área eliminar un Punto de Golpe.\nGasta 2 Esperanzas para permitir que tú y todos los aliados eliminen 2 Puntos de Golpe en su lugar."
  },
  {
      "name": "THORN SKIN",
      "level": 5,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Una vez por descanso, gasta una Esperanza para que te broten espinas por todo el cuerpo. Cuando lo hagas, coloca un número de fichas igual a tu rasgo de Lanzamiento de Hechizos en esta carta. Cuando recibas daño, puedes gastar cualquier número de fichas para lanzar esa cantidad de d6s. Suma los resultados y reduce el daño entrante en esa cantidad. Si estás en rango Cuerpo a Cuerpo del atacante, devuélvele esa cantidad de daño.\nCuando descanses, retira todas las fichas no gastadas."
  },
  {
      "name": "WILD FORTRESS",
      "level": 5,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (13). Si tienes éxito, gasta 2 Esperanzas para hacer crecer una barricada natural en forma de cúpula en la que tú y un aliado pueden refugiarse. Mientras están dentro de la cúpula, una criatura no puede ser objetivo de ataques y no puede realizar ataques. Los ataques realizados contra la cúpula tienen éxito automáticamente. La cúpula tiene los siguientes umbrales de daño y dura hasta que marque 3 Puntos de Golpe. Coloca fichas en esta carta para representar la marca de Puntos de Golpe.\nUmbrales: 15/30"
  },
  {
      "name": "CONJURED STEEDS",
      "level": 6,
      "domain": "Sage",
      "recall_cost": 0,
      "type": "Spell",
      "feature_text": "Gasta cualquier cantidad de Esperanza para conjurar esa misma cantidad de monturas mágicas (como caballos, camellos o elefantes) que tú y tus aliados pueden montar hasta su próximo descanso largo o hasta que las monturas reciban algún daño. Las monturas duplican tu velocidad terrestre mientras viajas y, cuando estás en peligro, te permiten moverte a Largo alcance sin tener que tirar. Las criaturas que montan una montura obtienen una penalización de -2 a las tiradas de ataque y una bonificación de +2 a las tiradas de daño."
  },
  {
      "name": "FORAGER",
      "level": 6,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Como movimiento de tiempo libre adicional que puedes elegir, lanza un d6 para ver qué recolectas. Trabaja con el GM para describirlo y añadirlo a tu inventario como un consumible. Tu grupo puede llevar hasta cinco consumibles recolectados a la vez.\n1. Una comida única (Elimina 2 Estrés)\n2. Una reliquia hermosa (Gana 2 Esperanzas)\n3. Una runa arcana (+2 a una Tirada de Lanzamiento de Hechizos)\n4. Un vial curativo (Elimina 2 Puntos de Golpe)\n5. Un amuleto de la suerte (Vuelve a lanzar cualquier dado)\n6. Elige una de las opciones anteriores."
  },
  {
      "name": "SAGE‑TOUCHED",
      "level": 7,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Sabio, obtienes los siguientes beneficios:\n• Mientras estás en un entorno natural, obtienes una bonificación de +2 a tus Tiradas de Lanzamiento de Hechizos.\n• Una vez por descanso, puedes duplicar tu Agilidad o Instinto al realizar una tirada que use ese rasgo. Debes elegir hacerlo antes de tirar."
  },
  {
      "name": "WILD SURGE",
      "level": 7,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, marca un Estrés para canalizar el mundo natural a tu alrededor y mejorarte a ti mismo. Describe cómo cambia tu apariencia, luego coloca un d6 en esta carta con el valor 1 hacia arriba.\nMientras el Dado de Oleada Salvaje esté activo, añades su valor a cada tirada de acción que realices. Después de añadir su valor a una tirada, aumenta el valor del Dado de Oleada Salvaje en uno. Cuando el valor del dado supere 6 o tomes un descanso, esta forma desaparece y debes marcar un Estrés adicional."
  },
  {
      "name": "FOREST SPRITES",
      "level": 8,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (13). Si tienes éxito, gasta cualquier cantidad de Esperanza para crear un número igual de pequeños duendes del bosque que aparecen en puntos que elijas a Largo alcance, proporcionando los siguientes beneficios:\n• Tus aliados obtienen una bonificación de +3 a las tiradas de ataque contra adversarios en rango Cuerpo a Cuerpo de un duende.\n• Un aliado que marque una Casilla de Armadura mientras está en rango Cuerpo a Cuerpo de un duende puede marcar una Casilla de Armadura adicional.\nUn duende desaparece después de otorgar un beneficio o recibir cualquier daño."
  },
  {
      "name": "REJUVENATION BARRIER",
      "level": 8,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (15). Una vez por descanso, si tienes éxito, crea una barrera temporal de energía protectora a tu alrededor a Muy Corto alcance. Tú y todos los aliados dentro de la barrera cuando se lanza este hechizo eliminan 1d4 Puntos de Golpe. Mientras la barrera esté activa, tú y todos los aliados dentro tienen resistencia al daño físico desde fuera de la barrera.\nCuando te mueves, la barrera te sigue."
  },
  {
      "name": "FANE OF THE WILDS",
      "level": 9,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Después de un descanso largo, coloca un número de fichas igual al número de cartas de dominio Sabio en tu equipamiento y bóveda en esta carta.\nCuando vayas a realizar una Tirada de Lanzamiento de Hechizos, puedes gastar cualquier número de fichas después de la tirada para obtener una bonificación de +1 por cada ficha gastada.\nCuando obtienes un éxito crítico en una Tirada de Lanzamiento de Hechizos para un hechizo del dominio Sabio, ganas una ficha.\nCuando tomas un descanso largo, retira todas las fichas no gastadas."
  },
  {
      "name": "PLANT DOMINION",
      "level": 9,
      "domain": "Sage",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (18). Una vez por descanso largo, si tienes éxito, remodelas el mundo natural, cambiando la vida vegetal circundante en cualquier lugar a Largo alcance de ti. Por ejemplo, puedes hacer crecer árboles instantáneamente, despejar un camino a través de densas enredaderas o crear un muro de raíces."
  },
  {
      "name": "FORCE OF NATURE",
      "level": 10,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Marca un Estrés para transformarte en un imponente espíritu de la naturaleza, obteniendo los siguientes beneficios:\n• Cuando tienes éxito en un ataque o Tirada de Lanzamiento de Hechizos, obtienes una bonificación de +10 a la tirada de daño.\n• Cuando infliges suficiente daño para derrotar a una criatura a Corto alcance, la absorbes y eliminas una Casilla de Armadura.\n• No puedes ser Inmovilizado.\nAntes de realizar una tirada de acción, debes gastar una Esperanza. Si no puedes, vuelves a tu forma normal."
  },
  {
      "name": "TEMPEST",
      "level": 10,
      "domain": "Sage",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Elige una de las siguientes tempestades y realiza una Tirada de Lanzamiento de Hechizos contra todos los objetivos a Largo alcance. Los objetivos contra los que tengas éxito experimentan sus efectos hasta que el GM gaste un Miedo en su turno para terminar este hechizo.\n• Ventisca: Inflige 2d20+8 de daño mágico y los objetivos son temporalmente Vulnerables.\n• Huracán: Inflige 3d10+10 de daño mágico y elige una dirección en la que sopla el viento. Los objetivos no pueden moverse en contra del viento.\n• Tormenta de Arena: Inflige 5d6+9 de daño mágico. Los ataques realizados desde más allá del rango Cuerpo a Cuerpo tienen desventaja."
  },
  // SPLENDOR
  {
      "name": "BOLT BEACON",
      "level": 1,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos contra un objetivo a Largo alcance. Si tienes éxito, gasta una Esperanza para enviar un rayo de luz brillante hacia él, infligiendo d8+2 de daño mágico usando tu Pericia. El objetivo se vuelve temporalmente Vulnerable y brilla intensamente hasta que se elimine esta condición."
  },
  {
      "name": "MENDING TOUCH",
      "level": 1,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Pones tus manos sobre una criatura y canalizas magia curativa para cerrar sus heridas. Cuando puedes tomarte unos minutos para concentrarte en el objetivo al que estás ayudando, puedes gastar 2 Esperanzas para eliminar un Punto de Golpe o un Estrés en él.\nUna vez por descanso largo, cuando pasas este tiempo de curación aprendiendo algo nuevo sobre él o revelando algo sobre ti mismo, puedes eliminar 2 Puntos de Golpe o 2 Estrés en él en su lugar."
  },
  {
      "name": "REASSURANCE",
      "level": 1,
      "domain": "Splendor",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Una vez por descanso, después de que un aliado intente una tirada de acción pero antes de que las consecuencias tengan lugar, puedes ofrecer ayuda o palabras de apoyo. Cuando lo haces, tu aliado puede volver a lanzar sus dados."
  },
  {
      "name": "FINAL WORDS",
      "level": 2,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Puedes infundir un cadáver con un momento de vida para hablar con él. Realiza una Tirada de Lanzamiento de Hechizos (13). Si tienes éxito con Esperanza, el cadáver responde hasta tres preguntas. Si tienes éxito con Miedo, el cadáver responde una pregunta. El cadáver responde con la verdad, pero no puede impartir información que no conocía en vida. Si fallas, o una vez que el cadáver ha terminado de responder tus preguntas, el cuerpo se convierte en polvo."
  },
  {
      "name": "HEALING HANDS",
      "level": 2,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (13) y apunta a una criatura que no seas tú a rango Cuerpo a Cuerpo. Si tienes éxito, marca un Estrés para eliminar 2 Puntos de Golpe o 2 Estrés en el objetivo. Si fallas, marca un Estrés para eliminar un Punto de Golpe o un Estrés en el objetivo. No puedes curar al mismo objetivo de nuevo hasta tu próximo descanso largo."
  },
  {
      "name": "SECOND WIND",
      "level": 3,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Una vez por descanso, cuando tienes éxito en un ataque contra un adversario, puedes eliminar 3 Estrés o un Punto de Golpe. Si tienes éxito con Esperanza, también eliminas 3 Estrés o un Punto de Golpe en un aliado a Corto alcance de ti."
  },
  {
      "name": "VOICE OF REASON",
      "level": 3,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Hablas con un poder y autoridad inigualables. Tienes ventaja en las tiradas de acción para desescalar situaciones violentas o convencer a alguien de que siga tu liderazgo.\nAdemás, te envalontonas en momentos de coacción. Cuando todas tus casillas de Estrés están marcadas, obtienes una bonificación de +1 a tu Pericia para las tiradas de daño."
  },
  {
      "name": "DIVINATION",
      "level": 4,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Una vez por descanso largo, gasta 3 Esperanzas para contactar a las fuerzas del más allá y hacer una pregunta de “sí o no” sobre un evento, persona, lugar o situación en el futuro cercano. Por un momento, el presente se desvanece y ves la respuesta ante ti."
  },
  {
      "name": "LIFE WARD",
      "level": 4,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Gasta 3 Esperanzas y elige un aliado a Corto alcance. Se le marca con un sigilo brillante de protección. Cuando este aliado vaya a realizar un movimiento de muerte, en su lugar elimina un Punto de Golpe.\nEste efecto termina cuando salva al objetivo de un movimiento de muerte, cuando lanzas Resguardo de Vida sobre otro objetivo, o cuando tomas un descanso largo."
  },
  {
      "name": "SHAPE MATERIAL",
      "level": 5,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Gasta una Esperanza para dar forma a una sección de material natural que estés tocando (como piedra, hielo o madera) para adaptarla a tu propósito. El área del material no puede ser más grande que tú. Por ejemplo, puedes formar una herramienta rudimentaria o crear una puerta.\nSolo puedes afectar el material a Corto alcance de donde lo estás tocando."
  },
  {
      "name": "SMITE",
      "level": 5,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Una vez por descanso, gasta 3 Esperanzas para cargar tu poderoso castigo. La próxima vez que ataques con éxito con un arma, duplica el resultado de tu tirada de daño. Este ataque inflige daño mágico independientemente del tipo de daño del arma."
  },
  {
      "name": "RESTORATION",
      "level": 6,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Después de un descanso largo, coloca un número de fichas igual a tu rasgo de Lanzamiento de Hechizos en esta carta. Toca a una criatura y gasta cualquier número de fichas para eliminar 2 Puntos de Golpe o 2 Estrés por cada ficha gastada.\nTambién puedes gastar una ficha de esta carta al tocar a una criatura para eliminar la condición de Vulnerable o curar una dolencia física o mágica (el GM puede requerir fichas adicionales dependiendo de la fuerza de la dolencia).\nCuando tomas un descanso largo, retira todas las fichas no gastadas."
  },
  {
      "name": "ZONE OF PROTECTION",
      "level": 6,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (16). Una vez por descanso largo, si tienes éxito, elige un punto a Largo alcance y crea allí una zona visible de protección para todos los aliados a Muy Corto alcance de ese punto. Cuando lo hagas, coloca un d6 en esta carta con el valor 1 hacia arriba. Cuando un aliado en esta zona recibe daño, lo reduce por el valor del dado. Luego aumentas el valor del dado en uno. Cuando el valor del dado supere 6, este efecto termina."
  },
  {
      "name": "HEALING STRIKE",
      "level": 7,
      "domain": "Splendor",
      "recall_cost": 1,
      "type": "Spell",
      "feature_text": "Cuando infliges daño a un adversario, puedes gastar 2 Esperanzas para eliminar un Punto de Golpe en un aliado a Corto alcance."
  },
  {
      "name": "SPLENDOR‑TOUCHED",
      "level": 7,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Esplendor, obtienes los siguientes beneficios:\n• +3 de bonificación a tu umbral de daño Severo\n• Una vez por descanso largo, cuando el daño entrante requeriría que marques un número de Puntos de Golpe, puedes elegir marcar esa cantidad de Estrés o gastar esa cantidad de Esperanza en su lugar."
  },
  {
      "name": "SHIELD AURA",
      "level": 8,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Marca un Estrés para lanzar un aura protectora sobre un objetivo a Muy Corto alcance. Cuando el objetivo marca una Casilla de Armadura, reduce la severidad del ataque en un umbral adicional. Si este hechizo hace que una criatura que sería dañada no marque Puntos de Golpe, el efecto termina.\nSolo puedes mantener Aura de Escudo en una criatura a la vez."
  },
  {
      "name": "STUNNING SUNLIGHT",
      "level": 8,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos para desatar poderosos rayos de luz solar abrasadora contra todos los adversarios frente a ti a Largo alcance. Si tienes éxito, gasta cualquier número de Esperanza y obliga a esa misma cantidad de objetivos contra los que tuviste éxito a hacer una Tirada de Reacción (14).\nLos objetivos que tengan éxito reciben 3d20+3 de daño mágico. Los objetivos que fallen reciben 4d20+5 de daño mágico y quedan temporalmente Aturdidos. Mientras están Aturdidos, no pueden usar reacciones ni realizar ninguna otra acción hasta que eliminen esta condición."
  },
  {
      "name": "OVERWHELMING AURA",
      "level": 9,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (15) para potenciar mágicamente tu aura. Si tienes éxito, gasta 2 Esperanzas para que tu Presencia sea igual a tu rasgo de Lanzamiento de Hechizos hasta tu próximo descanso largo.\nMientras este hechizo está activo, un adversario debe marcar un Estrés cuando te ataca."
  },
  {
      "name": "SALVATION BEAM",
      "level": 9,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (16). Si tienes éxito, marca cualquier número de Estrés para apuntar a una línea de aliados a Largo alcance. Puedes eliminar Puntos de Golpe en los objetivos igual al número de Estrés marcados, divididos entre ellos como quieras."
  },
  {
      "name": "INVIGORATION",
      "level": 10,
      "domain": "Splendor",
      "recall_cost": 3,
      "type": "Spell",
      "feature_text": "Cuando tú o un aliado a Corto alcance han usado una característica que tiene un límite de agotamiento (como una vez por descanso o una vez por sesión), puedes gastar cualquier número de Esperanza y lanzar esa misma cantidad de d6s. Si alguno saca un 6, la característica se puede usar de nuevo."
  },
  {
      "name": "RESURRECTION",
      "level": 10,
      "domain": "Splendor",
      "recall_cost": 2,
      "type": "Spell",
      "feature_text": "Realiza una Tirada de Lanzamiento de Hechizos (20). Si tienes éxito, restaura a una criatura que no haya estado muerta por más de 100 años a su fuerza completa. Luego, lanza un d6. Con un resultado de 5 o menos, coloca esta carta en tu bóveda permanentemente.\nSi fallas, no puedes lanzar Resurrección de nuevo durante una semana."
  },
  // VALOR
  {
      "name": "BARE BONES",
      "level": 1,
      "domain": "Valor",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando eliges no equipar armadura, tienes una Puntuación de Armadura base de 3 + tu Fuerza y usas los siguientes como tus umbrales de daño base:\n• Nivel 1: 9/19\n• Nivel 2: 11/24\n• Nivel 3: 13/31\n• Nivel 4: 15/38"
  },
  {
      "name": "FORCEFUL PUSH",
      "level": 1,
      "domain": "Valor",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Realiza un ataque con tu arma principal contra un objetivo en rango Cuerpo a Cuerpo. Si tienes éxito, infliges daño y los derribas hasta Corto alcance. Si tienes éxito con Esperanza, añade un d6 a tu tirada de daño.\nAdemás, puedes gastar una Esperanza para hacerlos temporalmente Vulnerables."
  },
  {
      "name": "I AM YOUR SHIELD",
      "level": 1,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando un aliado a Muy Corto alcance fuera a recibir daño, puedes marcar un Estrés para interponerte y convertirte en el objetivo del ataque en su lugar. Cuando recibes daño de este ataque, puedes marcar cualquier número de Casillas de Armadura."
  },
  {
      "name": "BODY BASHER",
      "level": 2,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Usas toda la fuerza de tu cuerpo en una pelea. En un ataque exitoso usando un arma con rango Cuerpo a Cuerpo, obtienes una bonificación a tu tirada de daño igual al doble de tu Fuerza."
  },
  {
      "name": "BOLD PRESENCE",
      "level": 2,
      "domain": "Valor",
      "recall_cost": 0,
      "type": "Ability",
      "feature_text": "Cuando realizas una Tirada de Presencia, puedes gastar una Esperanza para añadir tu Fuerza a la tirada.\nAdemás, una vez por descanso cuando fueras a ganar una condición, puedes describir cómo tu audaz presencia te ayuda en la situación y evitar ganar la condición."
  },
  {
      "name": "CRITICAL INSPIRATION",
      "level": 3,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Una vez por descanso, cuando obtienes un éxito crítico en un ataque, todos los aliados a Muy Corto alcance pueden eliminar un Estrés o ganar una Esperanza."
  },
  {
      "name": "LEAN ON ME",
      "level": 3,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, cuando consuelas o inspiras a un aliado que falló una tirada de acción, ambos podéis eliminar 2 Estrés."
  },
  {
      "name": "GOAD THEM ON",
      "level": 4,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Describe cómo provocas a un objetivo a Corto alcance, luego realiza una Tirada de Presencia contra él. Si tienes éxito, el objetivo debe marcar un Estrés, y la próxima vez que el GM le dé el foco, debe atacarte a ti, y lo hará con desventaja."
  },
  {
      "name": "SUPPORT TANK",
      "level": 4,
      "domain": "Valor",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Cuando un aliado a Corto alcance falla una tirada, puedes gastar 2 Esperanzas para permitirle volver a lanzar su Dado de Esperanza o de Miedo."
  },
  {
      "name": "ARMORER",
      "level": 5,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Mientras llevas armadura, obtienes una bonificación de +1 a tu Puntuación de Armadura.\nDurante un descanso, cuando eliges reparar tu armadura como movimiento de tiempo libre, tus aliados también eliminan una Casilla de Armadura."
  },
  {
      "name": "ROUSING STRIKE",
      "level": 5,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Una vez por descanso, cuando obtienes un éxito crítico en un ataque, tú y todos los aliados que puedan verte u oírte podéis eliminar un Punto de Golpe o 1d4 de Estrés."
  },
  {
      "name": "INEVITABLE",
      "level": 6,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando fallas una tirada de acción, tu siguiente tirada de acción tiene ventaja."
  },
  {
      "name": "RISE UP",
      "level": 6,
      "domain": "Valor",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Obtienes una bonificación a tu umbral Severo igual a tu Pericia.\nCuando marcas 1 o más Puntos de Golpe de un ataque, eliminas un Estrés."
  },
  {
      "name": "SHRUG IT OFF",
      "level": 7,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando fueras a recibir daño, puedes marcar un Estrés para reducir la severidad del daño en un umbral. Cuando lo hagas, lanza un d6. Con un resultado de 3 o menos, coloca esta carta en tu bóveda."
  },
  {
      "name": "VALOR‑TOUCHED",
      "level": 7,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando 4 o más de las cartas de dominio en tu equipamiento son del dominio Valor, obtienes los siguientes beneficios:\n• +1 de bonificación a tu Puntuación de Armadura\n• Cuando marcas 1 o más Puntos de Golpe sin marcar una Casilla de Armadura, eliminas una Casilla de Armadura."
  },
  {
      "name": "FULL SURGE",
      "level": 8,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Una vez por descanso largo, marca 3 Estrés para llevar tu cuerpo a sus límites. Obtienes una bonificación de +2 a todos tus rasgos de personaje hasta tu próximo descanso."
  },
  {
      "name": "GROUND POUND",
      "level": 8,
      "domain": "Valor",
      "recall_cost": 2,
      "type": "Ability",
      "feature_text": "Gasta 2 Esperanzas para golpear el suelo donde te encuentras y realiza una Tirada de Fuerza contra todos los objetivos a Muy Corto alcance. Los objetivos contra los que tengas éxito son lanzados hasta Largo alcance y deben hacer una Tirada de Reacción (17).\nLos objetivos que fallen reciben 4d10+8 de daño. Los objetivos que tengan éxito reciben la mitad del daño."
  },
  {
      "name": "HOLD THE LINE",
      "level": 9,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Describe la postura defensiva que adoptas y gasta una Esperanza. Si un adversario se mueve a Muy Corto alcance, es atraído a rango Cuerpo a Cuerpo e Inmovilizado. Esta condición dura hasta que te muevas o falles una tirada con Miedo, o el GM gaste 2 Miedos en su turno para eliminarla."
  },
  {
      "name": "LEAD BY EXAMPLE",
      "level": 9,
      "domain": "Valor",
      "recall_cost": 3,
      "type": "Ability",
      "feature_text": "Cuando infliges daño a un adversario, puedes marcar un Estrés y describir cómo animas a tus aliados. El siguiente PJ en realizar un ataque contra ese adversario puede eliminar un Estrés o ganar una Esperanza."
  },
  {
      "name": "UNBREAKABLE",
      "level": 10,
      "domain": "Valor",
      "recall_cost": 4,
      "type": "Ability",
      "feature_text": "Cuando marcas tu último Punto de Golpe, en lugar de realizar un movimiento de muerte, puedes lanzar un d6 y eliminar un número de Puntos de Golpe igual al resultado. Luego, coloca esta carta en tu bóveda."
  },
  {
      "name": "UNYIELDING ARMOR",
      "level": 10,
      "domain": "Valor",
      "recall_cost": 1,
      "type": "Ability",
      "feature_text": "Cuando fueras a marcar una Casilla de Armadura, lanza un número de d6s igual a tu Pericia. Si alguno saca un 6, reduce la severidad en un umbral sin marcar una Casilla de Armadura."
  }
];