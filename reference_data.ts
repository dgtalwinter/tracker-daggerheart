
import { Card, CardType, ClassData } from './types';
import { DOMAIN_CARDS_DATA } from './domain_cards';
import { ANCESTRY_CARDS_DATA } from './ancestry_cards';
import { COMMUNITY_CARDS_DATA } from './community_cards';

// This acts as the "Database" generated from the JSON files
export const CLASS_DATA: Record<string, ClassData> = {
  "BARD": {
    "name": "BARD",
    "subclasses": {
      "TROUBADOUR": {
        "label": "TROUBADOUR",
        "spellcast_trait": "Presence",
        "foundation_feature": "Puedes tocar tres tipos diferentes de canciones, una vez cada una por descanso largo; describe cómo actúas para otros para obtener el beneficio listado:\n• Canción Relajante: Tú y todos los aliados en rango Cercano limpian un Punto de Golpe.\n• Canción Épica: Haz que un objetivo en rango Cercano sea temporalmente Vulnerable.\n• Canción Desgarradora: Tú y todos los aliados en rango Cercano ganan una Esperanza.",
        "specialization_feature": "Tus canciones de aliento fortalecen el coraje de quienes las escuchan. Cuando le das un Dado de Ánimo a un aliado, puede ganar una Esperanza o limpiar un Estrés.",
        "mastery_feature": "Estás entre los más grandes de tu arte y tu habilidad no tiene límites. Puedes interpretar cada una de las canciones de tu rasgo “Intérprete Dotado” dos veces por descanso largo."
      },
      "WORDSMITH": {
        "label": "WORDSMITH",
        "spellcast_trait": "Presence",
        "foundation_feature": "Una vez por descanso largo, puedes dar un discurso sincero e inspirador. Todos los aliados en rango Lejano limpian 2 de Estrés.\nCorazón de Poeta: Después de hacer una tirada de acción para impresionar, persuadir u ofender a alguien, puedes gastar una Esperanza para añadir un d4 a la tirada.",
        "specialization_feature": "Tus palabras conmovedoras levantan la moral. Una vez por sesión, cuando animas a un aliado, puedes hacer una de las siguientes cosas:\n• Permitirle encontrar un objeto o herramienta mundana que necesite.\n• Ayudar a un Aliado sin gastar Esperanza.\n• Darle un movimiento de tiempo de inactividad adicional durante su próximo descanso.",
        "mastery_feature": "Tu Dado de Ánimo aumenta a un d10. Además, cuando Ayudas a un Aliado, puedes narrar el momento como si estuvieras escribiendo la historia de su heroísmo en unas memorias. Cuando lo haces, tira un d10 como tu dado de ventaja."
      }
    },
    "starting_stats": {
      "evasion": 10,
      "hp": 5
    },
    "features": {
      "class_features_description": "Una vez por sesión, describe cómo animas al grupo y entrégate a ti mismo y a cada uno de tus aliados un Dado de Ánimo. A nivel 1, tu Dado de Ánimo es un d6. Un PJ puede gastar su Dado de Ánimo para tirarlo, añadiendo el resultado a su tirada de acción, tirada de reacción, tirada de daño, o para limpiar un número de Estrés igual al resultado. Al final de cada sesión, limpia todos los Dados de Ánimo no gastados. A nivel 5, tu Dado de Ánimo aumenta a un d8.",
      "class_hope_feature_description": "Gasta 3 de Esperanza para Distraer temporalmente a un objetivo en rango Cercano, dándole una penalización de -2 a su Dificultad."
    },
    "domains": [
      "Grace",
      "Codex"
    ]
  },
  "DRUID": {
    "name": "DRUID",
    "subclasses": {
        "WARDEN OF THE ELEMENTS": {
            "label": "WARDEN OF THE ELEMENTS",
            "spellcast_trait": "Instinct",
            "foundation_feature": "Encarnación Elemental: Marca un Estrés para Canalizar uno de los siguientes elementos hasta que recibas daño Severo o hasta tu próximo descanso:\n• Fuego: Cuando un adversario en rango Cuerpo a Cuerpo te inflige daño, recibe 1d10 de daño mágico.\n• Tierra: Ganas una bonificación a tus umbrales de daño igual a tu Competencia.\n• Agua: Cuando infliges daño a un adversario en rango Cuerpo a Cuerpo, todos los demás adversarios en rango Muy Cercano deben marcar un Estrés.\n• Aire: Puedes flotar, ganando ventaja en las Tiradas de Agilidad.",
            "specialization_feature": "Aura Elemental: Una vez por descanso mientras Canalizas, puedes asumir un aura que coincida con tu elemento. El aura afecta a los objetivos en rango Cercano hasta que tu Canalización termine.\n• Fuego: Cuando un adversario marca 1 o más Puntos de Golpe, también debe marcar un Estrés.\n• Tierra: Tus aliados ganan una bonificación de +1 a la Fuerza.\n• Agua: Cuando un adversario te inflige daño, puedes marcar un Estrés para moverlo a cualquier lugar dentro del rango Muy Cercano de donde está.\n• Aire: Cuando tú o un aliado reciben daño de un ataque más allá del rango Cuerpo a Cuerpo, reduce el daño en 1d8.",
            "mastery_feature": "Dominio Elemental: Encarnas aún más tu elemento. Mientras Canalizas, ganas el siguiente beneficio:\n• Fuego: Ganas una bonificación de +1 a tu Competencia para ataques y hechizos que infligen daño.\n• Tierra: Cuando marcarías Puntos de Golpe, tira un d6 por cada Punto de Golpe marcado. Por cada resultado de 6, reduce en 1 el número de Puntos de Golpe que marcas.\n• Agua: Cuando un ataque contra ti tiene éxito, puedes marcar un Estrés para hacer que el atacante sea temporalmente Vulnerable.\n• Aire: Ganas una bonificación de +1 a tu Evasión y puedes volar."
        },
        "WARDEN OF RENEWAL": {
            "label": "WARDEN OF RENEWAL",
            "spellcast_trait": "Instinct",
            "foundation_feature": "Claridad de la Naturaleza: Una vez por descanso largo, puedes crear un espacio de serenidad natural en rango Cercano. Cuando pasas unos minutos descansando en el espacio, limpias Estrés igual a tu Instinto, distribuido como elijas entre tú y tus aliados.\nRegeneración: Toca a una criatura y gasta 3 de Esperanza. Esa criatura limpia 1d4 Puntos de Golpe.",
            "specialization_feature": "Alcance Regenerativo: Puedes apuntar a criaturas en rango Muy Cercano con tu rasgo “Regeneración”.\nProtección del Guardián: Una vez por descanso largo, gasta 2 de Esperanza para limpiar 2 Puntos de Golpe en 1d4 aliados en rango Cercano.",
            "mastery_feature": "Defensor: Tu transformación animal encarna un espíritu guardián sanador. Cuando estás en Forma de Bestia y un aliado en rango Cercano marca 2 o más Puntos de Golpe, puedes marcar un Estrés para reducir en 1 el número de Puntos de Golpe que marcan."
        }
    },
    "starting_stats": {
        "evasion": 10,
        "hp": 6
    },
    "features": {
        "class_features_description": "Forma de Bestia: Marca un Estrés para transformarte mágicamente en una criatura de tu nivel o inferior de la lista de Formas de Bestia. Puedes salir de esta forma en cualquier momento. Mientras estás transformado, no puedes usar armas ni lanzar hechizos de cartas de dominio, pero puedes seguir usando otros rasgos o habilidades a los que tengas acceso. Los hechizos que lances antes de transformarte permanecen activos y duran su duración normal, y puedes hablar y comunicarte como de costumbre. Además, ganas los rasgos de la Forma de Bestia, añades su bonificación de Evasión a tu Evasión, y usas el rasgo especificado en sus estadísticas para tu ataque. Mientras estás en una Forma de Bestia, tu armadura se convierte en parte de tu cuerpo y marcas Ranuras de Armadura como de costumbre; cuando sales de una Forma de Bestia, esas Ranuras de Armadura marcadas permanecen marcadas. Si marcas tu último Punto de Golpe, sales automáticamente de esta forma.\nToque Salvaje: Puedes realizar efectos sutiles e inofensivos que involucran la naturaleza —como hacer que una flor crezca rápidamente, invocar una ligera ráfaga de viento o encender una fogata— a voluntad.",
        "class_hope_feature_description": "Evolución: Gasta 3 de Esperanza para transformarte en una Forma de Bestia sin marcar un Estrés. Cuando lo hagas, elige un rasgo para aumentarlo en +1 hasta que salgas de esa Forma de Bestia."
    },
    "domains": [
        "Sage",
        "Arcana"
    ]
  },
  "GUARDIAN": {
    "name": "GUARDIAN",
    "subclasses": {
      "STALWART": {
        "label": "STALWART",
        "spellcast_trait": "",
        "foundation_feature": "Inquebrantable: Gana una bonificación permanente de +1 a tus umbrales de daño.\nVoluntad de Hierro: Cuando recibes daño físico, puedes marcar una Ranura de Armadura adicional para reducir la severidad.",
        "specialization_feature": "Implacable: Gana una bonificación permanente de +2 a tus umbrales de daño.\nCompañeros de Armas: Cuando un aliado en rango Muy Cercano recibe daño, puedes marcar una Ranura de Armadura para reducir la severidad en un umbral.",
        "mastery_feature": "Intrépido: Gana una bonificación permanente de +3 a tus umbrales de daño.\nProtector Leal: Cuando un aliado en rango Cercano tiene 2 o menos Puntos de Golpe e iba a recibir daño, puedes marcar un Estrés para correr a su lado y recibir el daño en su lugar."
      },
      "VENGEANCE": {
        "label": "VENGEANCE",
        "spellcast_trait": "",
        "foundation_feature": "A Gusto: Gana una ranura de Estrés adicional.\nVenganza: Cuando un adversario en rango Cuerpo a Cuerpo tiene éxito en un ataque contra ti, puedes marcar 2 de Estrés para forzar al atacante a marcar un Punto de Golpe.",
        "specialization_feature": "Acto de Represalia: Cuando un adversario daña a un aliado en rango Cuerpo a Cuerpo, ganas una bonificación de +1 a tu Competencia para el próximo ataque exitoso que hagas contra ese adversario.",
        "mastery_feature": "Némesis: Gasta 2 de Esperanza para Priorizar a un adversario hasta tu próximo descanso. Cuando haces un ataque contra tu adversario Priorizado, puedes intercambiar los resultados de tus Dados de Esperanza y Miedo. Solo puedes Priorizar a un adversario a la vez."
      }
    },
    "starting_stats": {
      "evasion": 9,
      "hp": 7
    },
    "features": {
      "class_features_description": "Imparable: Una vez por descanso largo, puedes volverte Imparable. Ganas un Dado Imparable. A nivel 1, tu Dado Imparable es un d4. Colócalo en tu hoja de personaje, comenzando con el valor 1 hacia arriba. Después de hacer una tirada de daño que inflija 1 o más Puntos de Golpe a un objetivo, aumenta el valor del Dado Imparable en uno. Cuando el valor del dado excedería su valor máximo o cuando la escena termina, retira el dado y dejas de ser Imparable. A nivel 5, tu Dado Imparable aumenta a un d6. Mientras eres Imparable, ganas los siguientes beneficios:\n• Reduces la severidad del daño físico en un umbral (Severo a Mayor, Mayor a Menor, Menor a Nada).\n• Añades el valor actual del Dado Imparable a tu tirada de daño.\n• No puedes ser Inmovilizado o Vulnerable.",
      "class_hope_feature_description": "Tanque de Primera Línea: Gasta 3 de Esperanza para limpiar 2 Ranuras de Armadura."
    },
    "domains": [
      "Valor",
      "Blade"
    ]
  },
  "RANGER": {
    "name": "RANGER",
    "subclasses": {
      "BEASTBOUND": {
        "label": "BEASTBOUND",
        "spellcast_trait": "Agility",
        "foundation_feature": "Compañero: Tienes un compañero animal de tu elección (a discreción del GM). Se queda a tu lado a menos que le digas lo contrario. Toma la hoja de Compañero de Ranger. Cuando subas de nivel a tu personaje, elige también una opción de subida de nivel para tu compañero de esta hoja.",
        "specialization_feature": "Entrenamiento Experto: Elige una opción adicional de subida de nivel para tu compañero.\nVínculo de Batalla: Cuando un adversario te ataca mientras está en el rango Cuerpo a Cuerpo de tu compañero, ganas una bonificación de +2 a tu Evasión contra el ataque.",
        "mastery_feature": "Entrenamiento Avanzado: Elige dos opciones adicionales de subida de nivel para tu compañero.\nAmigo Leal: Una vez por descanso largo, cuando el daño de un ataque marcaría el último Estrés de tu compañero o tu último Punto de Golpe y estáis en rango Cercano el uno del otro, tú o tu compañero podéis correr al lado del otro y recibir ese daño en su lugar."
      },
      "WAYFINDER": {
        "label": "WAYFINDER",
        "spellcast_trait": "Agility",
        "foundation_feature": "Depredador Implacable: Cuando haces una tirada de daño, puedes marcar un Estrés para ganar una bonificación de +1 a tu Competencia. Además, cuando infliges daño Severo a un adversario, este debe marcar un Estrés.\nCamino a Seguir: Cuando viajas a un lugar que has visitado previamente o llevas un objeto que ha estado en la ubicación antes, puedes identificar el camino más corto y directo a tu destino.",
        "specialization_feature": "Depredador Elusivo: Cuando tu Foco te ataca, ganas una bonificación de +2 a tu Evasión contra el ataque.",
        "mastery_feature": "Depredador Alfa: Antes de hacer una tirada de ataque contra tu Foco, puedes gastar una Esperanza. En un ataque exitoso, eliminas un Miedo de la reserva de Miedo del GM."
      }
    },
    "starting_stats": {
      "evasion": 12,
      "hp": 6
    },
    "features": {
      "class_features_description": "Foco del Ranger: Gasta una Esperanza y haz un ataque contra un objetivo. Si tienes éxito, inflige el daño normal de tu ataque y convierte temporalmente al objetivo del ataque en tu Foco. Hasta que este rasgo termine o hagas de otra criatura tu Foco, obtienes los siguientes beneficios contra tu Foco:\n• Sabes precisamente en qué dirección se encuentra.\n• Cuando le infliges daño, debe marcar un Estrés.\n• Cuando fallas un ataque contra él, puedes terminar tu rasgo de Foco del Ranger para volver a tirar tus Dados de Dualidad.",
      "class_hope_feature_description": "Retenerlos: Gasta 3 de Esperanza cuando tengas éxito en un ataque con un arma para usar esa misma tirada contra dos adversarios adicionales dentro del alcance del ataque."
    },
    "domains": [
      "Bone",
      "Sage"
    ]
  },
  "ROGUE": {
    "name": "ROGUE",
    "subclasses": {
      "NIGHTWALKER": {
        "label": "NIGHTWALKER",
        "spellcast_trait": "Finesse",
        "foundation_feature": "Paso Sombrío: Puedes moverte de sombra en sombra. Cuando te mueves a un área de oscuridad o una sombra proyectada por otra criatura u objeto, puedes marcar un Estrés para desaparecer de donde estás y reaparecer dentro de otra sombra en rango Lejano. Cuando reapareces, estás Oculto.",
        "specialization_feature": "Nube Oscura: Haz una Tirada de Hechizo (15). Si tienes éxito, creas una nube oscura temporal que cubre cualquier área en rango Cercano. Cualquiera en esta nube no puede ver fuera de ella, y cualquiera fuera de ella no puede ver dentro. Se te considera Oculto para cualquier adversario para quien la nube bloquee la línea de visión.\nAdrenalina: Mientras eres Vulnerable, añade tu nivel a tus tiradas de daño.",
        "mastery_feature": "Sombra Fugaz: Gana una bonificación permanente de +1 a tu Evasión. Puedes usar tu rasgo “Paso Sombrío” para moverte dentro del rango Muy Lejano.\nActo de Desaparición: Marca un Estrés para volverte Oculto en cualquier momento. Cuando estás Oculto por este rasgo, limpias automáticamente la condición de Inmovilizado si la tienes. Permaneces Oculto de esta manera hasta que tires con Miedo o hasta tu próximo descanso."
      },
      "SYNDICATE": {
        "label": "SYNDICATE",
        "spellcast_trait": "Finesse",
        "foundation_feature": "Bien Conectado: Cuando llegas a una ciudad o entorno prominente, conoces a alguien que llama a este lugar su hogar. Dale un nombre, anota cómo crees que podría ser útil y elige un hecho de la siguiente lista:\n• Me debe un favor, pero será difícil de encontrar.\n• Va a pedir algo a cambio.\n• Siempre está en un montón de problemas.\n• Solíamos estar juntos. Es una larga historia.\n• No nos separamos en buenos términos.",
        "specialization_feature": "Contactos por Todas Partes: Una vez por sesión, puedes llamar brevemente a un contacto turbio. Elige uno de los siguientes beneficios y describe qué los trajo aquí para ayudarte en este momento:\n• Proporcionan 1 puñado de oro, una herramienta única o un objeto mundano que la situación requiera.\n• En tu próxima tirada de acción, su ayuda proporciona una bonificación de +3 al resultado de tu Dado de Esperanza o Miedo.\n• La próxima vez que inflijas daño, disparan desde las sombras, añadiendo 2d8 a tu tirada de daño.",
        "mastery_feature": "Respaldo Fiable: Puedes usar tu rasgo “Contactos por Todas Partes” tres veces por sesión. Las siguientes opciones se añaden a la lista de beneficios que puedes elegir cuando usas ese rasgo:\n• Cuando marcas 1 o más Puntos de Golpe, pueden salir corriendo para protegerte, reduciendo los Puntos de Golpe marcados en 1.\n• Cuando haces una Tirada de Presencia en una conversación, te respaldan. Puedes tirar un d20 como tu Dado de Esperanza."
      }
    },
    "starting_stats": {
      "evasion": 12,
      "hp": 6
    },
    "features": {
      "class_features_description": "Oculto: Cada vez que estarías Escondido, en su lugar estás Oculto. Además de los beneficios de la condición de Escondido, mientras estás Oculto permaneces invisible si estás estacionario cuando un adversario se mueve a donde normalmente te vería. Después de hacer un ataque o terminar un movimiento a la vista de un adversario, ya no estás Oculto.\nAtaque Furtivo: Cuando tienes éxito en un ataque mientras estás Oculto o mientras un aliado está en rango Cuerpo a Cuerpo de tu objetivo, añade un número de d6s igual a tu nivel a tu tirada de daño.",
      "class_hope_feature_description": "Esquiva de Pícaro: Gasta 3 de Esperanza para ganar una bonificación de +2 a tu Evasión hasta la próxima vez que un ataque tenga éxito contra ti. De lo contrario, esta bonificación dura hasta tu próximo descanso."
    },
    "domains": [
      "Midnight",
      "Grace"
    ]
  },
  "SERAPH": {
    "name": "SERAPH",
    "subclasses": {
      "DIVINE WIELDER": {
        "label": "DIVINE WIELDER",
        "spellcast_trait": "Strength",
        "foundation_feature": "Arma Espiritual: Cuando tienes un arma equipada con un alcance de Cuerpo a Cuerpo o Muy Cercano, puede volar de tu mano para atacar a un adversario en rango Cercano y luego regresar a ti. Puedes marcar un Estrés para apuntar a un adversario adicional dentro del alcance con la misma tirada de ataque.\nToque Compasivo: Una vez por descanso largo, toca a una criatura y limpia 2 Puntos de Golpe o 2 de Estrés de ella.",
        "specialization_feature": "Devoto: Cuando tiras tus Dados de Oración, puedes tirar un dado adicional y descartar el resultado más bajo. Además, puedes usar tu rasgo “Toque Compasivo” dos veces en lugar de una por descanso largo.",
        "mastery_feature": "Resonancia Sagrada: Cuando tiras el daño para tu rasgo “Arma Espiritual”, si alguno de los resultados del dado coincide, duplica el valor de cada dado coincidente. Por ejemplo, si sacas dos 5s, cuentan como dos 10s."
      },
      "WINGED SENTINEL": {
        "label": "WINGED SENTINEL",
        "spellcast_trait": "Strength",
        "foundation_feature": "Alas de Luz: Puedes volar. Mientras vuelas, puedes hacer lo siguiente:\n• Marcar un Estrés para levantar y llevar a otra criatura dispuesta de aproximadamente tu tamaño o más pequeña.\n• Gastar una Esperanza para infligir 1d8 de daño extra en un ataque exitoso.",
        "specialization_feature": "Rostro Etéreo: Tu semblante sobrenatural infunde asombro y miedo. Mientras vuelas, tienes ventaja en las Tiradas de Presencia. Cuando tienes éxito con Esperanza en una Tirada de Presencia, puedes eliminar un Miedo de la reserva de Miedo del GM en lugar de ganar Esperanza.",
        "mastery_feature": "Ascendente: Gana una bonificación permanente de +4 a tu umbral de daño Severo.\nPoder de los Dioses: Mientras vuelas, infliges 1d12 de daño extra en lugar de 1d8 de tu rasgo “Alas de Luz”."
      }
    },
    "starting_stats": {
      "evasion": 9,
      "hp": 7
    },
    "features": {
      "class_features_description": "Dados de Oración: Al comienzo de cada sesión, tira un número de d4s igual al rasgo de Lanzamiento de Hechizos de tu subclase y colócalos en tu hoja de personaje en el espacio provisto. Estos son tus Dados de Oración. Puedes gastar cualquier número de Dados de Oración para ayudarte a ti mismo o a un aliado en rango Lejano. Puedes usar el valor de un dado gastado para reducir el daño entrante, añadir al resultado de una tirada después de que se haya hecho, o ganar Esperanza igual al resultado. Al final de cada sesión, limpia todos los Dados de Oración no gastados.",
      "class_hope_feature_description": "Soporte Vital: Gasta 3 de Esperanza para limpiar un Punto de Golpe en un aliado en rango Cercano."
    },
    "domains": [
      "Splendor",
      "Valor"
    ]
  },
  "SORCERER": {
    "name": "SORCERER",
    "subclasses": {
      "ELEMENTAL ORIGIN": {
        "label": "ELEMENTAL ORIGIN",
        "spellcast_trait": "Instinct",
        "foundation_feature": "Elementalista: Elige uno de los siguientes elementos en la creación del personaje: aire, tierra, fuego, rayo, agua. Puedes dar forma a este elemento en efectos inofensivos. Además, gasta una Esperanza y describe cómo tu control sobre este elemento ayuda en una tirada de acción que estás a punto de hacer, luego o ganas una bonificación de +2 a la tirada o una bonificación de +3 al daño de la tirada.",
        "specialization_feature": "Evasión Natural: Puedes invocar tu elemento para protegerte del daño. Cuando una tirada de ataque contra ti tiene éxito, puedes marcar un Estrés y describir cómo usas tu elemento para defenderte. Cuando lo haces, tira un d6 y añade su resultado a tu Evasión contra el ataque.",
        "mastery_feature": "Trascendencia: Una vez por descanso largo, puedes transformarte en una manifestación física de tu elemento. Cuando lo haces, describe tu transformación y elige dos de los siguientes beneficios para ganar hasta tu próximo descanso:\n• Bonificación de +4 a tu umbral Severo\n• Bonificación de +1 a un rasgo de personaje de tu elección\n• Bonificación de +1 a tu Competencia\n• Bonificación de +2 a tu Evasión"
      },
      "PRIMAL ORIGIN": {
        "label": "PRIMAL ORIGIN",
        "spellcast_trait": "Instinct",
        "foundation_feature": "Manipular Magia: Tu origen primigenio te permite modificar la esencia de la magia misma. Después de lanzar un hechizo o hacer un ataque con un arma que inflige daño mágico, puedes marcar un Estrés para hacer una de las siguientes cosas:\n• Extender el alcance del hechizo o ataque en un rango\n• Ganar una bonificación de +2 al resultado de la tirada de acción\n• Duplicar un dado de daño de tu elección\n• Golpear a un objetivo adicional dentro del alcance",
        "specialization_feature": "Ayuda Encantada: Puedes mejorar la magia de otros con tu esencia. Cuando Ayudas a un Aliado con una Tirada de Hechizo, puedes tirar un d8 como tu dado de ventaja. Una vez por descanso largo, después de que un aliado haya hecho una Tirada de Hechizo con tu ayuda, puedes intercambiar los resultados de sus Dados de Dualidad.",
        "mastery_feature": "Carga Arcana: Puedes reunir energía mágica para mejorar tus capacidades. Cuando recibes daño mágico, te Cargas. Alternativamente, puedes gastar 2 de Esperanza para Cargarte. Cuando haces un ataque exitoso que inflige daño mágico mientras estás Cargado, puedes limpiar tu Carga para o ganar una bonificación de +10 a la tirada de daño o ganar una bonificación de +3 a la Dificultad de una tirada de reacción que el hechizo cause que el objetivo haga. Dejas de estar Cargado en tu próximo descanso largo."
      }
    },
    "starting_stats": {
      "evasion": 10,
      "hp": 6
    },
    "features": {
      "class_features_description": "Sentido Arcano: Puedes sentir la presencia de personas y objetos mágicos en rango Cercano.\nIlusión Menor: Haz una Tirada de Hechizo (10). Si tienes éxito, creas una ilusión visual menor no más grande que tú en rango Cercano. Esta ilusión es convincente para cualquiera en rango Cercano o más lejos.\nCanalizar Poder Bruto: Una vez por descanso largo, puedes colocar una carta de dominio de tu carga en tu bóveda y elegir o:\n• Ganar Esperanza igual al nivel de la carta.\n• Mejorar un hechizo que inflige daño, ganando una bonificación a tu tirada de daño igual al doble del nivel de la carta.",
      "class_hope_feature_description": "Magia Volátil: Gasta 3 de Esperanza para volver a tirar cualquier número de tus dados de daño en un ataque que inflige daño mágico."
    },
    "domains": [
      "Arcana",
      "Midnight"
    ]
  },
  "WARRIOR": {
    "name": "WARRIOR",
    "subclasses": {
      "CALL OF THE BRAVE": {
        "label": "CALL OF THE BRAVE",
        "spellcast_trait": "",
        "foundation_feature": "Coraje: Cuando fallas una tirada con Miedo, ganas una Esperanza.\nRitual de Batalla: Una vez por descanso largo, antes de intentar algo increíblemente peligroso o enfrentarte a un enemigo que claramente te supera, describe qué ritual realizas o qué preparativos haces. Cuando lo haces, limpia 2 de Estrés y gana 2 de Esperanza.",
        "specialization_feature": "Afrontar el Desafío: Eres vigilante ante el peligro creciente. Mientras tengas 2 o menos Puntos de Golpe sin marcar, puedes tirar un d20 como tu Dado de Esperanza.",
        "mastery_feature": "Camaradería: Tu valentía inquebrantable es un punto de encuentro para tus aliados. Puedes iniciar una Tirada en Equipo una vez adicional por sesión. Además, cuando un aliado inicia una Tirada en Equipo contigo, solo necesita gastar 2 de Esperanza para hacerlo."
      },
      "CALL OF THE SLAYER": {
        "label": "CALL OF THE SLAYER",
        "spellcast_trait": "",
        "foundation_feature": "Asesino: Ganas una reserva de dados llamados Dados de Asesino. En una tirada con Esperanza, puedes colocar un d6 en esta carta en lugar de ganar una Esperanza, añadiendo el dado a la reserva. Puedes almacenar un número de Dados de Asesino igual a tu Competencia. Cuando haces una tirada de ataque o de daño, puedes gastar cualquier número de estos Dados de Asesino, tirándolos y añadiendo su resultado a la tirada. Al final de cada sesión, limpia cualquier Dado de Asesino no gastado en esta carta y gana una Esperanza por cada dado limpiado.",
        "specialization_feature": "Especialista en Armas: Puedes manejar múltiples armas con una facilidad peligrosa. Cuando tienes éxito en un ataque, puedes gastar una Esperanza para añadir uno de los dados de daño de tu arma secundaria a la tirada de daño. Además, una vez por descanso largo cuando tires tus Dados de Asesino, vuelve a tirar cualquier 1.",
        "mastery_feature": "Preparación Marcial: Eres un guerrero inspirador para todos los que viajan contigo. Tu grupo obtiene acceso al movimiento de tiempo de inactividad de Preparación Marcial. Para usar este movimiento durante un descanso, describe cómo instruyes y entrenas con tu grupo. Tú y cada aliado que elija este movimiento de tiempo de inactividad ganáis un d6 de Dado de Asesino. Un PJ con un Dado de Asesino puede gastarlo para tirar el dado y añadir el resultado a una tirada de ataque o de daño de su elección."
      }
    },
    "starting_stats": {
      "evasion": 11,
      "hp": 6
    },
    "features": {
      "class_features_description": "Ataque de Oportunidad: Si un adversario en rango Cuerpo a Cuerpo intenta salir de ese rango, haz una tirada de reacción usando un rasgo de tu elección contra su Dificultad. Elige un efecto si tienes éxito, o dos si tienes un éxito crítico:\n• No pueden moverse de donde están.\n• Les infliges daño igual al daño de tu arma primaria.\n• Te mueves con ellos.\nEntrenamiento de Combate: Ignoras la carga al equipar armas. Cuando infliges daño físico, ganas una bonificación a tu tirada de daño igual a tu nivel.",
      "class_hope_feature_description": "Sin Piedad: Gasta 3 de Esperanza para ganar una bonificación de +1 a tus tiradas de ataque hasta tu próximo descanso."
    },
    "domains": [
      "Blade",
      "Bone"
    ]
  },
  "WIZARD": {
    "name": "WIZARD",
    "subclasses": {
      "SCHOOL OF KNOWLEDGE": {
        "label": "SCHOOL OF KNOWLEDGE",
        "spellcast_trait": "Knowledge",
        "foundation_feature": "Preparado: Toma una carta de dominio adicional de tu nivel o inferior de un dominio al que tengas acceso.\nAdepto: Cuando Utilizas una Experiencia, puedes marcar un Estrés en lugar de gastar una Esperanza. Si lo haces, duplica tu modificador de Experiencia para esa tirada.",
        "specialization_feature": "Logrado: Toma una carta de dominio adicional de tu nivel o inferior de un dominio al que tengas acceso.\nRecuerdo Perfecto: Una vez por descanso, cuando recuperas una carta de dominio en tu bóveda, puedes reducir su Coste de Recuperación en 1.",
        "mastery_feature": "Brillante: Toma una carta de dominio adicional de tu nivel o inferior de un dominio al que tengas acceso.\nPericia Afinada: Cuando usas una Experiencia, tira un d6. Con un resultado de 5 o más, puedes usarla sin gastar Esperanza."
      },
      "SCHOOL OF WAR": {
        "label": "SCHOOL OF WAR",
        "spellcast_trait": "Knowledge",
        "foundation_feature": "Mago de Batalla: Has enfocado tus estudios en convertirte en una fuerza inconquistable en el campo de batalla. Gana una ranura de Punto de Golpe adicional.\nEnfrenta tu Miedo: Cuando tienes éxito con Miedo en una tirada de ataque, infliges 1d10 de daño mágico extra.",
        "specialization_feature": "Conjurar Escudo: Puedes mantener una barrera protectora de magia. Mientras tengas al menos 2 de Esperanza, añades tu Competencia a tu Evasión.\nAlimentado por el Miedo: El daño mágico extra de tu rasgo “Enfrenta tu Miedo” aumenta a 2d10.",
        "mastery_feature": "Prosperar en el Caos: Cuando tienes éxito en un ataque, puedes marcar un Estrés después de tirar el daño para forzar al objetivo a marcar un Punto de Golpe adicional.\nNo Tengas Miedo: El daño mágico extra de tu rasgo “Enfrenta tu Miedo” aumenta a 3d10."
      }
    },
    "starting_stats": {
      "evasion": 11,
      "hp": 5
    },
    "features": {
      "class_features_description": "Prestidigitación: Puedes realizar efectos mágicos sutiles e inofensivos a voluntad. Por ejemplo, puedes cambiar el color de un objeto, crear un olor, encender una vela, hacer flotar un objeto diminuto, iluminar una habitación o reparar un objeto pequeño.\nPatrones Extraños: Elige un número entre 1 y 12. Cuando sacas ese número en un Dado de Dualidad, ganas una Esperanza o limpias un Estrés. Puedes cambiar este número cuando tomas un descanso largo.",
      "class_hope_feature_description": "Esta Vez No: Gasta 3 de Esperanza para forzar a un adversario en rango Lejano a volver a tirar una tirada de ataque o de daño."
    },
    "domains": [
      "Codex",
      "Splendor"
    ]
  }
};

