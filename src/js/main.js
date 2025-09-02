import Handlebars from 'handlebars';

function fetchComponentData() {
  // Replace with production data later from https://workingdrupalwebsite.com/jsonapi/node/page?filter[nide]=1
  // Mock data.
  return {
    ds: {
      field_images: [
        'assets/images/dynamic_stack/variant_1/left.webp',
        'assets/images/dynamic_stack/variant_1/right-bottom.webp',
        'assets/images/dynamic_stack/variant_1/right-top.webp'
      ]
    },
    tb: {
      field_title: "What does cooking mean",
      field_content: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
      field_caption_title: "The perfect egg",
      field_caption_content: "Keep water between 67 and 68°C for a flavourful, tender yolk"
    },
    cards: {
      field_title: 'Taste the colours',
      items: [
        {
          field_card_image: 'assets/images/cards/red.webp',
          field_card_name: 'Red',
          field_card_content: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.'
        },
        {
          field_card_image: 'assets/images/cards/green.webp',
          field_card_name: 'Green',
          field_card_content: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours'
        },
        {
          field_card_image: 'assets/images/cards/white.webp',
          field_card_name: 'White',
          field_card_content: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.'
        }
      ]
    }
  };
}

function renderDsData() {
  const data = fetchComponentData();
  return {
    leftImage: data.ds.field_images[0],
    rightTopImage: data.ds.field_images[1],
    rightBottomImage: data.ds.field_images[2]
  };
}

function renderTbData() {
  const data = fetchComponentData();
  return {
    ...data.tb
  }
}

function renderCardsData() {
  const data = fetchComponentData();
  return {
    ...data.cards
  }
}

// Render the Dynamic Stack.
const dsSource = document.getElementById("ds--v1").innerHTML;
const dsTemplate = Handlebars.compile(dsSource);
const dsContext = renderDsData();
const dsHtml = dsTemplate(dsContext);
document.getElementById("ds-container").innerHTML = dsHtml;

// Render the Text Block.
const tbSource = document.getElementById("tb").innerHTML;
const tbTemplate = Handlebars.compile(tbSource);
const tbContext = renderTbData();
const tbHtml = tbTemplate(tbContext);
document.getElementById("tb-container").innerHTML = tbHtml;

// Render Cards.
const cardsSource = document.getElementById("cards").innerHTML;
const cardsTemplate = Handlebars.compile(cardsSource);
const cardsContext = renderCardsData();
const cardsHtml = cardsTemplate(cardsContext);
document.getElementById("cards-container").innerHTML = cardsHtml;
