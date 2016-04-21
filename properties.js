define( [], function () {

    'use strict';

    // *****************************************************************************
    // Dimensions & Measures
    // *****************************************************************************
    var dimensions = {
        uses: "dimensions",
        min : 2,    
        max : 2
        /*
            1. Dimension (on Axis)
            2. Trellis Dimension
        */
    };
    var measures = { 
        uses : "measures",
        min : 1,
        max : 2
        /*
            1. Measure 1 - Main Measure  
            2. Measure 2 - TO BE IMPLEMENTED (ie. for double bar chart, stacked or combo )
        */
    };

    var sorting = { 
        uses: "sorting" 
    };

    var addons = { 
        uses: "addons"
    };

    var appearancePanel = { 
        uses : "settings"
    };

        // *****************************************************************************
    // Treillis  Settings
    // *****************************************************************************
    var trellisConfiguration = {
        type: "items",
        component: "expandable-items",
        label: "Trellis Configuration",
        items: {
            trellis:{
                type: "items",
                label: "Trellis Settings",
                items : {
                    nColumns: {     // number of columns in trellis container
                        ref: "properties.trellis.nColumns",
                        type: "integer",
                        label: "Columns",
                        expression: "optional",
                        defaultValue: 2
                    },
                    nRows: {        // number of rows in trellis container
                        ref: "properties.trellis.nRows",
                        type: "integer",
                        label: "Rows",
                        expression: "optional",
                        defaultValue: 2
                    },
                    chartType: {         // chart type (bar chart, stacked bar chart,... other to come)
                        type: "string",
                        component: "dropdown",
                        label: "Chart Type",
                        ref: "properties.trellis.chartType",
                        options: [
                            { value:"bar", label:"Bar Chart", tooltip:"Bar Chart"},
                            { value:"line", label:"Line Chart", tooltip:"Line Chart"},
                            { value:"area", label:"Area Chart", tooltip:"Area Chart"},
                            { value:"lollipop", label:"Lollipop Chart", tooltip:"Lollipop Chart"},
                            { value:"pie", label:"Pie Chart", tooltip:"Pie Chart"},
                            { value:"step", label:"Step Chart", tooltip:"Step Chart"}
                        ],
                        defaultValue:"bar"
                    },
                    innerRadius: {        // number of rows in trellis container
                        ref: "properties.trellis.innerRadius",
                        type: "number",
                        component: "slider",
                        label: "Inner Radius (%)",
                        min: 0,
                        max: 90,
                        step: 5,
                        defaultValue: 0,
                        show:function(e){ return e.properties.trellis.chartType === "pie" ; } 
                    },
                    /* 
                    isStacked:{ 
                        ref: "properties.trellis.isStacked",
                        label: "Stacked",
                        type: "boolean",
                        defaultValue: false
                    },*/

                    chartOrientation: {  // chart orientation set category dimension on X (vertical) or Y (horizontal)
                        type:"string",
                        component:"buttongroup",
                        label:"Chart Orientation",
                        ref:"properties.trellis.chartOrientation",
                        options:[
                            { value:"horizontal", label:"Horizontal", tooltip:"Horizontal"},
                            { value:"vertical", label:"Vertical", tooltip:"Vertical"}
                        ],
                        defaultValue:"vertical"
                    },
                    showGrid: {         // if true show values on data points (ie. top of the bar) 
                        ref: "properties.trellis.showGrid",
                        component: "switch",
                        options: [{ value: true, label: "On" }, { value: false, label: "Off" }],
                        label: "Show Grid",
                        type: "boolean",
                        defaultValue: true
                    }   
                }       
            },
            labels :{
                type: "items",
                label: "Labels & Axis",
                items:{
                    hideDimensionLabel: {    // if true hide dimension labels (category axis) 
                        ref: "properties.labels.hideDimensionLabel",
                        label: "Hide Dim-Axis Labels",
                        type: "boolean",
                        defaultValue: false
                    },
                    hideMeasureLabel: {      // if true hide measure  labels 
                        ref: "properties.labels.hideMeasureLabel",
                        label: "Hide Measure Labels",
                        type: "boolean",
                        defaultValue: false
                    },
                    valueLabels: {         // if true show values on data points (ie. top of the bar) 
                        ref: "properties.labels.valueLabels",
                        component: "switch",
                        options: [{ value: true, label: "On" }, { value: false, label: "Off" }],
                        label: "Value Labels ",
                        type: "boolean",
                        defaultValue: false
                    },
                    trellisLabelSize :{
                        ref: "properties.labels.trellisLabelSize",
                        type: "integer",
                        label: "Trellis - Labels Size ",
                        expression: "optional",
                        defaultValue: 28
                    },
                    trellisLabelPos:{
                        type:"string",
                        component:"dropdown",
                        label:"Trellis - Labels Position ",
                        ref:"properties.labels.trellisLabelPos",
                        options:[
                            { value:"top", label:"Top", tooltip:"Labels at Top" },
                            { value:"inside", label : "Inside", tooltip:" Labels Centered in Chart" }
                        ],
                        defaultValue: "inside"
                    }
                }
            },
            colors:{
                type: "items",
                label: "Colors Settings",
                items:{
                    colorBy : {  // chart orientation set category dimension on X (vertical) or Y (horizontal)
                        type:"string",
                        component:"dropdown",
                        label:"Colors",
                        ref:"properties.colors.colorBy",
                        options:[
                            { value:"single", label:"Single Color", tooltip:"Single Color" },
                            { value:"dimension", label:"By Dimension", tooltip:"By Dimension" },
                            { value:"expression", label:"By Measure", tooltip:"By Measure" },
                        ],
                        defaultValue:"single"
                    },
                    singleColor : {
                        label:"Select Color",
                        component: "color-picker",
                        ref: "properties.colors.singleColor",
                        type: "integer",
                        defaultValue: 3,
                        show:function(e){ return e.properties.colors.colorBy === "single"; }    
                    }   
                }
            }
        }
    };        

    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            appearance: appearancePanel,
            trellisConfig: trellisConfiguration,
        }
    };
} );