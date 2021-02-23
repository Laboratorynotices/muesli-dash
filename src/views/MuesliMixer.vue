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
        <b-form
          @reset="emptyMuesliMix"
          @submit.prevent="onSubmit"
        >
          <!--
          action="/muesli/cart"
          method="get"
          -->
          <result-list
            :ingredients="ingredients"
            :muesliMix="muesliMix"
            :resultKey="resultKey"
            :resultListValues="resultListValues"
          />

          <macronutrients-card
            :resultKey="resultKey"
            :resultListValues="resultListValues"
            v-if="resultListValues.weight > 0"
          />

          <div
            v-if="resultListValues.weight > 0"
            class="d-flex flex-row align-items-center justify-content-between"
          >
            <b-button
              class="shadow"
              type="submit"
              variant="primary"
            >Zur Kasse</b-button>
            <b-button
              class="shadow"
              type="reset"
              variant="danger"
            >Mix leeren</b-button>
          </div>

        </b-form>
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

    <p>Es ist kein echter Online-Shop. Es ist nur eine Schauseite. Die Texte habe ich von müsli.de genommen.</p>
  </div>
</template>

<script>
import Accordion from './muesliMixer/Accordion.vue'
import ResultList from './muesliMixer/ResultList.vue'
import MacronutrientsCard from './muesliMixer/MacronutrientsCard.vue'

// Импортируем обменную шину
import { EventBus } from '@/eventBus/eventBus.js'

