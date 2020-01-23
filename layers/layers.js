var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Artisanalzones_0 = new ol.format.GeoJSON();
var features_Artisanalzones_0 = format_Artisanalzones_0.readFeatures(json_Artisanalzones_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Artisanalzones_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Artisanalzones_0.addFeatures(features_Artisanalzones_0);var lyr_Artisanalzones_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Artisanalzones_0, 
                style: style_Artisanalzones_0,
                title: '<img src="styles/legend/Artisanalzones_0.png" /> Artisanal zones'
            });var format_Licences_1 = new ol.format.GeoJSON();
var features_Licences_1 = format_Licences_1.readFeatures(json_Licences_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Licences_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Licences_1.addFeatures(features_Licences_1);var lyr_Licences_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Licences_1, 
                style: style_Licences_1,
                title: '<img src="styles/legend/Licences_1.png" /> Licences'
            });var format_SpecialAreas_2 = new ol.format.GeoJSON();
var features_SpecialAreas_2 = format_SpecialAreas_2.readFeatures(json_SpecialAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecialAreas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SpecialAreas_2.addFeatures(features_SpecialAreas_2);var lyr_SpecialAreas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpecialAreas_2, 
                style: style_SpecialAreas_2,
                title: '<img src="styles/legend/SpecialAreas_2.png" /> Special Areas'
            });var format_Phosphate_3 = new ol.format.GeoJSON();
var features_Phosphate_3 = format_Phosphate_3.readFeatures(json_Phosphate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phosphate_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Phosphate_3.addFeatures(features_Phosphate_3);var lyr_Phosphate_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phosphate_3, 
                style: style_Phosphate_3,
                title: '<img src="styles/legend/Phosphate_3.png" /> Phosphate'
            });var format_Tourmaline_4 = new ol.format.GeoJSON();
var features_Tourmaline_4 = format_Tourmaline_4.readFeatures(json_Tourmaline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tourmaline_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tourmaline_4.addFeatures(features_Tourmaline_4);var lyr_Tourmaline_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tourmaline_4, 
                style: style_Tourmaline_4,
                title: '<img src="styles/legend/Tourmaline_4.png" /> Tourmaline'
            });var format_Diamond_5 = new ol.format.GeoJSON();
var features_Diamond_5 = format_Diamond_5.readFeatures(json_Diamond_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diamond_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Diamond_5.addFeatures(features_Diamond_5);var lyr_Diamond_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diamond_5, 
                style: style_Diamond_5,
                title: '<img src="styles/legend/Diamond_5.png" /> Diamond'
            });var format_REE_6 = new ol.format.GeoJSON();
var features_REE_6 = format_REE_6.readFeatures(json_REE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REE_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_REE_6.addFeatures(features_REE_6);var lyr_REE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REE_6, 
                style: style_REE_6,
                title: '<img src="styles/legend/REE_6.png" /> REE'
            });var format_Manganese_7 = new ol.format.GeoJSON();
var features_Manganese_7 = format_Manganese_7.readFeatures(json_Manganese_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manganese_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Manganese_7.addFeatures(features_Manganese_7);var lyr_Manganese_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manganese_7, 
                style: style_Manganese_7,
                title: '<img src="styles/legend/Manganese_7.png" /> Manganese'
            });var format_Strontium_8 = new ol.format.GeoJSON();
var features_Strontium_8 = format_Strontium_8.readFeatures(json_Strontium_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strontium_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Strontium_8.addFeatures(features_Strontium_8);var lyr_Strontium_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Strontium_8, 
                style: style_Strontium_8,
                title: '<img src="styles/legend/Strontium_8.png" /> Strontium'
            });var format_Cadmium_9 = new ol.format.GeoJSON();
var features_Cadmium_9 = format_Cadmium_9.readFeatures(json_Cadmium_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cadmium_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cadmium_9.addFeatures(features_Cadmium_9);var lyr_Cadmium_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cadmium_9, 
                style: style_Cadmium_9,
                title: '<img src="styles/legend/Cadmium_9.png" /> Cadmium'
            });var format_Platinium_10 = new ol.format.GeoJSON();
var features_Platinium_10 = format_Platinium_10.readFeatures(json_Platinium_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platinium_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Platinium_10.addFeatures(features_Platinium_10);var lyr_Platinium_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Platinium_10, 
                style: style_Platinium_10,
                title: '<img src="styles/legend/Platinium_10.png" /> Platinium'
            });var format_Titanium_11 = new ol.format.GeoJSON();
var features_Titanium_11 = format_Titanium_11.readFeatures(json_Titanium_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titanium_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Titanium_11.addFeatures(features_Titanium_11);var lyr_Titanium_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titanium_11, 
                style: style_Titanium_11,
                title: '<img src="styles/legend/Titanium_11.png" /> Titanium'
            });var format_Silver_12 = new ol.format.GeoJSON();
var features_Silver_12 = format_Silver_12.readFeatures(json_Silver_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Silver_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Silver_12.addFeatures(features_Silver_12);var lyr_Silver_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Silver_12, 
                style: style_Silver_12,
                title: '<img src="styles/legend/Silver_12.png" /> Silver'
            });var format_Gold_13 = new ol.format.GeoJSON();
