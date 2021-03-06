var cornerstoneTools = (function ($, cornerstone, cornerstoneTools) {

    "use strict";

    if(cornerstoneTools === undefined) {
        cornerstoneTools = {};
    }

    function simpleMouseButtonTool(mouseDownCallback)
    {
        var toolInterface = {
            activate: function(element, mouseButtonMask, options) {
                $(element).off('CornerstoneToolsMouseDownActivate', mouseDownCallback);
                var eventData = {
                    mouseButtonMask: mouseButtonMask,
                    options: options
                };
                $(element).on("CornerstoneToolsMouseDownActivate", eventData, mouseDownCallback);
            },
            disable : function(element) {$(element).off('CornerstoneToolsMouseDownActivate', mouseDownCallback);},
            enable : function(element) {$(element).off('CornerstoneToolsMouseDownActivate', mouseDownCallback);},
            deactivate : function(element) {$(element).off('CornerstoneToolsMouseDownActivate', mouseDownCallback);},
        };
        return toolInterface;
    }

    // module exports
    cornerstoneTools.simpleMouseButtonTool = simpleMouseButtonTool;
    return cornerstoneTools;
}($, cornerstone, cornerstoneTools));