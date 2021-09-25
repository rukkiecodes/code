ace.define("ace/theme/codeBlock",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-codeBlock";
exports.cssText = "\
ace-codeBlock .ace_gutter {\
background: #1C1E31;\
color: rgb(144,145,148)\
}\
.ace-codeBlock .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-codeBlock {\
background-color: #1C1E31;\
color: #f8f8f2\
}\
.ace-codeBlock .ace_cursor {\
color: #f8f8f0\
}\
.ace-codeBlock .ace_marker-layer .ace_selection {\
background: #44475a\
}\
.ace-codeBlock.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1C1E31;\
border-radius: 2px\
}\
.ace-codeBlock .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
.ace-codeBlock .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3B3A32\
}\
.ace-codeBlock .ace_marker-layer .ace_active-line {\
background: #44475a\
}\
.ace-codeBlock .ace_gutter-active-line {\
background-color: #44475a\
}\
.ace-codeBlock .ace_marker-layer .ace_selected-word {\
border: 1px solid #44475a\
}\
.ace-codeBlock .ace_fold {\
background-color: #50fa7b;\
border-color: #f8f8f2\
}\
.ace-codeBlock .ace_keyword {\
color: #ff79c6\
}\
.ace-codeBlock .ace_constant.ace_language {\
color: #bd93f9\
}\
.ace-codeBlock .ace_constant.ace_numeric {\
color: #bd93f9\
}\
.ace-codeBlock .ace_constant.ace_character {\
color: #bd93f9\
}\
.ace-codeBlock .ace_constant.ace_character.ace_escape {\
color: #ff79c6\
}\
.ace-codeBlock .ace_constant.ace_other {\
color: #bd93f9\
}\
.ace-codeBlock .ace_support.ace_function {\
color: #8be9fd\
}\
.ace-codeBlock .ace_support.ace_constant {\
color: #6be5fd\
}\
.ace-codeBlock .ace_support.ace_class {\
font-style: italic;\
color: #66d9ef\
}\
.ace-codeBlock .ace_support.ace_type {\
font-style: italic;\
color: #66d9ef\
}\
.ace-codeBlock .ace_storage {\
color: #ff79c6\
}\
.ace-codeBlock .ace_storage.ace_type {\
font-style: italic;\
color: #8be9fd\
}\
.ace-codeBlock .ace_invalid {\
color: #F8F8F0;\
background-color: #ff79c6\
}\
.ace-codeBlock .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #bd93f9\
}\
.ace-codeBlock .ace_string {\
color: #f1fa8c\
}\
.ace-codeBlock .ace_comment {\
color: #6272a4\
}\
.ace-codeBlock .ace_variable {\
color: #50fa7b\
}\
.ace-codeBlock .ace_variable.ace_parameter {\
font-style: italic;\
color: #ffb86c\
}\
.ace-codeBlock .ace_entity.ace_other.ace_attribute-name {\
color: #50fa7b\
}\
.ace-codeBlock .ace_entity.ace_name.ace_function {\
color: #50fa7b\
}\
.ace-codeBlock .ace_entity.ace_name.ace_tag {\
color: #ff79c6\
}\
";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