var features_Gold_13 = format_Gold_13.readFeatures(json_Gold_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gold_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Gold_13.addFeatures(features_Gold_13);var lyr_Gold_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gold_13, 
                style: style_Gold_13,
                title: '<img src="styles/legend/Gold_13.png" /> Gold'
            });var format_Tungsten_14 = new ol.format.GeoJSON();
var features_Tungsten_14 = format_Tungsten_14.readFeatures(json_Tungsten_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tungsten_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tungsten_14.addFeatures(features_Tungsten_14);var lyr_Tungsten_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tungsten_14, 
                style: style_Tungsten_14,
                title: '<img src="styles/legend/Tungsten_14.png" /> Tungsten'
            });var format_Lithium_15 = new ol.format.GeoJSON();
var features_Lithium_15 = format_Lithium_15.readFeatures(json_Lithium_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lithium_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lithium_15.addFeatures(features_Lithium_15);var lyr_Lithium_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lithium_15, 
                style: style_Lithium_15,
                title: '<img src="styles/legend/Lithium_15.png" /> Lithium'
            });var format_Coltan_16 = new ol.format.GeoJSON();
var features_Coltan_16 = format_Coltan_16.readFeatures(json_Coltan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coltan_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Coltan_16.addFeatures(features_Coltan_16);var lyr_Coltan_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coltan_16, 
                style: style_Coltan_16,
                title: '<img src="styles/legend/Coltan_16.png" /> Coltan'
            });var format_Tin_17 = new ol.format.GeoJSON();
var features_Tin_17 = format_Tin_17.readFeatures(json_Tin_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tin_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tin_17.addFeatures(features_Tin_17);var lyr_Tin_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tin_17, 
                style: style_Tin_17,
                title: '<img src="styles/legend/Tin_17.png" /> Tin'
            });var format_Iron_18 = new ol.format.GeoJSON();
var features_Iron_18 = format_Iron_18.readFeatures(json_Iron_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Iron_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Iron_18.addFeatures(features_Iron_18);var lyr_Iron_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Iron_18, 
                style: style_Iron_18,
                title: '<img src="styles/legend/Iron_18.png" /> Iron'
            });var format_Uranium_19 = new ol.format.GeoJSON();
var features_Uranium_19 = format_Uranium_19.readFeatures(json_Uranium_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uranium_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Uranium_19.addFeatures(features_Uranium_19);var lyr_Uranium_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uranium_19, 
                style: style_Uranium_19,
                title: '<img src="styles/legend/Uranium_19.png" /> Uranium'
            });var format_Lead_20 = new ol.format.GeoJSON();
var features_Lead_20 = format_Lead_20.readFeatures(json_Lead_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lead_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lead_20.addFeatures(features_Lead_20);var lyr_Lead_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lead_20, 
                style: style_Lead_20,
                title: '<img src="styles/legend/Lead_20.png" /> Lead'
            });var format_Chromite_21 = new ol.format.GeoJSON();
var features_Chromite_21 = format_Chromite_21.readFeatures(json_Chromite_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chromite_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Chromite_21.addFeatures(features_Chromite_21);var lyr_Chromite_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Chromite_21, 
                style: style_Chromite_21,
                title: '<img src="styles/legend/Chromite_21.png" /> Chromite'
            });var format_Nickel_22 = new ol.format.GeoJSON();
var features_Nickel_22 = format_Nickel_22.readFeatures(json_Nickel_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nickel_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nickel_22.addFeatures(features_Nickel_22);var lyr_Nickel_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nickel_22, 
                style: style_Nickel_22,
                title: '<img src="styles/legend/Nickel_22.png" /> Nickel'
            });var format_Zinc_23 = new ol.format.GeoJSON();
var features_Zinc_23 = format_Zinc_23.readFeatures(json_Zinc_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zinc_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Zinc_23.addFeatures(features_Zinc_23);var lyr_Zinc_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zinc_23, 
                style: style_Zinc_23,
                title: '<img src="styles/legend/Zinc_23.png" /> Zinc'
            });var format_Cobalt_24 = new ol.format.GeoJSON();
var features_Cobalt_24 = format_Cobalt_24.readFeatures(json_Cobalt_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cobalt_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cobalt_24.addFeatures(features_Cobalt_24);var lyr_Cobalt_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cobalt_24, 
                style: style_Cobalt_24,
                title: '<img src="styles/legend/Cobalt_24.png" /> Cobalt'
            });var format_Copper_25 = new ol.format.GeoJSON();
var features_Copper_25 = format_Copper_25.readFeatures(json_Copper_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Copper_25 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Copper_25.addFeatures(features_Copper_25);var lyr_Copper_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_25, 
                style: style_Copper_25,
                title: '<img src="styles/legend/Copper_25.png" /> Copper'
            });

