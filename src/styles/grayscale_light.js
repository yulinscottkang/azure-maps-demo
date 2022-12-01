// https://ecn.api.m2.tiles.live-int.com/comp/stl?ods=mvt&mbxs=DCD31B1C-B637-4B36-8635-829DF5E46999&v=9.03&layers=d,b,ro&og=1674&mkt=en-US&ur=us&stlhost=int2
var style_grayscale_light = {
	"version": 8,
	"name": "Canvas Gray",
	"center": [-122.336, 47.607],
	"zoom": 9,
	"sources": {
		"bing-mvt": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.base&cstl=cg&sv=9.03&og=1122"
			// "tiles": ["https://ecn.api.m2.tiles.live-int.com/comp/ch/{z}-{x}-{y}.mvt?mkt=en-us&it=G,LC,L,LA&og=1122&src=t&js=1&tj=1&ur=us&cstl=cg&mvt=1&features=mvt,mvtfontinfo&sv=9.03"],
			// "promoteId": "id",
			// "minzoom": 0,
			// "maxzoom": 18
		},
		"bing-traffic": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.traffic.relative"
			// "tiles": [
			// 	"https://trafficrenderer.tiles.virtualearth.net/comp/ch/{quadkey}?it=Z,TF&src=t&cstl=cg&mvt=1"
			// ],
			// "minzoom": 6,
			// "maxzoom": 20
		},
		"roadDetails": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=g&og=1674&cstl=cg&stl=d"],
			"minzoom": 5,
			"maxzoom": 13,
			"tileSize": 256
		},
		"buildings": {
			"type": "raster",
			"tiles": ["https://ecn.dynamic.t0.m2.tiles.live-int.com/comp/ch/{quadkey}?mkt=en-US&it=z,bf&og=1674&cstl=cg&n=t"],
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
	"sprite": "https://ecn.api.m2.tiles.live-int.com/comp/stl/sprite?ods=mvt&mbxs=dcd31b1c-b637-4b36-8635-829df5e46999&v=9.03&og=1674&mkt=en-US",
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
			"background-color": "hsl(0, 0%, 91%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.vector_land",
		"type": "fill",
		"source": "bing-mvt",
		"source-layer": "vector_background",
		"paint": {
			"fill-color": "hsl(0, 0%, 91%)"
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
			"fill-color": "hsl(0, 0%, 78%)"
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
			"fill-color": "hsl(0, 0%, 78%)"
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
			"fill-color": "hsl(0, 0%, 78%)"
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
			"line-color": "hsl(0, 0%, 78%)",
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
			"fill-color": "hsl(0, 0%, 78%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.coastal_water_fill",
		"source": "bing-mvt",
		"source-layer": "coastal_water",
		"type": "fill",
		"paint": {
			"fill-color": "hsl(0, 0%, 78%)"
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
			"fill-color": "hsl(0, 0%, 78%)"
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
			"fill-color": "hsl(0, 0%, 78%)"
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
			"fill-color": "hsl(0, 0%, 78%)"
		}
	}, {
		"id": "microsoft.bing.maps.baseFeature.river_line_non_perennial_line",
		"source": "bing-mvt",
		"source-layer": "river",
		"filter": ["==", ["get", "bkt"], 715],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 78%)",
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
			"line-color": "hsl(0, 0%, 78%)",
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
			"line-color": "hsl(0, 0%, 78%)",
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
			"line-color": "hsl(0, 0%, 78%)",
			"line-width": ["step", ["zoom"], 0.8, 14, 1.2, 15, 8.0, 16, 12.8, 17, 22.4, 18, 32.0, 19, 41.6, 20, 44.8, 21, 51.2]
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
			"line-color": "hsl(0, 0%, 78%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 13, 0.53, 14, 0.84, 15, 5.9, 16, 9.92, 17, 18.2, 18, 27.2, 22, 32.0
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
			"line-color": "hsl(0, 0%, 78%)",
			"line-width": ["step", ["zoom"], 0.38, 12, 0.75, 13, 1.12, 14, 7.5, 15, 12.0, 16, 21.0, 17, 30.0, 18, 36.0]
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
			"line-color": "hsla(0, 0%, 100%, 0)",
			"line-width": ["step", ["zoom"], 1.5, 10, 2.0, 11, 3.0, 12, 4.0, 13, 5.0, 14, 7.5, 15, 10.0, 16, 18.0, 17, 28.0, 18, 32.0, 19, 37.0, 20, 42.0, 21, 46.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_tunnel_line-merged5",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [662, 125, 657, 661, 656]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsla(0, 0%, 100%, 0)",
			"line-width": 2.0
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
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 100%)", 9, "hsla(0, 0%, 100%, 0)"],
			"line-width": 2.0
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
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 100%)", 9, "hsla(0, 0%, 100%, 0)"],
			"line-width": 2.0
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_underground_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 25],
		"minzoom": 16,
		"type": "line",
		"paint": {
			"line-color": "hsla(0, 3%, 20%, 0.25)",
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
			"line-color": "hsl(0, 0%, 100%)",
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 2.0
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
			"line-color": "hsl(0, 0%, 78%)",
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
			"line-color": "hsla(0, 0%, 100%, 0)",
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
			"line-color": ["match", ["get", "bkt"], 685, "hsl(0, 0%, 78%)", "hsl(0, 0%, 81%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 13, 0.53, 14, 0.84, 15, 5.9, 16, 9.92, 17, 18.2, 18, 27.2, 22, 32.0
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
			"line-color": "hsl(0, 0%, 81%)",
			"line-width": ["step", ["zoom"], 0.38, 12, 0.75, 13, 1.12, 14, 7.5, 15, 12.0, 16, 21.0, 17, 30.0, 18, 36.0]
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
			"line-color": "hsl(0, 0%, 81%)",
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
				[631, 635, 1349], "hsl(0, 0%, 78%)", "hsla(0, 0%, 100%, 0)"
			],
			"line-width": 2.0
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
			"line-color": "hsl(0, 0%, 78%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 13, 0.68, 14, 1.04, 15, 7.05, 16, 11.49, 17, 20.49, 18, 29.82, 19, 42.51, 20, 51.0, 21, 59.76, 22, 60.8
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
			"line-color": "hsl(0, 0%, 78%)",
			"line-width": ["step", ["zoom"], 1.12, 13, 1.5, 14, 7.5, 15, 12.0, 16, 21.0, 17, 30.0, 18, 36.0, 19, 46.5, 20, 54.0, 21, 60.0]
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
			"line-color": "hsl(0, 0%, 78%)",
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
			"line-color": "hsl(0, 0%, 95%)",
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
			"line-color": "hsl(0, 0%, 87%)",
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
				["zoom"], 0, "hsl(0, 0%, 78%)", 14, "hsl(0, 0%, 78%)", 15, "hsla(0, 0%, 100%, 0.76)"
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 1.5, 12, 3.0, 13, 4.5]
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 688],
		"minzoom": 14,
		"type": "line",
		"paint": {
			"line-color": "hsla(0, 3%, 20%, 0.25)",
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
			"line-color": ["match", ["get", "bkt"], 685, "hsl(0, 0%, 100%)", "hsl(0, 0%, 89%)"],
			"line-width": ["step", ["zoom"], 4.8, 16, 9.6, 17, 19.2, 18, 28.8]
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
			"line-color": "hsl(0, 0%, 89%)",
			"line-width": ["step", ["zoom"], 4.5, 15, 9.0, 16, 18.0, 17, 27.0, 18, 33.0]
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
			"line-color": ["match", ["get", "bkt"], 1309, "hsl(0, 0%, 89%)", "hsl(0, 0%, 100%)"],
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 2.0
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
			"line-color": "hsla(0, 0%, 78%, 0.5)",
			"line-width": ["step", ["zoom"], 3.2, 17, 4.8, 18, 6.4]
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 4.8, 16, 9.6, 17, 19.2, 18, 28.8, 19, 38.4, 20, 44.8, 21, 54.4]
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 5.6, 16, 9.6, 17, 19.2, 18, 28.8, 19, 38.4, 20, 44.8, 21, 54.4]
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 4.5, 15, 9.0, 16, 18.0, 17, 27.0, 18, 33.0, 19, 42.0, 20, 48.0, 21, 54.0]
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 1.5, 12, 2.4, 13, 3.3, 14, 4.5, 15, 12.0, 16, 24.0, 17, 39.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.railway_line_1",
		"source": "bing-mvt",
		"source-layer": "railway",
		"filter": ["==", ["get", "bkt"], 616],
		"minzoom": 11,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 78%)",
			"line-width": 5.0,
			"line-dasharray": [0.2, 3.2]
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 6, "hsla(0, 0%, 63%, 0.9)", 8, "hsla(0, 0%, 63%, 0.9)", 10, "hsl(0, 0%, 78%)"
			],
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
			"line-color": "hsl(24, 23%, 95%)",
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
				["zoom"], 0, "hsl(0, 0%, 78%)", 15, "hsl(0, 0%, 74%)"
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
			"line-color": "hsla(0, 0%, 100%, 0.76)",
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
			"line-color": "hsl(0, 0%, 71%)",
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
				["zoom"], 6, "hsla(0, 0%, 68%, 0.9)", 8, "hsla(0, 0%, 68%, 0.9)", 10, "hsl(0, 0%, 78%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 6, 1.7, 8, 2.0, 11, 2.5, 12, 3.0, 15, 3.0, 16, 4.5, 17, 5.0
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 6, ["literal", [5.882353, 5.882353]], 8, ["literal", [5.0, 5.0]], 10, ["literal", [4.790323, 4.790323]], 11, ["literal", [4.4, 4.4]], 12, ["literal", [5.33333349, 4.66666651]], 16, ["literal", [3.55555558, 3.11111116]], 17, ["literal", [3.2, 3.2]]
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_line-merged5",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [1308, 660, 127, 658, 126]]
		],
		"minzoom": 5,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": ["match", ["get", "bkt"], 1308, "hsl(0, 0%, 81%)", "hsla(0, 0%, 100%, 0)"],
			"line-width": 2.0
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
			"line-color": "hsla(0, 0%, 100%, 0)",
			"line-width": ["step", ["zoom"], 1.6, 6, 3.2, 8, 4.0, 9, 4.8, 12, 5.76, 13, 6.72, 14, 8.0, 15, 16.0, 16, 28.8, 17, 35.2, 18, 41.6, 19, 51.2, 20, 60.8, 21, 70.4]
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
			"line-color": "hsla(0, 0%, 100%, 0)",
			"line-width": 2.0
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
			"line-color": ["step", ["zoom"], "hsl(0, 0%, 100%)", 9, "hsla(0, 0%, 100%, 0)"],
			"line-width": 2.0
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 2.0
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
			"line-color": ["match", ["get", "bkt"], 1308, "hsl(0, 0%, 89%)", "hsl(0, 0%, 100%)"],
			"line-width": ["step", ["zoom"], 1.6, 12, 2.56, 13, 3.52, 14, 4.8, 15, 12.8, 16, 25.6, 17, 41.6, 18, 48.0, 19, 57.6, 20, 60.8, 21, 64.0]
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 1.6, 12, 2.56, 13, 3.52, 14, 4.8, 15, 11.2, 16, 22.4, 17, 29.6, 18, 35.2, 19, 44.8, 20, 52.8, 21, 60.8]
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 1.6, 12, 2.56, 13, 3.52, 14, 4.8, 15, 11.2, 16, 22.4, 17, 29.6, 18, 35.2, 19, 44.8, 20, 52.8, 21, 60.8]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_eu_line_1-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [127, 126]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": ["step", ["zoom"], 1.6, 12, 2.56, 13, 3.52, 14, 4.8, 15, 12.8, 16, 25.6, 17, 41.6]
		}
	}, {
		"id": "microsoft.bing.maps.roads.controlled_access_highway_line_1-merged5",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [636, 640, 643, 131, 130]]
		],
		"minzoom": 9,
		"type": "line",
		"layout": {
			"line-cap": "round"
		},
		"paint": {
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 2.0
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
			"line-color": "hsl(0, 0%, 100%)",
			"line-width": 2.0
		}
	}, {
		"id": "microsoft.bing.maps.roads.trail_elevated_line",
		"source": "bing-mvt",
		"source-layer": "trail",
		"filter": ["==", ["get", "bkt"], 26],
		"minzoom": 14,
		"type": "line",
		"paint": {
			"line-color": "hsla(0, 3%, 20%, 0.25)",
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
			"line-color": "hsl(0, 0%, 71%)",
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
			"line-color": "hsl(24, 23%, 95%)",
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
			"line-color": "hsl(0, 0%, 71%)",
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
				["get", "official-color"], "hsl(0, 0%, 78%)"
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["step", ["zoom"], 0.67, 12, 1.0, 22, 0.67],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.995502, 4.497751]], 12, ["literal", [6.0, 3.0]], 22, ["literal", [8.995502, 4.497751]]
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["step", ["zoom"], 0.67, 12, 1.0, 22, 0.67],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.995502, 4.497751]], 12, ["literal", [6.0, 3.0]], 22, ["literal", [8.995502, 4.497751]]
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["step", ["zoom"], 0.67, 12, 1.0, 22, 0.67],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.995502, 4.497751]], 12, ["literal", [6.0, 3.0]], 22, ["literal", [8.995502, 4.497751]]
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["step", ["zoom"], 0.67, 12, 1.0, 22, 0.67],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.995502, 4.497751]], 12, ["literal", [6.0, 3.0]], 22, ["literal", [8.995502, 4.497751]]
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
			"line-color": "hsl(0, 3%, 74%)",
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 22, 2.3
			],
			"line-dasharray": ["step", ["zoom"],
				["literal", [1.0]], 1, ["literal", [5.15625, 5.15625]], 3, ["literal", [4.02439, 4.02439]], 4, ["literal", [6.04395628, 6.04395628]], 9, ["literal", [6.470588, 9.705882]], 22, ["literal", [3.478261, 5.21739149]]
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["step", ["zoom"], 0.67, 12, 1.0, 22, 0.67],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.995502, 4.497751]], 12, ["literal", [6.0, 3.0]], 22, ["literal", [8.995502, 4.497751]]
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
			"line-color": "hsla(0, 0%, 0%, 0.04)",
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
			"line-color": "hsla(0, 0%, 0%, 0.04)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 15.0, 3, 15.0, 4, 18.0, 5, 24.0, 6, 27.0, 7, 33.0, 9, 39.0, 13, 48.0
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
			"line-color": "hsl(33, 4%, 58%)",
			"line-width": ["step", ["zoom"], 0.67, 12, 1.0, 22, 0.67],
			"line-dasharray": ["step", ["zoom"],
				["literal", [8.995502, 4.497751]], 12, ["literal", [6.0, 3.0]], 22, ["literal", [8.995502, 4.497751]]
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
			"line-color": "hsl(0, 3%, 74%)",
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 1, "hsla(0, 3%, 74%, 0.8)", 2, "hsl(0, 3%, 74%)"
			],
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
			"line-color": "hsla(0, 0%, 0%, 0.04)",
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
			"line-color": ["interpolate", ["linear"],
				["zoom"], 2, "hsla(0, 0%, 0%, 0)", 3, "hsla(0, 0%, 0%, 0.01)", 4, "hsla(0, 0%, 0%, 0.05)", 22, "hsla(0, 0%, 0%, 0.04)"
			],
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
			"line-color": "hsl(0, 3%, 74%)",
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
			"line-color": "hsl(0, 3%, 74%)",
			"line-width": 3.0
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 10%)", 16, "hsl(0, 0%, 20%)"],
			"text-halo-width": ["step", ["zoom"], 2.0, 22, 0.0],
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(42, 17%, 93%)", 14, "hsl(42, 18%, 91%)", 16, "hsl(42, 16%, 90%)", 18, "hsl(42, 19%, 89%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 54%)",
			"text-halo-width": 1.5,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(240, 9%, 30%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(240, 2%, 29%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 10%, 57%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(240, 9%, 30%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(-10, 0%, 50%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "#4A4A4A"
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
			"text-color": "#4A4A4A"
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
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#A6A6A6", "highway", "#979797", "majorRoad", "#797979", "arterial", "#888888", "street", "#888888", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#A6A6A6", "highway", "#979797", "majorRoad", "#797979", "arterial", "#888888", "street", "#888888", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsla(0, 0%, 46%, 0.9)"
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
			"text-color": "hsl(0, 0%, 0%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(240, 9%, 30%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 46%)", 10, "hsla(0, 0%, 46%, 0)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 9, 0.0],
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 46%)", 10, "hsla(0, 0%, 46%, 0)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 9, 0.0],
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": ["step", ["zoom"], "hsl(240, 9%, 30%)", 2, "hsla(240, 9%, 30%, 0.2)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 2, 0.0],
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 46%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 51%)", 10, "hsla(0, 0%, 51%, 0.6)", 11, "hsla(0, 0%, 51%, 0.4)", 12, "hsla(0, 0%, 51%, 0.27)"]
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
			"text-color": "hsl(0, 0%, 45%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(240, 9%, 30%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(240, 9%, 30%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 20%)",
			"text-halo-width": ["step", ["zoom"], 1.5, 13, 2.0],
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(42, 17%, 93%)", 14, "hsl(42, 18%, 91%)", 18, "hsl(42, 19%, 89%)"
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
			"text-color": "hsl(0, 0%, 20%)",
			"text-halo-width": 1.5,
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(42, 17%, 93%)", 14, "hsl(42, 18%, 91%)", 18, "hsl(42, 19%, 89%)"
			]
		}
	}]
}