export default {
  name: 'MuesliMixer',
  components: {
    Accordion,
    MacronutrientsCard,
    ResultList
  },
  data: () => ({
    // Составляемая смесь покупателем. (Хранятся индексы)
    muesliMix: {},
    // Ингридиенты для приготовления мюсли
    ingredients: [
      {
        name: 'Müslibasis',
        sorts: [
          {
            name: '3 Basiskorn',
            description: 'Unsere klassische Bio Müsli Mischung in Vollkornqualität besteht aus Haferflocken, Roggenflocken und Weizenflocken. Damit ist sie der solide Einstieg in den Tag und eine Basis für weitere Topings und Zutaten aus unserem Angebot. Je nach Geschmack kann das Müsli mit Naturjoghurt, Quark oder Milch kombiniert werden.',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 21
          },
          {
            name: '5 Superkorn Basis',
            description: 'Wem unser 3 Basiskorn nicht genug ist, der kann auf unseren kernigen Klassiker zugreifen. Dinkelflocken, Gerstenflocken, Haferflocken, Roggenflocken und Weizenflocken sind die Zutaten für dieses Bio Müsli. Und natürlich alles aus dem vollen Korn.',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 22
          },
          {
            name: '5 Superkorn plus',
            description: 'Wem unser 3 Basiskorn nicht genug ist, der kann auf unseren kernigen Klassiker zugreifen. Dinkelflocken, Gerstenflocken, Haferflocken, Roggenflocken und Weizenflocken sind die Zutaten für dieses Bio Müsli. Und natürlich alles aus dem vollen Korn.',
            price: 4.40,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 23
          },
          {
            name: 'BasenFit',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.40,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 24
          },
          {
            name: 'BasenFit Extra',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.09,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 25
          },
          {
            name: 'Bircher-Swiss',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.09,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 26
          },
          {
            name: 'Dinkel Fit',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 4.29,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 27
          },
          {
            name: 'Knuspertraum Basis',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 28
          },
          {
            name: 'NoCarb 41%',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 29
          },
          {
            name: 'NoGrain',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 30
          },
          {
            name: 'Porridge Pur',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 31
          },
          {
            name: 'Schokosucht',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 32
          },
          {
            name: 'SnowWhite',
            description: 'Stress? Oft schlapp und müde? Vielleicht ist dein Körper übersäuert? Hier bist du bei der richtigen Basen-Bio-Basis-Müslimischung & unserem neuen Basen-Spezial. PS.: Bei einer Schilddrüsenunterfunktion empfehlen wir unsere zweite Basen-Bio-Basis-Müslimischung "BasenFit extra".',
            price: 3.99,
            weight: 580,
            energy: 336,
            fat: 3.47,
            carbohydrates: 62.86,
            protein: 10.60,
            imageID: 33
          }
        ]
      },
      {
        name: 'Müsli verfeinern',
        sorts: [
          {
            name: 'Amaranth Poppies',
            description: 'Amaranth gehört zu den sogenannten Pseudogetreiden. Die kleinen Amaranth-Körnchen überzeugen durch leicht verwertbare Nähr- und Vitalstoffen und haben eine immunstärkende Wirkung. Besonders sinnvoll ist die Kombination von Amaranth mit Getreide (z.B. Hafer und Dinkel), da sich die wertvollen Eiweißstoffe ideal ergänzen und sogar die biologische Wertigkeit tierischer Produkte übertreffen können.',
            price: 0.30,
            weight: 10,
            energy: 383,
            fat: 8.8,
            carbohydrates: 56.8,
            protein: 15.80,
            imageID: 41
          },
          {
            name: 'Amaranthflakes',
            description: 'Amaranth gehört zu den sogenannten Pseudogetreiden. Die kleinen Amaranth-Körnchen überzeugen durch leicht verwertbare Nähr- und Vitalstoffen und haben eine immunstärkende Wirkung. Besonders sinnvoll ist die Kombination von Amaranth mit Getreide (z.B. Hafer und Dinkel), da sich die wertvollen Eiweißstoffe ideal ergänzen und sogar die biologische Wertigkeit tierischer Produkte übertreffen können.',
            price: 0.35,
            weight: 25,
            energy: 400,
            fat: 3.00,
            carbohydrates: 81.00,
            protein: 10.00,
            imageID: 42
          },
          {
            name: 'Blaumohn',
            description: 'Mohn ist eine Heilpflanze und und damit als Zutat tatsächlich etwas außergewöhnlich. Wir bieten hier die kleinen reifen Samen an, deren blaue Farbe dem Mohn den Namen gibt. Seinen vollen nussigen Geschmack entfaltet Blaumohn insbesondere bei warmen Speisen, deshalb empfehlen wir diesen zum Backen oder als Zutat in unseren Porridge Bio Müslis.',
            price: 0.35,
            weight: 25,
            energy: 487,
            fat: 42.20,
            carbohydrates: 4.20,
            protein: 23.80,
            imageID: 43
          },
          {
            name: 'Buchweizenflakes',
            description: 'Buchweizen als knusprige Variante & beinhaltet (Buchweizen, Maisgriess, Rohrohrzucker & Meersalz)',
            price: 0.35,
            weight: 25,
            energy: 389,
            fat: 5.20,
            carbohydrates: 68.90,
            protein: 9.80,
            imageID: 44
          },
          {
            name: 'Buchweizenflocken',
            description: 'Buchweizen ist ein Knöterichgewächs und ist kalorienarm. Die Flocken sind beige bis grünlich-hellbraun und bestechen durch Ihren hohen Gehalt an B und E Vitaminen. Im Müsli ist Buchweizen eine besondere Alternative zu Weizen oder anderen Getreidesorten! In geflockter Form ist er sehr zart und bekömmlich.',
            price: 0.35,
            weight: 25,
            energy: 346,
            fat: 1.70,
            carbohydrates: 71.00,
            protein: 9.80,
            imageID: 45
          },
          {
            name: 'Buchweizenkörner',
            description: 'Buchweizen ist ein Knöterichgewächs und ist kalorienarm. Neben den Flocken empfehlen wir die körnige Variante - falls Ihr Euch etwas mit etwas mehr Biss mischen möchtet. Buchweizen besticht durch seinen hohen Gehalt an B und E Vitaminen. Im Müsli ist Buchweizen eine besondere Alternative zu anderen kernigen Zutaten!',
            price: 0.30,
            weight: 25,
            energy: 346,
            fat: 1.70,
            carbohydrates: 71.00,
            protein: 9.80,
            imageID: 46
          },
          {
            name: 'Chia Samen',
            description: '20% Protein, 30% Ballaststoffe und ein Superfood. Vergleichbar mit Leinsamen, jedoch sind Chia Samen reicher an Antioxidantien und haben mehr Omega-3-Fettsäuren.',
            price: 0.55,
            weight: 15,
            energy: 454,
            fat: 31.00,
            carbohydrates: 42.00,
            protein: 17.00,
            imageID: 47
          },
          {
            name: 'Dinkel Poppies',
            description: 'Leckere & leichte Dinkel Poppies runden das leckere Frühstück ab. Sie sind bei uns aus dem vollen Dinkelkorn gepufft und mit Honig gesüßt. Dinkel Poppies schmecken pur oder mit Milch, Sojadrink oder Joghurt und als Zutat für Müslis.',
            price: 0.35,
            weight: 20,
            energy: 400,
            fat: 2.90,
            carbohydrates: 77.60,
            protein: 9.30,
            imageID: 48
          },
          {
            name: 'Dinkelflocken',
            description: 'Die Powerflocke für langanhaltende Energie ist leicht verdaulich und herzhaft im Geschmack. Dinkel ist mit dem Weizen verwandt, enthält aber mehr Mineralstoffe, Vitamine und Eiweiße (über 12%) als dieser. Das Getreide hat einen hohen Anteil an hochwertigen Klebereiweißen und ist dadurch, neben seiner hervorragenden Eignung für Müslis, auch gut zum Backen geeignet. Damit kann Dinkel als gesündere Alternative zu Weizen dienen.',
            price: 0.22,
            weight: 25,
            energy: 332,
            fat: 2.20,
            carbohydrates: 62.10,
            protein: 13.90,
            imageID: 49
          },
          {
            name: 'Gerstenflocken',
            description: 'Gerste stellt eine gute pflanzliche Eiweißquelle dar. Sie sättigt nachhaltig und liefert für die Verdauung hochwertige Ballaststoffe wie Beta-Glucan, welches auch Cholesterin und den Blutzucker senkt. Hergestellt aus biologisch-dynamischer Gerstenkörner bilden unsere Flocken eine solide Basis für ein bekömmliches Müsli.',
            price: 0.20,
            weight: 25,
            energy: 336,
            fat: 1.50,
            carbohydrates: 66.10,
            protein: 7.90,
            imageID: 50
          },
          {
            name: 'Haferflocken',
            description: 'Der Hafer ist im Gegensatz zu den anderen Getreidearten nicht so kohlenhydratereich, sondern hat seine Stärken bei den B-Vitaminen. Man sagt ihm nach glücklich zu machen. Also für alle Morgenmuffel, ran an den Hafer!',
            price: 0.20,
            weight: 25,
            energy: 372,
            fat: 7.00,
            carbohydrates: 59.50,
            protein: 13.20,
            imageID: 51
          }

        ]
      },
      {
        name: 'Früchte',
        sorts: [
          {
            name: 'Ananas gehackt',
            description: 'Man nennt Ananas nicht umsonst Königin der Tropenfrüchte. Sie enthält zahlreiche zahlreiche Mineralien (insbesondere Kalium) und Spurenelemente, sowie das heilsame Enzyme Bromelain. Grundsätzlich hat die Frucht auf unseren Stoffwechsel eine basische Wirkung, was ideal bei einer Entsäuerung unterstützen kann.',
            price: 0.65,
            weight: 30,
            energy: 313,
            fat: 0.50,
            carbohydrates: 70.30,
            protein: 1.60,
            imageID: 70
          },
          {
            name: 'Apfelwuerfel',
            description: 'Unsere knusprig getrockneten Apfelwürfel haben einen intensiven süßen Geschmack und sind ideal für alle Fruchtmüslis oder z.B. unserem Apfel Zimt Porridge.',
            price: 0.55,
            weight: 30,
            energy: 358,
            fat: 0.80,
            carbohydrates: 80.20,
            protein: 2.20,
            imageID: 71
          },
          {
            name: 'Aprikosen gehackt',
            description: 'Die Aprikose gehört zur Gattung der Rosengewächse. Ihr süßer und aromatischer Geschmack macht sie beliebt und in gehackter Form ist sie ideal zum Naschen oder als Zutat für Müslis. Mit einem sehr guten PRAL-Wert steht die Aprikose auf der Bestseller-Liste der basischen Lebensmittel. Wie bieten Sie deshalb in unseren basischen Bio Müslis an. Aprikosen enthalten außerdem Vitamin B1, B2, Vitamin C, Kalzium und Phosphor. Diese Stoffe sind zum Beispiel wichtig für den Kohlenhydratstoffwechsel, den Energiestoffwechsel, das Immunsystem sowie für Zähne und Knochen.',
            price: 0.35,
            weight: 30,
            energy: 252,
            fat: 0.50,
            carbohydrates: 47.90,
            protein: 5.00,
            imageID: 72
          },
          {
            name: 'Bananenchips',
            description: 'Die hierzulande wahrscheinlich bekannteste "exotische" Frucht',
            price: 0.30,
            weight: 30,
            energy: 524,
            fat: 31.60,
            carbohydrates: 55.00,
            protein: 3.30,
            imageID: 73
          },
          {
            name: 'Blaubeeren (gefriergetrocknet)',
            description: 'Unsere Blaubeeren wurden ohne Zusatz von Zucker durch Gefriertrocknung haltbar gemacht. Hierdurch wird der Blaubeere nur das Wasser entzogen. Dies ist das zur Zeit beste Verfahren dem Geschmack einer frischen Blaubeere sehr nahe zu kommen.',
            price: 1.05,
            weight: 15,
            energy: 239,
            fat: 3.80,
            carbohydrates: 38.11,
            protein: 3.80,
            imageID: 74
          },
          {
            name: 'Cranberries',
            description: 'Die rubinrote Powerbeere ist die amerikanische Verwandte der Preisselbeere - unsere mit Rohrohrzucker gesüßte soft - Variante ist eine überaus lecker-fruchtige Alternative zur Sauerkirsche Die schon von den Indianern hochgeschätzte Heilbeere zählt, wie z.b die Maulbeere, zu den Früchten mit dem höchsten Gehalt an Antioxidantien (u.a Zellschutz) - zudem stärkt ihr Vitamin C auch wunderbar unser Immunsystem.',
            price: 0.75,
            weight: 30,
            energy: 339,
            fat: 0.40,
            carbohydrates: 81.00,
            protein: 0.90,
            imageID: 75
          },
          {
            name: 'Datteln gehackt',
            description: 'Dattel haben eine leckeren süßen Geschmack, der sich aus einen hohen Anteil an Glukose und Fruktose ergibt, dies macht Datteln zu einem guten Energielieferant im Ausdauersport. Darüber enthalten sie kaum Fett und sind sehr vitamin- und mineralstoffreich. Datteln sind reich an Antioxidantien, die bei der Vorbeugung von Krankheiten wie Diabetes, Herzkrankheiten und Krebs helfen können. Durch diese guten Eigenschaften ergibt sich ein breites Nutzungsspektrum. Wir haben unsere gehackte Datteln deshalb einer Vielzahl von Müslis beigemischt.',
            price: 0.30,
            weight: 30,
            energy: 288,
            fat: 0.50,
            carbohydrates: 65.00,
            protein: 2.50,
            imageID: 76
          },
          {
            name: 'Erdbeeren (gefriergetrocknet)',
            description: 'Diese Erdbeeren wurden ohne Zusatz von Zucker durch Gefriertrocknung haltbar gemacht. Hierdurch wird der Erdbeere nur das Wasser entzogen. Dies ist das zur Zeit beste Verfahren dem Geschmack einer frischen Erdbeere sehr nahe zu kommen.',
            price: 1.05,
            weight: 15,
            energy: 269,
            fat: 3.70,
            carbohydrates: 50.90,
            protein: 7.20,
            imageID: 77
          },
          {
            name: 'Feigen gehackt',
            description: 'Feigen haben sehr wenig Säure und erreichen unter den Lebensmitteln einen der höchsten basischen Werte. Getrocknete Feigen sind sehr gute Energielieferanten, haben einen hohen Anteil an Ballaststoffen und sind deshalb verdauungsfördernd. Aus diesem Grund eignen sich unsere gehackten Feigen sowohl für Sportler, als auch für eine basische Ernährung. Und durch ihre natürliche Süße bereichern sie z.B. Joghurts oder Früchtebrot und schmecken auch einfach als Snack. Wir nutzen Feigen deshalb in einer Vielzahl unserer Müslis.',
            price: 0.30,
            weight: 30,
            energy: 298,
            fat: 2.30,
            carbohydrates: 58.70,
            protein: 5.90,
            imageID: 78
          },
          {
            name: 'Gojibeeren',
            description: 'Wolfsbeere. In Zentralasien gilt die Gojibeere als Frucht des Wohlbefindens und der Langlebigkeit. Sie ist wegen ihrer Aminosäuren, Polysacchariden, Karotinen, Mineralien und dem hohen Anteil an Vitamin C Bestandteil der traditionellen chinesischen Medizin.',
            price: 0.99,
            weight: 20,
            energy: 299,
            fat: 1.50,
            carbohydrates: 55.00,
            protein: 14.42,
            imageID: 79
          },
          {
            name: 'Gruene Rosinen',
            description: 'Diese kleine Kostbarkeit erhält ihre außergewöhnlichen Farbe und den köstlichen Geschmack durch eine schonende Ernte und einer anschließenden Trocknung im Schatten. Dadurch behält sie auch besonders viele Vitamine, Mineralien, Enzyme und Aromastoffe. Unsere grünen Rosinen sind eine absolute Bereicherung für jedes Müsli.',
            price: 0.50,
            weight: 40,
            energy: 329,
            fat: 0.50,
            carbohydrates: 79.20,
            protein: 2.30,
            imageID: 80
          },
          {
            name: 'Himbeeren (gefriergetrocknet)',
            description: 'Unsere Himbeeren wurden ohne Zusatz von Zucker durch Gefriertrocknung haltbar gemacht. Hierdurch wird der Himbeere nur das Wasser entzogen. Dies ist das zur Zeit beste Verfahren dem Geschmack einer frischen Himbeere sehr nahe zu kommen.',
            price: 1.05,
            weight: 15,
            energy: 215,
            fat: 1.88,
            carbohydrates: 30.10,
            protein: 8.14,
            imageID: 81
          }
        ]
      },
      {
        name: 'Nüsse und Kerne',
        sorts: [
          {
            name: 'Cashewbruch',
            description: 'Cashewnüsse sind im Vergleich zu anderen Nüssen niedriger im Kaloriengehalt, haben aber mit 20% einen sehr hohen Proteingehalt. Aus diesem Grunde stellen Cashewkerne gerade für Sportler und Menschen, die keine tierischen Eiweiße essen möchten, eine gute Ergänzung für ihre Ernährung dar. Das nussige und leicht süße Aroma unsere Cashewbruchstücke schmeckt gut in Nussmüslis oder Low Carb Müslis. Darüber hinaus empfehlen wir Chahewkerne auch zum Backen, als Zutat beim Kochen oder als Topping für Salate.',
            price: 0.50,
            weight: 35,
            energy: 582,
            fat: 44.00,
            carbohydrates: 27.00,
            protein: 20.60,
            imageID: 100
          },
          {
            name: 'Erdmandeln',
            description: 'Die Erdmandel schmeckt wie eine Nuss, ist aber ein Gras. Bei uns gibt es die geschälte Variante - diese ist weicher und damit ideal für das Müsli. Ihr wird nachgesagt, dass Hungergefühl zu reduzieren und wird daher bei einigen Diäten empfohlen.',
            price: 0.65,
            weight: 30,
            energy: 459,
            fat: 24.30,
            carbohydrates: 50.50,
            protein: 4.60,
            imageID: 101
          },
          {
            name: 'Erdnuss',
            description: 'Die wohl bekannteste Nuss in der westlichen Welt. Die Kultnuss kann auch im Muesli ihren unverwechselbaren Geschmack geltend machen. Mit einem Klick ist´s Peanuts, sie auch in Deiner Mischung auftauchen zu lassen!',
            price: 0.40,
            weight: 40,
            energy: 591,
            fat: 49.00,
            carbohydrates: 7.00,
            protein: 25.50,
            imageID: 102
          },
          {
            name: 'Hanfnuss (geschaelt)',
            description: 'durch einen besonders schonenden Vorgang bleiben die hochwertigen Inhaltsstoffe, sowie der angenehm nussige Geschmack, vollständig erhalten! Lezithin, Vitamin E, Mineralien und Spurenelemente, stärken nicht nur Körper und Geist, sondern machen aus der winzigen Nuss eine nahezu unverzichtbare Zutat für jedes Müsli.',
            price: 0.65,
            weight: 30,
            energy: 464,
            fat: 32.70,
            carbohydrates: 2.00,
            protein: 21.50,
            imageID: 103
          },
          {
            name: 'Haselnuss geroestet und gehackt',
            description: 'Dies ist die gehackte Version der proteinreichen Nuss. Alternativ haben wir auch die ganze Nuss.',
            price: 0.80,
            weight: 30,
            energy: 685,
            fat: 65.00,
            carbohydrates: 5.43,
            protein: 14.10,
            imageID: 104
          },
          {
            name: 'Haselnusskerne',
            description: 'Die Haselnuss gedeiht auf der nördlichen Erdhalbkugel. Neben der Marone zählt die Haselnuss zu den sogenannten `echten Nüssen`. Vorsicht für Allergiker. Die Nuss zieht häufig allergische Reaktionen nach sich.',
            price: 0.65,
            weight: 30,
            energy: 654,
            fat: 62.00,
            carbohydrates: 6.00,
            protein: 14.10,
            imageID: 106
          },
          {
            name: 'Kuerbiskerne',
            description: 'Die gesundheitsfördernde Wirkung, insbesondere bei der männlichen Zunft ist mittlerweile allgegenwärtig. Auch in einem gesunden Müslimix wird diese nicht verborgen bleiben.',
            price: 0.40,
            weight: 30,
            energy: 603,
            fat: 49.90,
            carbohydrates: 3.00,
            protein: 36.20,
            imageID: 107
          },
          {
            name: 'Macadamia',
            description: 'Die Macadamia ist zweifels ohne die Nuss aus dem australischen Regenwald. Nicht nur für die Aborigines ist sie unersetzlich, auch Ihr könnt Euch ein Stück Australien in Eure Schale packen. Taste a breath of down under!',
            price: 0.99,
            weight: 30,
            energy: 754,
            fat: 76.00,
            carbohydrates: 5.00,
            protein: 8.80,
            imageID: 108
          },
          {
            name: 'Macadamiabruch',
            description: '7-11mm kleine Macadamiastückchen, auch vom fünften Kontinent. Wem die Ganze Nuß zu groß ist, kann alternativ auf den Bruch setzen.',
            price: 0.99,
            weight: 30,
            energy: 754,
            fat: 76.00,
            carbohydrates: 5.00,
            protein: 8.80,
            imageID: 109
          }
        ]
      },
      {
        name: 'Extras',
        sorts: [
          {
            name: 'Apfel - Zimt Knusper',
            description: 'Ein Krunchy wie frischer Apfelstrudel! Aromatische, leicht säuerliche, getrocknete Apfelstückchen und eine Prise Zimt machen dieses Krunchy zum Hochgenuss.',
            price: 0.55,
            weight: 50,
            energy: 372,
            fat: 5.30,
            carbohydrates: 67.10,
            protein: 7.80,
            imageID: 120
          },
          {
            name: 'Apfelpulver',
            description: 'Unsere knusprig getrockneten Bio Apfelwürfel werden fein vermahlen. Dadurch wird der typische Apfelgeschmack noch intensiver. Wir empfehlen Apfelpulver als ideale Zutat für Porridge oder Bircher Swiss.',
            price: 0.65,
            weight: 30,
            energy: 247,
            fat: 0.40,
            carbohydrates: 55.40,
            protein: 1.40,
            imageID: 121
          },
          {
            name: 'Bananen Chips in weisser Schokolade',
            description: 'Geröstete, gesüßte Bananenchips überzogen mit weißer Schokolade. Exklusives Extra aus den Niederlanden. Schoggi am Morgen! Eine Versuchung für den ganzen Tag!',
            price: 0.55,
            weight: 30,
            energy: 547,
            fat: 34.80,
            carbohydrates: 51.90,
            protein: 4.50,
            imageID: 122
          },
          {
            name: 'Bluetenpollen',
            description: 'Blütenpollen sind die Ur-Substanzen des Lebens-Eine Art Zündstoff für unseren Organismus. Süßliche, kleine Kraftpakete, die neben viel Eiweiß, Mineralstoffen und Vitaminen auch antibiotische Stoffe enthalten. Vorsicht jedoch bei Allergikern (Reizstoffe) & Diabetikern (Blutzuckerspiegel kann erhöht werden). Wir empfehlen eine kleine Portion als Topping auf unsere Müslis.',
            price: 0.80,
            weight: 15,
            energy: 371,
            fat: 6.50,
            carbohydrates: 55.00,
            protein: 17.70,
            imageID: 123
          },
          {
            name: 'Crunchy Dinkel',
            description: 'Crunchy Dinkel ist eine kross gebackene Müsli-Spezialität aus Dinkelvollkornflocken. Es macht aus jeden Müsli einen Knuspergenuss. Lass Dich überzeugen und probiere mal unsere Müslis Knuspertraum oder Nussknacker!',
            price: 0.65,
            weight: 75,
            energy: 376,
            fat: 4.60,
            carbohydrates: 69.70,
            protein: 10.80,
            imageID: 124
          }
        ]
      }
    ],
    // Ключ для принудительного обновления компонентов
    resultKey: 0,
    // Подсчитанные значения заказа (энергическая ценность, цена, жиры, углеводы и т.д.)
    resultListValues: {
      // Цена заказа в евро
      price: 0,
      // Энергическая ценность заказа в килокалориях
      energy: 0,
      // Жиры в граммах в заказе
      fat: 0,
      // Углеводы в граммах в заказе
      carbohydrates: 0,
      // Белки в граммах в заказе
      protein: 0,
      // Масса заказа
      weight: 0
    }
  }),
  methods: {
    /**
     * Добавляем определённый сорт в смесь.
     * sortID - номер сорта, который надо добавить
     * ingredientGroupID - номер группы, из которой надо добавить сорт
     */
    addToMuesliMix (sortID, ingredientGroupID) {
      if (ingredientGroupID in this.muesliMix) {
        // Что-то из этой группы было уже добавленно в смесь

        if (sortID in this.muesliMix[ingredientGroupID]) {
          // Этот сорт уже был добавлен в эту смесь
          this.muesliMix[ingredientGroupID][sortID]++
        } else {
          // Этот сорт ещё не был добавлен в эту смесь
          this.muesliMix[ingredientGroupID][sortID] = 1
        }
      } else {
        // Ни один ингридиент из этой группы ещё не был добавлен в смесь.
        this.muesliMix[ingredientGroupID] = { [sortID]: 1 }
      }

      // Обновление ключа для принудительного обновления компонента
      this.resultKey++
    },
    /**
     * Убираем определённый сорт из смеси.
     * sortID - номер сорта, который надо убрать
     * ingredientGroupID - номер группы, из которой надо убрать сорт
     */
    removeFromMuesliMix (sortID, ingredientGroupID) {
      if (ingredientGroupID in this.muesliMix) {
        // Что-то из этой группы было уже добавленно в смесь

        if (sortID in this.muesliMix[ingredientGroupID]) {
          // Этот сорт уже был добавлен в эту смесь

          this.muesliMix[ingredientGroupID][sortID]--

          if (this.muesliMix[ingredientGroupID][sortID] === 0) {
            // Убираем "нулевые" значения
            delete this.muesliMix[ingredientGroupID][sortID]
            if (Object.keys(this.muesliMix[ingredientGroupID]).length === 0) {
              delete this.muesliMix[ingredientGroupID]
            }
          }
        }
      }

      // Обновление ключа для принудительного обновления компонента
      this.resultKey++
    },
    /**
     * Опустошаем смесь
     */
    emptyMuesliMix () {
      this.muesliMix = {}

      // Обновление ключа для принудительного обновления компонента
      this.resultKey++
    },
    /*
     * Подсчитывает пищевую ценность заказа,
     * а так же его вес и цену в евро
     */
    calculateValuesInCart () {
      this.resetValues()

      // console.log(this.muesliMix)
      for (const [groupID, sorts] of Object.entries(this.muesliMix)) {
        // console.log('groupID: ' + groupID)

        for (const [sortID, portions] of Object.entries(sorts)) {
          // console.log(`${sortID}: ${portions}`)
          this.resultListValues.price += portions * this.ingredients[groupID].sorts[sortID].price
          // Пересчитываем ценности, поскольку они данны на 100г,
          // а порции ингридиентов отличаются от этого
          this.resultListValues.energy +=
            portions *
            this.ingredients[groupID].sorts[sortID].energy / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.resultListValues.fat +=
            portions *
            this.ingredients[groupID].sorts[sortID].fat / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.resultListValues.carbohydrates +=
            portions *
            this.ingredients[groupID].sorts[sortID].carbohydrates / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.resultListValues.protein +=
            portions *
            this.ingredients[groupID].sorts[sortID].protein / 100 *
            this.ingredients[groupID].sorts[sortID].weight
          this.resultListValues.weight += portions * this.ingredients[groupID].sorts[sortID].weight
        }
      }

      // console.log(this.resultListValues.weight)

      // Конкретно скрываем "ошибку"
      this.resultListValues.price = Math.round(this.resultListValues.price * 100) / 100
    },
    /*
     * Сбрасываем данные нашего заказа
     */
    resetValues () {
      this.resultListValues.price = 0
      this.resultListValues.energy = 0
      this.resultListValues.fat = 0
      this.resultListValues.carbohydrates = 0
      this.resultListValues.protein = 0
      this.resultListValues.weight = 0
    },
    onSubmit () {
      this.$route.meta.layout = 'blank'
      console.log(JSON.stringify(this.muesliMix))
    }
  },
  created: function () {
    // Слушаем события по каналу 'addToMuesliMix'
    EventBus.$on('addToMuesliMix', this.addToMuesliMix)
    // Слушаем события по каналу 'removeFromMuesliMix'
    EventBus.$on('removeFromMuesliMix', this.removeFromMuesliMix)
  },
  beforeUpdate () {
    this.calculateValuesInCart()
  }
}
</script>
