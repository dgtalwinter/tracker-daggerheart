
export interface RawCommunityCard {
  value: string;
  label: string;
  features_description: string;
}

export const COMMUNITY_CARDS_DATA: RawCommunityCard[] = [
  {
    "value": "HIGHBORNE",
    "label": "HIGHBORNE",
    "features_description": "Privilegio: Tienes ventaja en las tiradas para relacionarte con nobles, negociar precios o aprovechar tu reputación para conseguir lo que quieres."
  },
  {
    "value": "LOREBORNE",
    "label": "LOREBORNE",
    "features_description": "Instruido: Tienes ventaja en las tiradas que involucran la historia, cultura o política de una persona o lugar prominente."
  },
  {
    "value": "ORDERBORNE",
    "label": "ORDERBORNE",
    "features_description": "Dedicado: Anota tres dichos o valores que tu crianza te inculcó. Una vez por descanso, cuando describes cómo estás encarnando uno de estos principios a través de tu acción actual, puedes lanzar un d20 como tu Dado de Esperanza."
  },
  {
    "value": "RIDGEBORNE",
    "label": "RIDGEBORNE",
    "features_description": "Firme: Tienes ventaja en las tiradas para atravesar acantilados y cornisas peligrosas, navegar por entornos hostiles y usar tus conocimientos de supervivencia."
  },
  {
    "value": "SEABORNE",
    "label": "SEABORNE",
    "features_description": "Conocer la Marea: Puedes sentir el flujo y reflujo de la vida. Cuando tiras con Miedo, coloca una ficha en tu carta de comunidad. Puedes tener un número de fichas igual a tu nivel. Antes de hacer una tirada de acción, puedes gastar cualquier número de estas fichas para obtener una bonificación de +1 a la tirada por cada ficha gastada. Al final de cada sesión, retira todas las fichas no gastadas."
  },
  {
    "value": "SLYBORNE",
    "label": "SLYBORNE",
    "features_description": "Canalla: Tienes ventaja en las tiradas para negociar con criminales, detectar mentiras o encontrar un lugar seguro para esconderte."
  },
  {
    "value": "UNDERBORNE",
    "label": "UNDERBORNE",
    "features_description": "Vida en Penumbra: Cuando estás en un área con poca luz o sombras densas, tienes ventaja en las tiradas para esconderte, investigar o percibir detalles dentro de esa área."
  },
  {
    "value": "WANDERBORNE",
    "label": "WANDERBORNE",
    "features_description": "Mochila Nómada: Añade una Mochila Nómada a tu inventario. Una vez por sesión, puedes gastar una Esperanza para buscar en esta mochila y sacar un objeto mundano que sea útil para tu situación. Colabora con el GM para decidir qué objeto sacas."
  },
  {
    "value": "WILDBORNE",
    "label": "WILDBORNE",
    "features_description": "Pies Ligeros: Tu movimiento es naturalmente silencioso. Tienes ventaja en las tiradas para moverte sin ser oído."
  }
];
