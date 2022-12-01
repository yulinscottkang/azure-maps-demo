var style_grayscale_dark = {
	"version": 8,
	"name": "Canvas Dark",
	"center": [-122.336, 47.607],
	"zoom": 9,
	"sources": {
		"bing-mvt": {
			"type": "vector",
			"tiles": ["https://ecn.api.m2.tiles.live-int.com/comp/ch/{z}-{x}-{y}.mvt?mkt=en-us&it=G,LC,L,LA&og=1122&src=t&js=1&tj=1&ur=us&cstl=wd&mvt=1&features=mvt,mvtfontinfo&sv=9.03"],
			"promoteId": "id",
			"minzoom": 0,
			"maxzoom": 18
		},
		"bing-traffic": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.traffic.relative"
		},
		"roadDetails": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=g&og=1674&cstl=wd&stl=d"],
			"minzoom": 5,
			"maxzoom": 13,
			"tileSize": 256
		},
		"buildings": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=z,bf&og=1674&cstl=wd&n=t"],
			"minzoom": 16,
			"maxzoom": 20,
			"tileSize": 256
		},
		"JK": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=ro&shading=t&og=1674&cstl=VB&n=t"],
			"minzoom": 5,
			"maxzoom": 20,
			"tileSize": 256,
			"bounds": [122.74, 19.33, 149.0, 45.67]
		}
	},
	"sprite": "https://ecn.api.m2.tiles.live-int.com/comp/stl/sprite?ods=mvt&mbxs=68c27b9c-4fb4-4cec-a664-3fc3c2e8a12a&v=9.03&og=1674&mkt=en-US",
	"glyphs": "https://ecn.api.m2.tiles.live-int.com/comp/stl?ods=mvt&glyphs={fontstack}&range={range}",
	"created": "2022-11-07T13:36:08",
	"id": "ckcxwr84o1a651iqvrtwueb0j",
	"modified": "2022-11-07T13:36:08",
	"owner": "Microsoft",
	"visibility": "private",
	"draft": true,
	"metadata": {
		"xsrVersion": "9.0.0.3708",
		"xsrRegion": "Default",
		"layerIndex": {
			"firstMarkupLayer": "microsoft.bing.maps.labels.address_symbol_label",
			"lastWaterLayer": "microsoft.bing.maps.baseFeature.entity_override_river_china_dprk_line",
			"firstTrafficLayer": "microsoft.bing.maps.traffic_relative.traffic_congestion_closed_line"
		}
	},
	"layers": [{
		"id": "microsoft.bing.maps.base.land",
		"type": "background",
		"paint": {
			"background-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.vector_land",
		"type": "fill",
		"source": "bing-mvt",
		"source-layer": "vector_background",
		"paint": {
			"fill-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.indigenous_peoples_reserve_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "indigenous_peoples_reserve",
		"filter": ["in", ["get", "bkt"],
			["literal", [892, 610]]
		],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(35, 23%, 89%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.shopping_center_fill",
		"source": "bing-mvt",
		"source-layer": "shopping_center",
		"filter": ["==", ["get", "bkt"], 1094],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(20, 30%, 96%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.beach_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "beach",
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(35, 64%, 91%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.cemetery_fill",
		"source": "bing-mvt",
		"source-layer": "cemetery",
		"filter": ["==", ["get", "bkt"], 1098],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(136, 15%, 86%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.school_fill",
		"source": "bing-mvt",
		"source-layer": "school",
		"filter": ["==", ["get", "bkt"], 1106],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(69, 46%, 86%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.educational_structure_fill",
		"source": "bing-mvt",
		"source-layer": "educational_structure",
		"filter": ["==", ["get", "bkt"], 1102],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(69, 46%, 86%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.higher_education_facility_fill",
		"source": "bing-mvt",
		"source-layer": "higher_education_facility",
		"filter": ["==", ["get", "bkt"], 1103],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(69, 46%, 86%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.stadium_fill",
		"source": "bing-mvt",
		"source-layer": "stadium",
		"filter": ["==", ["get", "bkt"], 1149],
		"minzoom": 13,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(39, 22%, 80%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.hospital_fill",
		"source": "bing-mvt",
		"source-layer": "hospital",
		"filter": ["==", ["get", "bkt"], 1131],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(22, 38%, 90%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.business_center_fill",
		"source": "bing-mvt",
		"source-layer": "business_center",
		"filter": ["==", ["get", "bkt"], 1088],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(20, 30%, 96%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.industrial_structure_fill",
		"source": "bing-mvt",
		"source-layer": "industrial_structure",
		"filter": ["==", ["get", "bkt"], 1126],
		"minzoom": 14,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(39, 22%, 80%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.airport_fill-merged7",
		"source": "bing-mvt",
		"source-layer": "airport",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1072, 1077, 1079, 1081, 1082, 1083, 1084]]
			],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(40, 5%, 89%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.nautical_structure_fill",
		"source": "bing-mvt",
		"source-layer": "nautical_structure",
		"filter": ["==", ["get", "bkt"], 1135],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(20, 30%, 96%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.airport_runway_fill",
		"source": "bing-mvt",
		"source-layer": "airport_runway",
		"filter": ["==", ["get", "bkt"], 1086],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(20, 16%, 79%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.airport_line",
		"source": "bing-mvt",
		"source-layer": "airport",
		"filter": ["all", ["==", ["get", "bkt"], 1072],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(38, 25%, 74%, 0)",
			"line-width": 1.0
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.bay_fill-merged3",
		"source": "bing-mvt",
		"source-layer": "bay",
		"filter": ["in", ["get", "bkt"],
			["literal", [1222, 1824, 1823]]
		],
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.canal_fill",
		"source": "bing-mvt",
		"source-layer": "canal",
		"filter": ["all", ["==", ["get", "bkt"], 1226],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.river_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1241, 1895]]
			],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.river_line_line",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["==", ["get", "bkt"], 1361],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 20%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 9, 0.6, 12, 1.5, 14, 4.0, 16, 8.0, 17, 12.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.sea_fill-merged7",
		"source": "bing-mvt",
		"source-layer": "sea",
		"filter": ["in", ["get", "bkt"],
			["literal", [1245, 1961, 1956, 1910, 1909, 1903, 1280]]
		],
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.coastal_water_fill",
		"source": "bing-mvt",
		"source-layer": "coastal_water",
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.channel_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "channel",
		"filter": ["in", ["get", "bkt"],
			["literal", [1228, 10]]
		],
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.ocean_fill-merged5",
		"source": "bing-mvt",
		"source-layer": "ocean",
		"filter": ["in", ["get", "bkt"],
			["literal", [1246, 1811, 1810, 1809, 1808]]
		],
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.lake_polygon_non_perennial_fill",
		"source": "bing-mvt",
		"source-layer": "lake",
		"filter": ["==", ["get", "bkt"], 1238],
		"type": "fill",
		"paint": {
			"fill-pattern": "image-556"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.river_polygon_non_perennial_fill",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["==", ["get", "bkt"], 1244],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-pattern": "image-556"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.wetland_fill",
		"source": "bing-mvt",
		"source-layer": "wetland",
		"filter": ["==", ["get", "bkt"], 727],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-pattern": "image-2205"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.lake_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "lake",
		"filter": ["in", ["get", "bkt"],
			["literal", [1237, 1894]]
		],
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.river_line_non_perennial_line",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["==", ["get", "bkt"], 715],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 20%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 12, 1.5, 14, 4.0, 16, 8.0, 17, 12.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.333333, 5.0]], 12, ["literal", [3.33333325, 2.0]], 14, ["literal", [1.25, 0.75]], 15, ["literal", [0.8333333, 0.5]], 16, ["literal", [0.625, 0.375]], 17, ["literal", [0.416666657, 0.25]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.canal_line",
		"source": "bing-mvt",
		"source-layer": "canal",
		"filter": ["all", ["==", ["get", "bkt"], 1226],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 20%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 1.0, 14, 2.6, 15, 4.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.entity_override_river_china_dprk_line",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["all", ["==", ["get", "bkt"], 1895],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 20%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 9, 0.6, 12, 1.5, 14, 4.0, 16, 8.0, 17, 12.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roadDetails.roadDetails",
		"type": "raster",
		"paint": {
			"raster-fade-duration": 0
		},
		"layout": {
			"visibility": "visible"
		},
		"metadata": {
			"delayLoad": true
		},
		"source": "roadDetails",
		"maxzoom": 13,
		"minzoom": 4
	}, {
		"id": "microsoft.bing.maps.roads.airport_terminal_fill",
		"source": "bing-mvt",
		"source-layer": "airport_terminal",
		"filter": ["in", ["geometry-type"],
			["literal", ["Polygon", "MultiPolygon"]]
		],
		"minzoom": 16,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(40, 5%, 89%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.roads.airport_terminal_line",
		"source": "bing-mvt",
		"source-layer": "airport_terminal",
		"filter": ["in", ["geometry-type"],
			["literal", ["LineString", "MultiLineString"]]
		],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(40, 5%, 89%, 0)",
			"line-width": 1.0
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_tunnel_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [687, 683]]
		],
		"minzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.45, 14, 0.67, 15, 4.5, 16, 7.2, 17, 12.6, 18, 18.0, 19, 23.4, 20, 25.2, 21, 28.8]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_toll_tunnel_one_way_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 682],
		"minzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 13, 0.5, 14, 0.73, 15, 4.85, 16, 7.68, 17, 13.3, 18, 18.8, 22, 18.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.arterial_tunnel_line-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [679, 674, 678]]
		],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.22, 12, 0.45, 13, 0.67, 14, 4.5, 15, 7.2, 16, 12.6, 17, 18.0, 18, 21.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_tunnel_line-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [671, 666, 670, 665]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 27%)", 13, "hsl(0, 0%, 13%)"],
			"line-width": ["step", ["zoom"], 1.35, 10, 1.8, 11, 2.7, 12, 3.6, 13, 4.5, 14, 6.75, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 33.3, 20, 37.8, 21, 41.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_tunnel_line-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [662, 657, 661]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 27%)", 13, "hsl(0, 0%, 13%)"],
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 36.0, 20, 39.6, 21, 43.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_tunnel_one_way_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [125, 656]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 27%)", 13, "hsl(0, 0%, 13%)"],
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_toll_tunnel_eu_line-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [124, 129, 128]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 13%)", 9, "hsl(0, 0%, 27%)", 13, "hsl(0, 0%, 13%)"],
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_tunnel_line-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [642, 639, 644, 638]]
		],
		"minzoom": 4,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 13%)", 9, "hsl(0, 0%, 27%)", 13, "hsl(0, 0%, 13%)"],
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 36.0, 20, 45.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_underground_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 25],
		"minzoom": 16,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 21%)",
			"line-width": ["step", ["zoom"], 2.0, 17, 3.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.0, 3.0]], 15, ["literal", [2.66666675, 2.0]], 16, ["literal", [2.0, 1.5]], 17, ["literal", [1.33333337, 1.0]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_tunnel_line_1-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [671, 666, 670, 665]]
		],
		"minzoom": 11,
		"maxzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.8, 13, 2.7]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_tunnel_line_1-merged12",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [662, 125, 657, 661, 656, 124, 642, 639, 644, 129, 638, 128]]
		],
		"minzoom": 9,
		"maxzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98]
		}
	}, {
		"id": "microsoft.bing.maps.roads.autorail_line-merged3",
		"source": "bing-mvt",
		"source-layer": "autorail",
		"filter": ["in", ["get", "bkt"],
			["literal", [623, 624, 626]]
		],
		"minzoom": 15,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 15%)",
			"line-width": ["step", ["zoom"], 6.0, 16, 10.0, 17, 14.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_toll_tunnel_eu_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [121, 120]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 27%)", 13, "hsl(0, 0%, 13%)"],
			"line-width": ["step", ["zoom"], 1.35, 10, 1.8, 11, 2.7, 12, 3.6, 13, 4.5, 14, 6.75, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 33.3, 20, 37.8, 21, 41.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_unpaved_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1315, 685]]
		],
		"minzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 13, 0.5, 14, 0.73, 15, 4.85, 16, 7.68, 17, 13.3, 18, 18.8, 22, 18.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.arterial_unpaved_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 1313],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.22, 12, 0.45, 13, 0.67, 14, 4.5, 15, 7.2, 16, 12.6, 17, 18.0, 18, 21.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_unpaved_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 1309],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.8, 13, 2.7, 14, 4.95, 15, 7.2, 16, 14.4, 17, 23.4, 18, 25.2, 19, 28.8, 20, 32.4, 21, 34.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.ramp_line-merged7",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [631, 635, 1349, 1011, 1009, 1010, 1007]]
		],
		"minzoom": 10,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.45, 11, 0.67, 13, 0.9, 14, 2.7, 15, 4.05, 16, 6.3, 17, 9.9, 18, 14.4, 19, 18.9, 20, 23.4, 21, 27.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_line-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [680, 684, 686]]
		],
		"minzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 13, 0.47, 14, 0.7, 15, 4.66, 16, 7.42, 17, 12.92, 18, 18.36, 19, 25.58, 20, 30.0, 21, 34.37, 22, 34.2
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.arterial_line-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [672, 676, 677, 675]]
		],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.67, 13, 0.9, 14, 4.5, 15, 7.2, 16, 12.6, 17, 18.0, 18, 21.6, 19, 27.9, 20, 32.4, 21, 36.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_line-merged6",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [663, 668, 669, 123, 667, 122]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 1.35, 10, 1.8, 11, 2.7, 12, 3.6, 13, 4.5, 14, 6.75, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 33.3, 20, 37.8, 21, 41.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.railway_line",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 616],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 15%)",
			"line-width": 2.0
		}
	}, {
		"id": "microsoft.bing.maps.roads.ferry_route_line-merged2",
		"source": "bing-mvt",
		"source-layer": "ferry_route",
		"filter": ["in", ["get", "bkt"],
			["literal", [1208, 629]]
		],
		"minzoom": 12,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 40%)",
			"line-width": 1.25,
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0, 2.0]], 12, ["literal", [0.8, 2.4]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.metro_line",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 1255],
		"minzoom": 15,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 10%)",
			"line-width": ["step", ["zoom"], 12.0, 17, 22.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.autorail_line_1-merged3",
		"source": "bing-mvt",
		"source-layer": "autorail",
		"filter": ["in", ["get", "bkt"],
			["literal", [623, 624, 626]]
		],
		"minzoom": 4,
		"type": "line",
		"paint": {
			"line-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsl(0, 0%, 15%)", 14, "hsl(0, 0%, 15%)", 15, "hsl(0, 0%, 0%)"
			],
			"line-width": ["step", ["zoom"], 2.0, 16, 6.0, 17, 10.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 15, ["literal", [7.0, 5.0]], 16, ["literal", [2.33333325, 1.66666663]], 17, ["literal", [1.4, 1.0]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_toll_tunnel_eu_line_1-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [121, 120]]
		],
		"minzoom": 11,
		"maxzoom": 13,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.8, 13, 2.7]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 688],
		"minzoom": 14,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 21%)",
			"line-width": ["step", ["zoom"], 1.0, 15, 1.5, 16, 2.0, 17, 3.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.0, 3.0]], 15, ["literal", [2.66666675, 2.0]], 16, ["literal", [2.0, 1.5]], 17, ["literal", [1.33333337, 1.0]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_unpaved_line_1-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1315, 685]]
		],
		"minzoom": 15,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 2.7, 16, 5.4, 17, 10.8, 18, 16.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.arterial_unpaved_line_1",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 1313],
		"minzoom": 14,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 2.7, 15, 5.4, 16, 10.8, 17, 16.2, 18, 19.8]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_line_1-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1309, 663, 668, 669]]
		],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.8, 13, 2.7, 14, 4.95, 15, 7.2, 16, 14.4, 17, 23.4, 18, 25.2, 19, 28.8, 20, 32.4, 21, 34.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.ramp_line_1-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [631, 635, 1349]]
		],
		"minzoom": 14,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 15, 2.25, 16, 4.5, 17, 8.1, 18, 12.6, 19, 16.2, 20, 19.8, 21, 23.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_parking_lot_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [265, 266]]
		],
		"minzoom": 16,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 1.8, 17, 2.7, 18, 3.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_line_1-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [680, 686]]
		],
		"minzoom": 15,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 2.7, 16, 5.4, 17, 10.8, 18, 16.2, 19, 21.6, 20, 25.2, 21, 30.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_one_way_line_1",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 684],
		"minzoom": 15,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 3.15, 16, 5.4, 17, 10.8, 18, 16.2, 19, 21.6, 20, 25.2, 21, 30.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.arterial_line_1-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [672, 676, 677, 675]]
		],
		"minzoom": 14,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 2.7, 15, 5.4, 16, 10.8, 17, 16.2, 18, 19.8, 19, 25.2, 20, 28.8, 21, 32.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_toll_one_way_line_1-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [123, 667, 122]]
		],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 7.2, 16, 14.4, 17, 23.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.railway_line_1",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 616],
		"minzoom": 11,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 15%)",
			"line-width": 10.0,
			"line-dasharray": [0.1, 1.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.railway_chn_line",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 17],
		"minzoom": 7,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 15%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 5.4, 8, 6.0, 11, 8.0, 12, 9.0, 15, 9.0, 17, 13.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.metro_line_1",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 1255],
		"minzoom": 11,
		"maxzoom": 15,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(0, 0%, 0%, 0.4)",
			"line-width": ["step", ["zoom"], 6.0, 15, 12.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.autorail_line_2-merged3",
		"source": "bing-mvt",
		"source-layer": "autorail",
		"filter": ["in", ["get", "bkt"],
			["literal", [623, 624, 626]]
		],
		"minzoom": 4,
		"maxzoom": 15,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 15%)",
			"line-width": 6.0,
			"line-dasharray": [0.166666672, 3.83333325]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_one_way_line_2-merged7",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [684, 685, 676, 675, 668, 667, 122]]
		],
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"symbol-placement": "line",
			"icon-image": ["match", ["get", "bkt"],
				[684, 685], "arrow-684", "arrow-676"
			],
			"symbol-spacing": 100.0,
			"icon-rotation-alignment": "map",
			"icon-allow-overlap": true,
			"icon-ignore-placement": true,
			"icon-size": ["step", ["zoom"], 0.75, 17, 1.0]
		},
		"paint": {}
	}, {
		"id": "microsoft.bing.maps.roads.railway_chn_line_1",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 17],
		"minzoom": 7,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 0%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 2.4, 8, 3.0, 11, 4.0, 12, 5.0, 15, 5.0, 17, 9.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.metro_line_2",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 1255],
		"minzoom": 11,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 10%)",
			"line-width": ["step", ["zoom"], 2.0, 15, 8.0, 17, 14.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0, 1.0]], 15, ["literal", [0.125, 0.5]], 17, ["literal", [0.0714285746, 0.5]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.railway_chn_line_2",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 17],
		"minzoom": 7,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 15%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 3.4, 8, 4.0, 11, 5.0, 12, 6.0, 15, 6.0, 16, 9.0, 17, 10.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 6, ["literal", [2.94117641, 2.94117641]], 8, ["literal", [2.5, 2.5]], 10, ["literal", [2.39516139, 2.39516139]], 11, ["literal", [2.2, 2.2]], 12, ["literal", [2.66666675, 2.33333325]], 16, ["literal", [1.77777779, 1.55555558]], 17, ["literal", [1.6, 1.6]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_line-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1308, 660, 658]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 36.0, 20, 39.6, 21, 43.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [654, 659]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 19.8, 18, 23.4, 19, 28.8, 20, 34.2, 21, 39.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_eu_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [127, 126]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.controlled_access_highway_line-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [636, 640, 641, 643]]
		],
		"minzoom": 4,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 27%)",
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2, 18, 28.8, 19, 36.0, 20, 45.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_toll_eu_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [131, 130]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 13%)", 9, "hsl(0, 0%, 27%)"],
			"line-width": ["step", ["zoom"], 0.9, 6, 1.8, 8, 2.25, 9, 2.7, 12, 3.24, 13, 3.78, 14, 4.5, 15, 9.0, 16, 16.2, 17, 25.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.ramp_high_speed_line_1-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1011, 1009, 1010, 1007]]
		],
		"minzoom": 14,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 15, 2.25, 16, 4.5, 17, 8.1, 18, 12.6, 19, 16.2, 20, 19.8, 21, 23.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_line_1-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1308, 660, 658]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 7.2, 16, 14.4, 17, 23.4, 18, 27.0, 19, 32.4, 20, 34.2, 21, 36.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_line_1",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 654],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 6.3, 16, 12.6, 17, 16.65, 18, 19.8, 19, 25.2, 20, 29.7, 21, 34.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_one_way_line_1",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 659],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 6.3, 16, 12.6, 17, 16.65, 18, 19.8, 19, 25.2, 20, 29.7, 21, 34.2]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_toll_eu_line_1-merged4",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [127, 126, 131, 130]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 7.2, 16, 14.4, 17, 23.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.controlled_access_highway_line_1-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [636, 640, 643]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 7.2, 16, 14.4, 17, 23.4, 18, 27.0, 19, 32.4, 20, 41.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_one_way_line_1",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 641],
		"minzoom": 4,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["step", ["zoom"], 0.45, 8, 0.9, 12, 1.44, 13, 1.98, 14, 2.7, 15, 7.2, 16, 14.4, 17, 23.4, 18, 27.0, 19, 32.4, 20, 41.4]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_elevated_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 26],
		"minzoom": 14,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 21%)",
			"line-width": ["step", ["zoom"], 1.0, 15, 1.5, 16, 2.0, 17, 3.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.0, 3.0]], 15, ["literal", [2.66666675, 2.0]], 16, ["literal", [2.0, 1.5]], 17, ["literal", [1.33333337, 1.0]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.subway_under_construction_chn_line",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 20],
		"minzoom": 12,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 10%)",
			"line-width": 3.4,
			"line-dasharray": [1.17647052, 0.588235259]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_one_way_line_2-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [659, 658, 126]]
		],
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"symbol-placement": "line",
			"icon-image": "arrow-676",
			"symbol-spacing": 100.0,
			"icon-rotation-alignment": "map",
			"icon-allow-overlap": true,
			"icon-ignore-placement": true,
			"icon-size": ["step", ["zoom"], 0.75, 17, 1.0]
		},
		"paint": {}
	}, {
		"id": "microsoft.bing.maps.roads.subway_chn_line",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 1357],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 4%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 11, 9.6, 15, 9.6, 16, 8.8, 17, 8.8, 22, 10.4
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.japan_metro_line",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 929],
		"minzoom": 12,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 10%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 12, 2.4, 14, 4.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 15, ["literal", [1.22908843, 0.737453043]], 22, ["literal", [1.25, 0.75]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.subway_chn_line_1",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 1357],
		"minzoom": 11,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["case", ["has", "official-color"],
				["get", "official-color"], "hsl(0, 0%, 10%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 10, 3.6, 12, 3.8, 13, 4.2, 15, 4.4, 16, 4.6, 17, 5.2
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_boundary_xlarge_sovereign_line-merged2",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["in", ["get", "bkt"],
			["literal", [1882, 428]]
		],
		"minzoom": 2,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.2, 12, 1.8, 22, 1.2],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.997502, 2.498751]], 12, ["literal", [3.33333349, 1.66666675]], 22, ["literal", [4.997502, 2.498751]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_boundary_russia_line",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 1756],
		"minzoom": 4,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.2, 12, 1.8, 22, 1.2],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.997502, 2.498751]], 12, ["literal", [3.33333349, 1.66666675]], 22, ["literal", [4.997502, 2.498751]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_boundary_uk_line-merged2",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["in", ["get", "bkt"],
			["literal", [1391, 1900]]
		],
		"minzoom": 3,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.2, 12, 1.8, 22, 1.2],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.997502, 2.498751]], 12, ["literal", [3.33333349, 1.66666675]], 22, ["literal", [4.997502, 2.498751]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_boundary_europe_line",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 1352],
		"minzoom": 9,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.2, 12, 1.8, 22, 1.2],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.997502, 2.498751]], 12, ["literal", [3.33333349, 1.66666675]], 22, ["literal", [4.997502, 2.498751]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.sovereign_boundary_disputed_line",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 438],
		"minzoom": 1,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": 3.0,
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0, 1.0]], 4, ["literal", [2.33333325, 1.66666651]], 9, ["literal", [3.33333325, 3.33333325]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_boundary_disputed_line",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 1316],
		"minzoom": 2,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.9, 22, 4.14
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 1, ["literal", [2.86458349, 2.86458349]], 3, ["literal", [2.23577237, 2.23577237]], 4, ["literal", [3.35775352, 3.35775352]], 9, ["literal", [3.59477115, 5.3921566]], 22, ["literal", [1.93236721, 2.89855075]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_boundary_normal_line",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 765],
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.2, 12, 1.8, 22, 1.2],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.997502, 2.498751]], 12, ["literal", [3.33333349, 1.66666675]], 22, ["literal", [4.997502, 2.498751]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.entity_override_sovereign_boundary_hong_kong_sar_line",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 1904],
		"minzoom": 4,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(0, 0%, 100%, 0.02)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 4, 4.57, 22, 15.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.entity_override_sovereign_boundary_china_line",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 1873],
		"minzoom": 2,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(0, 0%, 100%, 0.02)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 15.0, 3, 15.0, 4, 18.0, 5, 24.0, 6, 27.0, 7, 33.0, 9, 39.0, 13, 48.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.indigenous_peoples_reserve_polygon_line",
		"source": "bing-mvt",
		"source-layer": "indigenous_peoples_reserve",
		"filter": ["==", ["get", "bkt"], 610],
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsla(35, 14%, 42%, 0)",
			"line-width": ["step", ["zoom"], 0.75, 12, 1.25],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.0, 6.66666651]], 12, ["literal", [2.4, 4.0]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_line",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 427],
		"minzoom": 2,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.2, 12, 1.8, 22, 1.2],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.997502, 2.498751]], 12, ["literal", [3.33333349, 1.66666675]], 22, ["literal", [4.997502, 2.498751]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.entity_override_sovereign_boundary_hong_kong_sar_line_1",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 1904],
		"minzoom": 1,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.66, 12, 2.5]
		}
	}, {
		"id": "microsoft.bing.maps.roads.entity_override_sovereign_boundary_china_line_1",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 1873],
		"minzoom": 1,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.0, 6, 4.5
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.sovereign_boundary_normal_line",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 764],
		"minzoom": 4,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(0, 0%, 100%, 0.02)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 4, 4.57, 22, 15.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.country_region_line",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 434],
		"minzoom": 2,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(0, 0%, 100%, 0.02)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 15.0, 3, 15.0, 4, 18.0, 5, 24.0, 6, 27.0, 7, 33.0, 9, 39.0, 13, 48.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.sovereign_boundary_normal_line_1",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 764],
		"minzoom": 1,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": ["step", ["zoom"], 1.66, 12, 2.5]
		}
	}, {
		"id": "microsoft.bing.maps.roads.country_region_line_1",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["==", ["get", "bkt"], 434],
		"minzoom": 1,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 34%)",
			"line-width": 3.0
		}
	}, {
		"id": "microsoft.bing.maps.roads.subway_station_chn_polygon_fill",
		"source": "bing-mvt",
		"source-layer": "metro_station",
		"filter": ["==", ["get", "bkt"], 1358],
		"minzoom": 16,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": "hsla(358, 68%, 61%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division2_line",
		"source": "bing-mvt",
		"source-layer": "admin_division2",
		"filter": ["==", ["get", "bkt"], 865],
		"minzoom": 10,
		"type": "line",
		"paint": {
			"line-color": "hsla(240, 0%, 59%, 0)",
			"line-width": ["step", ["zoom"], 0.5, 12, 1.0, 22, 0.75],
			"line-dasharray": ["step", ["zoom"],
				["literal", [6.0, 10.0]], 12, ["literal", [3.0, 5.0]], 22, ["literal", [4.0, 6.66666651]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.buildings.buildings",
		"type": "raster",
		"paint": {
			"raster-fade-duration": 0
		},
		"layout": {
			"visibility": "visible"
		},
		"metadata": {
			"delayLoad": true
		},
		"source": "buildings",
		"minzoom": 15
	}, {
		"id": "microsoft.bing.maps.JK.JK",
		"type": "raster",
		"paint": {
			"raster-fade-duration": 100
		},
		"source": "JK",
		"minzoom": 4
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_closed_line",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1977],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 5.0
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_none_line-merged2",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["in", ["get", "bkt"],
			["literal", [1965, 1964]]
		],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 4.0, 13, 4.0, 14, 5.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_moderate_line",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1963],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 4.0, 12, 4.0, 14, 6.0, 15, 6.0, 16, 7.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_heavy_line",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1962],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 4.0, 12, 4.0, 13, 5.0, 14, 7.0, 15, 7.0, 17, 9.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_closed_line_1",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1977],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 3.0
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_none_line_1-merged2",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["in", ["get", "bkt"],
			["literal", [1965, 1964]]
		],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": ["match", ["get", "bkt"], 1964, "hsl(32, 100%, 50%)", "hsl(151, 100%, 40%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 2.0, 13, 2.0, 14, 3.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_moderate_line_1",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1963],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(354, 86%, 48%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 2.0, 12, 2.0, 14, 4.0, 15, 4.0, 16, 5.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_heavy_line_1",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1962],
		"layout": {
			"visibility": "none",
			"line-cap": "round"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(350, 82%, 25%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 2.0, 12, 2.0, 13, 3.0, 14, 5.0, 15, 5.0, 17, 7.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.traffic_relative.traffic_congestion_closed_line_2",
		"source": "bing-traffic",
		"source-layer": "traffic",
		"filter": ["==", ["get", "bkt"], 1977],
		"layout": {
			"visibility": "none"
		},
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(23, 97%, 49%)",
			"line-width": 3.0,
			"line-dasharray": [1.33333337, 0.6666667, 1.33333337, 0.6666667]
		}
	}, {
		"id": "microsoft.bing.maps.labels.address_symbol_label",
		"source": "bing-mvt",
		"source-layer": "address",
		"minzoom": 18,
		"type": "symbol",
		"layout": {
			"text-size": 12.0,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["center"],
			"text-justify": "auto",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.japan_metro_line_label",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 929],
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 31%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.entity_override_hudson_bay_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "bay",
		"filter": ["in", ["get", "bkt"],
			["literal", [1823, 1824]]
		],
		"minzoom": 2,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 10.0, 5, 11.33, 9, 13.33, 13, 16.0
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.85
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.bay_fill_label",
		"source": "bing-mvt",
		"source-layer": "bay",
		"filter": ["==", ["get", "bkt"], 1222],
		"minzoom": 2,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 10.0, 5, 10.67, 9, 11.33, 13, 13.33
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_country_region",
		"source": "bing-mvt",
		"source-layer": "country_region",
		"filter": ["match", ["geometry-type"],
			["Point", "MultiPoint"], true, false
		],
		"minzoom": 2,
		"maxzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.1,
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.5,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.island_bag_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "island",
		"filter": ["in", ["get", "bkt"],
			["literal", [810, 5]]
		],
		"minzoom": 4,
		"maxzoom": 17,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 9.33, 9, 9.33, 22, 18.67
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.trail_line_label",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 688],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 24%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.delta_symbol_label",
		"source": "bing-mvt",
		"source-layer": "delta",
		"filter": ["==", ["get", "bkt"], 1231],
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 7, 11.0, 15, 13.0, 22, 18.67
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.9
					}
				],
				["get", "name"]
			],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.wetland_fill_label",
		"source": "bing-mvt",
		"source-layer": "wetland",
		"filter": ["==", ["get", "bkt"], 727],
		"minzoom": 7,
		"type": "symbol",
		"layout": {
			"text-size": 12.67,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.85
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.river_line_label-merged3",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1361, 1895, 1241]]
			],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-letter-spacing": ["match", ["get", "bkt"], 1361, 0.08, 0.0],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.river_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1895, 1241]]
			],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pg"],
				["in", ["geometry-type"],
					["literal", ["Polygon", "MultiPolygon"]]
				]
			]
		],
		"minzoom": 5,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 7, 10.0, 11, 10.67, 14, 12.67, 17, 19.33, 22, 42.67
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.lake_fill_label-merged3",
		"source": "bing-mvt",
		"source-layer": "lake",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1238, 1894, 1237]]
			],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pg"],
				["in", ["geometry-type"],
					["literal", ["Polygon", "MultiPolygon"]]
				]
			]
		],
		"minzoom": 5,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 7, 10.0, 11, 10.67, 14, 12.67, 17, 19.33, 22, 42.67
			],
			"text-font": ["match", ["get", "bkt"], 1238, ["literal", ["Roboto-Regular"]],
				["literal", ["Roboto-RegularItalic"]]
			],
			"text-field": ["match", ["get", "bkt"], 1238, ["case", ["has", "name2"],
					["concat", ["get", "name"], "\n", ["get", "name2"]],
					["get", "name"]
				],
				["case", ["has", "name2"],
					["concat", ["get", "name"], "\n", ["get", "name2"]],
					["has", "sec-name"],
					["format", ["get", "name"], {}, "\n", {},
						["get", "sec-name"], {
							"font-scale": 0.9
						}
					],
					["get", "name"]
				]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.canal_line_label",
		"source": "bing-mvt",
		"source-layer": "canal",
		"filter": ["all", ["==", ["get", "bkt"], 1226],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.canal_fill_label",
		"source": "bing-mvt",
		"source-layer": "canal",
		"filter": ["all", ["==", ["get", "bkt"], 1226],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pg"],
				["in", ["geometry-type"],
					["literal", ["Polygon", "MultiPolygon"]]
				]
			]
		],
		"minzoom": 7,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 7, 10.0, 11, 10.67, 15, 11.33, 18, 13.33, 22, 18.67
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.island_fill_label",
		"source": "bing-mvt",
		"source-layer": "island",
		"filter": ["==", ["get", "bkt"], 27],
		"minzoom": 4,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 9.33, 9, 9.33, 22, 18.67
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.archipelago_symbol_label",
		"source": "bing-mvt",
		"source-layer": "archipelago",
		"filter": ["==", ["get", "bkt"], 787],
		"minzoom": 8,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.33, 15, 11.33, 22, 12.67
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.sea_sea_of_japan_fill_label",
		"source": "bing-mvt",
		"source-layer": "sea",
		"filter": ["==", ["get", "bkt"], 1280],
		"minzoom": 5,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 5, 10.0, 11, 21.33, 16, 37.33, 22, 80.0
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.8
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.sea_fill_label-merged7",
		"source": "bing-mvt",
		"source-layer": "sea",
		"filter": ["in", ["get", "bkt"],
			["literal", [6, 1903, 1909, 1910, 1956, 1961, 1245]]
		],
		"minzoom": 2,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 10.67, 6, 13.33, 7, 16.0, 9, 21.33
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.95
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.coastal_water_fill_label",
		"source": "bing-mvt",
		"source-layer": "coastal_water",
		"minzoom": 4,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 10.0, 5, 10.67, 9, 11.33, 13, 13.33
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.channel_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "channel",
		"filter": ["in", ["get", "bkt"],
			["literal", [10, 1228]]
		],
		"minzoom": 5,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 5, 10.67, 9, 11.33, 13, 13.33
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_road_shield_2nd",
		"filter": ["all", ["has", "shield-type2"],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"layout": {
			"symbol-placement": "line-center",
			"text-field": ["get", "shield-name2"],
			"icon-image": ["concat", "shield-", ["get", "admin-div"], "-", ["get", "shield-type2"], "-", ["to-string", ["min", ["length", ["get", "shield-name2"]], 3]]],
			"text-size": ["interpolate", ["linear"],
				["zoom"], 6, 8.6, 10, 8.0, 15, 10.0, 17, 12.5, 18, 20.0, 19, 22.0
			],
			"text-letter-spacing": 0.05,
			"symbol-spacing": ["interpolate", ["linear"],
				["zoom"], 11, 140, 15, 210, 19, 600
			],
			"icon-text-fit": "both",
			"text-font": ["SegoeFrutigerHelveticaMYingHei-Bold"],
			"icon-rotation-alignment": "viewport",
			"text-rotation-alignment": "viewport",
			"text-max-angle": 90,
			"icon-padding": ["step", ["zoom"], 18, 9, 0],
			"text-padding": 0
		},
		"paint": {
			"text-color": "#A6A6A6"
		},
		"source": "bing-mvt",
		"source-layer": "road",
		"minzoom": 6,
		"type": "symbol"
	}, {
		"id": "microsoft.bing.maps.labels.generic_road_shield",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["all", ["has", "shield-type"],
			["in", ["geometry-type"],
				["literal", ["LineString", "MultiLineString"]]
			]
		],
		"minzoom": 6,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 6, 8.6, 10, 8.0, 15, 10.0, 17, 12.5, 18, 20.0, 19, 22.0
			],
			"text-letter-spacing": 0.05,
			"symbol-placement": ["step", ["zoom"], "point", 9, "line"],
			"symbol-spacing": ["interpolate", ["linear"],
				["zoom"], 11, 140, 15, 210, 19, 600
			],
			"text-field": ["get", "shield-name"],
			"icon-image": ["concat", "shield-", ["get", "admin-div"], "-", ["get", "shield-type"], "-", ["to-string", ["min", ["length", ["get", "shield-name"]], 3]]],
			"icon-text-fit": "both",
			"text-font": ["SegoeFrutigerHelveticaMYingHei-Bold"],
			"icon-rotation-alignment": "viewport",
			"text-rotation-alignment": "viewport",
			"text-max-angle": 90,
			"icon-padding": ["step", ["zoom"], 18, 9, 0],
			"text-padding": 0
		},
		"paint": {
			"text-color": "#A6A6A6"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_road_line_label_2nd",
		"filter": ["any", ["has", "name2"],
			["has", "sec-name"]
		],
		"layout": {
			"text-field": ["coalesce", ["get", "name2"],
				["get", "sec-name"]
			],
			"text-padding": 10,
			"text-offset": [8, 0],
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"symbol-placement": "line",
			"text-max-angle": 55
		},
		"source": "bing-mvt",
		"source-layer": "road",
		"type": "symbol",
		"minzoom": 6,
		"paint": {
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#666666", "highway", "#666666", "majorRoad", "#666666", "arterial", "#666666", "street", "#666666", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_road_line_label",
		"source": "bing-mvt",
		"source-layer": "road",
		"type": "symbol",
		"minzoom": 6,
		"filter": ["has", "name"],
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#666666", "highway", "#666666", "majorRoad", "#666666", "arterial", "#666666", "street", "#666666", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.bridge_chn_symbol_label",
		"source": "bing-mvt",
		"source-layer": "bridge",
		"filter": ["==", ["get", "bkt"], 137],
		"minzoom": 15,
		"maxzoom": 17,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 15, 11.33, 17, 12.0
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": ["step", ["zoom"], 1.0, 17, 0.0],
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.autorail_line_label-merged3",
		"source": "bing-mvt",
		"source-layer": "autorail",
		"filter": ["in", ["get", "bkt"],
			["literal", [626, 624, 623]]
		],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 31%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.ferry_route_line_label-merged2",
		"source": "bing-mvt",
		"source-layer": "ferry_route",
		"filter": ["in", ["get", "bkt"],
			["literal", [629, 1208]]
		],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.desert_bag_fill_label",
		"source": "bing-mvt",
		"source-layer": "desert",
		"filter": ["==", ["get", "bkt"], 805],
		"minzoom": 6,
		"maxzoom": 10,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 6, 10.0, 11, 13.33
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(38, 15%, 39%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.beach_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "beach",
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 15, 10.0, 18, 12.0, 22, 24.0
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(38, 15%, 39%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.stadium_fill_label",
		"source": "bing-mvt",
		"source-layer": "stadium",
		"filter": ["==", ["get", "bkt"], 1149],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.hospital_fill_label",
		"source": "bing-mvt",
		"source-layer": "hospital",
		"filter": ["==", ["get", "bkt"], 1131],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.military_base_polygon_fill_label",
		"source": "bing-mvt",
		"source-layer": "military_base",
		"filter": ["==", ["get", "bkt"], 1121],
		"minzoom": 9,
		"maxzoom": 16,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(0, 0%, 45%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.school_fill_label",
		"source": "bing-mvt",
		"source-layer": "school",
		"filter": ["==", ["get", "bkt"], 1106],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.higher_education_facility_fill_label",
		"source": "bing-mvt",
		"source-layer": "higher_education_facility",
		"filter": ["==", ["get", "bkt"], 1103],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.cemetery_fill_label",
		"source": "bing-mvt",
		"source-layer": "cemetery",
		"filter": ["==", ["get", "bkt"], 1098],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 11, 10.0, 14, 10.67, 16, 12.0, 18, 16.0, 20, 26.67, 22, 42.67
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(0, 0%, 40%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.shopping_center_fill_label",
		"source": "bing-mvt",
		"source-layer": "shopping_center",
		"filter": ["==", ["get", "bkt"], 1094],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.airport_fill_label-merged6",
		"source": "bing-mvt",
		"source-layer": "airport",
		"filter": ["in", ["get", "bkt"],
			["literal", [1084, 1083, 1082, 1079, 1077, 1072]]
		],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.33, 14, 11.33, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.indigenous_peoples_reserve_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "indigenous_peoples_reserve",
		"filter": ["in", ["get", "bkt"],
			["literal", [610, 892]]
		],
		"minzoom": 6,
		"maxzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 8, 10.0, 11, 11.33, 14, 13.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(35, 14%, 42%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.entity_override_indian_ocean_fill_label-merged4",
		"source": "bing-mvt",
		"source-layer": "ocean",
		"filter": ["in", ["get", "bkt"],
			["literal", [1808, 1809, 1810, 1811]]
		],
		"maxzoom": 8,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 3, 16.0, 9, 32.0
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.8
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 40%)", 10, "hsla(0, 0%, 40%, 0)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 9, 0.0],
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.ocean_fill_label",
		"source": "bing-mvt",
		"source-layer": "ocean",
		"filter": ["==", ["get", "bkt"], 1246],
		"maxzoom": 10,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 3, 16.0, 9, 32.0
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.8
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 40%)", 10, "hsla(0, 0%, 40%, 0)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 9, 0.0],
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.entity_override_asia_fill_label-merged7",
		"source": "bing-mvt",
		"source-layer": "continent",
		"filter": ["in", ["get", "bkt"],
			["literal", [630, 1458, 1459, 1460, 1461, 1462, 1463]]
		],
		"maxzoom": 2,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.67, 1, 18.67, 2, 53.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.9
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 40%)", 2, "hsla(0, 0%, 40%, 0.2)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 2, 0.0],
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.traffic_light_symbol",
		"source": "bing-mvt",
		"source-layer": "junction",
		"filter": ["==", ["get", "bkt"], 2006],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 0.0,
			"icon-image": "bkt-2006",
			"icon-padding": 0
		},
		"paint": {}
	}, {
		"id": "microsoft.bing.maps.labels.generic_neighborhood_label",
		"source": "bing-mvt",
		"source-layer": "neighborhood",
		"minzoom": 10,
		"maxzoom": 15,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Bold"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.08,
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_populated_place_label_only",
		"source": "bing-mvt",
		"source-layer": "populated_place",
		"filter": ["has", "st-no-icon"],
		"minzoom": 7,
		"maxzoom": 17,
		"type": "symbol",
		"layout": {
			"symbol-sort-key": ["coalesce", ["get", "st-lblimp"],
				["get", "label-importance"], 255
			],
			"text-size": ["get", "name-f"],
			"text-font": ["match", ["get", "st-weight"], 2, ["literal", ["Roboto-Bold"]], 1, ["literal", ["Roboto-Medium"]],
				["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.95
					}
				],
				["get", "name"]
			],
			"text-variable-anchor": ["center"],
			"text-justify": "auto",
			"text-radial-offset": 0.29,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_populated_place_icon_label",
		"source": "bing-mvt",
		"source-layer": "populated_place",
		"filter": ["all", ["!=", ["get", "st-tag"], "sovCap"],
			["!", ["has", "st-no-icon"]]
		],
		"minzoom": 4,
		"maxzoom": 14,
		"type": "symbol",
		"layout": {
			"symbol-sort-key": ["coalesce", ["get", "st-lblimp"],
				["get", "label-importance"], 255
			],
			"icon-size": 1.75,
			"icon-image": ["step", ["zoom"], "image-2411", 9, ""],
			"icon-padding": 0,
			"text-size": ["get", "name-f"],
			"text-font": ["match", ["get", "st-weight"], 2, ["literal", ["Roboto-Bold"]], 1, ["literal", ["Roboto-Medium"]],
				["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.95
					}
				],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"]], 9, ["literal", ["center"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.29,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_populated_place_sov_capital",
		"source": "bing-mvt",
		"source-layer": "populated_place",
		"filter": ["==", ["get", "st-tag"], "sovCap"],
		"minzoom": 3,
		"maxzoom": 13,
		"type": "symbol",
		"layout": {
			"symbol-sort-key": ["coalesce", ["get", "st-lblimp"],
				["get", "label-importance"], 255
			],
			"icon-size": 1.75,
			"icon-image": ["step", ["zoom"], "image-2413", 9, ""],
			"icon-padding": 0,
			"text-size": ["get", "name-f"],
			"text-font": ["match", ["get", "st-weight"], 2, ["literal", ["Roboto-Bold"]], 1, ["literal", ["Roboto-Medium"]],
				["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.85
					}
				],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"]], 9, ["literal", ["center"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.31,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.admin_division2_chn_symbol",
		"source": "bing-mvt",
		"source-layer": "admin_division2",
		"filter": ["==", ["get", "bkt"], 11],
		"minzoom": 5,
		"maxzoom": 12,
		"type": "symbol",
		"layout": {
			"icon-size": 1.2,
			"icon-image": ["step", ["zoom"], "bkt-11", 10, ""],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 5, 10.0, 6, 11.0, 7, 12.33, 8, 13.67, 9, 15.0, 10, 18.67, 11, 24.67, 12, 34.67
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.8
					}
				],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"]], 10, ["literal", ["center"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.29,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 40%)", 10, "hsla(0, 0%, 40%, 0.6)", 11, "hsla(0, 0%, 40%, 0.4)", 12, "hsla(0, 0%, 40%, 0.27)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 10, 0.0],
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_admin_division1",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"minzoom": 3,
		"maxzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.airport_terminal_symbol_label",
		"source": "bing-mvt",
		"source-layer": "airport_terminal",
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.nautical_structure_fill_label",
		"source": "bing-mvt",
		"source-layer": "nautical_structure",
		"filter": ["==", ["get", "bkt"], 1135],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.industrial_structure_fill_label",
		"source": "bing-mvt",
		"source-layer": "industrial_structure",
		"filter": ["==", ["get", "bkt"], 1126],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.educational_structure_fill_label",
		"source": "bing-mvt",
		"source-layer": "educational_structure",
		"filter": ["==", ["get", "bkt"], 1102],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.business_center_fill_label",
		"source": "bing-mvt",
		"source-layer": "business_center",
		"filter": ["==", ["get", "bkt"], 1088],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 10.0, 14, 10.0, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.airport_major_fill_label",
		"source": "bing-mvt",
		"source-layer": "airport",
		"filter": ["==", ["get", "bkt"], 1081],
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.33, 18, 13.33, 22, 21.33
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsla(20, 13%, 44%, 0)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.subway_chn_line_label-merged2",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["in", ["get", "bkt"],
			["literal", [20, 1357]]
		],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["get", "name-f"],
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 31%)"
		}
	}]
}