lyr_Artisanalzones_0.setVisible(false);lyr_Licences_1.setVisible(false);lyr_SpecialAreas_2.setVisible(true);lyr_Phosphate_3.setVisible(true);lyr_Tourmaline_4.setVisible(true);lyr_Diamond_5.setVisible(true);lyr_REE_6.setVisible(true);lyr_Manganese_7.setVisible(true);lyr_Strontium_8.setVisible(true);lyr_Cadmium_9.setVisible(true);lyr_Platinium_10.setVisible(true);lyr_Titanium_11.setVisible(true);lyr_Silver_12.setVisible(true);lyr_Gold_13.setVisible(true);lyr_Tungsten_14.setVisible(true);lyr_Lithium_15.setVisible(true);lyr_Coltan_16.setVisible(true);lyr_Tin_17.setVisible(true);lyr_Iron_18.setVisible(true);lyr_Uranium_19.setVisible(true);lyr_Lead_20.setVisible(true);lyr_Chromite_21.setVisible(true);lyr_Nickel_22.setVisible(true);lyr_Zinc_23.setVisible(true);lyr_Cobalt_24.setVisible(true);lyr_Copper_25.setVisible(true);
var layersList = [baseLayer,lyr_Artisanalzones_0,lyr_Licences_1,lyr_SpecialAreas_2,lyr_Phosphate_3,lyr_Tourmaline_4,lyr_Diamond_5,lyr_REE_6,lyr_Manganese_7,lyr_Strontium_8,lyr_Cadmium_9,lyr_Platinium_10,lyr_Titanium_11,lyr_Silver_12,lyr_Gold_13,lyr_Tungsten_14,lyr_Lithium_15,lyr_Coltan_16,lyr_Tin_17,lyr_Iron_18,lyr_Uranium_19,lyr_Lead_20,lyr_Chromite_21,lyr_Nickel_22,lyr_Zinc_23,lyr_Cobalt_24,lyr_Copper_25];
lyr_Artisanalzones_0.set('fieldAliases', {'Code': 'Code', 'Parties': 'Parties', 'Licence_': 'Licence_', 'Status': 'Status', 'Area': 'Area', });
lyr_Licences_1.set('fieldAliases', {'Code': 'Code', 'Parties': 'Parties', 'Licence_': 'Licence_', 'Status': 'Status', 'Area': 'Area', });
lyr_SpecialAreas_2.set('fieldAliases', {'NOM': 'NOM', 'ET_ID': 'ET_ID', });
lyr_Phosphate_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Tourmaline_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Diamond_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_REE_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Manganese_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Strontium_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Cadmium_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Platinium_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Titanium_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Silver_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Gold_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Tungsten_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Lithium_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Coltan_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Tin_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Iron_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Uranium_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Lead_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Chromite_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Nickel_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Zinc_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Cobalt_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Copper_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Minerals': 'Minerals', 'Occurrence': 'Occurrence', 'SIZE': 'SIZE', });
lyr_Artisanalzones_0.set('fieldImages', {'Code': 'TextEdit', 'Parties': 'TextEdit', 'Licence_': 'TextEdit', 'Status': 'TextEdit', 'Area': 'TextEdit', });
lyr_Licences_1.set('fieldImages', {'Code': 'TextEdit', 'Parties': 'TextEdit', 'Licence_': 'TextEdit', 'Status': 'TextEdit', 'Area': 'TextEdit', });
lyr_SpecialAreas_2.set('fieldImages', {'NOM': 'TextEdit', 'ET_ID': 'TextEdit', });
lyr_Phosphate_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Tourmaline_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Diamond_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_REE_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Manganese_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Strontium_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Cadmium_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Platinium_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Titanium_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Silver_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Gold_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Tungsten_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Lithium_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Coltan_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Tin_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Iron_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Uranium_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Lead_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Chromite_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Nickel_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Zinc_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Cobalt_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Copper_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Minerals': 'TextEdit', 'Occurrence': 'TextEdit', 'SIZE': 'TextEdit', });
lyr_Artisanalzones_0.set('fieldLabels', {'Code': 'no label', 'Parties': 'no label', 'Licence_': 'no label', 'Status': 'no label', 'Area': 'no label', });
lyr_Licences_1.set('fieldLabels', {'Code': 'no label', 'Parties': 'no label', 'Licence_': 'no label', 'Status': 'no label', 'Area': 'no label', });
lyr_SpecialAreas_2.set('fieldLabels', {'NOM': 'no label', 'ET_ID': 'no label', });
lyr_Phosphate_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Tourmaline_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Diamond_5.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_REE_6.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Manganese_7.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Strontium_8.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Cadmium_9.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Platinium_10.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Titanium_11.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Silver_12.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Gold_13.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Tungsten_14.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Lithium_15.set('fieldLabels', {'OBJECTID': 'inline label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Coltan_16.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Tin_17.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Iron_18.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Uranium_19.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Lead_20.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Chromite_21.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Nickel_22.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Zinc_23.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Cobalt_24.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Copper_25.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'header label', 'Minerals': 'no label', 'Occurrence': 'no label', 'SIZE': 'no label', });
lyr_Copper_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});