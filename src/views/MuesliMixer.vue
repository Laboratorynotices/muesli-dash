<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Muesli Mixer</h1>
    </div>

    <b-row>
      <!-- Ergebniss anschauen -->
      <b-col
        class="col-12 col-md-6 col-lg-5 col-xl-4 mb-4 order-2 order-md-1"
      >
        <b-card>
          Ergebniss anschauen
        </b-card>
      </b-col>

      <!-- Müsli wählen -->
      <b-col
        class="col-12 col-md-6 col-lg-7 col-xl-8 mb-4 order-1 order-md-2"
      >
        <!-- Müsli wählen -->
        <Accordion
          :ingredients="ingredients"
        />

      </b-col>
    </b-row>

    <p>Es ist kein echter Online-Shop. Es ist nur eine Schauseite.</p>
  </div>
</template>

<script>
import Accordion from './muesliMixer/Accordion.vue'
// Импортируем обменную шину
import { EventBus } from '@/eventBus/eventBus.js'

export default {
  name: 'MuesliMixer',
  components: {
    Accordion
  },
  data: () => ({
    // Составляемая смесь покупателем.
    muesliMix: Object,
    // Ингридиенты для приготовления мюсли
    ingredients: [
      {
        name: 'Müslibasis',
        sorts: [
          {
            name: '3 Basiskorn',
            description: 'Unsere klassische Bio Müsli Mischung in Vollkornqualität besteht aus Haferflocken, Roggenflocken und Weizenflocken. Damit ist sie der solide Einstieg in den Tag und eine Basis für weitere Topings und Zutaten aus unserem Angebot. Je nach Geschmack kann das Müsli mit Naturjoghurt, Quark oder Milch kombiniert werden.',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: '5 Superkorn Basis',
            description: 'Wem unser 3 Basiskorn nicht genug ist, der kann auf unseren kernigen Klassiker zugreifen. Dinkelflocken, Gerstenflocken, Haferflocken, Roggenflocken und Weizenflocken sind die Zutaten für dieses Bio Müsli. Und natürlich alles aus dem vollen Korn.',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: '5 Superkorn plus',
            description: 'Wem unser 3 Basiskorn nicht genug ist, der kann auf unseren kernigen Klassiker zugreifen. Dinkelflocken, Gerstenflocken, Haferflocken, Roggenflocken und Weizenflocken sind die Zutaten für dieses Bio Müsli. Und natürlich alles aus dem vollen Korn.',
            price: 4.40,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'BasenFit',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.40,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'BasenFit Extra',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.09,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'Bircher-Swiss',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.09,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'Dinkel Fit',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.29,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'Knuspertraum Basis',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'NoCarb 41%',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'NoGrain',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'Porridge Pur',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'Schokosucht',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          },
          {
            name: 'SnowWhite',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            portion: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60
          }
        ]
      },
      {
        name: 'Müsli verfeinern',
        sorts: []
      },
      {
        name: 'Früchte',
        sorts: []
      },
      {
        name: 'Nüsse und Kerne',
        sorts: []
      },
      {
        name: 'Extras',
        sorts: []
      }
    ]
  }),
  methods: {
    /*
     * Добавляем определённый сорт в смесь.
     */
    addToMuesliMix (sortID, ingredientGroupID) {
      console.log(
        'Получаю данные. Группа ингридиентов: ' +
        this.ingredients[ingredientGroupID].name +
        '. Сама добавка: ' +
        this.ingredients[ingredientGroupID].sorts[sortID].name)

      if (ingredientGroupID in this.muesliMix) {
        // Что-то из этой группы было уже добавленно в смесь

        if (sortID in this.muesliMix[ingredientGroupID]) {
          // Этот сорт уже был добавлен в эту смесь
          this.muesliMix[ingredientGroupID][sortID]++
        } else {
          // Этот сорт ещё не был добавлен в эту смесь
          this.muesliMix[ingredientGroupID][sortID] = 1
        }

        console.log('Теперь в этой смесе порций: ' +
          this.muesliMix[ingredientGroupID][sortID])
      } else {
        // Ни один ингридиент из этой группы ещё не был добавлен в смесь.
        console.log('Добавляем первый ингридиент в эту группу')
        // Вначале добавляем группу
        this.muesliMix[ingredientGroupID] = Object
        // А потом уже и порцию самой смеси
        this.muesliMix[ingredientGroupID][sortID] = 1
        console.log(this.muesliMix[ingredientGroupID][sortID])
      }
    }
  },
  created: function () {
    // Слушаем события по каналу 'addToMuesliMix'
    EventBus.$on('addToMuesliMix', this.addToMuesliMix)
  }
}
</script>
