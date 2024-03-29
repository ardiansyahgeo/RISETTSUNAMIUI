var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_HYBRID_2 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_INDEKSBAHAYABANJIRINARISKBNPB_3 = new ol.format.GeoJSON();
var features_INDEKSBAHAYABANJIRINARISKBNPB_3 = format_INDEKSBAHAYABANJIRINARISKBNPB_3.readFeatures(json_INDEKSBAHAYABANJIRINARISKBNPB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYABANJIRINARISKBNPB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYABANJIRINARISKBNPB_3.addFeatures(features_INDEKSBAHAYABANJIRINARISKBNPB_3);
var lyr_INDEKSBAHAYABANJIRINARISKBNPB_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYABANJIRINARISKBNPB_3, 
                style: style_INDEKSBAHAYABANJIRINARISKBNPB_3,
                interactive: true,
    title: 'INDEKS BAHAYA BANJIR (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYABANJIRINARISKBNPB_3_0.png" /> Indeks Bahaya Banjir Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYABANJIRINARISKBNPB_3_1.png" /> Indeks Bahaya Banjir Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYABANJIRINARISKBNPB_3_2.png" /> Indeks Bahaya Banjir Tinggi<br />'
        });
var format_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = new ol.format.GeoJSON();
var features_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = format_INDEKSBAHAYATSUNAMIINARISKBNPB_4.readFeatures(json_INDEKSBAHAYATSUNAMIINARISKBNPB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYATSUNAMIINARISKBNPB_4.addFeatures(features_INDEKSBAHAYATSUNAMIINARISKBNPB_4);
var lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYATSUNAMIINARISKBNPB_4, 
                style: style_INDEKSBAHAYATSUNAMIINARISKBNPB_4,
                interactive: true,
    title: 'INDEKS BAHAYA TSUNAMI (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYATSUNAMIINARISKBNPB_4_0.png" /> Indeks Bahaya Tsunami Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYATSUNAMIINARISKBNPB_4_1.png" /> Indeks Bahaya Tsunami Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYATSUNAMIINARISKBNPB_4_2.png" /> Indeks Bahaya Tsunami Tinggi<br />'
        });
var format_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = new ol.format.GeoJSON();
var features_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = format_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.readFeatures(json_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.addFeatures(features_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5);
var lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5, 
                style: style_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5,
                interactive: true,
    title: 'INDEKS BAHAYA GEMPA BUMI (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYAGEMPABUMIINARISKBNPB_5_0.png" /> Indeks Bahaya Gempa Bumi Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYAGEMPABUMIINARISKBNPB_5_1.png" /> Indeks Bahaya Gempa Bumi Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYAGEMPABUMIINARISKBNPB_5_2.png" /> Indeks Bahaya Gempa Bumi Tinggi<br />'
        });
var format_INDEKSBAHAYALONSGORINARISKBNPB_6 = new ol.format.GeoJSON();
var features_INDEKSBAHAYALONSGORINARISKBNPB_6 = format_INDEKSBAHAYALONSGORINARISKBNPB_6.readFeatures(json_INDEKSBAHAYALONSGORINARISKBNPB_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDEKSBAHAYALONSGORINARISKBNPB_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDEKSBAHAYALONSGORINARISKBNPB_6.addFeatures(features_INDEKSBAHAYALONSGORINARISKBNPB_6);
var lyr_INDEKSBAHAYALONSGORINARISKBNPB_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDEKSBAHAYALONSGORINARISKBNPB_6, 
                style: style_INDEKSBAHAYALONSGORINARISKBNPB_6,
                interactive: true,
    title: 'INDEKS BAHAYA LONSGOR (INARISK-BNPB)<br />\
    <img src="styles/legend/INDEKSBAHAYALONSGORINARISKBNPB_6_0.png" /> Indeks Bahaya Longsor Rendah<br />\
    <img src="styles/legend/INDEKSBAHAYALONSGORINARISKBNPB_6_1.png" /> Indeks Bahaya Longsor Sedang<br />\
    <img src="styles/legend/INDEKSBAHAYALONSGORINARISKBNPB_6_2.png" /> Indeks Bahaya Longsor Tinggi<br />'
        });
