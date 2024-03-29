'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: "Quilmes",
        price: 1200,
        discount: 10,
        description: "Cerveza lager argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor dellúpulo y el sabor del cereal. Color amarillo dorado brillante.",
        stock: 100,
        products_segmentations_id: 1,
        styles_id: 12,
        barrels_types_id: null,
        time_of_barrel: null,
        products_types_id: 3,
        stores_id: 21,
        image: "quilmes.png",
        year: null
      },
      {
        name: "Patagonia Bohemia Pilneser",
        price: 1800,
        discount: 5,
        description: "Patagonia BohemianPilsener es una cerveza que respeta de manera excepcional este estilo, con un proceso de macerado de susmaltas y lúpulo patagónico que origina un color dorado brillante, gran cuerpo y un amargor equilibrado.",
        stock: 80,
        products_segmentations_id: 1,
        styles_id: 32,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 3,
        stores_id: 22,
        image: "patagonia.png",
        year: null
      },
      {
        name: "Andes",
        price: 1300,
        discount: 15,
        description: "Cerveza tradicional argentina",
        stock: 120,
        products_segmentations_id: 3,
        styles_id: 12,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 3,
        stores_id: 23,
        image: "andes.png",
        year: null
      },
      {
        name: "Antares",
        price: 1800,
        discount: 20,
        description: "Cerveza artesanal argentina",
        stock: 50,
        products_segmentations_id: 2,
        styles_id: 33,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 3,
        stores_id: 24,
        image: "antares.png",
        year: null
      },
      {
        name: "Stella Artois",
        price: 1600,
        discount: 10,
        description: "Cerveza belga",
        stock: 90,
        products_segmentations_id: 1,
        styles_id: 34,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 3,
        stores_id: 25,
        image: "stella.png",
        year: null
      },
      {
        name: "Trivento",
        price: 2500,
        discount: 10,
        description: "Vino tinto argentino",
        stock: 30,
        products_segmentations_id: 2,
        styles_id: 8,
        time_of_barrel: "6 meses",
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 41,
        image: "trivento-reserve-malbec-2021.png",
        year: 2021
      },
      {
        name: "Los intocables",
        price: 2500,
        discount: 10,
        description: "Su innovador proceso de elaboración, que contempla una maduración del vino en barricas de roble Bourbon, desprende aromas a humo, caramelo y miel.",
        stock: 30,
        products_segmentations_id: 2,
        styles_id: 8,
        time_of_barrel: "12 meses",
        barrels_types_id: 6,
        products_types_id: 1,
        stores_id: 42,
        image: "los-intocables.png",
        year: 2020
      },
      {
        name: "Los intocables Red Blend",
        price: 2450,
        discount: 10,
        description: "Presenta un final largo con sabores a chocolate y tabaco dulce",
        stock: 30,
        products_segmentations_id: 2,
        styles_id: 35,
        time_of_barrel: "12 meses",
        barrels_types_id: 6,
        products_types_id: 1,
        stores_id: 42,
        image: "los_intocables_blend.png",
        year: 2018
      },
      {
        name: "Nicasia Vineyards Red Blend Cabernet Franc",
        price: 3999,
        discount: 25,
        description: "Se perciben en este vino elegantes notas herbáceas y de anís aportadas por el Cabernet Franc, junto a vivaces frutos negros y especias conferidos por el Merlot y Petit Verdot.",
        stock: 50,
        products_segmentations_id: 2,
        styles_id: 36,
        time_of_barrel: "12 meses",
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 1,
        image: "catena-zapata.png",
        year: 2018
      },
      {
        name: "Johnnie Walker Red Label",
        price: 5999,
        discount: 30,
        description: "Whisky escocés de renombre. Es una mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados y oscuros de la costa oeste, creando una extraordinaria profundidad de sabor.",
        stock: 60,
        products_segmentations_id: 3,
        styles_id: 34,
        time_of_barrel: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 5,
        image: "red-label.png",
        year: null
      },
      {
        name: "The Singleton 15Yo DUFFTOWN",
        price: 7999,
        discount: 30,
        description: "Sensación ligeramente picante y seca, en general. Manzanas con caramelo y notas de panal de miel equilibradas por aceite de linaza y toques del mar.",
        stock: 60,
        products_segmentations_id: 2,
        styles_id: 37,
        time_of_barrel: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 44,
        image: "the-singleton.png",
        year: 15
      },
      {
        name: "Talisker 10Yo",
        price: 7999,
        discount: 30,
        description: "De cuerpo completo, posee una rica dulzura de frutos secos con nubes de humo y fuertes sabores de malta, de cebada, calentamiento e intenso.",
        stock: 60,
        products_segmentations_id: 4,
        styles_id: 37,
        time_of_barrel: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 45,
        image: "talisker.png",
        year: 10
      },
      {
        name: "Clynelish 14Yo",
        price: 8679,
        discount: 30,
        description: "De aroma ahumado con notas de mandarina. Con sabor a frutas mezcladas, vainilla, cuero. Final muy largo, amarga dulzura en desarrollo, roble picante.",
        stock: 30,
        products_segmentations_id: 3,
        styles_id: 37,
        time_of_barrel: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 46,
        image: "clynelish.png",
        year: 14
      },
      {
        name: "Bacardi Carta Oro Ron",
        price: 6499,
        discount: 18,
        description: "Ron ligero y versátil. Es el primer ron dorado ligero del mundo.",
        stock: 70,
        products_segmentations_id: 3,
        styles_id: 22,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 47,
        image: "bacari.png",
        year: null
      },
      {
        name: "Llave Cristal Ginebra",
        price: 6499,
        discount: 15,
        description: "Ginebra clásica. Tiene una última destilación con bayas de enebro, que proporciona un aroma y sabor más característico.",
        stock: 90,
        products_segmentations_id: 4,
        styles_id: 23,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 7,
        image: "la-llave.png",
        year: null
      },
      {
        name: "El Enemigo Malbec",
        price: 2499,
        discount: 20,
        description: "Algo dulce y carnoso de muy buen equilibrio y acidez con taninos muy marcados.",
        stock: 40,
        products_segmentations_id: 1,
        styles_id: 8,
        time_of_barrel: "14 meses",
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 43,
        image: "el-enemigo-malbec-2019.png",
        year: 2019
      },
      {
        name: "Macallan",
        price: 4999,
        discount: 25,
        description: "Whisky de malta escocés. Sabor equilibrado, dulce miel, cítrico y caramelo.",
        stock: 55,
        products_segmentations_id: 3,
        styles_id: 37,
        time_of_barrel: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 12,
        image: "macallan.png",
        year: 12
      },
      {
        name: "Vodka Absolut",
        price: 5999,
        discount: 15,
        description: "Absolut Vodka es un vodka sueco elaborado exclusivamente a partir de ingredientes naturales, y no contiene azúcar añadido. Tiene un cierto sabor: rico, con cuerpo y complejo, pero suave y maduro con un carácter distinto de cereales, seguido de un toque de frutos secos.",
        stock: 75,
        products_segmentations_id: 1,
        styles_id: 24,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 33,
        image: "vodka-absolut.png",
        year: null
      },
      {
        name: "Baileys Salted Caramel",
        price: 3999,
        discount: 20,
        description: "Esta atractiva nueva variante mezcla caramelo rico y complejo con Baileys Original Irish Cream Liqueur para crear un sabor a caramelo, pero con un acabado salado moderno.",
        stock: 65,
        products_segmentations_id: 4,
        styles_id: 28,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 35,
        image: "baileys.png",
        year: null
      },
      {
        name: "Vodka Smirnoff Red",
        price: 3999,
        discount: 20,
        description: "Con aromas a chocolate y especias. Sabor suave y único.",
        stock: 65,
        products_segmentations_id: 4,
        styles_id: 24,
        time_of_barrel: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 48,
        image: "baileys.png",
        year: null
      },
      {
        name: "Juan Benegas Malbec",
        price: 2199,
        discount: 20,
        description: "Aromáticamente es un tinto muy expresivo con aromas de ciruelas, moras y arándanos con dejos sutiles de hierbas secas y especias. Presenta taninos dulces y sin efecto secante.",
        stock: 70,
        products_segmentations_id: 4,
        styles_id: 8,
        time_of_barrel: "6 meses",
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 49,
        image: "benegas-malbec-2021.png",
        year: 2021
      },
      {
        name: "Luigi Bosca Malbec",
        price: 1699,
        discount: 10,
        description: "Presenta aromas de frutos rojos maduros, especias y pimienta negra. La intensidad de su entrada en boca se complementa con la suavidad y dulzor de los taninos. Un vino de gran cuerpo y estructura.",
        stock: 110,
        products_segmentations_id: 4,
        styles_id: 8,
        time_of_barrel: "12 meses",
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 4,
        image: "luigi-bosca.png",
        year: 2021
      },
      {
        name: "Piattelli Grand Reserve Malbec",
        price: 1699,
        discount: 15,
        description: "En boca aparecen taninos dulces característicos del Malbec, dentro de una estructura de gran cuerpo, que redondea un sabor untuoso y persistente.",
        stock: 60,
        products_segmentations_id: 4,
        styles_id: 8,
        time_of_barrel: "13 meses",
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 50,
        image: "piattelli.png",
        year: 2022
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
