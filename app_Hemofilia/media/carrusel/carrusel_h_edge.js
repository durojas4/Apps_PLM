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
            id:'pfizer2',
            type:'rect',
            rect:['586','21','auto','auto','auto','auto']
         },
         {
            id:'xynthia',
            type:'rect',
            rect:['341','26','auto','auto','auto','auto']
         },
         {
            id:'benefix3',
            type:'rect',
            rect:['36','30','auto','auto','auto','auto']
         },
         {
            id:'pfizer4',
            type:'rect',
            rect:['524','44','auto','auto','auto','auto']
         },
         {
            id:'xyntha5',
            type:'rect',
            rect:['395','44','auto','auto','auto','auto']
         },
         {
            id:'benefix5',
            type:'rect',
            rect:['36','30','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'pfizer2',
            symbolName:'pfizer'
         },
         {
            id:'xyntha5',
            symbolName:'xyntha'
         },
         {
            id:'benefix5',
            symbolName:'benefix'
         },
         {
            id:'benefix3',
            symbolName:'benefix'
         },
         {
            id:'pfizer4',
            symbolName:'pfizer'
         },
         {
            id:'xynthia',
            symbolName:'xyntha'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '80px'],
            ["style", "width", '1024px']
         ],
         "${_benefix5}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '-586px']
         ],
         "${_xyntha5}": [
            ["style", "top", '4px'],
            ["style", "opacity", '0'],
            ["style", "left", '-283px']
         ],
         "${_pfizer4}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '0'],
            ["style", "left", '-169px']
         ],
         "${_pfizer2}": [
            ["style", "top", '-115px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "opacity", '1'],
            ["style", "left", '836px']
         ],
         "${_benefix3}": [
            ["style", "top", '-111px'],
            ["style", "opacity", '0'],
            ["style", "left", '37px']
         ],
         "${_xynthia}": [
            ["style", "top", '190px'],
            ["style", "opacity", '1'],
            ["style", "left", '425px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 12250,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "style", "${_xynthia}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid15", tween: [ "style", "${_xynthia}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 1000 },
            { id: "eid21", tween: [ "style", "${_xynthia}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 1000 },
            { id: "eid12", tween: [ "style", "${_pfizer2}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid17", tween: [ "style", "${_pfizer2}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1000 },
            { id: "eid23", tween: [ "style", "${_pfizer2}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 1000 },
            { id: "eid33", tween: [ "style", "${_pfizer4}", "left", '836px', { fromValue: '-169px'}], position: 10000, duration: 750, easing: "easeOutQuint" },
            { id: "eid48", tween: [ "style", "${_benefix5}", "left", '36px', { fromValue: '-586px'}], position: 11500, duration: 750, easing: "easeOutQuint" },
            { id: "eid32", tween: [ "style", "${_pfizer4}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 750, easing: "easeOutQuint" },
            { id: "eid49", tween: [ "style", "${_benefix5}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 750, easing: "easeOutQuint" },
            { id: "eid127", tween: [ "style", "${_benefix3}", "top", '8px', { fromValue: '-111px'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid4", tween: [ "style", "${_xynthia}", "top", '4px', { fromValue: '190px'}], position: 500, duration: 500, easing: "easeOutBounce" },
            { id: "eid2", tween: [ "style", "${_pfizer2}", "top", '0px', { fromValue: '-115px'}], position: 0, duration: 500, easing: "easeOutBounce" },
            { id: "eid123", tween: [ "style", "${_benefix3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid125", tween: [ "style", "${_benefix3}", "opacity", '1', { fromValue: '1'}], position: 3500, duration: 0, easing: "easeOutBounce" },
            { id: "eid11", tween: [ "style", "${_benefix3}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid13", tween: [ "style", "${_benefix3}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 1000 },
            { id: "eid22", tween: [ "style", "${_benefix3}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1000 },
            { id: "eid45", tween: [ "style", "${_xyntha5}", "opacity", '1', { fromValue: '0'}], position: 10750, duration: 750, easing: "easeOutQuint" },
            { id: "eid43", tween: [ "style", "${_xyntha5}", "left", '425px', { fromValue: '-283px'}], position: 10750, duration: 750, easing: "easeOutQuint" }         ]
      }
   }
},
"pfizer": {
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
      id: 'pfizer',
      type: 'image',
      rect: ['0px','0px','142px','81px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pfizer.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pfizer}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '81px'],
            ["style", "width", '142px']
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
"xyntha": {
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
      id: 'xyntha',
      type: 'image',
      rect: ['0px','0px','173px','72px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/xyntha.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_xyntha}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72px'],
            ["style", "width", '173px']
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
"benefix": {
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
      id: 'bemefix',
      type: 'image',
      rect: ['53px','0','128px','63px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bemefix.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bemefix}": [
            ["style", "left", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '63px'],
            ["style", "width", '233px']
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
})(jQuery, AdobeEdge, "EDGE-10035970");
