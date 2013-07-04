/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'FONDO2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'HOMBRE',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'UNO',
            type:'rect',
            rect:['220','690','auto','auto','auto','auto']
         },
         {
            id:'nueve-9h_gbl',
            type:'image',
            rect:['296px','566px','79px','79px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"nueve-9h_gbl.png",'0px','0px']
         },
         {
            id:'TRES3',
            type:'rect',
            rect:['66','532','auto','auto','auto','auto']
         },
         {
            id:'CUATRO',
            type:'rect',
            rect:['449','543','auto','auto','auto','auto']
         },
         {
            id:'CINCO',
            type:'rect',
            rect:['0','352','auto','auto','auto','auto']
         },
         {
            id:'SEIS',
            type:'rect',
            rect:['240','370','auto','auto','auto','auto']
         },
         {
            id:'SIETE',
            type:'rect',
            rect:['528','370','auto','auto','auto','auto']
         },
         {
            id:'OCHO',
            type:'rect',
            rect:['397','232','auto','auto','auto','auto']
         },
         {
            id:'NUEVE',
            type:'rect',
            rect:['722','274','auto','auto','auto','auto']
         },
         {
            id:'DIEZ',
            type:'rect',
            rect:['558','30','auto','auto','auto','auto']
         },
         {
            id:'ONCE',
            type:'rect',
            rect:['793','85','auto','auto','auto','auto']
         },
         {
            id:'PFIZER_LOGO',
            type:'rect',
            rect:['678','526','auto','auto','auto','auto']
         },
         {
            id:'PLM_LOGO2',
            type:'rect',
            rect:['85','679','auto','auto','auto','auto']
         },
         {
            id:'HEMOFILIA3',
            type:'rect',
            rect:['689','683','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'PFIZER_LOGO',
            symbolName:'PFIZER_LOGO'
         },
         {
            id:'CUATRO',
            symbolName:'CUATRO'
         },
         {
            id:'ONCE',
            symbolName:'ONCE'
         },
         {
            id:'OCHO',
            symbolName:'OCHO'
         },
         {
            id:'FONDO2',
            symbolName:'FONDO'
         },
         {
            id:'HOMBRE',
            symbolName:'HOMBRE'
         },
         {
            id:'HEMOFILIA3',
            symbolName:'HEMOFILIA'
         },
         {
            id:'SEIS',
            symbolName:'SEIS'
         },
         {
            id:'NUEVE',
            symbolName:'NUEVE'
         },
         {
            id:'PLM_LOGO2',
            symbolName:'PLM_LOGO'
         },
         {
            id:'CINCO',
            symbolName:'CINCO'
         },
         {
            id:'DIEZ',
            symbolName:'DIEZ'
         },
         {
            id:'SIETE',
            symbolName:'SIETE'
         },
         {
            id:'TRES3',
            symbolName:'TRES'
         },
         {
            id:'UNO',
            symbolName:'UNO'
         }
         ]
      },
   states: {
      "Base State": {
         "${_SIETE}": [
            ["style", "top", '-116px']
         ],
         "${_DIEZ}": [
            ["style", "top", '-129px']
         ],
         "${_PLM_LOGO2}": [
            ["style", "top", '677px'],
            ["style", "opacity", '0'],
            ["style", "left", '-201px']
         ],
         "${_UNO}": [
            ["style", "top", '-56px']
         ],
         "${_PFIZER_LOGO}": [
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.2']
         ],
         "${_OCHO}": [
            ["style", "top", '-114px']
         ],
         "${_ONCE}": [
            ["style", "top", '-83px']
         ],
         "${_HEMOFILIA3}": [
            ["transform", "scaleX", '1.5'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.5']
         ],
         "${_HOMBRE}": [
            ["style", "opacity", '0']
         ],
         "${_FONDO2}": [
            ["style", "opacity", '0']
         ],
         "${_nueve-9h_gbl}": [
            ["style", "left", '296px'],
            ["style", "top", '-94px']
         ],
         "${_TRES3}": [
            ["style", "top", '-100px']
         ],
         "${_NUEVE}": [
            ["style", "top", '-108px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_CUATRO}": [
            ["style", "top", '-58px']
         ],
         "${_SEIS}": [
            ["style", "top", '-70px']
         ],
         "${_CINCO}": [
            ["style", "top", '-116px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7750,
         autoPlay: true,
         timeline: [
            { id: "eid28", tween: [ "style", "${_ONCE}", "top", '85px', { fromValue: '-83px'}], position: 5000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid67", tween: [ "style", "${_HEMOFILIA3}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 250 },
            { id: "eid62", tween: [ "style", "${_PLM_LOGO2}", "left", '85px', { fromValue: '-201px'}], position: 7250, duration: 500 },
            { id: "eid10", tween: [ "style", "${_TRES3}", "top", '532px', { fromValue: '-100px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid59", tween: [ "style", "${_PLM_LOGO2}", "opacity", '1', { fromValue: '0.000000'}], position: 7547, duration: 203 },
            { id: "eid20", tween: [ "style", "${_OCHO}", "top", '232px', { fromValue: '-114px'}], position: 3500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid7", tween: [ "style", "${_nueve-9h_gbl}", "top", '566px', { fromValue: '-94px'}], position: 500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid5", tween: [ "style", "${_UNO}", "top", '690px', { fromValue: '-56px'}], position: 0, duration: 1500, easing: "easeInOutBack" },
            { id: "eid51", tween: [ "transform", "${_PFIZER_LOGO}", "scaleY", '1', { fromValue: '0.2'}], position: 6500, duration: 500 },
            { id: "eid36", tween: [ "style", "${_FONDO2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000, easing: "easeInOutBack" },
            { id: "eid69", tween: [ "transform", "${_HEMOFILIA3}", "scaleY", '0.8', { fromValue: '1.5'}], position: 7000, duration: 250 },
            { id: "eid63", tween: [ "style", "${_PLM_LOGO2}", "top", '679px', { fromValue: '677px'}], position: 7250, duration: 500 },
            { id: "eid22", tween: [ "style", "${_NUEVE}", "top", '274px', { fromValue: '-108px'}], position: 4000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid49", tween: [ "style", "${_PFIZER_LOGO}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500 },
            { id: "eid50", tween: [ "transform", "${_PFIZER_LOGO}", "scaleX", '1', { fromValue: '0.2'}], position: 6500, duration: 500 },
            { id: "eid39", tween: [ "style", "${_HOMBRE}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 2000, easing: "easeInOutBack" },
            { id: "eid18", tween: [ "style", "${_SIETE}", "top", '370px', { fromValue: '-116px'}], position: 3000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid12", tween: [ "style", "${_CUATRO}", "top", '543px', { fromValue: '-58px'}], position: 1500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid26", tween: [ "style", "${_DIEZ}", "top", '30px', { fromValue: '-129px'}], position: 4500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid16", tween: [ "style", "${_SEIS}", "top", '370px', { fromValue: '-70px'}], position: 2500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid68", tween: [ "transform", "${_HEMOFILIA3}", "scaleX", '0.8', { fromValue: '1.5'}], position: 7000, duration: 250 },
            { id: "eid14", tween: [ "style", "${_CINCO}", "top", '352px', { fromValue: '-116px'}], position: 2000, duration: 1500, easing: "easeInOutBack" }         ]
      }
   }
},
"UNO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ocho-8h_gbl',
      type: 'image',
      rect: ['0px','0px','59px','46px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ocho-8h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '46px'],
            ["style", "width", '59px']
         ],
         "${_ocho-8h_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"TRES": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cinco-5h_gbl',
      type: 'image',
      rect: ['0px','0px','122px','93px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cinco-5h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '93px'],
            ["style", "width", '122px']
         ],
         "${_cinco-5h_gbl}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"CUATRO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'siete-7h_gbl',
      type: 'image',
      rect: ['0px','0px','96px','46px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/siete-7h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '46px'],
            ["style", "width", '96px']
         ],
         "${_siete-7h_gbl}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"CINCO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'tres-3h_gbl',
      type: 'image',
      rect: ['0px','0px','72px','110px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tres-3h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '110px'],
            ["style", "width", '72px']
         ],
         "${_tres-3h_gbl}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SEIS": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'seis-6h_gbl',
      type: 'image',
      rect: ['0px','0px','111px','61px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/seis-6h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_seis-6h_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '61px'],
            ["style", "width", '111px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SIETE": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'diez-10h_gbl',
      type: 'image',
      rect: ['0px','0px','127px','103px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/diez-10h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_diez-10h_gbl}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '103px'],
            ["style", "width", '127px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"OCHO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cuatro-4h_gbl',
      type: 'image',
      rect: ['0px','0px','103px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cuatro-4h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '103px']
         ],
         "${_cuatro-4h_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"NUEVE": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'once-11h_gbl',
      type: 'image',
      rect: ['0px','0px','100px','102px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/once-11h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '102px'],
            ["style", "width", '100px']
         ],
         "${_once-11h_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"DIEZ": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'dos-2h_gbl',
      type: 'image',
      rect: ['0px','0px','67px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dos-2h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dos-2h_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '106px'],
            ["style", "width", '67px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ONCE": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'uno-h_gbl',
      type: 'image',
      rect: ['0px','0px','189px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/uno-h_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_uno-h_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '189px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"FONDO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'fondo_h2',
      type: 'image',
      rect: ['0px','0px','1024px','768px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fondo_h.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fondo_h2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"HOMBRE": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'hombre-h2',
      type: 'image',
      rect: ['0px','0px','592px','768px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hombre-h.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '592px']
         ],
         "${_hombre-h2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"PFIZER_LOGO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'LOGO_PFIZER',
      type: 'image',
      rect: ['0px','0px','246px','151px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/LOGO_PFIZER.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_LOGO_PFIZER}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '151px'],
            ["style", "width", '246px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"PLM_LOGO": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'PLM_LOGO',
      type: 'image',
      rect: ['0px','0px','189px','56px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/PLM_LOGO.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PLM_LOGO}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '189px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"HEMOFILIA": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'HEMOFILIA2',
      type: 'image',
      rect: ['0px','0px','223px','47px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HEMOFILIA.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_HEMOFILIA2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '223px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5012822");