var format_WILAYAHRAWANTSUNAMIAnalisisDemnas_7 = new ol.format.GeoJSON();
var features_WILAYAHRAWANTSUNAMIAnalisisDemnas_7 = format_WILAYAHRAWANTSUNAMIAnalisisDemnas_7.readFeatures(json_WILAYAHRAWANTSUNAMIAnalisisDemnas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHRAWANTSUNAMIAnalisisDemnas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHRAWANTSUNAMIAnalisisDemnas_7.addFeatures(features_WILAYAHRAWANTSUNAMIAnalisisDemnas_7);
var lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WILAYAHRAWANTSUNAMIAnalisisDemnas_7, 
                style: style_WILAYAHRAWANTSUNAMIAnalisisDemnas_7,
                interactive: true,
                title: '<img src="styles/legend/WILAYAHRAWANTSUNAMIAnalisisDemnas_7.png" /> WILAYAH RAWAN TSUNAMI (Analisis Demnas)'
            });
var format_JANGKAUANTESUNTUKLANSIA39Menit_8 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKLANSIA39Menit_8 = format_JANGKAUANTESUNTUKLANSIA39Menit_8.readFeatures(json_JANGKAUANTESUNTUKLANSIA39Menit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_8.addFeatures(features_JANGKAUANTESUNTUKLANSIA39Menit_8);
var lyr_JANGKAUANTESUNTUKLANSIA39Menit_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKLANSIA39Menit_8, 
                style: style_JANGKAUANTESUNTUKLANSIA39Menit_8,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKLANSIA39Menit_8.png" /> JANGKAUAN TES UNTUK LANSIA (39 Menit)'
            });
var format_JANGKAUANTESSESEORANGDENGANANAK39Menit_9 = new ol.format.GeoJSON();
var features_JANGKAUANTESSESEORANGDENGANANAK39Menit_9 = format_JANGKAUANTESSESEORANGDENGANANAK39Menit_9.readFeatures(json_JANGKAUANTESSESEORANGDENGANANAK39Menit_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_9.addFeatures(features_JANGKAUANTESSESEORANGDENGANANAK39Menit_9);
var lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESSESEORANGDENGANANAK39Menit_9, 
                style: style_JANGKAUANTESSESEORANGDENGANANAK39Menit_9,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESSESEORANGDENGANANAK39Menit_9.png" /> JANGKAUAN TES SESEORANG DENGAN ANAK (39 Menit)'
            });
var format_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10 = format_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.readFeatures(json_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.addFeatures(features_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10);
var lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10, 
                style: style_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.png" /> JANGKAUAN TES UNTUK MENDORONG KERETA (39 Menit)'
            });
var format_JANGKAUANTESUNTUKLANSIA15Menit_11 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKLANSIA15Menit_11 = format_JANGKAUANTESUNTUKLANSIA15Menit_11.readFeatures(json_JANGKAUANTESUNTUKLANSIA15Menit_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_11.addFeatures(features_JANGKAUANTESUNTUKLANSIA15Menit_11);
var lyr_JANGKAUANTESUNTUKLANSIA15Menit_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKLANSIA15Menit_11, 
                style: style_JANGKAUANTESUNTUKLANSIA15Menit_11,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKLANSIA15Menit_11.png" /> JANGKAUAN TES UNTUK LANSIA (15 Menit)'
            });
var format_JANGKAUANTESSESEORANGDENGANANAK15Menit_12 = new ol.format.GeoJSON();
var features_JANGKAUANTESSESEORANGDENGANANAK15Menit_12 = format_JANGKAUANTESSESEORANGDENGANANAK15Menit_12.readFeatures(json_JANGKAUANTESSESEORANGDENGANANAK15Menit_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_12.addFeatures(features_JANGKAUANTESSESEORANGDENGANANAK15Menit_12);
var lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESSESEORANGDENGANANAK15Menit_12, 
                style: style_JANGKAUANTESSESEORANGDENGANANAK15Menit_12,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESSESEORANGDENGANANAK15Menit_12.png" /> JANGKAUAN TES SESEORANG DENGAN ANAK (15 Menit)'
            });
var format_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13 = new ol.format.GeoJSON();
var features_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13 = format_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.readFeatures(json_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.addFeatures(features_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13);
var lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13, 
                style: style_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13,
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.png" /> JANGKAUAN TES UNTUK MENDORONG KERETA (15 Menit)'
            });
var format_JANGKAUANMENUJUTEA_14 = new ol.format.GeoJSON();
var features_JANGKAUANMENUJUTEA_14 = format_JANGKAUANMENUJUTEA_14.readFeatures(json_JANGKAUANMENUJUTEA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANMENUJUTEA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANMENUJUTEA_14.addFeatures(features_JANGKAUANMENUJUTEA_14);
var lyr_JANGKAUANMENUJUTEA_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JANGKAUANMENUJUTEA_14, 
                style: style_JANGKAUANMENUJUTEA_14,
                interactive: true,
    title: 'JANGKAUAN MENUJU TEA<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_14_0.png" /> 0-5 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_14_1.png" /> 5-10 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_14_2.png" /> 10-15 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_14_3.png" /> 15-30 MENIT<br />\
    <img src="styles/legend/JANGKAUANMENUJUTEA_14_4.png" /> 30-45 MENIT<br />'
        });