// Helper to extract selectable cards from the JSON structure based on a class name
export const getPresetCardsForClass = (className: string, customClasses?: Record<string, ClassData>): Card[] => {
  const normalizedClass = className.toUpperCase().trim();
  
  // Merge static data with custom data if provided
  const allData = { ...CLASS_DATA, ...(customClasses || {}) };
  const data = allData[normalizedClass];
  
  if (!data) return [];

  const cards: Card[] = [];

  // 1. Add Class Features as a passive card (optional, but useful reference)
  cards.push({
    id: `feat-${normalizedClass}`,
    name: `${data.name} Features`,
    type: CardType.SUBCLASS,
    description: `${data.features.class_features_description}\n\nHOPE: ${data.features.class_hope_feature_description}`,
    tags: ['Class Feature', data.name]
  });

  // 2. Extract Subclasses
  if (data.subclasses) {
    Object.entries(data.subclasses).forEach(([key, sc]: [string, any]) => {
      // Foundation
      cards.push({
        id: `${key}-foundation`,
        name: `${sc.label}: Foundation`,
        type: CardType.SUBCLASS,
        description: sc.foundation_feature,
        tags: [sc.label, 'Level 1', data.name]
      });
      // Specialization
      cards.push({
        id: `${key}-spec`,
        name: `${sc.label}: Specialization`,
        type: CardType.SUBCLASS,
        description: sc.specialization_feature,
        tags: [sc.label, 'Level 5', data.name]
      });
      // Mastery
      cards.push({
        id: `${key}-mastery`,
        name: `${sc.label}: Mastery`,
        type: CardType.SUBCLASS,
        description: sc.mastery_feature,
        tags: [sc.label, 'Level 8', data.name]
      });
    });
  }

  // 3. Extract Domain Cards
  if (data.domains && Array.isArray(data.domains)) {
    const classDomains: string[] = data.domains;
    
    // Since user created cards are not in DOMAIN_CARDS_DATA static file, 
    // this only returns the "standard" domain cards for the class. 
    // User created cards are handled by the Library functionality in App.tsx
    const filteredDomains = DOMAIN_CARDS_DATA.filter(dc => classDomains.includes(dc.domain));

    filteredDomains.forEach((dc, index) => {
      cards.push({
        id: `domain-${dc.domain}-${index}`,
        name: dc.name,
        type: CardType.DOMAIN,
        description: dc.feature_text,
        level: dc.level,
        stressCost: dc.recall_cost,
        tags: [dc.domain, dc.type]
      });
    });
  }

  return cards;
};

export const getAllAncestryCards = (): Card[] => {
  return ANCESTRY_CARDS_DATA.map((ac, index) => ({
    id: `ancestry-${ac.value}-${index}`,
    name: ac.label,
    type: CardType.ANCESTRY,
    description: `${ac.feature_1}\n\n${ac.feature_2}`,
    tags: ['Ancestry']
  }));
};

export const getAllCommunityCards = (): Card[] => {
  return COMMUNITY_CARDS_DATA.map((cc, index) => ({
    id: `community-${cc.value}-${index}`,
    name: cc.label,
    type: CardType.COMMUNITY,
    description: cc.features_description,
    tags: ['Community']
  }));
};
