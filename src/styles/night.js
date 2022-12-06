// https://ecn.api.m2.tiles.live-int.com/comp/stl?ods=mvt&mbxs=F83F2201-05FD-4BFF-8700-07CEEF51C66B&v=9.03&layers=d,b,ro&og=1674&mkt=en-US&ur=us&stlhost=int2
var style_night = {
	"version": 8,
	"name": "Symbolic Bing Vibrant Dark",
	"center": [-122.336, 47.607],
	"zoom": 9,
	"sources": {
		"bing-mvt": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.base&cstl=vbd&sv=9.03&og=1122"
			// "tiles": ["https://ecn.api.m2.tiles.live-int.com/comp/ch/{z}-{x}-{y}.mvt?mkt=en-us&it=G,LC,L,LA&og=1122&src=t&js=1&tj=1&ur=us&cstl=vbd&mvt=1&features=mvt,mvtfontinfo&sv=9.03"],
			// "promoteId": "id",
			// "minzoom": 0,
			// "maxzoom": 18
		},
		"bing-traffic": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.traffic.relative"
			// "tiles": [
			// 	"https://trafficrenderer.tiles.virtualearth.net/comp/ch/{quadkey}?it=Z,TF&src=t&cstl=vbd&mvt=1"
			// ],
			// "minzoom": 6,
			// "maxzoom": 20
		},
		"roadDetails": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=g&og=1674&cstl=vbd&stl=d"],
			"minzoom": 5,
			"maxzoom": 13,
			"tileSize": 256
		},
		"buildings": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=z,bf&og=1674&cstl=vbd&n=t"],
			"minzoom": 16,
			"maxzoom": 20,
			"tileSize": 256
		},
		"JK": {
			"type": "raster",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.base.darkgrey",
			// "tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=ro&shading=t&og=1674&cstl=VB&n=t"],
			"minzoom": 5,
			"maxzoom": 20,
			"tileSize": 256,
			"bounds": [122.74, 19.33, 149.0, 45.67]
		}
	},
	"sprite": "https://ecn.api.m2.tiles.live-int.com/comp/stl/sprite?ods=mvt&mbxs=f83f2201-05fd-4bff-8700-07ceef51c66b&v=9.03&og=1674&mkt=en-US",
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
			"firstMarkupLayer": "microsoft.bing.maps.labels.japan_metro_line_label",
			"lastWaterLayer": "microsoft.bing.maps.baseFeature.entity_override_river_china_dprk_line",
			"firstTrafficLayer": "microsoft.bing.maps.traffic_relative.traffic_congestion_closed_line"
		}
	},
	"layers": [{
		"id": "microsoft.bing.maps.base.land",
		"type": "background",
		"paint": {
			"background-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.vector_land",
		"type": "fill",
		"source": "bing-mvt",
		"source-layer": "vector_background",
		"paint": {
			"fill-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.land_cover_sand_fill",
		"source": "bing-mvt",
		"source-layer": "land_cover_sand",
		"type": "fill",
		"paint": {
			"fill-color": "hsl(18, 9%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.land_cover_grass_fill",
		"source": "bing-mvt",
		"source-layer": "land_cover_grass",
		"maxzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsl(147, 14%, 17%)", 10, "hsl(147, 14%, 17%)", 13, "hsl(0, 0%, 13%)"
			]
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.land_cover_forest_fill",
		"source": "bing-mvt",
		"source-layer": "land_cover_forest",
		"maxzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.populated_place_area_fill",
		"source": "bing-mvt",
		"source-layer": "populated_place",
		"filter": ["==", ["get", "bkt"], 2000],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.reserve_fill-merged6",
		"source": "bing-mvt",
		"source-layer": "reserve",
		"filter": ["in", ["get", "bkt"],
			["literal", [947, 1003, 1008, 1027, 1014, 1015]]
		],
		"minzoom": 6,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.forest_fill-merged3",
		"source": "bing-mvt",
		"source-layer": "forest",
		"filter": ["in", ["get", "bkt"],
			["literal", [948, 951, 952]]
		],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.indigenous_peoples_reserve_fill",
		"source": "bing-mvt",
		"source-layer": "indigenous_peoples_reserve",
		"filter": ["==", ["get", "bkt"], 892],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(15, 5%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.indigenous_peoples_reserve_polygon_fill",
		"source": "bing-mvt",
		"source-layer": "indigenous_peoples_reserve",
		"filter": ["==", ["get", "bkt"], 610],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-outline-color": "hsla(0, 0%, 0%, 0)",
			"fill-color": ["interpolate", ["linear"],
				["zoom"], 4, "hsla(15, 5%, 17%, 0.65)", 22, "hsla(15, 5%, 15%, 0.4)"
			]
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.shopping_center_fill",
		"source": "bing-mvt",
		"source-layer": "shopping_center",
		"filter": ["==", ["get", "bkt"], 1094],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(336, 6%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.park_fill",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["==", ["get", "bkt"], 958],
		"minzoom": 4,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.park_state_fill",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["==", ["get", "bkt"], 966],
		"minzoom": 8,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.park_city_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["in", ["get", "bkt"],
			["literal", [985, 974]]
		],
		"minzoom": 10,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.park_national_fill",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["all", ["==", ["get", "bkt"], 963],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.amusement_park_fill",
		"source": "bing-mvt",
		"source-layer": "amusement_park",
		"filter": ["==", ["get", "bkt"], 1176],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.golf_course_fill",
		"source": "bing-mvt",
		"source-layer": "golf_course",
		"filter": ["==", ["get", "bkt"], 1141],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.beach_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "beach",
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(18, 9%, 20%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.zoo_fill",
		"source": "bing-mvt",
		"source-layer": "zoo",
		"filter": ["==", ["get", "bkt"], 1190],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.fish_hatchery_fill",
		"source": "bing-mvt",
		"source-layer": "fish_hatchery",
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.cemetery_fill",
		"source": "bing-mvt",
		"source-layer": "cemetery",
		"filter": ["==", ["get", "bkt"], 1098],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(75, 5%, 14%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.garden_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "garden",
		"filter": ["in", ["geometry-type"],
			["literal", ["Polygon", "MultiPolygon"]]
		],
		"minzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(147, 14%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.school_fill",
		"source": "bing-mvt",
		"source-layer": "school",
		"filter": ["==", ["get", "bkt"], 1106],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(60, 3%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.educational_structure_fill",
		"source": "bing-mvt",
		"source-layer": "educational_structure",
		"filter": ["==", ["get", "bkt"], 1102],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(60, 3%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.tourist_structure_fill",
		"source": "bing-mvt",
		"source-layer": "tourist_structure",
		"filter": ["==", ["get", "bkt"], 1175],
		"minzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.higher_education_facility_fill",
		"source": "bing-mvt",
		"source-layer": "higher_education_facility",
		"filter": ["==", ["get", "bkt"], 1103],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(60, 3%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.stadium_fill",
		"source": "bing-mvt",
		"source-layer": "stadium",
		"filter": ["==", ["get", "bkt"], 1149],
		"minzoom": 13,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(190, 12%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.hospital_fill",
		"source": "bing-mvt",
		"source-layer": "hospital",
		"filter": ["==", ["get", "bkt"], 1131],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(350, 7%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.administrative_building_fill",
		"source": "bing-mvt",
		"source-layer": "administrative_building",
		"filter": ["==", ["get", "bkt"], 1111],
		"minzoom": 16,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.monument_fill",
		"source": "bing-mvt",
		"source-layer": "monument",
		"filter": ["all", ["==", ["get", "bkt"], 1185],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.business_center_fill",
		"source": "bing-mvt",
		"source-layer": "business_center",
		"filter": ["==", ["get", "bkt"], 1088],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(336, 6%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.swimming_pool_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "swimming_pool",
		"filter": ["in", ["geometry-type"],
			["literal", ["Polygon", "MultiPolygon"]]
		],
		"minzoom": 16,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.industrial_structure_fill",
		"source": "bing-mvt",
		"source-layer": "industrial_structure",
		"filter": ["==", ["get", "bkt"], 1126],
		"minzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(180, 1%, 11%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.parking_structure_fill-merged2",
		"source": "bing-mvt",
		"source-layer": "parking_structure",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1282, 2036]]
			],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 16,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 12%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.parking_lot_fill",
		"source": "bing-mvt",
		"source-layer": "parking_lot",
		"filter": ["in", ["geometry-type"],
			["literal", ["Polygon", "MultiPolygon"]]
		],
		"minzoom": 16,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 12%)"
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
			"fill-color": "hsl(231, 9%, 14%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.bus_station_fill",
		"source": "bing-mvt",
		"source-layer": "bus_station",
		"filter": ["all", ["==", ["get", "bkt"], 1196],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.ferry_terminal_polygon_fill",
		"source": "bing-mvt",
		"source-layer": "ferry_terminal",
		"filter": ["==", ["get", "bkt"], 1350],
		"minzoom": 11,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 12%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.nautical_structure_fill",
		"source": "bing-mvt",
		"source-layer": "nautical_structure",
		"filter": ["==", ["get", "bkt"], 1135],
		"minzoom": 7,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(180, 1%, 11%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.airport_runway_fill",
		"source": "bing-mvt",
		"source-layer": "airport_runway",
		"filter": ["==", ["get", "bkt"], 1086],
		"minzoom": 12,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(240, 1%, 18%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.airport_runway_line_line",
		"source": "bing-mvt",
		"source-layer": "airport_runway",
		"filter": ["==", ["get", "bkt"], 1944],
		"minzoom": 10,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(240, 1%, 18%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 10, 0.82, 11, 1.5, 12, 1.5, 13, 3.5, 14, 5.0, 16, 13.0, 17, 16.0, 18, 25.0, 19, 44.0, 20, 83.0, 21, 167.0, 22, 253.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.playground_fill",
		"source": "bing-mvt",
		"source-layer": "playground",
		"filter": ["in", ["geometry-type"],
			["literal", ["Polygon", "MultiPolygon"]]
		],
		"minzoom": 14,
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 15%)"
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
			"fill-color": "hsl(240, 8%, 7%)"
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
			"fill-color": "hsl(240, 8%, 7%)"
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
			"fill-color": "hsl(240, 8%, 7%)"
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
			"line-color": "hsl(240, 8%, 7%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 9, 0.3, 12, 0.75, 14, 2.0, 16, 4.0, 17, 6.0
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
			"fill-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.coastal_water_fill",
		"source": "bing-mvt",
		"source-layer": "coastal_water",
		"type": "fill",
		"paint": {
			"fill-color": "hsl(240, 8%, 7%)"
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
			"fill-color": "hsl(240, 8%, 7%)"
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
			"fill-color": "hsl(240, 8%, 7%)"
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
			"fill-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.river_line_non_perennial_line",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["==", ["get", "bkt"], 715],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(240, 8%, 7%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 12, 0.75, 14, 2.0, 16, 4.0, 17, 6.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [16.666666, 10.0]], 12, ["literal", [6.66666651, 4.0]], 14, ["literal", [2.5, 1.5]], 15, ["literal", [1.66666663, 1.0]], 16, ["literal", [1.25, 0.75]], 17, ["literal", [0.8333333, 0.5]]
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
			"line-color": "hsl(240, 8%, 7%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 14, 1.3, 15, 2.0
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
			"line-color": "hsl(240, 8%, 7%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 9, 0.3, 12, 0.75, 14, 2.0, 16, 4.0, 17, 6.0
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
			"fill-color": "hsl(231, 9%, 14%)"
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
			"line-color": "hsl(231, 9%, 14%)",
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.5, 14, 0.75, 15, 5.0, 16, 8.0, 17, 14.0, 18, 20.0, 19, 26.0, 20, 28.0, 21, 32.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.5, 14, 0.75, 15, 5.0, 16, 8.0, 17, 14.0, 18, 20.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.25, 12, 0.5, 13, 0.75, 14, 5.0, 15, 8.0, 16, 14.0, 17, 20.0, 18, 24.0]
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
			"line-color": "hsl(30, 9%, 16%)",
			"line-width": ["step", ["zoom"], 1.5, 10, 2.0, 11, 3.0, 12, 4.0, 13, 5.0, 14, 7.5, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 37.0, 20, 42.0, 21, 46.0]
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
			"line-color": "hsl(41, 45%, 27%)",
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 40.0, 20, 44.0, 21, 48.0]
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
			"line-color": "hsl(41, 45%, 27%)",
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_tunnel_one_way_eu_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 124],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(41, 58%, 28%)", 9, "hsl(41, 45%, 27%)"],
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0]
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
			"line-color": ["step", ["zoom"], "hsl(40, 58%, 18%)", 9, "hsl(41, 45%, 27%)", 13, "hsl(40, 45%, 17%)"],
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 40.0, 20, 50.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.cah_toll_tunnel_eu_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [129, 128]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["step", ["zoom"], "hsl(40, 58%, 18%)", 9, "hsl(41, 45%, 27%)", 13, "hsl(40, 45%, 17%)"],
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_underground_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 25],
		"minzoom": 16,
		"type": "line",
		"paint": {
			"line-color": "hsla(150, 46%, 31%, 0.27)",
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
			"line-color": "hsl(31, 33%, 24%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 2.0, 13, 3.0]
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
			"line-color": ["match", ["get", "bkt"],
				[642, 639, 644, 129, 638, 128], "hsl(40, 58%, 18%)", "hsl(41, 58%, 28%)"
			],
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2]
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
			"line-color": "hsl(200, 2%, 20%)",
			"line-width": ["step", ["zoom"], 3.0, 16, 5.0, 17, 7.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_line-merged8",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [121, 120, 663, 668, 669, 123, 667, 122]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(30, 9%, 16%)",
			"line-width": ["step", ["zoom"], 1.5, 10, 2.0, 11, 3.0, 12, 4.0, 13, 5.0, 14, 7.5, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 37.0, 20, 42.0, 21, 46.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.5, 14, 0.75, 15, 5.0, 16, 8.0, 17, 14.0, 18, 20.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.25, 12, 0.5, 13, 0.75, 14, 5.0, 15, 8.0, 16, 14.0, 17, 20.0, 18, 24.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 2.0, 13, 3.0, 14, 5.5, 15, 8.0, 16, 16.0, 17, 26.0, 18, 28.0, 19, 32.0, 20, 36.0, 21, 38.0]
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
			"line-color": ["match", ["get", "bkt"],
				[631, 635, 1349], "hsl(180, 0%, 25%)", "hsl(41, 45%, 27%)"
			],
			"line-width": ["step", ["zoom"], 0.5, 11, 0.75, 13, 1.0, 14, 3.0, 15, 4.5, 16, 7.0, 17, 11.0, 18, 16.0, 19, 21.0, 20, 26.0, 21, 30.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.5, 14, 0.75, 15, 5.0, 16, 8.0, 17, 14.0, 18, 20.0, 19, 28.0, 20, 33.0, 21, 38.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 0.75, 13, 1.0, 14, 5.0, 15, 8.0, 16, 14.0, 17, 20.0, 18, 24.0, 19, 31.0, 20, 36.0, 21, 40.0]
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
			"line-color": "hsl(200, 2%, 20%)",
			"line-width": 1.0
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
			"line-color": "hsl(213, 54%, 27%)",
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
			"line-color": "hsl(200, 2%, 30%)",
			"line-width": ["step", ["zoom"], 6.0, 17, 11.0]
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
				["zoom"], 0, "hsl(200, 2%, 20%)", 14, "hsl(200, 2%, 20%)", 15, "hsl(0, 0%, 9%)"
			],
			"line-width": ["step", ["zoom"], 1.0, 16, 3.0, 17, 5.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 15, ["literal", [14.0, 10.0]], 16, ["literal", [4.66666651, 3.33333325]], 17, ["literal", [2.8, 2.0]]
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
			"line-color": "hsl(31, 33%, 24%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 2.0, 13, 3.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 688],
		"minzoom": 14,
		"type": "line",
		"paint": {
			"line-color": "hsla(150, 46%, 31%, 0.27)",
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
			"line-color": ["match", ["get", "bkt"], 685, "hsl(180, 0%, 20%)", "hsl(15, 5%, 15%)"],
			"line-width": ["step", ["zoom"], 3.0, 16, 6.0, 17, 12.0, 18, 18.0]
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
			"line-color": "hsl(15, 5%, 15%)",
			"line-width": ["step", ["zoom"], 3.0, 15, 6.0, 16, 12.0, 17, 18.0, 18, 22.0]
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
			"line-color": ["match", ["get", "bkt"], 1309, "hsl(15, 5%, 15%)", "hsl(31, 33%, 24%)"],
			"line-width": ["step", ["zoom"], 1.0, 12, 2.0, 13, 3.0, 14, 5.5, 15, 8.0, 16, 16.0, 17, 26.0, 18, 28.0, 19, 32.0, 20, 36.0, 21, 38.0]
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
			"line-color": "hsl(180, 0%, 20%)",
			"line-width": ["step", ["zoom"], 1.0, 15, 2.5, 16, 5.0, 17, 9.0, 18, 14.0, 19, 18.0, 20, 22.0, 21, 26.0]
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
			"line-color": "hsl(180, 0%, 25%)",
			"line-width": ["step", ["zoom"], 2.0, 17, 3.0, 18, 4.0]
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
			"line-color": "hsl(180, 0%, 20%)",
			"line-width": ["step", ["zoom"], 3.0, 16, 6.0, 17, 12.0, 18, 18.0, 19, 24.0, 20, 28.0, 21, 34.0]
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
			"line-color": "hsl(180, 0%, 20%)",
			"line-width": ["step", ["zoom"], 3.5, 16, 6.0, 17, 12.0, 18, 18.0, 19, 24.0, 20, 28.0, 21, 34.0]
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
			"line-color": "hsl(180, 0%, 20%)",
			"line-width": ["step", ["zoom"], 3.0, 15, 6.0, 16, 12.0, 17, 18.0, 18, 22.0, 19, 28.0, 20, 32.0, 21, 36.0]
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
			"line-color": "hsl(31, 33%, 24%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.railway_line_1",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 616],
		"minzoom": 11,
		"type": "line",
		"paint": {
			"line-color": "hsl(200, 2%, 20%)",
			"line-width": 5.0,
			"line-dasharray": [0.2, 4.4]
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
			"line-color": "hsl(200, 2%, 20%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 2.7, 8, 3.0, 11, 4.0, 12, 4.5, 15, 4.5, 17, 6.5
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
			"line-color": "hsla(0, 0%, 9%, 0.4)",
			"line-width": ["step", ["zoom"], 3.0, 15, 6.0]
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsl(200, 2%, 20%)", 15, "hsl(200, 2%, 17%)"
			],
			"line-width": 3.0,
			"line-dasharray": [0.333333343, 7.66666651]
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
			"line-color": "hsl(0, 0%, 9%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 1.2, 8, 1.5, 11, 2.0, 12, 2.5, 15, 2.5, 17, 4.5
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
			"line-color": "hsl(200, 2%, 14%)",
			"line-width": ["step", ["zoom"], 1.0, 15, 4.0, 17, 7.0],
			"line-dasharray": ["step", ["zoom"],
				["literal", [2.0, 2.0]], 15, ["literal", [0.25, 1.0]], 17, ["literal", [0.142857149, 1.0]]
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 6, "hsl(200, 2%, 24%)", 13, "hsl(200, 2%, 20%)", 16, "hsl(200, 2%, 25%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 1.7, 8, 2.0, 11, 2.5, 12, 3.0, 15, 3.0, 16, 4.5, 17, 5.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 6, ["literal", [5.882353, 5.882353]], 8, ["literal", [5.0, 5.0]], 10, ["literal", [4.790323, 4.790323]], 11, ["literal", [4.4, 4.4]], 12, ["literal", [5.33333349, 4.66666651]], 16, ["literal", [3.55555558, 3.11111116]], 17, ["literal", [3.2, 3.2]]
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
			"line-color": ["match", ["get", "bkt"], 1308, "hsl(180, 0%, 25%)", "hsl(41, 45%, 27%)"],
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 40.0, 20, 44.0, 21, 48.0]
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
			"line-color": "hsl(41, 45%, 27%)",
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 22.0, 18, 26.0, 19, 32.0, 20, 38.0, 21, 44.0]
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
			"line-color": "hsl(41, 45%, 27%)",
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0]
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
			"line-color": "hsl(41, 45%, 27%)",
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 40.0, 20, 50.0]
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
			"line-color": ["step", ["zoom"], "hsl(41, 58%, 28%)", 9, "hsl(41, 45%, 27%)"],
			"line-width": ["step", ["zoom"], 1.0, 6, 2.0, 8, 2.5, 9, 3.0, 12, 3.6, 13, 4.2, 14, 5.0, 15, 10.0, 16, 18.0, 17, 28.0]
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
			"line-color": "hsl(41, 58%, 28%)",
			"line-width": ["step", ["zoom"], 1.0, 15, 2.5, 16, 5.0, 17, 9.0, 18, 14.0, 19, 18.0, 20, 22.0, 21, 26.0]
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
			"line-color": ["match", ["get", "bkt"], 1308, "hsl(15, 5%, 15%)", "hsl(41, 58%, 28%)"],
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0, 18, 30.0, 19, 36.0, 20, 38.0, 21, 40.0]
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
			"line-color": "hsl(41, 58%, 28%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 7.0, 16, 14.0, 17, 18.5, 18, 22.0, 19, 28.0, 20, 33.0, 21, 38.0]
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
			"line-color": "hsl(41, 58%, 28%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 7.0, 16, 14.0, 17, 18.5, 18, 22.0, 19, 28.0, 20, 33.0, 21, 38.0]
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
			"line-color": "hsl(41, 58%, 28%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0]
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
			"line-color": "hsl(41, 58%, 28%)",
			"line-width": ["step", ["zoom"], 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0, 18, 30.0, 19, 36.0, 20, 46.0]
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
			"line-color": "hsl(41, 58%, 28%)",
			"line-width": ["step", ["zoom"], 0.5, 8, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0, 18, 30.0, 19, 36.0, 20, 46.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_elevated_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 26],
		"minzoom": 14,
		"type": "line",
		"paint": {
			"line-color": "hsla(150, 46%, 31%, 0.27)",
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
			"line-color": "hsl(200, 2%, 14%)",
			"line-width": 1.7,
			"line-dasharray": [2.352941, 1.17647052]
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
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 11, 4.8, 15, 4.8, 16, 4.4, 17, 4.4, 22, 5.2
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
			"line-color": "hsl(200, 2%, 20%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 12, 1.2, 14, 2.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 15, ["literal", [2.45817685, 1.47490609]], 22, ["literal", [2.5, 1.5]]
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
				["get", "official-color"], "hsl(200, 2%, 20%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 10, 1.8, 12, 1.9, 13, 2.1, 15, 2.2, 16, 2.3, 17, 2.6
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
			"line-color": "hsl(195, 5%, 28%)",
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
			"line-color": "hsl(195, 5%, 28%)",
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
			"line-color": "hsl(195, 5%, 28%)",
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
			"line-color": "hsl(195, 5%, 28%)",
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
			"line-color": "hsl(196, 6%, 32%)",
			"line-width": 2.0,
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.5, 1.5]], 4, ["literal", [3.5, 2.5]], 9, ["literal", [5.0, 5.0]]
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
			"line-color": "hsl(195, 5%, 28%)",
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
			"line-color": "hsl(195, 5%, 28%)",
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
			"line-color": "hsla(0, 0%, 0%, 0)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 4, 3.05, 22, 10.0
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
			"line-color": "hsla(0, 0%, 0%, 0)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 10.0, 3, 10.0, 4, 12.0, 5, 16.0, 6, 18.0, 7, 22.0, 9, 26.0, 13, 32.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.park_national_line",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["all", ["==", ["get", "bkt"], 963],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 7,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["interpolate", ["linear"],
				["zoom"], 7, "hsl(104, 59%, 33%)", 8, "hsl(105, 57%, 25%)", 9, "hsl(105, 57%, 19%)"
			],
			"line-width": 1.0
		}
	}, {
		"id": "microsoft.bing.maps.roads.indigenous_peoples_reserve_polygon_line",
		"source": "bing-mvt",
		"source-layer": "indigenous_peoples_reserve",
		"filter": ["==", ["get", "bkt"], 610],
		"minzoom": 6,
		"type": "line",
		"paint": {
			"line-color": "hsl(19, 28%, 51%)",
			"line-width": ["step", ["zoom"], 0.75, 12, 1.25],
			"line-dasharray": ["step", ["zoom"],
				["literal", [4.0, 6.66666651]], 12, ["literal", [2.4, 4.0]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.military_base_polygon_line",
		"source": "bing-mvt",
		"source-layer": "military_base",
		"filter": ["==", ["get", "bkt"], 1121],
		"minzoom": 8,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsl(-6, 10%, 86%)", 22, "hsl(173, 11%, 0%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 1.2, 22, 4.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_line",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 427],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["interpolate", ["linear"],
				["zoom"], 5, "hsla(0, 0%, 54%, 0)", 6, "hsla(0, 0%, 40%, 0)", 7, "hsla(0, 0%, 24%, 0)", 8, "hsla(0, 0%, 16%, 0)", 9, "hsla(0, 0%, 27%, 0)", 13, "hsla(0, 0%, 27%, 0)", 22, "hsla(0, 0%, 23%, 0)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 5, 12.6, 9, 27.0, 13, 30.6, 17, 37.8
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
			"line-color": "hsl(196, 6%, 32%)",
			"line-width": ["step", ["zoom"], 1.11, 12, 1.67]
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 1, "hsla(196, 6%, 32%, 0.8)", 2, "hsl(196, 6%, 32%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 2.0, 6, 3.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division1_line_1",
		"source": "bing-mvt",
		"source-layer": "admin_division1",
		"filter": ["==", ["get", "bkt"], 427],
		"minzoom": 2,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(49, 100%, 50%, 0.5)",
			"line-width": 1.0
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
			"line-color": "hsla(0, 0%, 0%, 0)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 4, 3.05, 22, 10.0
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 2, "hsla(0, 0%, 0%, 0)", 3, "hsla(0, 0%, 0%, 0)", 4, "hsla(0, 0%, 0%, 0.02)", 22, "hsla(0, 0%, 0%, 0)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 10.0, 3, 10.0, 4, 12.0, 5, 16.0, 6, 18.0, 7, 22.0, 9, 26.0, 13, 32.0
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
			"line-color": "hsl(196, 6%, 32%)",
			"line-width": ["step", ["zoom"], 1.11, 12, 1.67]
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
			"line-color": "hsl(196, 6%, 32%)",
			"line-width": 2.0
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
			"fill-color": "hsla(0, 0%, 20%, 0.5)"
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division2_line",
		"source": "bing-mvt",
		"source-layer": "admin_division2",
		"filter": ["==", ["get", "bkt"], 865],
		"minzoom": 10,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 53%)",
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
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": 3.0
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
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": 3.0
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
			"line-color": "hsl(0, 0%, 13%)",
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
			"line-color": "hsl(0, 0%, 13%)",
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
			"line-color": "hsl(0, 0%, 13%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 4.0, 12, 4.0, 13, 5.0, 14, 7.0, 15, 7.0, 17, 9.0
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
			"line-color": ["match", ["get", "bkt"], 1964, "hsl(31, 93%, 60%)", "hsl(149, 48%, 32%)"],
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
			"line-color": "hsl(13, 74%, 44%)",
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
			"line-color": "hsl(353, 62%, 36%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 2.0, 12, 2.0, 13, 3.0, 14, 5.0, 15, 5.0, 17, 7.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.equator_line",
		"source": "bing-mvt",
		"source-layer": "latitude_line",
		"filter": ["==", ["get", "bkt"], 2038],
		"maxzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsla(227, 80%, 55%, 0)", 7, "hsla(227, 79%, 58%, 0)"
			],
			"line-width": 1.5
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 90%)", 16, "hsl(0, 0%, 100%)"],
			"text-halo-width": ["step", ["zoom"], 2.0, 22, 0.0],
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(0, 0%, 14%)", 18, "hsl(0, 0%, 10%)"
			]
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
				["zoom"], 2, 11.0, 5, 12.47, 9, 14.67, 13, 17.6
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
				["zoom"], 2, 11.0, 5, 11.73, 9, 12.47, 13, 14.67
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_structure_footprint_label",
		"source": "bing-mvt",
		"source-layer": "footprint",
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.airport_runway_line_line_label",
		"source": "bing-mvt",
		"source-layer": "airport_runway",
		"filter": ["==", ["get", "bkt"], 1944],
		"minzoom": 15,
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
			"text-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(193, 7%, 75%)",
			"text-halo-width": 1.5,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 10.27, 9, 10.27, 22, 20.53
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
			"text-color": "hsl(0, 0%, 73%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"text-color": "hsl(0, 0%, 57%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.promontory_fill_label",
		"source": "bing-mvt",
		"source-layer": "promontory",
		"filter": ["==", ["get", "bkt"], 38],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 13, 11.0, 22, 17.6
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.waterfall_symbol",
		"source": "bing-mvt",
		"source-layer": "waterfall",
		"filter": ["case", ["has", "gt"],
			["==", ["get", "gt"], "pt"],
			["in", ["geometry-type"],
				["literal", ["Point", "MultiPoint"]]
			]
		],
		"minzoom": 10,
		"type": "symbol",
		"layout": {
			"icon-size": ["step", ["zoom"], 0.7, 12, 0.85, 13, 1.0],
			"icon-image": "bkt-726",
			"icon-padding": 0,
			"text-size": 12.1,
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.76,
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(211, 56%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.geyser_symbol",
		"source": "bing-mvt",
		"source-layer": "geyser",
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
			"icon-image": "bkt-1252",
			"icon-padding": 0,
			"text-size": 12.1,
			"text-font": ["step", ["zoom"],
				["literal", []], 15, ["literal", ["Roboto-Medium"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.24,
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(211, 56%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.hot_spring_symbol",
		"source": "bing-mvt",
		"source-layer": "hot_spring",
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
			"icon-image": "bkt-1252",
			"icon-padding": 0,
			"text-size": 12.1,
			"text-font": ["step", ["zoom"],
				["literal", []], 15, ["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.24,
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(211, 56%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.spring_symbol",
		"source": "bing-mvt",
		"source-layer": "spring",
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
			"icon-image": "bkt-1252",
			"icon-padding": 0,
			"text-size": 12.1,
			"text-font": ["step", ["zoom"],
				["literal", []], 15, ["literal", ["Roboto-Medium"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.24,
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(211, 56%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 7, 12.1, 15, 14.3, 22, 20.53
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.wetland_fill_label",
		"source": "bing-mvt",
		"source-layer": "wetland",
		"filter": ["all", ["==", ["get", "bkt"], 727],
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
			"text-size": 13.93,
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.wetland_symbol_label",
		"source": "bing-mvt",
		"source-layer": "wetland",
		"filter": ["all", ["==", ["get", "bkt"], 727],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pt"],
				["in", ["geometry-type"],
					["literal", ["Point", "MultiPoint"]]
				]
			]
		],
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"text-size": 12.1,
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(211, 56%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
				["zoom"], 0, 11.0, 7, 11.0, 11, 11.73, 14, 13.93, 17, 21.27, 22, 46.93
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.lake_polygon_non_perennial_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "lake",
		"filter": ["all", ["in", ["get", "bkt"],
				["literal", [1238, 1894]]
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
				["zoom"], 0, 11.0, 7, 11.0, 11, 11.73, 14, 13.93, 17, 21.27, 22, 46.93
			],
			"text-font": ["match", ["get", "bkt"], 1894, ["literal", ["Roboto-RegularItalic"]],
				["literal", ["Roboto-Regular"]]
			],
			"text-field": ["match", ["get", "bkt"], 1894, ["case", ["has", "name2"],
					["concat", ["get", "name"], "\n", ["get", "name2"]],
					["has", "sec-name"],
					["format", ["get", "name"], {}, "\n", {},
						["get", "sec-name"], {
							"font-scale": 0.9
						}
					],
					["get", "name"]
				],
				["case", ["has", "name2"],
					["concat", ["get", "name"], "\n", ["get", "name2"]],
					["get", "name"]
				]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.lake_fill_label",
		"source": "bing-mvt",
		"source-layer": "lake",
		"filter": ["all", ["==", ["get", "bkt"], 1237],
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
				["zoom"], 0, 11.0, 7, 11.0, 11, 11.73, 14, 13.93, 15, 14.67, 16, 14.67, 17, 16.13
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 1.45
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"symbol-placement": "line",
			"text-max-angle": 55,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
				["zoom"], 7, 11.0, 11, 11.73, 14, 13.93, 17, 21.27, 22, 46.93
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["format", ["get", "name"], {}, "\n", {},
					["get", "sec-name"], {
						"font-scale": 0.75
					}
				],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
				["zoom"], 0, 10.27, 9, 10.27, 22, 20.53
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
			"text-color": "hsl(0, 0%, 73%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 12.47, 15, 12.47, 22, 13.93
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
				["zoom"], 5, 11.0, 11, 23.47, 16, 41.07, 22, 88.0
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.sea_fill_label-merged4",
		"source": "bing-mvt",
		"source-layer": "sea",
		"filter": ["in", ["get", "bkt"],
			["literal", [6, 1956, 1961, 1245]]
		],
		"minzoom": 2,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 9.53, 3, 10.27, 5, 11.73
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.entity_override_bohai_sea_fill_label-merged3",
		"source": "bing-mvt",
		"source-layer": "sea",
		"filter": ["in", ["get", "bkt"],
			["literal", [1903, 1909, 1910]]
		],
		"minzoom": 2,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 11.73, 6, 14.67, 7, 17.6, 9, 23.47
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.coastal_water_fill_label",
		"source": "bing-mvt",
		"source-layer": "coastal_water",
		"minzoom": 4,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 2, 11.0, 5, 11.73, 9, 12.47, 13, 14.67
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
				["zoom"], 5, 11.73, 9, 12.47, 13, 14.67
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
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
			"text-color": "#A9B5B9"
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
			"text-color": "#A9B5B9"
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
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#DDDDDD", "highway", "#DADADA", "majorRoad", "#B8B8B8", "arterial", "#8B9699", "street", "#8C979A", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#DDDDDD", "highway", "#DADADA", "majorRoad", "#B8B8B8", "arterial", "#8B9699", "street", "#8C979A", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.ruin_symbol_label",
		"source": "bing-mvt",
		"source-layer": "ruin",
		"filter": ["==", ["get", "bkt"], 1172],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(240, 100%, 20%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.rest_area_symbol_label",
		"source": "bing-mvt",
		"source-layer": "rest_area",
		"filter": ["==", ["get", "bkt"], 1204],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 15, 11.0, 17, 12.47, 19, 16.13, 22, 29.33
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
			"text-color": "hsl(0, 0%, 45%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.ferry_terminal_point_symbol",
		"source": "bing-mvt",
		"source-layer": "ferry_terminal",
		"filter": ["==", ["get", "bkt"], 283],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"icon-size": ["step", ["zoom"], 0.5, 16, 0.6, 17, 0.65, 18, 0.75],
			"icon-image": "bkt-283",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 17, 12.47, 22, 17.6
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.68,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(213, 41%, 49%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.observation_point_symbol",
		"source": "bing-mvt",
		"source-layer": "observation_point",
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": "bkt-1189",
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": 11.0,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(147, 28%, 51%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.mine_symbol_label",
		"source": "bing-mvt",
		"source-layer": "mine",
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.prison_symbol_label",
		"source": "bing-mvt",
		"source-layer": "prison",
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 15, 12.47, 17, 13.2
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
			"text-color": "hsla(195, 10%, 69%, 0.9)",
			"text-halo-width": ["step", ["zoom"], 1.0, 17, 0.0],
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.shipwreck_symbol",
		"source": "bing-mvt",
		"source-layer": "shipwreck",
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": ["step", ["zoom"], "", 17, "bkt-1174"],
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["center"]], 17, ["literal", ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.31,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.fort_symbol",
		"source": "bing-mvt",
		"source-layer": "fort",
		"filter": ["==", ["get", "bkt"], 1169],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": "bkt-1174",
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.31,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 45%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.battlefield_symbol",
		"source": "bing-mvt",
		"source-layer": "battlefield",
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": ["step", ["zoom"], "", 17, "bkt-1174"],
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["center"]], 17, ["literal", ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.31,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"text-color": "hsl(0, 0%, 80%)"
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
			"text-color": "hsl(212, 69%, 37%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(240, 8%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.mountain_bag_fill_label",
		"source": "bing-mvt",
		"source-layer": "mountain",
		"filter": ["==", ["get", "bkt"], 820],
		"minzoom": 7,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 13, 11.0, 22, 17.6
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 6, 11.0, 11, 14.67
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
			"text-color": "hsl(38, 15%, 39%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.beach_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "beach",
		"filter": ["case", ["has", "gt"],
			["==", ["get", "gt"], "pg"],
			["in", ["geometry-type"],
				["literal", ["Polygon", "MultiPolygon"]]
			]
		],
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 15, 11.0, 18, 13.2, 22, 26.4
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
			"text-color": "hsl(38, 15%, 39%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.beach_symbol_label",
		"source": "bing-mvt",
		"source-layer": "beach",
		"filter": ["all", ["==", ["get", "bkt"], 796],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pt"],
				["in", ["geometry-type"],
					["literal", ["Point", "MultiPoint"]]
				]
			]
		],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 8.8, 16, 8.8, 17, 9.07
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(13, 60%, 63%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.monument_symbol",
		"source": "bing-mvt",
		"source-layer": "monument",
		"filter": ["all", ["==", ["get", "bkt"], 1185],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pt"],
				["in", ["geometry-type"],
					["literal", ["Point", "MultiPoint"]]
				]
			]
		],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": "bkt-1185",
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": 11.0,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(147, 28%, 51%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.landmark_building_fill_label",
		"source": "bing-mvt",
		"source-layer": "landmark_building",
		"filter": ["==", ["get", "bkt"], 1182],
		"minzoom": 7,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.amusement_park_fill_label",
		"source": "bing-mvt",
		"source-layer": "amusement_park",
		"filter": ["==", ["get", "bkt"], 1176],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(194, 26%, 62%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(190, 12%, 17%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.race_track_symbol_label",
		"source": "bing-mvt",
		"source-layer": "race_track",
		"filter": ["==", ["get", "bkt"], 1146],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(173, 19%, 61%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.playing_field_symbol_label-merged10",
		"source": "bing-mvt",
		"source-layer": "playing_field",
		"filter": ["in", ["get", "bkt"],
			["literal", [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2029, 1144]]
		],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.playing_field_tennis_symbol",
		"source": "bing-mvt",
		"source-layer": "playing_field",
		"filter": ["==", ["get", "bkt"], 2028],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": ["step", ["zoom"], "", 18, "bkt-2028"],
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["center"]], 18, ["literal", ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.golf_course_fill_label",
		"source": "bing-mvt",
		"source-layer": "golf_course",
		"filter": ["==", ["get", "bkt"], 1141],
		"minzoom": 13,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(354, 21%, 63%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(350, 7%, 15%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67
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
			"text-color": "hsl(195, 7%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.administrative_building_fill_label",
		"source": "bing-mvt",
		"source-layer": "administrative_building",
		"filter": ["==", ["get", "bkt"], 1111],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(87, 9%, 58%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(77, 8%, 16%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(87, 9%, 58%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(77, 8%, 16%)"
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
				["zoom"], 11, 11.0, 14, 11.73, 16, 13.2, 18, 17.6, 20, 29.33, 22, 46.93
			],
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(88, 22%, 42%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(322, 14%, 73%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(336, 6%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.ferry_terminal_polygon_fill_label",
		"source": "bing-mvt",
		"source-layer": "ferry_terminal",
		"filter": ["==", ["get", "bkt"], 1350],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.bus_station_fill_label",
		"source": "bing-mvt",
		"source-layer": "bus_station",
		"filter": ["all", ["==", ["get", "bkt"], 1196],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pg"],
				["in", ["geometry-type"],
					["literal", ["Polygon", "MultiPolygon"]]
				]
			]
		],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 16, 11.0, 18, 11.73, 22, 22.0
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
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.bus_station_symbol",
		"source": "bing-mvt",
		"source-layer": "bus_station",
		"filter": ["all", ["==", ["get", "bkt"], 1196],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pt"],
				["in", ["geometry-type"],
					["literal", ["Point", "MultiPoint"]]
				]
			]
		],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 16, 0.62, 17, 0.72, 18, 0.75, 22, 1.75
			],
			"icon-image": "bkt-1196",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 17, 12.47, 22, 17.6
			],
			"text-font": ["step", ["zoom"],
				["literal", []], 18, ["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.86,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(213, 41%, 49%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 12.47, 14, 12.47, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(220, 1%, 65%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(225, 5%, 14%)"
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
				["zoom"], 0, 11.0, 8, 11.0, 11, 12.47, 14, 14.67
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
			"text-color": "hsl(19, 28%, 51%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(15, 5%, 15%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.forest_fill_label-merged3",
		"source": "bing-mvt",
		"source-layer": "forest",
		"filter": ["in", ["get", "bkt"],
			["literal", [952, 951, 948]]
		],
		"minzoom": 7,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 8, 11.0, 11, 12.1, 15, 13.2, 18, 20.53, 22, 46.93
			],
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.reserve_fill_label-merged6",
		"source": "bing-mvt",
		"source-layer": "reserve",
		"filter": ["in", ["get", "bkt"],
			["literal", [1014, 1015, 1027, 1008, 1003, 947]]
		],
		"minzoom": 7,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 8, 11.0, 11, 12.1, 15, 13.2, 18, 20.53, 22, 46.93
			],
			"text-font": ["match", ["get", "bkt"], 947, ["literal", ["Roboto-Medium"]],
				["literal", ["Roboto-MediumItalic"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.zoo_fill_label",
		"source": "bing-mvt",
		"source-layer": "zoo",
		"filter": ["==", ["get", "bkt"], 1190],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.information_center_symbol_label",
		"source": "bing-mvt",
		"source-layer": "information_center",
		"filter": ["==", ["get", "bkt"], 1181],
		"minzoom": 19,
		"type": "symbol",
		"layout": {
			"text-size": 11.0,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(20, 35%, 60%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.garden_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "garden",
		"filter": ["all", ["==", ["get", "bkt"], 2035],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pt"],
				["in", ["geometry-type"],
					["literal", ["Point", "MultiPoint"]]
				]
			]
		],
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
			"icon-image": ["step", ["zoom"], "", 17, "bkt-2035"],
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": 12.1,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["center"]], 17, ["literal", ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(109, 43%, 25%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.tourist_structure_point_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "tourist_structure",
		"filter": ["==", ["get", "bkt"], 2032],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": "bkt-2032",
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": 12.47,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(147, 28%, 51%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.historical_site_symbol",
		"source": "bing-mvt",
		"source-layer": "historical_site",
		"filter": ["==", ["get", "bkt"], 1167],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": "bkt-1167",
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 45%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.fish_hatchery_fill_label",
		"source": "bing-mvt",
		"source-layer": "fish_hatchery",
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.park_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["in", ["get", "bkt"],
			["literal", [985, 958]]
		],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 11, 12.1, 15, 13.2, 18, 20.53, 22, 46.93
			],
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.park_city_fill_label",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["==", ["get", "bkt"], 974],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 11, 11.0, 14, 11.73, 16, 13.2, 18, 17.6, 20, 29.33, 22, 46.93
			],
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.park_state_fill_label",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["==", ["get", "bkt"], 966],
		"minzoom": 8,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 8, 11.0, 11, 12.1, 15, 13.2, 18, 20.53, 22, 46.93
			],
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.parking_lot_fill_label",
		"source": "bing-mvt",
		"source-layer": "parking_lot",
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.parking_lot_symbol",
		"source": "bing-mvt",
		"source-layer": "parking_lot",
		"filter": ["in", ["geometry-type"],
			["literal", ["Point", "MultiPoint"]]
		],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 0, 0.42, 17, 0.42, 18, 0.55, 19, 0.74, 22, 0.66
			],
			"icon-image": "bkt-2018",
			"icon-padding": 0
		},
		"paint": {}
	}, {
		"id": "microsoft.bing.maps.labels.parking_structure_fill_label-merged2",
		"source": "bing-mvt",
		"source-layer": "parking_structure",
		"filter": ["in", ["get", "bkt"],
			["literal", [2036, 1282]]
		],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.parking_structure_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "parking_structure",
		"filter": ["all", ["==", ["get", "bkt"], 2036],
			["in", ["geometry-type"],
				["literal", ["Point", "MultiPoint"]]
			]
		],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 0, 0.42, 17, 0.42, 18, 0.55, 19, 0.74, 22, 0.66
			],
			"icon-image": "bkt-2018",
			"icon-padding": 0
		},
		"paint": {}
	}, {
		"id": "microsoft.bing.maps.labels.camp_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "camp",
		"filter": ["==", ["get", "bkt"], 2033],
		"minzoom": 18,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 18, 1.21, 19, 1.32
			],
			"icon-image": "bkt-2033",
			"icon-padding": 0
		},
		"paint": {}
	}, {
		"id": "microsoft.bing.maps.labels.park_national_fill_label",
		"source": "bing-mvt",
		"source-layer": "park",
		"filter": ["==", ["get", "bkt"], 963],
		"minzoom": 6,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 8, 11.0, 11, 12.1, 15, 13.2, 18, 20.53, 22, 46.93
			],
			"text-font": ["Roboto-MediumItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.ocean_fill_label-merged5",
		"source": "bing-mvt",
		"source-layer": "ocean",
		"filter": ["in", ["get", "bkt"],
			["literal", [1808, 1809, 1810, 1811, 1246]]
		],
		"maxzoom": 8,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 2, 13.2, 3, 13.2, 4, 14.67
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
			"text-color": "hsl(212, 52%, 43%)",
			"text-halo-width": ["step", ["zoom"], 1.0, 9, 0.0],
			"text-halo-color": "hsl(240, 8%, 7%)"
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
			"text-size": 11.73,
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(195, 7%, 50%)",
			"text-halo-width": ["step", ["zoom"], 1.0, 2, 0.0],
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
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
			"text-color": "hsl(195, 7%, 40%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.peak_minor_symbol",
		"source": "bing-mvt",
		"source-layer": "mountain",
		"filter": ["==", ["get", "bkt"], 32],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"icon-size": ["step", ["zoom"], 0.8, 13, 1.1],
			"icon-image": "bkt-32",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 13, 11.0, 22, 17.6
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.77,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.peak_major_symbol",
		"source": "bing-mvt",
		"source-layer": "mountain",
		"filter": ["==", ["get", "bkt"], 33],
		"minzoom": 9,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 8, 0.6, 11, 0.8, 12, 1.0, 13, 1.1
			],
			"icon-image": "bkt-33",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 13, 11.0, 22, 17.6
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.9,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.mountain_point_symbol",
		"source": "bing-mvt",
		"source-layer": "mountain",
		"filter": ["==", ["get", "bkt"], 30],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
			"icon-image": "bkt-32",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 13, 11.0, 22, 17.6
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.77,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(150, 33%, 36%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.volcano_symbol",
		"source": "bing-mvt",
		"source-layer": "volcano",
		"filter": ["==", ["get", "bkt"], 31],
		"minzoom": 8,
		"type": "symbol",
		"layout": {
			"icon-size": ["step", ["zoom"], 0.6, 10, 0.8, 11, 1.0, 12, 1.4],
			"icon-image": "bkt-31",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 13, 11.0, 22, 17.6
			],
			"text-font": ["Roboto-Medium"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 1.08,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(355, 62%, 64%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_business_landmark_retired",
		"layout": {
			"visibility": "none",
			"icon-size": 0.8,
			"icon-image": ["concat", "bkt-", ["get", "bkt"]],
			"icon-offset": [0.0, 1.0],
			"icon-padding": 0,
			"text-size": 10.67,
			"text-font": ["Roboto-Medium"],
			"text-field": ["get", "name"],
			"text-variable-anchor": ["right", "bottom", "top", "left", "bottom-right", "top-right", "bottom-left", "top-left"],
			"text-justify": "auto",
			"text-radial-offset": 1.14,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"source": "bing-mvt",
		"source-layer": "landmark",
		"metadata": {
			"isBusiness": true,
			"state": "inactive"
		},
		"filter": ["!", ["has", "st-transit"]],
		"minzoom": 11,
		"type": "symbol",
		"paint": {
			"text-translate": [0.0, 0.0],
			"text-color": ["match", ["get", "st-tag"], "shopping", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#AA72B3"], "essentialService", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#BF9078"], "entertainment", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#72A8B8"], "food", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#C96F77"], "community", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#8CA2AB"], "attraction", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#61A781"], "realEstate", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#E46492"], "education", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#5484CC"], "lodging", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#8178C5"],
				["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#DA846B"]
			],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_business_landmark",
		"source": "bing-mvt",
		"source-layer": "landmark",
		"metadata": {
			"isBusiness": true,
			"state": "default"
		},
		"filter": ["!", ["has", "st-transit"]],
		"minzoom": 11,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
			"icon-image": ["concat", "bkt-", ["get", "bkt"]],
			"icon-offset": [0.0, 1.0],
			"icon-padding": 0,
			"text-size": 10.67,
			"text-font": ["Roboto-Medium"],
			"text-field": ["get", "name"],
			"text-variable-anchor": ["right", "bottom", "top", "left", "bottom-right", "top-right", "bottom-left", "top-left"],
			"text-justify": "auto",
			"text-radial-offset": 1.14,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-translate": [0.0, 0.0],
			"text-color": ["match", ["get", "st-tag"], "shopping", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#AA72B3"], "essentialService", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#BF9078"], "entertainment", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#72A8B8"], "food", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#C96F77"], "community", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#8CA2AB"], "attraction", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#61A781"], "realEstate", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#E46492"], "education", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#5484CC"], "lodging", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#8178C5"],
				["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#DA846B"]
			],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"text-color": "hsl(195, 10%, 69%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"icon-size": ["case", ["==", ["get", "st-tag"], "dependCap"], 1.5, ["==", ["get", "st-tag"], "admin1Cap"], 1.25, ["==", ["get", "st-tag"], "admin2Cap"], 1.3, 1.2],
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
			"text-color": "hsl(195, 10%, 69%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"icon-size": 1.93,
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
			"text-color": "hsl(195, 10%, 69%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.generic_transit_landmark",
		"source": "bing-mvt",
		"source-layer": "landmark",
		"filter": ["has", "st-transit"],
		"minzoom": 9,
		"type": "symbol",
		"layout": {
			"icon-size": ["let", "tag", ["get", "st-tag"],
				["interpolate", ["linear"],
					["zoom"], 0, ["match", ["var", "tag"], "airport", 0.8, "glyph4", 1.0, "hub", 0.3, "station-transit", 0.33, 0.5], 13, ["match", ["var", "tag"], "airport", 0.8, "glyph4", 1.01, "hub", 0.58, "station-transit", 0.47, 0.5], 14, ["match", ["var", "tag"], "glyph1", 0.6, "glyph2or3", 0.55, "glyph4", 1.15, "hub", 0.72, "station-transit", 0.48, 0.83], 15, ["match", ["var", "tag"], "glyph1", 0.75, "glyph2or3", 0.6, "glyph4", 1.44, "hub", 0.86, "station-transit", 0.49, 0.87], 16, ["match", ["var", "tag"], "glyph2or3", 0.8, "glyph4", 1.73, "hub", 1.0, "station-transit", 0.5, 0.9], 17, ["match", ["var", "tag"], "glyph1", 1.05, "glyph4", 1.87, "hub", 1.16, "station-transit", 0.66, 1.0], 18, ["match", ["var", "tag"],
						["glyph1", "hub"], 1.2, "glyph2or3", 1.16, "glyph4", 2.16, 1.0
					], 19, ["match", ["var", "tag"], "glyph2or3", 1.16, "glyph4", 2.16, 1.2]
				]
			],
			"icon-image": ["concat", "bkt-", ["get", "bkt"]],
			"icon-padding": 0,
			"text-size": ["number", ["get", "name-f"], 0],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name-f"],
				["get", "name"], ""
			],
			"text-variable-anchor": ["right", "bottom", "top", "left", "bottom-right", "top-right", "bottom-left", "top-left"],
			"text-justify": "auto",
			"text-radial-offset": 0.69,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#4A79B3"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.metro_station_symbol-merged3",
		"source": "bing-mvt",
		"source-layer": "metro_station",
		"filter": ["in", ["get", "bkt"],
			["literal", [1333, 285, 1199]]
		],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 13, 0.35, 19, 0.9
			],
			"icon-image": "bkt-1333",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 17, 12.47, 22, 17.6
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.71,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsl(213, 41%, 49%)", 22, "hsl(213, 45%, 44%)"
			],
			"text-halo-width": ["match", ["get", "bkt"], 285, 1.0, 0.0],
			"text-halo-color": ["match", ["get", "bkt"], 285, "hsl(0, 0%, 13%)", "hsla(0, 0%, 0%, 0)"]
		}
	}, {
		"id": "microsoft.bing.maps.labels.railway_station_point_symbol",
		"source": "bing-mvt",
		"source-layer": "railway_station",
		"filter": ["==", ["get", "bkt"], 298],
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 12, 0.35, 19, 1.0
			],
			"icon-image": "bkt-298",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 17, 12.47, 22, 17.6
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.77,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(213, 64%, 39%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.subway_wuxi_symbol-merged22",
		"source": "bing-mvt",
		"source-layer": "metro_station",
		"filter": ["in", ["get", "bkt"],
			["literal", [169, 167, 164, 163, 156, 154, 153, 152, 151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138]]
		],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 0, 0.35, 13, 0.35, 19, 0.9
			],
			"icon-image": "bkt-169",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 17, 12.47, 22, 17.6
			],
			"text-font": ["step", ["zoom"],
				["literal", []], 13, ["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.55,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": ["interpolate", ["linear"],
				["zoom"], 0, "hsl(213, 41%, 49%)", 22, "hsl(213, 45%, 44%)"
			]
		}
	}, {
		"id": "microsoft.bing.maps.labels.bus_station_point_symbol",
		"source": "bing-mvt",
		"source-layer": "bus_station",
		"filter": ["==", ["get", "bkt"], 282],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 16, 0.62, 17, 0.72, 18, 0.75, 22, 1.75
			],
			"icon-image": "bkt-1196",
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 17, 12.47, 22, 17.6
			],
			"text-font": ["step", ["zoom"],
				["literal", []], 18, ["literal", ["Roboto-Regular"]]
			],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"],
			"text-justify": "auto",
			"text-radial-offset": 0.86,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(213, 41%, 49%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 5, 11.0, 6, 12.1, 7, 13.57, 8, 15.03, 9, 16.5, 10, 20.53, 11, 27.13, 12, 38.13
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
			"text-color": ["step", ["zoom"], "hsl(195, 10%, 74%)", 10, "hsla(195, 10%, 74%, 0.6)", 11, "hsla(195, 10%, 74%, 0.4)", 12, "hsla(195, 10%, 74%, 0.27)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 10, 0.0],
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.admin_division2_fill_label",
		"source": "bing-mvt",
		"source-layer": "admin_division2",
		"filter": ["==", ["get", "bkt"], 865],
		"minzoom": 12,
		"maxzoom": 15,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 12, 10.27, 13, 11.73, 14, 12.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["has", "sec-name"],
				["concat", ["get", "name"], "\n", ["get", "sec-name"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-transform": "uppercase",
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(195, 9%, 41%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
			"text-color": "hsl(195, 9%, 41%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.playground_symbol",
		"source": "bing-mvt",
		"source-layer": "playground",
		"filter": ["case", ["has", "gt"],
			["==", ["get", "gt"], "pt"],
			["in", ["geometry-type"],
				["literal", ["Point", "MultiPoint"]]
			]
		],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": "bkt-786",
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(193, 33%, 58%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.airport_terminal_symbol_label",
		"source": "bing-mvt",
		"source-layer": "airport_terminal",
		"minzoom": 14,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(199, 0%, 66%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(225, 5%, 14%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.wall_symbol",
		"source": "bing-mvt",
		"source-layer": "wall",
		"filter": ["case", ["has", "gt"],
			["==", ["get", "gt"], "pt"],
			["in", ["geometry-type"],
				["literal", ["Point", "MultiPoint"]]
			]
		],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": ["step", ["zoom"], "", 17, "bkt-1174"],
			"icon-offset": [0.0, 2.0],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-RegularItalic"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["center"]], 17, ["literal", ["bottom-left", "bottom-right", "top-left", "top-right", "left", "right", "bottom", "top"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.31,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 40%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.swimming_pool_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "swimming_pool",
		"filter": ["all", ["==", ["get", "bkt"], 2034],
			["case", ["has", "gt"],
				["==", ["get", "gt"], "pt"],
				["in", ["geometry-type"],
					["literal", ["Point", "MultiPoint"]]
				]
			]
		],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.1,
			"icon-image": ["step", ["zoom"], "", 19, "bkt-326"],
			"icon-padding": 0,
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
			],
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-variable-anchor": ["step", ["zoom"],
				["literal", ["center"]], 19, ["literal", ["top", "bottom", "left", "right", "bottom-left", "bottom-right", "top-left", "top-right"]]
			],
			"text-justify": "auto",
			"text-radial-offset": 0.89,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(193, 33%, 58%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.recreational_structure_fill_label",
		"source": "bing-mvt",
		"source-layer": "recreational_structure",
		"filter": ["==", ["get", "bkt"], 1140],
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(195, 7%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(15, 5%, 15%)"
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
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(195, 7%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(87, 9%, 58%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(77, 8%, 16%)"
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
				["zoom"], 0, 11.0, 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 38%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.outdoor_gym_symbol_label",
		"source": "bing-mvt",
		"source-layer": "outdoor_gym",
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"text-size": ["interpolate", ["linear"],
				["zoom"], 14, 11.0, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(193, 33%, 58%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 13%)"
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
				["zoom"], 14, 12.47, 18, 14.67, 22, 23.47
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
			"text-color": "hsl(220, 1%, 65%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(225, 5%, 14%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.subway_under_construction_chn_line_label",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 20],
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": ["step", ["zoom"], 1.5, 13, 2.0],
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(0, 0%, 14%)", 18, "hsl(0, 0%, 10%)"
			]
		}
	}, {
		"id": "microsoft.bing.maps.labels.subway_chn_line_label",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 1357],
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.5,
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(0, 0%, 14%)", 18, "hsl(0, 0%, 10%)"
			]
		}
	}, {
		"id": "microsoft.bing.maps.labels.exit_symbol",
		"source": "bing-mvt",
		"source-layer": "junction",
		"filter": ["==", ["get", "bkt"], 1198],
		"minzoom": 15,
		"type": "symbol",
		"layout": {
			"icon-image": ["concat", "bkt-1198-", ["to-string", ["min", ["length", ["get", "name"]], 3]]],
			"text-font": ["SegoeFrutigerHelveticaMYingHei-Bold"],
			"text-size": ["interpolate", ["linear"],
				["zoom"], 15, 9.6, 17, 12.0, 18, 14.4
			],
			"text-field": ["get", "name"],
			"icon-text-fit": "both",
			"icon-padding": 0
		},
		"paint": {
			"text-color": "#C1CACC"
		}
	}]
}