var format_RuteEvakuasi_15 = new ol.format.GeoJSON();
var features_RuteEvakuasi_15 = format_RuteEvakuasi_15.readFeatures(json_RuteEvakuasi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteEvakuasi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteEvakuasi_15.addFeatures(features_RuteEvakuasi_15);
var lyr_RuteEvakuasi_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteEvakuasi_15, 
                style: style_RuteEvakuasi_15,
                interactive: true,
                title: '<img src="styles/legend/RuteEvakuasi_15.png" /> Rute Evakuasi'
            });
var format_TitikGempa5magTahun902022_16 = new ol.format.GeoJSON();
var features_TitikGempa5magTahun902022_16 = format_TitikGempa5magTahun902022_16.readFeatures(json_TitikGempa5magTahun902022_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikGempa5magTahun902022_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikGempa5magTahun902022_16.addFeatures(features_TitikGempa5magTahun902022_16);
var lyr_TitikGempa5magTahun902022_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikGempa5magTahun902022_16, 
                style: style_TitikGempa5magTahun902022_16,
                interactive: true,
    title: 'Titik Gempa >5 mag (Tahun 90-2022)<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_16_0.png" /> 5 - 5,5 mag<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_16_1.png" /> 5,5 - 6 mag<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_16_2.png" /> 6 - 6,5 mag<br />\
    <img src="styles/legend/TitikGempa5magTahun902022_16_3.png" /> 6,5 - 6,82 mag<br />'
        });
var format_BANGUNAN1LANTAI_17 = new ol.format.GeoJSON();
var features_BANGUNAN1LANTAI_17 = format_BANGUNAN1LANTAI_17.readFeatures(json_BANGUNAN1LANTAI_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN1LANTAI_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN1LANTAI_17.addFeatures(features_BANGUNAN1LANTAI_17);
var lyr_BANGUNAN1LANTAI_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN1LANTAI_17, 
                style: style_BANGUNAN1LANTAI_17,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN1LANTAI_17.png" /> BANGUNAN >1 LANTAI'
            });
var format_TEMPATEVAKUASIAKHIRTEA_18 = new ol.format.GeoJSON();
var features_TEMPATEVAKUASIAKHIRTEA_18 = format_TEMPATEVAKUASIAKHIRTEA_18.readFeatures(json_TEMPATEVAKUASIAKHIRTEA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TEMPATEVAKUASIAKHIRTEA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATEVAKUASIAKHIRTEA_18.addFeatures(features_TEMPATEVAKUASIAKHIRTEA_18);
var lyr_TEMPATEVAKUASIAKHIRTEA_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TEMPATEVAKUASIAKHIRTEA_18, 
                style: style_TEMPATEVAKUASIAKHIRTEA_18,
                interactive: true,
                title: '<img src="styles/legend/TEMPATEVAKUASIAKHIRTEA_18.png" /> TEMPAT EVAKUASI AKHIR (TEA)'
            });
var format_TitikBangunan1LantaiHasilPMap_19 = new ol.format.GeoJSON();
var features_TitikBangunan1LantaiHasilPMap_19 = format_TitikBangunan1LantaiHasilPMap_19.readFeatures(json_TitikBangunan1LantaiHasilPMap_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikBangunan1LantaiHasilPMap_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikBangunan1LantaiHasilPMap_19.addFeatures(features_TitikBangunan1LantaiHasilPMap_19);
var lyr_TitikBangunan1LantaiHasilPMap_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikBangunan1LantaiHasilPMap_19, 
                style: style_TitikBangunan1LantaiHasilPMap_19,
                interactive: true,
                title: '<img src="styles/legend/TitikBangunan1LantaiHasilPMap_19.png" /> Titik Bangunan >1 Lantai (Hasil P-Map)'
            });
var format_BatasDesaKelurahan_20 = new ol.format.GeoJSON();
var features_BatasDesaKelurahan_20 = format_BatasDesaKelurahan_20.readFeatures(json_BatasDesaKelurahan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesaKelurahan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaKelurahan_20.addFeatures(features_BatasDesaKelurahan_20);
var lyr_BatasDesaKelurahan_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDesaKelurahan_20, 
                style: style_BatasDesaKelurahan_20,
                interactive: true,
                title: '<img src="styles/legend/BatasDesaKelurahan_20.png" /> Batas Desa/Kelurahan'
            });

