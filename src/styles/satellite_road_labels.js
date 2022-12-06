// https://ecn.api.m2.tiles.live-int.com/comp/stl?ods=mvt&mbxs=7443EAC9-CD76-4236-B027-22DBC504BF06&v=9.03&og=1674&mkt=en-US&ur=us&stlhost=int2
var style_satellite_road_labels = {
	"version": 8,
	"name": "Photoreal Bing",
	"center": [-122.336, 47.607],
	"zoom": 9,
	"sources": {
		"bing-mvt": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.base&cstl=rd&sv=9.03&og=1122"
			// "tiles": ["https://ecn.api.m2.tiles.live-int.com/comp/ch/{z}-{x}-{y}.mvt?mkt=en-us&it=G,LC,L,LA&og=1122&src=t&js=1&tj=1&ur=us&cstl=rd&mvt=1&features=mvt,mvtfontinfo&sv=9.03"],
			// "promoteId": "id",
			// "minzoom": 0,
			// "maxzoom": 18
		},
		"bing-traffic": {
			"type": "vector",
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.traffic.relative"
			// "tiles": [
			// 	"https://trafficrenderer.tiles.virtualearth.net/comp/ch/{quadkey}?it=Z,TF&src=t&cstl=rd&mvt=1"
			// 	],
			// "minzoom": 6,
			// "maxzoom": 20
		},
		"bing-aerial": {
			"type": "raster",
			"tileSize": 256,
			"url": "https://{{azMapsDomain}}/map/tileset?api-version=2.1&language={{azMapsLanguage}}&view={{azMapsView}}&tilesetId=microsoft.imagery"
			// "tiles": ["http://t0.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=0"]
		}
	},
	"sprite": "https://ecn.api.m2.tiles.live-int.com/comp/stl/sprite?ods=mvt&mbxs=7443eac9-cd76-4236-b027-22dbc504bf06&v=9.03&og=1674&mkt=en-US",
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
			"firstTrafficLayer": "microsoft.bing.maps.traffic_relative.traffic_congestion_closed_line"
		}
	},
	"layers": [{
		"id": "microsoft.bing.maps.base.land",
		"type": "background",
		"paint": {
			"background-color": "hsl(50, 17%, 93%)"
		}
	}, {
		"id": "microsoft.bing.maps.base.bing-aerial-layer",
		"type": "raster",
		"source": "bing-aerial"
	}, {
		"id": "microsoft.bing.maps.roads.street_tunnel_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [687, 683]]
		],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 54%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -1.375, 12, -1.375, 13, -1.25, 14, -1.125, 15, 1.0, 18, 1.0, 19, 4.0, 20, 5.0, 21, 7.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.0, 15, 3.0, 16, 6.0, 17, 12.0, 18, 18.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_toll_tunnel_one_way_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 682],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 54%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 12, -1.375, 13, -1.25, 14, -1.125, 15, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 12, 3.0, 15, 3.0, 16, 6.0, 17, 12.0, 18, 18.0
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
		"paint": {
			"line-color": "hsl(39, 20%, 39%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -1.375, 11, -1.375, 12, -1.25, 13, -1.125, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.0, 14, 3.0, 15, 6.0, 16, 12.0, 17, 18.0, 18, 22.0
			]
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
		"paint": {
			"line-color": "hsl(42, 62%, 32%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 8, 0.0, 9, 0.25, 10, 0.5, 11, 1.0, 17, 1.0, 18, 2.0, 19, 2.5, 20, 3.0, 21, 4.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 8, 1.0, 11, 1.0, 12, 2.0, 13, 3.0, 14, 5.5, 15, 8.0, 16, 16.0, 17, 26.0, 18, 28.0, 19, 32.0, 20, 36.0, 21, 38.0
			]
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
		"paint": {
			"line-color": "hsl(312, 16%, 44%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0, 17, 1.0, 18, 3.0, 19, 7.0, 20, 9.0, 21, 11.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
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
		"paint": {
			"line-color": "hsl(312, 16%, 44%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.highway_toll_tunnel_one_way_eu_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 124],
		"minzoom": 5,
		"type": "line",
		"paint": {
			"line-color": ["step", ["zoom"], "hsla(294, 33%, 48%, 0.36)", 9, "hsl(312, 16%, 44%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
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
		"paint": {
			"line-color": ["step", ["zoom"], "hsla(294, 33%, 48%, 0.36)", 9, "hsl(291, 18%, 35%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0, 17, 1.0, 18, 3.0, 19, 7.0, 20, 12.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
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
		"paint": {
			"line-color": ["step", ["zoom"], "hsla(294, 33%, 48%, 0.36)", 9, "hsl(291, 18%, 35%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
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
			"line-color": "hsla(54, 92%, 57%, 0.2)",
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
				[642, 639, 644, 129, 638, 128], "hsla(294, 33%, 48%, 0.36)", "hsla(269, 97%, 62%, 0.09)"
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
			"line-color": "hsl(0, 0%, 70%)",
			"line-width": ["step", ["zoom"], 3.0, 16, 5.0, 17, 7.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_line-merged5",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [121, 120, 663, 668, 669]]
		],
		"minzoom": 9,
		"type": "line",
		"paint": {
			"line-color": "hsl(42, 62%, 32%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 8, 0.0, 9, 0.25, 10, 0.5, 11, 1.0, 17, 1.0, 18, 2.0, 19, 2.5, 20, 3.0, 21, 4.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 8, 1.0, 11, 1.0, 12, 2.0, 13, 3.0, 14, 5.5, 15, 8.0, 16, 16.0, 17, 26.0, 18, 28.0, 19, 32.0, 20, 36.0, 21, 38.0
			]
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
		"paint": {
			"line-color": ["match", ["get", "bkt"], 685, "hsl(0, 0%, 54%)", "hsl(42, 15%, 61%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 12, -1.375, 13, -1.25, 14, -1.125, 15, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 12, 3.0, 15, 3.0, 16, 6.0, 17, 12.0, 18, 18.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.arterial_unpaved_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 1313],
		"minzoom": 11,
		"type": "line",
		"paint": {
			"line-color": "hsl(42, 15%, 61%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -1.375, 11, -1.375, 12, -1.25, 13, -1.125, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.0, 14, 3.0, 15, 6.0, 16, 12.0, 17, 18.0, 18, 22.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_unpaved_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 1309],
		"minzoom": 11,
		"type": "line",
		"paint": {
			"line-color": "hsl(42, 15%, 61%)",
			"line-width": 0.0,
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 11, 1.0, 12, 2.0, 13, 3.0, 14, 5.5, 15, 8.0, 16, 16.0, 17, 26.0, 18, 28.0, 19, 32.0, 20, 36.0, 21, 38.0
			]
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
		"paint": {
			"line-color": ["match", ["get", "bkt"],
				[631, 635, 1349], "hsl(0, 0%, 54%)", "hsl(291, 18%, 35%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -0.25, 10, -0.25, 11, -0.125, 13, 0.0, 14, 1.0, 18, 1.0, 19, 1.5, 20, 2.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 1.0, 14, 1.0, 15, 2.5, 16, 5.0, 17, 9.0, 18, 14.0, 19, 18.0, 20, 22.0, 21, 26.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_line-merged2",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [680, 686]]
		],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 54%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -1.25, 13, -1.25, 14, -1.125, 15, 1.0, 18, 1.0, 19, 2.0, 20, 2.5, 21, 2.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.0, 15, 3.0, 16, 6.0, 17, 12.0, 18, 18.0, 19, 24.0, 20, 28.0, 21, 34.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.street_one_way_line",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["==", ["get", "bkt"], 684],
		"minzoom": 13,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 54%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -1.5, 13, -1.5, 14, -1.375, 15, 0.75, 16, 1.0, 18, 1.0, 19, 2.0, 20, 2.5, 21, 2.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.5, 15, 3.5, 16, 6.0, 17, 12.0, 18, 18.0, 19, 24.0, 20, 28.0, 21, 34.0
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
		"paint": {
			"line-color": "hsl(39, 20%, 39%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, -1.375, 9, -1.375, 11, -1.125, 12, -1.125, 13, -1.0, 14, 1.0, 18, 1.0, 19, 1.5, 20, 2.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 3.0, 14, 3.0, 15, 6.0, 16, 12.0, 17, 18.0, 18, 22.0, 19, 28.0, 20, 32.0, 21, 36.0
			]
		}
	}, {
		"id": "microsoft.bing.maps.roads.major_road_toll_one_way_line-merged3",
		"source": "bing-mvt",
		"source-layer": "road",
		"filter": ["in", ["get", "bkt"],
			["literal", [123, 667, 122]]
		],
		"minzoom": 9,
		"type": "line",
		"paint": {
			"line-color": "hsl(42, 62%, 32%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 8, 0.0, 9, 0.25, 10, 0.5, 11, 1.0, 12, 1.2, 13, 1.4, 14, 2.25, 15, 1.0, 17, 1.0, 18, 3.0, 19, 5.5, 20, 8.0, 21, 10.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
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
			"line-color": "hsl(0, 0%, 70%)",
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
			"line-color": "hsl(222, 66%, 62%)",
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
			"line-color": "hsl(0, 0%, 80%)",
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
				["zoom"], 0, "hsl(0, 0%, 70%)", 14, "hsl(0, 0%, 70%)", 15, "hsl(0, 0%, 26%)"
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
			"line-color": "hsla(54, 92%, 57%, 0.2)",
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
			"line-color": "hsla(78, 31%, 66%, 0.49)",
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
			"line-color": ["match", ["get", "bkt"], 685, "hsla(0, 0%, 100%, 0.09)", "hsla(0, 0%, 100%, 0.05)"],
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
			"line-color": "hsla(0, 0%, 100%, 0.05)",
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
			"line-color": ["match", ["get", "bkt"], 1309, "hsla(0, 0%, 100%, 0.05)", "hsla(54, 92%, 57%, 0.2)"],
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
			"line-color": "hsla(0, 0%, 100%, 0.09)",
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
			"line-color": "hsla(0, 0%, 54%, 0.5)",
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
			"line-color": "hsla(0, 0%, 100%, 0.09)",
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
			"line-color": "hsla(0, 0%, 100%, 0.09)",
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
			"line-color": "hsla(52, 100%, 95%, 0.2)",
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
			"line-color": "hsla(54, 92%, 57%, 0.2)",
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
			"line-color": "hsl(0, 0%, 70%)",
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
			"line-color": "hsl(0, 0%, 70%)",
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
			"line-color": "hsla(0, 0%, 26%, 0.4)",
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
				["zoom"], 0, "hsl(0, 0%, 70%)", 15, "hsl(0, 0%, 66%)"
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
			"line-color": "hsl(0, 0%, 26%)",
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
			"line-color": "hsl(0, 0%, 63%)",
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
				["zoom"], 6, "hsl(0, 0%, 74%)", 13, "hsl(0, 0%, 70%)", 16, "hsl(0, 0%, 75%)"
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
		"paint": {
			"line-color": ["match", ["get", "bkt"], 1308, "hsl(42, 15%, 61%)", "hsl(312, 16%, 44%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.0, 4, 0.0, 6, 0.5, 8, 0.75, 9, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0, 18, 1.0, 19, 2.0, 20, 3.0, 21, 4.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 1.0, 9, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0, 18, 30.0, 19, 36.0, 20, 38.0, 21, 40.0
			]
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
		"paint": {
			"line-color": "hsl(312, 16%, 44%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.0, 4, 0.0, 6, 0.5, 8, 0.75, 9, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0, 15, 1.5, 16, 2.0, 17, 1.75, 18, 2.0, 19, 2.0, 20, 2.5, 21, 3.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 1.0, 9, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 7.0, 16, 14.0, 17, 18.5, 18, 22.0, 19, 28.0, 20, 33.0, 21, 38.0
			]
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
		"paint": {
			"line-color": "hsl(312, 16%, 44%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.0, 4, 0.0, 6, 0.5, 8, 0.75, 9, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 1.0, 9, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
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
		"paint": {
			"line-color": "hsl(291, 18%, 35%)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0, 18, 1.0, 19, 2.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0, 18, 30.0, 19, 36.0, 20, 46.0
			]
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
		"paint": {
			"line-color": ["step", ["zoom"], "hsla(294, 33%, 48%, 0.36)", 9, "hsl(291, 18%, 35%)"],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.25, 4, 0.25, 6, 0.75, 8, 0.75, 9, 1.0, 11, 1.0, 12, 0.99999994, 13, 0.9999999, 14, 1.0
			],
			"line-gap-width": ["interpolate", ["linear"],
				["zoom"], 0, 0.5, 7, 0.5, 8, 1.0, 11, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0
			]
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
			"line-color": "hsla(294, 33%, 48%, 0.36)",
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
			"line-color": ["match", ["get", "bkt"], 1308, "hsla(0, 0%, 100%, 0.05)", "hsla(269, 97%, 62%, 0.09)"],
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
			"line-color": "hsla(269, 97%, 62%, 0.09)",
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
			"line-color": "hsla(269, 97%, 62%, 0.09)",
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
			"line-color": ["match", ["get", "bkt"],
				[131, 130], "hsla(294, 33%, 48%, 0.36)", "hsla(269, 97%, 62%, 0.09)"
			],
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
			"line-color": "hsla(294, 33%, 48%, 0.36)",
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
			"line-color": "hsla(294, 33%, 48%, 0.36)",
			"line-width": ["step", ["zoom"], 0.5, 8, 1.0, 12, 1.6, 13, 2.2, 14, 3.0, 15, 8.0, 16, 16.0, 17, 26.0, 18, 30.0, 19, 36.0, 20, 46.0]
		}
	}, {
		"id": "microsoft.bing.maps.roads.subway_under_construction_chn_line",
		"source": "bing-mvt",
		"source-layer": "metro",
		"filter": ["==", ["get", "bkt"], 20],
		"minzoom": 12,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 63%)",
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
			"line-color": "hsl(0, 0%, 30%)",
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
			"line-color": "hsl(0, 0%, 70%)",
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
				["get", "official-color"], "hsl(0, 0%, 70%)"
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
			"line-color": "hsl(0, 0%, 74%)",
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
			"line-color": "hsl(0, 0%, 74%)",
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
			"line-color": "hsl(0, 0%, 74%)",
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
			"line-color": "hsl(0, 0%, 74%)",
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
			"line-color": "hsl(0, 0%, 88%)",
			"line-width": 1.0,
			"line-dasharray": ["step", ["zoom"],
				["literal", [3.0, 3.0]], 4, ["literal", [7.0, 5.0]], 9, ["literal", [10.0, 10.0]]
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
			"line-color": "hsl(0, 0%, 74%)",
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
			"line-color": "hsl(0, 0%, 74%)",
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
			"line-color": "hsla(0, 0%, 81%, 0.2)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 4, 1.52, 22, 5.0
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
			"line-color": "hsla(0, 0%, 81%, 0.2)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 5.0, 3, 5.0, 4, 6.0, 5, 8.0, 6, 9.0, 7, 11.0, 9, 13.0, 13, 16.0
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
				["zoom"], 5, "hsla(0, 0%, 100%, 0.13)", 6, "hsla(0, 0%, 100%, 0.13)", 7, "hsla(0, 0%, 90%, 0.14)", 8, "hsla(0, 0%, 82%, 0.13)", 9, "hsla(0, 0%, 93%, 0.14)", 13, "hsla(0, 0%, 94%, 0.16)", 22, "hsla(0, 0%, 90%, 0.16)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 5, 7.0, 9, 15.0, 13, 17.0, 17, 21.0
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
			"line-color": "hsl(0, 0%, 88%)",
			"line-width": ["step", ["zoom"], 0.56, 12, 0.83]
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
				["zoom"], 1, "hsla(0, 0%, 88%, 0.8)", 2, "hsl(0, 0%, 88%)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 0, 1.0, 6, 1.5
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
			"line-color": "hsla(0, 0%, 81%, 0.2)",
			"line-width": ["interpolate", ["linear"],
				["zoom"], 4, 1.52, 22, 5.0
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
				["zoom"], 2, "hsla(0, 0%, 81%, 0.16)", 3, "hsla(0, 0%, 81%, 0.17)", 4, "hsla(0, 0%, 81%, 0.22)", 22, "hsla(0, 0%, 81%, 0.2)"
			],
			"line-width": ["interpolate", ["linear"],
				["zoom"], 2, 5.0, 3, 5.0, 4, 6.0, 5, 8.0, 6, 9.0, 7, 11.0, 9, 13.0, 13, 16.0
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
			"line-color": "hsl(0, 0%, 88%)",
			"line-width": ["step", ["zoom"], 0.56, 12, 0.83]
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
			"line-color": "hsl(0, 0%, 88%)",
			"line-width": 1.0
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
			"fill-color": "hsla(358, 68%, 61%, 0.14)"
		}
	}, {
		"id": "microsoft.bing.maps.roads.admin_division2_line",
		"source": "bing-mvt",
		"source-layer": "admin_division2",
		"filter": ["==", ["get", "bkt"], 865],
		"minzoom": 10,
		"type": "line",
		"paint": {
			"line-color": "hsl(0, 0%, 86%)",
			"line-width": ["step", ["zoom"], 0.5, 12, 1.0, 22, 0.75],
			"line-dasharray": ["step", ["zoom"],
				["literal", [6.0, 10.0]], 12, ["literal", [3.0, 5.0]], 22, ["literal", [4.0, 6.66666651]]
			]
		}
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
			"line-color": "hsl(0, 0%, 100%)",
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
		"id": "microsoft.bing.maps.labels.address_symbol_label",
		"source": "bing-mvt",
		"source-layer": "address",
		"minzoom": 18,
		"type": "symbol",
		"layout": {
			"text-size": 13.2,
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
			"text-halo-color": "hsl(0, 0%, 7%)"
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 87%)", 16, "hsl(0, 0%, 96%)"],
			"text-halo-width": ["step", ["zoom"], 2.0, 22, 0.0],
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(0, 0%, 30%)", 18, "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(20, 13%, 44%)"
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
			"text-font": ["Roboto-Bold"],
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.5,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-font": ["Roboto-RegularItalic"],
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
			"text-color": "hsl(209, 66%, 76%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 66%, 76%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 66%, 76%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 66%, 76%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 66%, 76%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 73%, 89%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(198, 24%, 82%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-color": ["match", ["concat", ["get", "admin-div"], "-", ["get", "shield-type2"]],
				["12-1", "32-1", "32-2", "39-2", "39-3", "104-1", "166-1", "167-1", "167-2", "167-3", "183-2", "183-3", "237-1", "244-2", "244-3", "244-4", "113-1", "113-2", "113-3", "227-4", "176-6", "11-1", "11-2", "67-1", "187-3", "205-1", "215-3", "26-1", "51-1", "54-1", "61-3", "77-4", "99-1", "99-2", "157-1", "157-2", "182-1", "182-2", "185-1", "246-1", "246-2", "249-1", "249-2", "251-3"], "#333333", ["237-4", "237-5", "242-3", "39070-4", "39070-5", "39070-6", "45-4", "94-4", "94-5", "94-6", "223-4", "223-5", "223-6", "14-6", "75-6", "200-5", "200-6", "221-4", "221-5", "221-6", "6-5", "21-2", "21-4", "84-5", "110-1", "110-2", "110-3", "110-4", "68-3", "177-3", "193-4", "193-5", "193-6", "203-4", "18-1", "18-2", "18-3", "249-4"], "#686868", ["23-2", "28-1", "245-1", "55-1", "44-1", "56-1", "61-2", "71-1", "73-1", "77-3", "87-2", "87-3", "100-1", "141-3", "149-1", "162-1", "162-2", "27-1", "27-2", "173-1", "191-3", "232-1"], "#484848", ["45-3", "94-3", "176-3", "176-4", "176-5", "108-4", "19618-4", "84-4", "147-4", "271-4", "212-4", "100-2", "149-2"], "#636363", ["242-2", "254-1", "254-2", "254-3", "209-2", "209-3", "209-4", "68-2", "168-1"], "#FFEDA3", ["109-4", "187-2", "202-4", "271-2"], "#000000", ["187-1", "205-2", "205-3", "235-2"], "#414042", ["12-3", "134-1"], "#1A529D", ["12-5", "12-6"], "#FDE352", ["14-5", "54-2"], "#4E4E4E", ["136-1", "136-2"], "#4B6ADC", ["202-3", "209-1"], "#FFFC8F", ["197-2", "197-3"], "#568051", ["235-4", "17-1"], "#6995DB", "39-1", "#287A3D", "166-2", "#343433", "117-1", "#3D5B99", "117-2", "#CC5252", "117-3", "#476629", "117-4", "#B58C42", "98-2", "#5173CD", "197-1", "#F0DF75", "134-4", "#4672EB", "224-1", "#F0D076", "224-2", "#F0DD61", "129-2", "#39780F", "#FFFFFF"
			]
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
			"text-color": ["match", ["concat", ["get", "admin-div"], "-", ["get", "shield-type"]],
				["12-1", "32-1", "32-2", "39-2", "39-3", "104-1", "166-1", "167-1", "167-2", "167-3", "183-2", "183-3", "237-1", "244-2", "244-3", "244-4", "113-1", "113-2", "113-3", "227-4", "176-6", "11-1", "11-2", "67-1", "187-3", "205-1", "215-3", "26-1", "51-1", "54-1", "61-3", "77-4", "99-1", "99-2", "157-1", "157-2", "182-1", "182-2", "185-1", "246-1", "246-2", "249-1", "249-2", "251-3"], "#333333", ["237-4", "237-5", "242-3", "39070-4", "39070-5", "39070-6", "45-4", "94-4", "94-5", "94-6", "223-4", "223-5", "223-6", "14-6", "75-6", "200-5", "200-6", "221-4", "221-5", "221-6", "6-5", "21-2", "21-4", "84-5", "110-1", "110-2", "110-3", "110-4", "68-3", "177-3", "193-4", "193-5", "193-6", "203-4", "18-1", "18-2", "18-3", "249-4"], "#686868", ["23-2", "28-1", "245-1", "55-1", "44-1", "56-1", "61-2", "71-1", "73-1", "77-3", "87-2", "87-3", "100-1", "141-3", "149-1", "162-1", "162-2", "27-1", "27-2", "173-1", "191-3", "232-1"], "#484848", ["45-3", "94-3", "176-3", "176-4", "176-5", "108-4", "19618-4", "84-4", "147-4", "271-4", "212-4", "100-2", "149-2"], "#636363", ["242-2", "254-1", "254-2", "254-3", "209-2", "209-3", "209-4", "68-2", "168-1"], "#FFEDA3", ["109-4", "187-2", "202-4", "271-2"], "#000000", ["187-1", "205-2", "205-3", "235-2"], "#414042", ["12-3", "134-1"], "#1A529D", ["12-5", "12-6"], "#FDE352", ["14-5", "54-2"], "#4E4E4E", ["136-1", "136-2"], "#4B6ADC", ["202-3", "209-1"], "#FFFC8F", ["197-2", "197-3"], "#568051", ["235-4", "17-1"], "#6995DB", "39-1", "#287A3D", "166-2", "#343433", "117-1", "#3D5B99", "117-2", "#CC5252", "117-3", "#476629", "117-4", "#B58C42", "98-2", "#5173CD", "197-1", "#F0DF75", "134-4", "#4672EB", "224-1", "#F0D076", "224-2", "#F0DD61", "129-2", "#39780F", "#FFFFFF"
			]
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
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#F7F7F7", "highway", "#F7F7F7", "majorRoad", "#F7F7F7", "arterial", "#F7F7F7", "street", "#F7F7F7", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(31, 36%, 27%)"
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
			"text-color": ["match", ["get", "st-et"], "ramp", "#000000", "controlledAccessHighway", "#F7F7F7", "highway", "#F7F7F7", "majorRoad", "#F7F7F7", "arterial", "#F7F7F7", "street", "#F7F7F7", "#252525"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(31, 36%, 27%)"
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
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 98%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 7%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.observation_point_symbol",
		"source": "bing-mvt",
		"source-layer": "observation_point",
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": ["step", ["zoom"], 1.0, 17, 0.0],
			"text-halo-color": "hsl(0, 0%, 0%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.shipwreck_symbol",
		"source": "bing-mvt",
		"source-layer": "shipwreck",
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.29,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.fort_symbol",
		"source": "bing-mvt",
		"source-layer": "fort",
		"filter": ["==", ["get", "bkt"], 1169],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.29,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 45%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.battlefield_symbol",
		"source": "bing-mvt",
		"source-layer": "battlefield",
		"minzoom": 12,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.29,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 76%)"
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
			"text-color": "hsl(209, 66%, 76%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
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
			"text-font": ["Roboto-Regular"],
			"text-field": ["case", ["has", "name2"],
				["concat", ["get", "name"], "\n", ["get", "name2"]],
				["get", "name"]
			],
			"text-max-width": ["+", ["number", ["get", "max-text-width"], 9], 1],
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 7%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.monument_symbol",
		"source": "bing-mvt",
		"source-layer": "monument",
		"filter": ["==", ["get", "bkt"], 1185],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 100%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(109, 90%, 88%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.playing_field_tennis_symbol",
		"source": "bing-mvt",
		"source-layer": "playing_field",
		"filter": ["==", ["get", "bkt"], 2028],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(35, 100%, 92%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(34, 7%, 18%)"
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": ["match", ["get", "bkt"], 948, "hsl(111, 15%, 25%)", "hsl(110, 14%, 26%)"]
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
			"text-font": ["match", ["get", "bkt"], 947, ["literal", ["Roboto-Regular"]],
				["literal", ["Roboto-RegularItalic"]]
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(111, 15%, 25%)"
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
			"text-color": "hsl(109, 86%, 86%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 100%)", 22, "hsl(25, 51%, 36%)"]
		}
	}, {
		"id": "microsoft.bing.maps.labels.garden_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "garden",
		"filter": ["==", ["get", "bkt"], 2035],
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
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 100%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.historical_site_symbol",
		"source": "bing-mvt",
		"source-layer": "historical_site",
		"filter": ["==", ["get", "bkt"], 1167],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 45%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(109, 100%, 70%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(109, 85%, 86%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.parking_lot_symbol",
		"source": "bing-mvt",
		"source-layer": "parking_lot",
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 0, 0.38, 17, 0.38, 18, 0.5, 19, 0.67, 22, 0.6
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.parking_structure_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "parking_structure",
		"filter": ["==", ["get", "bkt"], 2036],
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": ["interpolate", ["linear"],
				["zoom"], 0, 0.38, 17, 0.38, 18, 0.5, 19, 0.67, 22, 0.6
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
				["zoom"], 18, 1.1, 19, 1.2
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-color": "hsl(209, 62%, 78%)",
			"text-halo-width": ["step", ["zoom"], 1.0, 9, 0.0],
			"text-halo-color": "hsl(180, 10%, 20%)"
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
			"text-font": ["Roboto-Bold"],
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": ["step", ["zoom"], 1.0, 2, 0.0],
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(344, 60%, 95%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
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
			"text-font": ["Roboto-Regular"],
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-font": ["Roboto-Regular"],
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-font": ["Roboto-Regular"],
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
			"text-color": "hsl(109, 92%, 84%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(110, 14%, 26%)"
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
			"text-font": ["Roboto-Regular"],
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-font": ["Roboto-Regular"],
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
			"text-color": ["match", ["get", "st-tag"], "shopping", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "essentialService", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "entertainment", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "food", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "community", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "attraction", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "realEstate", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "education", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "lodging", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"],
				["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"]
			],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 7%)"
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
			"text-font": ["Roboto-Regular"],
			"text-field": ["get", "name"],
			"text-variable-anchor": ["right", "bottom", "top", "left", "bottom-right", "top-right", "bottom-left", "top-left"],
			"text-justify": "auto",
			"text-radial-offset": 1.14,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-translate": [0.0, 0.0],
			"text-color": ["match", ["get", "st-tag"], "shopping", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "essentialService", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "entertainment", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "food", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "community", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "attraction", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "realEstate", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "education", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"], "lodging", ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"],
				["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"]
			],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 7%)"
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
			"text-color": "hsl(0, 0%, 96%)",
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
			"text-color": "hsl(0, 0%, 96%)",
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 0%)"
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
			"text-color": ["case", ["boolean", ["feature-state", "hover"], false], "#FFFFFF", "#FFFFFF"],
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
				["zoom"], 0, "hsl(0, 0%, 100%)", 22, "hsl(0, 3%, 95%)"
			],
			"text-halo-width": ["match", ["get", "bkt"], 285, 1.0, 0.0],
			"text-halo-color": ["match", ["get", "bkt"], 285, "hsl(0, 0%, 27%)", "hsla(0, 0%, 0%, 0)"]
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
			"text-color": "hsl(0, 22%, 90%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
				["zoom"], 0, "hsl(0, 0%, 100%)", 22, "hsl(0, 3%, 95%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": ["step", ["zoom"], "hsl(0, 0%, 96%)", 10, "hsla(0, 0%, 96%, 0.6)", 11, "hsla(0, 0%, 96%, 0.4)", 12, "hsla(0, 0%, 96%, 0.27)"],
			"text-halo-width": ["step", ["zoom"], 1.0, 10, 0.0],
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(348, 27%, 89%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-font": ["Roboto-Medium"],
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
			"text-color": "hsl(0, 0%, 90%)",
			"text-halo-width": 2.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.playground_symbol",
		"source": "bing-mvt",
		"source-layer": "playground",
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.wall_symbol",
		"source": "bing-mvt",
		"source-layer": "wall",
		"minzoom": 16,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.29,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(-20, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
		}
	}, {
		"id": "microsoft.bing.maps.labels.swimming_pool_sa_symbol",
		"source": "bing-mvt",
		"source-layer": "swimming_pool",
		"filter": ["==", ["get", "bkt"], 2034],
		"minzoom": 17,
		"type": "symbol",
		"layout": {
			"icon-size": 1.0,
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
			"text-radial-offset": 0.81,
			"text-letter-spacing": 0.04,
			"text-padding": 0
		},
		"paint": {
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 100%)",
			"text-halo-width": 1.0,
			"text-halo-color": "hsl(0, 0%, 27%)"
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
			"text-color": "hsl(0, 0%, 96%)"
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
			"text-color": "hsl(0, 0%, 96%)",
			"text-halo-width": 1.5,
			"text-halo-color": ["interpolate", ["linear"],
				["zoom"], 9, "hsl(0, 0%, 30%)", 18, "hsl(0, 0%, 27%)"
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
			"text-color": "#262626"
		}
	}]
}