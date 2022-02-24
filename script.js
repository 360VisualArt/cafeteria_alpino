(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C481660_470E_9811_4180_24295E081F86_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5E0424_470E_7811_41A4_536332FCA20A",
 "thumbnailUrl": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_t.jpg",
 "label": "Interna 8",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_56664978_471E_E8F2_41C9_82AB6AC598E8",
  "this.overlay_56A4712A_471E_9816_41A9_FD39D17C08A1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -8.82
 },
 "id": "camera_3D7BDD1E_2D43_13DC_41C1_EB20E56305E8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C481660_470E_9811_4180_24295E081F86",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_4C481660_470E_9811_4180_24295E081F86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "camera": "this.panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "id": "camera_3D330D9B_2D43_12A4_41B1_887C2858B8C9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -7.35
 },
 "id": "camera_3DD51DF8_2D43_1265_41BB_09D3E3E8B61E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5E3486_470E_7811_41CA_E3CA02176895",
 "thumbnailUrl": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_t.jpg",
 "label": "Interna 3",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_565E9C41_4716_6813_41B4_B5D70323B16E",
  "this.overlay_56B283E6_4715_B81E_41C4_1D6B08F72AFE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C481660_470E_9811_4180_24295E081F86"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC",
 "thumbnailUrl": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_t.jpg",
 "label": "Interna 1",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_565572EE_4716_7811_41BA_4357802CF46D",
  "this.overlay_568CBEFF_4716_A9EF_41AC_571E34A74F0B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C58431E_470F_982E_41C9_60BA63D219CD",
 "thumbnailUrl": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_t.jpg",
 "label": "Interna 6",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_564DB303_471A_9817_41A0_3955AF0862A3",
  "this.overlay_56A563C2_471A_7816_41D0_B398668D09C1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -8.08
 },
 "id": "camera_3D0E5D3D_2D43_13DC_41B9_5D2D05982439",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5E0424_470E_7811_41A4_536332FCA20A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D",
 "thumbnailUrl": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_t.jpg",
 "label": "Interna 9",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5672F7F3_471E_67F7_41C3_D9CC24F9AAE6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -6.61
 },
 "id": "camera_3D000D4C_2D43_13BD_41C0_0528DD67AA21",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "id": "camera_3D66DD0E_2D43_13BC_41BC_76EE2BE07AB2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5B3950_470F_A832_41CA_0600B7349C28_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C481660_470E_9811_4180_24295E081F86",
 "thumbnailUrl": "media/panorama_4C481660_470E_9811_4180_24295E081F86_t.jpg",
 "label": "Fachada 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C481660_470E_9811_4180_24295E081F86_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_565CBBBB_4716_6877_41BE_C06B15306C28",
  "this.overlay_56D3EC80_4717_E811_41CA_9272BF7E5F2C"
 ]
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0
  }
 ],
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5E3486_470E_7811_41CA_E3CA02176895_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C",
 "thumbnailUrl": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_t.jpg",
 "label": "Interna 5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_564BEDA8_471A_6811_41C7_C176EDB1424B",
  "this.overlay_568EFC52_471A_A831_41A0_164DC52B2FDA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5E9F69_470F_A812_41AE_07698C5832B2",
 "thumbnailUrl": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_t.jpg",
 "label": "Interna 4",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_564543AA_4715_F816_41A6_132E8DFBA613",
  "this.overlay_568B9EC6_4715_A81E_41C8_BE7CEDF22C9F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC",
 "thumbnailUrl": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_t.jpg",
 "label": "Interna 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_56447557_4716_F83E_41A4_09CB8D8ED86F",
  "this.overlay_5684BC4A_4716_A811_41C4_1788C5574551"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C481660_470E_9811_4180_24295E081F86"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C",
 "thumbnailUrl": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_t.jpg",
 "label": "Fachada 1",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_56637FAA_4716_A811_41BA_16A7DB8CB4F5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -2.2
 },
 "id": "camera_3D217D7B_2D43_125B_41C0_335199338352",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -106.53,
  "class": "PanoramaCameraPosition",
  "pitch": -11.76
 },
 "id": "camera_3D500CFE_2D43_125D_41BD_37B7A95D3371",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C58431E_470F_982E_41C9_60BA63D219CD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C481660_470E_9811_4180_24295E081F86",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_4C481660_470E_9811_4180_24295E081F86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "camera": "this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "camera": "this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "camera": "this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "camera": "this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 0)",
   "camera": "this.panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -0.73
 },
 "id": "camera_3DE6DE18_2D43_11A4_41B2_ED792BD9E0F4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4C5B3950_470F_A832_41CA_0600B7349C28",
 "thumbnailUrl": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_t.jpg",
 "label": "Interna 7",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_564CF92A_471B_A811_41C6_968402E5AB5F",
  "this.overlay_56BBDB9D_471B_E833_41C5_FAB708C7641E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 79.35,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "id": "camera_3D11FD6C_2D43_127C_41C0_8698BEA5F2F1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -5.14
 },
 "id": "camera_3DC4DDC9_2D43_12A7_41A6_69F0E0379809",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "minWidth": 100,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "minHeight": 50,
 "progressRight": 0,
 "paddingLeft": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "--STICKER"
 },
 "minHeight": 1,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "paddingLeft": 0,
 "width": 550,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_551DF4E7_475B_191B_41B7_D57B7AB5A8C6"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "top": 34,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 140,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "data": {
  "name": "-- SETTINGS"
 },
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingLeft": 0,
 "width": 115.05,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 641,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "minHeight": 1,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "paddingLeft": 0,
 "width": 330,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "minHeight": 1,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "minHeight": 1,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "minHeight": 1,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "minHeight": 1,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "minHeight": 1,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "minHeight": 1,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.1,
   "pitch": -16.04,
   "yaw": 3.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B97E49D_473B_F833_41D0_677EBBC54CEC",
   "distance": 100
  }
 ],
 "id": "overlay_56664978_471E_E8F2_41C9_82AB6AC598E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29.1,
   "yaw": 3.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28, this.camera_3D66DD0E_2D43_13BC_41BC_76EE2BE07AB2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.36,
   "pitch": -20.51,
   "yaw": -178.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B96149D_473B_F833_419F_6AEC84020381",
   "distance": 100
  }
 ],
 "id": "overlay_56A4712A_471E_9816_41A9_FD39D17C08A1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.36,
   "yaw": -178.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.72,
   "pitch": -18.45,
   "yaw": 4.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B88149D_473B_F833_41B8_B252C934AFB6",
   "distance": 100
  }
 ],
 "id": "overlay_565E9C41_4716_6813_41B4_B5D70323B16E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.72,
   "yaw": 4.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC, this.camera_3DD51DF8_2D43_1265_41BB_09D3E3E8B61E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.42,
   "pitch": -20.16,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B88449D_473B_F833_41D0_93488F8AB5EE",
   "distance": 100
  }
 ],
 "id": "overlay_56B283E6_4715_B81E_41C4_1D6B08F72AFE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.42,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29,
   "pitch": -16.73,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8AD49D_473B_F833_41C3_301B2FAD785A",
   "distance": 100
  }
 ],
 "id": "overlay_565572EE_4716_7811_41BA_4357802CF46D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C481660_470E_9811_4180_24295E081F86, this.camera_3D330D9B_2D43_12A4_41B1_887C2858B8C9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.36,
   "pitch": -20.51,
   "yaw": -179.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B89149D_473B_F833_41A7_0319CB024F13",
   "distance": 100
  }
 ],
 "id": "overlay_568CBEFF_4716_A9EF_41AC_571E34A74F0B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.36,
   "yaw": -179.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5B3950_470F_A832_41CA_0600B7349C28, this.camera_3D11FD6C_2D43_127C_41C0_8698BEA5F2F1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.72,
   "pitch": -18.45,
   "yaw": 80.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B96149D_473B_F833_41D1_2910202A7D25",
   "distance": 100
  }
 ],
 "id": "overlay_564DB303_471A_9817_41A0_3955AF0862A3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.72,
   "yaw": 80.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C, this.camera_3D217D7B_2D43_125B_41C0_335199338352); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.82,
   "pitch": -23.25,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B96B49D_473B_F833_41C3_735B19F010C1",
   "distance": 100
  }
 ],
 "id": "overlay_56A563C2_471A_7816_41D0_B398668D09C1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.82,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5E0424_470E_7811_41A4_536332FCA20A, this.camera_3DC4DDC9_2D43_12A7_41A6_69F0E0379809); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.22,
   "pitch": -26,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B96949D_473B_F833_41C0_28E69E7368FF",
   "distance": 100
  }
 ],
 "id": "overlay_5672F7F3_471E_67F7_41C3_D9CC24F9AAE6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.22,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.34,
   "pitch": -14.33,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8A749D_473B_F833_41C0_748DE4DB4B0C",
   "distance": 100
  }
 ],
 "id": "overlay_565CBBBB_4716_6877_41BE_C06B15306C28",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29.34,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C, this.camera_3D7BDD1E_2D43_13DC_41C1_EB20E56305E8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.36,
   "pitch": -20.51,
   "yaw": -179.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8AA49D_473B_F833_41B8_47B5D0AFF5D4",
   "distance": 100
  }
 ],
 "id": "overlay_56D3EC80_4717_E811_41CA_9272BF7E5F2C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.36,
   "yaw": -179.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.51
  }
 ]
},
{
 "minHeight": 1,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "minHeight": 1,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "minHeight": 1,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.17,
   "pitch": -21.53,
   "yaw": 5.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B97449D_473B_F833_41CC_9EF56F7E60EC",
   "distance": 100
  }
 ],
 "id": "overlay_564BEDA8_471A_6811_41C7_C176EDB1424B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.17,
   "yaw": 5.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5E9F69_470F_A812_41AE_07698C5832B2, this.camera_3DE6DE18_2D43_11A4_41B2_ED792BD9E0F4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.42,
   "pitch": -20.16,
   "yaw": -179.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B97F49D_473B_F833_41CA_952B19ACF1B4",
   "distance": 100
  }
 ],
 "id": "overlay_568EFC52_471A_A831_41A0_164DC52B2FDA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.42,
   "yaw": -179.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.84,
   "pitch": -17.76,
   "yaw": 7.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B88D49D_473B_F833_41C3_7753125042C4",
   "distance": 100
  }
 ],
 "id": "overlay_564543AA_4715_F816_41A6_132E8DFBA613",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.84,
   "yaw": 7.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5E3486_470E_7811_41CA_E3CA02176895, this.camera_3D000D4C_2D43_13BD_41C0_0528DD67AA21); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.84,
   "pitch": -17.76,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B97149D_473B_F833_41BB_142E447D630B",
   "distance": 100
  }
 ],
 "id": "overlay_568B9EC6_4715_A81E_41C8_BE7CEDF22C9F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.84,
   "yaw": -179.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.15,
   "pitch": -15.7,
   "yaw": 2.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B89549D_473B_F833_41C2_AA4B91F96D2A",
   "distance": 100
  }
 ],
 "id": "overlay_56447557_4716_F83E_41A4_09CB8D8ED86F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29.15,
   "yaw": 2.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC, this.camera_3D0E5D3D_2D43_13DC_41B9_5D2D05982439); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.78,
   "pitch": -18.1,
   "yaw": -179.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B89E49D_473B_F833_419A_2D155951B6CE",
   "distance": 100
  }
 ],
 "id": "overlay_5684BC4A_4716_A811_41C4_1788C5574551",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.78,
   "yaw": -179.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.89,
   "pitch": -22.91,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8BF48D_473B_F813_41CC_C15E1DA1259A",
   "distance": 100
  }
 ],
 "id": "overlay_56637FAA_4716_A811_41BA_16A7DB8CB4F5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.89,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.96,
   "pitch": -22.56,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B96F49D_473B_F833_41B4_084737D13F52",
   "distance": 100
  }
 ],
 "id": "overlay_564CF92A_471B_A811_41C6_968402E5AB5F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.96,
   "yaw": 0.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4C58431E_470F_982E_41C9_60BA63D219CD, this.camera_3D500CFE_2D43_125D_41BD_37B7A95D3371); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.42,
   "pitch": -20.16,
   "yaw": -105.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B97B49D_473B_F833_41BE_86B1313AB7DB",
   "distance": 100
  }
 ],
 "id": "overlay_56BBDB9D_471B_E833_41C5_FAB708C7641E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.42,
   "yaw": -105.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.16
  }
 ]
},
{
 "minHeight": 1,
 "id": "Image_551DF4E7_475B_191B_41B7_D57B7AB5A8C6",
 "paddingLeft": 0,
 "width": "57.855%",
 "left": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_551DF4E7_475B_191B_41B7_D57B7AB5A8C6.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "57.857%",
 "top": "14.29%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxHeight": 196,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 631,
 "propagateClick": false,
 "data": {
  "name": "Image10076"
 }
},
{
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "width": 110,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "height": 110,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "layout": "vertical",
 "data": {
  "name": "-button set"
 },
 "minHeight": 1,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "- COLLAPSE"
 },
 "minHeight": 1,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "paddingLeft": 0,
 "width": 66,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "- EXPANDED"
 },
 "minHeight": 1,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "paddingLeft": 0,
 "width": 330,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "absolute",
 "minHeight": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "minHeight": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "horizontal",
 "minHeight": 1,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 },
 "minHeight": 1,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "10%",
 "shadow": false,
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B97E49D_473B_F833_41D0_677EBBC54CEC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5E0424_470E_7811_41A4_536332FCA20A_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B96149D_473B_F833_419F_6AEC84020381",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B88149D_473B_F833_41B8_B252C934AFB6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5E3486_470E_7811_41CA_E3CA02176895_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B88449D_473B_F833_41D0_93488F8AB5EE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B8AD49D_473B_F833_41C3_301B2FAD785A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5A5224_470E_9811_4189_CBADCA38BCDC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B89149D_473B_F833_41A7_0319CB024F13",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B96149D_473B_F833_41D1_2910202A7D25",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C58431E_470F_982E_41C9_60BA63D219CD_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B96B49D_473B_F833_41C3_735B19F010C1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C58EB00_470E_A812_41CA_08D6B575EB3D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B96949D_473B_F833_41C0_28E69E7368FF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B8A749D_473B_F833_41C0_748DE4DB4B0C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C481660_470E_9811_4180_24295E081F86_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B8AA49D_473B_F833_41B8_47B5D0AFF5D4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B97449D_473B_F833_41CC_9EF56F7E60EC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5EDBFE_470F_EFF1_41D1_B4CCD780B73C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B97F49D_473B_F833_41CA_952B19ACF1B4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B88D49D_473B_F833_41C3_7753125042C4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5E9F69_470F_A812_41AE_07698C5832B2_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B97149D_473B_F833_41BB_142E447D630B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B89549D_473B_F833_41C2_AA4B91F96D2A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5DCA63_470E_A817_41C3_06066E5AC4BC_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B89E49D_473B_F833_419A_2D155951B6CE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4B4014CE_470E_9811_41C7_C3CF7644F60C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B8BF48D_473B_F813_41CC_C15E1DA1259A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B96F49D_473B_F833_41B4_084737D13F52",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_4C5B3950_470F_A832_41CA_0600B7349C28_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B97B49D_473B_F833_41BE_86B1313AB7DB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "minHeight": 1,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 58,
 "shadow": false,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "minHeight": 1,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "width": 58,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 58,
 "shadow": false,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "maxWidth": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "minHeight": 1,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "paddingLeft": 0,
 "width": 36,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "minHeight": 1,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "paddingLeft": 0,
 "width": 50,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "top": "40%",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 80,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "maxWidth": 80,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "minHeight": 1,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "90%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "minHeight": 1,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "paddingLeft": 0,
 "width": 50,
 "horizontalAlign": "center",
 "right": 9,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 50,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "maxWidth": 50,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "minHeight": 1,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "left": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "minWidth": 1,
 "itemMode": "normal",
 "horizontalAlign": "center",
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "shadow": false,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "class": "ThumbnailGrid",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "minHeight": 1,
 "paddingLeft": 70,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "gap": 26,
 "paddingBottom": 70,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "minHeight": 1,
 "progressRight": 0,
 "paddingLeft": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "minHeight": 1,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 140,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "minHeight": 1,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "minHeight": 1,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "minHeight": 1,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "paddingLeft": 60,
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "minHeight": 50,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "horizontalAlign": "center",
 "width": "25%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "maxWidth": 60,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- Buttons set"
 },
 "minHeight": 1,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "paddingLeft": 40,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_486C7E0B_473B_092B_41CC_1A757A644B71"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "paddingTop": 40,
 "class": "Container",
 "backgroundOpacity": 0.7,
 "gap": 10,
 "paddingBottom": 40,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "minHeight": 50,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "width": "100%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "maxWidth": 60,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "minHeight": 50,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "width": "100%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxWidth": 60,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "left": "0%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "minHeight": 1,
 "progressRight": 0,
 "paddingLeft": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "minHeight": 50,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "horizontalAlign": "center",
 "width": "14.22%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxWidth": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "minHeight": 50,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "horizontalAlign": "center",
 "right": 10,
 "width": "14.22%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxWidth": 60,
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "minHeight": 50,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "horizontalAlign": "right",
 "right": 20,
 "width": "10%",
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "mode": "push",
 "height": "10%",
 "top": 20,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxWidth": 60,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "minHeight": 1,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "paddingLeft": 0,
 "width": "100%",
 "left": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "maxWidth": 2000,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "minHeight": 0,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "minHeight": 520,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "minHeight": 1,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "layout": "horizontal",
 "paddingLeft": 0,
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 1"
 },
 "minHeight": 1,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "26%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "26%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-1"
 },
 "minHeight": 1,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-2"
 },
 "minHeight": 1,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-3"
 },
 "minHeight": 1,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-4"
 },
 "minHeight": 1,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-5"
 },
 "minHeight": 1,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "vertical",
 "data": {
  "name": "-Level 2-6"
 },
 "minHeight": 1,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "bottom": "25%",
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "top": "25%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "minHeight": 1,
 "id": "Image_486C7E0B_473B_092B_41CC_1A757A644B71",
 "paddingLeft": 0,
 "width": "100%",
 "left": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_486C7E0B_473B_092B_41CC_1A757A644B71.jpg",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "17.738%",
 "top": "0.08%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxHeight": 196,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 631,
 "propagateClick": false,
 "data": {
  "name": "Image3588"
 }
},
{
 "minHeight": 1,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "paddingLeft": 0,
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "height": "46%",
 "shadow": false,
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.3vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.58vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "minHeight": 1,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "75%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button Tour Info"
 },
 "fontSize": "34px",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 78,
 "shadow": false,
 "label": "WHATSAPP",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('http://wa.me/554791538357', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button Panorama List"
 },
 "fontSize": "34px",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 72.4,
 "shadow": false,
 "label": "TELEFONE",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('tel:04730129444', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button Location"
 },
 "fontSize": "34px",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Inserdt Text",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 73.2,
 "shadow": false,
 "label": "INSTAGRAM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.instagram.com/cafe.alpino/', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button Floorplan"
 },
 "fontSize": "34px",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 66.4,
 "shadow": false,
 "label": "FACEBOOK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.facebook.com/alpinocafe/', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontSize": "34px",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 62,
 "shadow": false,
 "label": "LOCALIZA\u00c7\u00c3O",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://goo.gl/maps/XEvKnjETYEXoGMm96', '_blank')",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "layout": "horizontal",
 "paddingLeft": 5,
 "rollOverFontFamily": "Oswald",
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "shadow": false,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "minHeight": 1,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Main Entrance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lobby",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Reception",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Reception",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Meeting Area 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Meeting Area 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Bar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Chill Out",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Terrace",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "layout": "horizontal",
 "paddingLeft": 0,
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Garden",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "layout": "horizontal",
 "paddingLeft": 0,
 "width": "100%",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "layout": "horizontal",
 "paddingLeft": 5,
 "rollOverFontFamily": "Oswald",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "shadow": false,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "minHeight": 1,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "layout": "horizontal",
 "paddingLeft": 5,
 "rollOverFontFamily": "Oswald",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "shadow": false,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "minHeight": 1,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "layout": "horizontal",
 "paddingLeft": 5,
 "rollOverFontFamily": "Oswald",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "shadow": false,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "minHeight": 1,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "layout": "horizontal",
 "paddingLeft": 5,
 "rollOverFontFamily": "Oswald",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "shadow": false,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "minHeight": 1,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "layout": "horizontal",
 "paddingLeft": 5,
 "rollOverFontFamily": "Oswald",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "shadow": false,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "minHeight": 1,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "layout": "absolute",
 "data": {
  "name": "line separator"
 },
 "minHeight": 1,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 23,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "layout": "horizontal",
 "paddingLeft": 10,
 "width": "100%",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "fontSize": 18,
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 36,
 "shadow": false,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textDecoration": "none",
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "minHeight": 1,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "paddingLeft": 0,
 "width": "25%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "maxHeight": 200,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "maxWidth": 200,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "minHeight": 1,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingBottom": 10,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "minHeight": 20,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "minWidth": 20,
 "horizontalAlign": "left",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "layout": "absolute",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "shadow": false,
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