lyr_google_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_HYBRID_2.setVisible(true);lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.setVisible(false);lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.setVisible(false);lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.setVisible(false);lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.setVisible(false);lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_7.setVisible(false);lyr_JANGKAUANTESUNTUKLANSIA39Menit_8.setVisible(false);lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_9.setVisible(false);lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.setVisible(false);lyr_JANGKAUANTESUNTUKLANSIA15Menit_11.setVisible(false);lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_12.setVisible(false);lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.setVisible(false);lyr_JANGKAUANMENUJUTEA_14.setVisible(true);lyr_RuteEvakuasi_15.setVisible(true);lyr_TitikGempa5magTahun902022_16.setVisible(true);lyr_BANGUNAN1LANTAI_17.setVisible(true);lyr_TEMPATEVAKUASIAKHIRTEA_18.setVisible(true);lyr_TitikBangunan1LantaiHasilPMap_19.setVisible(true);lyr_BatasDesaKelurahan_20.setVisible(true);
var layersList = [lyr_google_0,lyr_OpenStreetMap_1,lyr_HYBRID_2,lyr_INDEKSBAHAYABANJIRINARISKBNPB_3,lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4,lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5,lyr_INDEKSBAHAYALONSGORINARISKBNPB_6,lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_7,lyr_JANGKAUANTESUNTUKLANSIA39Menit_8,lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_9,lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10,lyr_JANGKAUANTESUNTUKLANSIA15Menit_11,lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_12,lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13,lyr_JANGKAUANMENUJUTEA_14,lyr_RuteEvakuasi_15,lyr_TitikGempa5magTahun902022_16,lyr_BANGUNAN1LANTAI_17,lyr_TEMPATEVAKUASIAKHIRTEA_18,lyr_TitikBangunan1LantaiHasilPMap_19,lyr_BatasDesaKelurahan_20];
lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_11.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_12.set('fieldAliases', {'ObjectID': 'ObjectID', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Name': 'Tempat Evakuasi Terdekat', });
lyr_JANGKAUANMENUJUTEA_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KET': 'KET', });
lyr_RuteEvakuasi_15.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'FromCumul_': 'FromCumul_', 'ToCumul_Le': 'ToCumul_Le', });
lyr_TitikGempa5magTahun902022_16.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontal': 'horizontal', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSo': 'locationSo', 'magSource': 'magSource', });
lyr_BANGUNAN1LANTAI_17.set('fieldAliases', {'Name': 'Name', 'Tinggi_Ban': 'Tinggi_Ban', 'arah': 'arah', 'FOTO': 'FOTO', });
lyr_TEMPATEVAKUASIAKHIRTEA_18.set('fieldAliases', {'Name': 'Name', 'pdfmaps_ph': 'pdfmaps_ph', 'Kemiringan': 'Kemiringan', 'Keterangan': 'Keterangan', 'Kondisi_Ba': 'Kondisi_Ba', 'Kondisi_Ja': 'Kondisi_Ja', 'Lebar_Bang': 'Lebar_Bang', 'Lebar_Jala': 'Lebar_Jala', 'Nama': 'Nama', 'Panjang_Ja': 'Panjang_Ja', 'Tinggi_Ban': 'Tinggi_Ban', 'Tipe': 'Tipe', 'row_num': 'row_num', 'arah': 'arah', 'FOTO': 'FOTO', });
lyr_TitikBangunan1LantaiHasilPMap_19.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Kecamatan': 'Kecamatan', });
lyr_BatasDesaKelurahan_20.set('fieldAliases', {'NAMOBJ': 'Nama Obyek', 'WADMKC': 'Kecamatan', 'WADMKD': 'Kelurahan/Desa', 'jumlah_kk': 'Jumlah KK', 'pria': 'Jumlah Pria', 'wanita': 'Jumlah Wanita', 'Balita': 'Jumlah Balita', 'lansia': 'Jumlah Lansia', });
lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_8.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_9.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_11.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_12.set('fieldImages', {'ObjectID': 'TextEdit', 'Name': 'TextEdit', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.set('fieldImages', {'OBJECTID_1': '', 'Name': 'TextEdit', });
lyr_JANGKAUANMENUJUTEA_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'KET': 'TextEdit', });
lyr_RuteEvakuasi_15.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'FromCumul_': 'TextEdit', 'ToCumul_Le': 'TextEdit', });
lyr_TitikGempa5magTahun902022_16.set('fieldImages', {'time': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'TextEdit', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontal': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'TextEdit', 'status': 'TextEdit', 'locationSo': 'TextEdit', 'magSource': 'TextEdit', });
lyr_BANGUNAN1LANTAI_17.set('fieldImages', {'Name': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'arah': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_TEMPATEVAKUASIAKHIRTEA_18.set('fieldImages', {'Name': 'TextEdit', 'pdfmaps_ph': 'TextEdit', 'Kemiringan': 'TextEdit', 'Keterangan': 'TextEdit', 'Kondisi_Ba': 'TextEdit', 'Kondisi_Ja': 'TextEdit', 'Lebar_Bang': 'TextEdit', 'Lebar_Jala': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_Ja': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'Tipe': 'TextEdit', 'row_num': 'TextEdit', 'arah': 'TextEdit', 'FOTO': 'TextEdit', });
lyr_TitikBangunan1LantaiHasilPMap_19.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_BatasDesaKelurahan_20.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'jumlah_kk': 'TextEdit', 'pria': 'TextEdit', 'wanita': 'TextEdit', 'Balita': 'Range', 'lansia': 'Range', });
lyr_INDEKSBAHAYABANJIRINARISKBNPB_3.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_INDEKSBAHAYATSUNAMIINARISKBNPB_4.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_INDEKSBAHAYAGEMPABUMIINARISKBNPB_5.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_INDEKSBAHAYALONSGORINARISKBNPB_6.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_WILAYAHRAWANTSUNAMIAnalisisDemnas_7.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', });
lyr_JANGKAUANTESUNTUKLANSIA39Menit_8.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESSESEORANGDENGANANAK39Menit_9.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA39Menit_10.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESUNTUKLANSIA15Menit_11.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESSESEORANGDENGANANAK15Menit_12.set('fieldLabels', {'ObjectID': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANTESUNTUKMENDORONGKERETA15Menit_13.set('fieldLabels', {'OBJECTID_1': 'inline label', 'Name': 'inline label', });
lyr_JANGKAUANMENUJUTEA_14.set('fieldLabels', {'OBJECTID': 'inline label', 'KET': 'inline label', });
lyr_RuteEvakuasi_15.set('fieldLabels', {'ObjectID': 'inline label', 'FacilityID': 'inline label', 'FromCumul_': 'inline label', 'ToCumul_Le': 'inline label', });
lyr_TitikGempa5magTahun902022_16.set('fieldLabels', {'time': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', 'depth': 'inline label', 'mag': 'inline label', 'magType': 'inline label', 'nst': 'inline label', 'gap': 'inline label', 'dmin': 'inline label', 'rms': 'inline label', 'net': 'inline label', 'id': 'inline label', 'updated': 'inline label', 'place': 'inline label', 'type': 'inline label', 'horizontal': 'inline label', 'depthError': 'inline label', 'magError': 'inline label', 'magNst': 'inline label', 'status': 'inline label', 'locationSo': 'inline label', 'magSource': 'inline label', });
lyr_BANGUNAN1LANTAI_17.set('fieldLabels', {'Name': 'inline label', 'Tinggi_Ban': 'inline label', 'arah': 'inline label', 'FOTO': 'inline label', });
lyr_TEMPATEVAKUASIAKHIRTEA_18.set('fieldLabels', {'Name': 'inline label', 'pdfmaps_ph': 'inline label', 'Kemiringan': 'inline label', 'Keterangan': 'inline label', 'Kondisi_Ba': 'inline label', 'Kondisi_Ja': 'inline label', 'Lebar_Bang': 'inline label', 'Lebar_Jala': 'inline label', 'Nama': 'inline label', 'Panjang_Ja': 'inline label', 'Tinggi_Ban': 'inline label', 'Tipe': 'inline label', 'row_num': 'inline label', 'arah': 'inline label', 'FOTO': 'inline label', });
lyr_TitikBangunan1LantaiHasilPMap_19.set('fieldLabels', {'OID_': 'inline label', 'Name': 'inline label', 'Kecamatan': 'inline label', });
lyr_BatasDesaKelurahan_20.set('fieldLabels', {'NAMOBJ': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'jumlah_kk': 'inline label', 'pria': 'inline label', 'wanita': 'inline label', 'Balita': 'inline label', 'lansia': 'inline label', });
lyr_BatasDesaKelurahan_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var layersList = [
new ol.layer.Group({
            title: 'Basemap',
            layers: [
lyr_google_0,lyr_OpenStreetMap_1,lyr_HYBRID_2,
]}),
 
new ol.layer.Group({
            title: 'data',
            fold: 'open',
            layers: [
lyr_TitikBangunan1LantaiHasilPMap_19,
]}),
];

