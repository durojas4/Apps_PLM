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
            id:'HOMBE',
            type:'rect',
            rect:['0','119','auto','auto','auto','auto']
         },
         {
            id:'uno',
            type:'rect',
            rect:['254','0','auto','auto','auto','auto']
         },
         {
            id:'dos',
            type:'rect',
            rect:['74','734','auto','auto','auto','auto']
         },
         {
            id:'tres',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'cuatro',
            type:'rect',
            rect:['552','623','auto','auto','auto','auto']
         },
         {
            id:'cinco',
            type:'rect',
            rect:['0','521','auto','auto','auto','auto']
         },
         {
            id:'seis',
            type:'rect',
            rect:['251','518','auto','auto','auto','auto']
         },
         {
            id:'SIETE',
            type:'rect',
            rect:['501','453','auto','auto','auto','auto']
         },
         {
            id:'OCHO',
            type:'rect',
            rect:['411','383','auto','auto','auto','auto']
         },
         {
            id:'NUEVE',
            type:'rect',
            rect:['623','345','auto','auto','auto','auto']
         },
         {
            id:'ONCE',
            type:'rect',
            rect:['403','209','auto','auto','auto','auto']
         },
         {
            id:'DOCE',
            type:'rect',
            rect:['556','166','auto','auto','auto','auto']
         },
         {
            id:'PFIZER_LOGO',
            type:'rect',
            rect:['444','781','auto','auto','auto','auto']
         },
         {
            id:'HEMOFILIA4',
            type:'rect',
            rect:['455','932','auto','auto','auto','auto']
         },
         {
            id:'LOGO_PLM',
            type:'rect',
            rect:['48','924','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'PFIZER_LOGO',
            symbolName:'PFIZER_LOGO'
         },
         {
            id:'LOGO_PLM',
            symbolName:'LOGO_PLM'
         },
         {
            id:'HOMBE',
            symbolName:'HOMBE'
         },
         {
            id:'dos',
            symbolName:'dos'
         },
         {
            id:'OCHO',
            symbolName:'OCHO'
         },
         {
            id:'cinco',
            symbolName:'cinco'
         },
         {
            id:'tres',
            symbolName:'tres'
         },
         {
            id:'FONDO2',
            symbolName:'FONDO'
         },
         {
            id:'DOCE',
            symbolName:'DOCE'
         },
         {
            id:'cuatro',
            symbolName:'cuatro'
         },
         {
            id:'ONCE',
            symbolName:'ONCE'
         },
         {
            id:'NUEVE',
            symbolName:'NUEVE'
         },
         {
            id:'SIETE',
            symbolName:'SIETE'
         },
         {
            id:'uno',
            symbolName:'uno'
         },
         {
            id:'seis',
            symbolName:'seis'
         },
         {
            id:'HEMOFILIA4',
            symbolName:'HEMOFILIA'
         }
         ]
      },
   states: {
      "Base State": {
         "${_HOMBE}": [
            ["style", "opacity", '0']
         ],
         "${_tres}": [
            ["style", "left", '353px'],
            ["style", "top", '-124px']
         ],
         "${_SIETE}": [
            ["style", "top", '-111px'],
            ["style", "left", '504px']
         ],
         "${_NUEVE}": [
            ["style", "top", '-95px']
         ],
         "${_PFIZER_LOGO}": [
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.2']
         ],
         "${_dos}": [
            ["style", "top", '-126px'],
            ["style", "left", '72px']
         ],
         "${_OCHO}": [
            ["style", "top", '-101px'],
            ["style", "left", '414px']
         ],
         "${_ONCE}": [
            ["style", "top", '-101px'],
            ["style", "left", '406px']
         ],
         "${_DOCE}": [
            ["style", "top", '-76px'],
            ["style", "left", '552px']
         ],
         "${_FONDO2}": [
            ["style", "opacity", '0']
         ],
         "${_uno}": [
            ["style", "top", '-71px'],
            ["style", "opacity", '0'],
            ["style", "left", '251px']
         ],
         "${_seis}": [
            ["style", "top", '-96px']
         ],
         "${_cuatro}": [
            ["style", "top", '-75px']
         ],
         "${_cinco}": [
            ["style", "top", '-161px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1024px'],
            ["style", "width", '768px']
         ],
         "${_HEMOFILIA4}": [
            ["transform", "scaleX", '1.5'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '1.5']
         ],
         "${_LOGO_PLM}": [
            ["style", "top", '924px'],
            ["style", "opacity", '0'],
            ["style", "left", '-204px']
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
            { id: "eid24", tween: [ "style", "${_cuatro}", "top", '623px', { fromValue: '-75px'}], position: 1500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid95", tween: [ "transform", "${_HEMOFILIA4}", "scaleX", '0.8', { fromValue: '1.5'}], position: 7000, duration: 250 },
            { id: "eid90", tween: [ "style", "${_LOGO_PLM}", "left", '48px', { fromValue: '-204px'}], position: 7250, duration: 500 },
            { id: "eid36", tween: [ "style", "${_OCHO}", "top", '383px', { fromValue: '-101px'}], position: 3500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid26", tween: [ "style", "${_cinco}", "top", '521px', { fromValue: '-161px'}], position: 2000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid96", tween: [ "transform", "${_HEMOFILIA4}", "scaleY", '0.8', { fromValue: '1.5'}], position: 7000, duration: 250 },
            { id: "eid7", tween: [ "style", "${_uno}", "top", '887px', { fromValue: '-71px'}], position: 0, duration: 1500, easing: "easeInOutBack" },
            { id: "eid77", tween: [ "transform", "${_PFIZER_LOGO}", "scaleY", '1', { fromValue: '0.2'}], position: 6500, duration: 500 },
            { id: "eid59", tween: [ "style", "${_FONDO2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000, easing: "easeInOutBack" },
            { id: "eid87", tween: [ "style", "${_LOGO_PLM}", "opacity", '1', { fromValue: '0.000000'}], position: 7595, duration: 155 },
            { id: "eid56", tween: [ "style", "${_HOMBE}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 2000, easing: "easeInOutBack" },
            { id: "eid94", tween: [ "style", "${_HEMOFILIA4}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 250 },
            { id: "eid22", tween: [ "style", "${_tres}", "top", '730px', { fromValue: '-124px'}], position: 1000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid76", tween: [ "transform", "${_PFIZER_LOGO}", "scaleX", '1', { fromValue: '0.2'}], position: 6500, duration: 500 },
            { id: "eid75", tween: [ "style", "${_PFIZER_LOGO}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 500 },
            { id: "eid11", tween: [ "style", "${_uno}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1500, easing: "easeInOutBack" },
            { id: "eid46", tween: [ "style", "${_DOCE}", "top", '166px', { fromValue: '-76px'}], position: 5000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid28", tween: [ "style", "${_seis}", "top", '518px', { fromValue: '-96px'}], position: 2500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid38", tween: [ "style", "${_NUEVE}", "top", '345px', { fromValue: '-95px'}], position: 4000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid41", tween: [ "style", "${_ONCE}", "top", '209px', { fromValue: '-101px'}], position: 4500, duration: 1500, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "style", "${_SIETE}", "top", '453px', { fromValue: '-111px'}], position: 3000, duration: 1500, easing: "easeInOutBack" },
            { id: "eid17", tween: [ "style", "${_dos}", "top", '736px', { fromValue: '-126px'}], position: 500, duration: 1500, easing: "easeInOutBack" }         ]
      }
   }
},
"uno": {
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
      id: 'ocho-8v_gbl',
      type: 'image',
      rect: ['0px','0px','78px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ocho-8v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ocho-8v_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '78px']
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
"dos": {
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
      id: 'cinco-5v_gbl',
      type: 'image',
      rect: ['0px','0px','150px','113px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cinco-5v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '113px'],
            ["style", "width", '150px']
         ],
         "${_cinco-5v_gbl}": [
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
"tres": {
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
      id: 'nueve-9v_gbl',
      type: 'image',
      rect: ['0px','0px','106px','107px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/nueve-9v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_nueve-9v_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '107px'],
            ["style", "width", '106px']
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
"cuatro": {
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
      id: 'siete-7v_gbl',
      type: 'image',
      rect: ['0px','0px','130px','61px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/siete-7v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '61px'],
            ["style", "width", '130px']
         ],
         "${_siete-7v_gbl}": [
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
"cinco": {
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
      id: 'tres-3v_gbl',
      type: 'image',
      rect: ['0px','0px','97px','148px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tres-3v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tres-3v_gbl}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148px'],
            ["style", "width", '97px']
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
"seis": {
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
      id: 'seis-6v_gbl',
      type: 'image',
      rect: ['0px','0px','149px','83px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/seis-6v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_seis-6v_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "width", '149px']
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
      id: 'diez-10v_gbl',
      type: 'image',
      rect: ['0px','0px','113px','92px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/diez-10v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '92px'],
            ["style", "width", '113px']
         ],
         "${_diez-10v_gbl}": [
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
      id: 'cuatro-4v_gbl',
      type: 'image',
      rect: ['0px','0px','90px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cuatro-4v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cuatro-4v_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '90px']
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
      id: 'once-11v_gbl',
      type: 'image',
      rect: ['0px','0px','87px','89px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/once-11v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '89px'],
            ["style", "width", '87px']
         ],
         "${_once-11v_gbl}": [
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
      id: 'dos-2v_gbl2',
      type: 'image',
      rect: ['0px','0px','59px','94px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/dos-2v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dos-2v_gbl2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '94px'],
            ["style", "width", '59px']
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
"DOCE": {
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
      id: 'uno-1v_gbl',
      type: 'image',
      rect: ['0px','0px','168px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/uno-1v_gbl.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_uno-1v_gbl}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '68px'],
            ["style", "width", '168px']
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
"HOMBE": {
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
      id: 'hombre_v',
      type: 'image',
      rect: ['0px','0px','715px','905px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hombre_v.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hombre_v}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '905px'],
            ["style", "width", '715px']
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
      id: 'fondo_v',
      type: 'image',
      rect: ['0px','0px','768px','1024px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fondo_v.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '1024px'],
            ["style", "width", '768px']
         ],
         "${_fondo_v}": [
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
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
"LOGO_PLM": {
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
      id: 'PLM_LOGO3',
      type: 'image',
      rect: ['0px','0px','192px','58px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/PLM_LOGO.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PLM_LOGO3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '192px']
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
      id: 'HEMOFILIA3',
      type: 'image',
      rect: ['0px','0px','223px','47px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HEMOFILIA.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_HEMOFILIA3}": [
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
})(jQuery, AdobeEdge, "EDGE-18282185");
