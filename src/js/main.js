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
      title: "What does cooking mean",
      content: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
      captionTitle: "The perfect egg",
      captionContent: "Keep water between 67 and 68°C for a flavourful, tender yolk"
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
