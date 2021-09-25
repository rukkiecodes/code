const init = () => {
  /*EDITOR THEMES START HERE*/
  require("brace/theme/chrome");
  require("brace/theme/ambiance");
  require("brace/theme/chaos");
  require("brace/theme/clouds_midnight");
  require("brace/theme/clouds");
  require("brace/theme/cobalt");
  require("brace/theme/crimson_editor");
  require("brace/theme/dawn");
  require("brace/theme/dracula");
  require("brace/theme/dreamweaver");
  require("brace/theme/eclipse");
  require("brace/theme/github");
  require("brace/theme/gob");
  require("brace/theme/gruvbox");
  require("brace/theme/idle_fingers");
  require("brace/theme/iplastic");
  require("brace/theme/katzenmilch");
  require("brace/theme/kr_theme");
  require("brace/theme/kuroir");
  require("brace/theme/merbivore_soft");
  require("brace/theme/merbivore");
  require("brace/theme/mono_industrial");
  require("brace/theme/monokai");
  require("brace/theme/pastel_on_dark");
  require("brace/theme/solarized_dark");
  require("brace/theme/solarized_light");
  require("brace/theme/sqlserver");
  require("brace/theme/terminal");
  require("brace/theme/textmate");
  require("brace/theme/tomorrow_night_blue");
  require("brace/theme/tomorrow_night_bright");
  require("brace/theme/tomorrow_night_eighties");
  require("brace/theme/tomorrow_night");
  require("brace/theme/tomorrow");
  require("brace/theme/twilight");
  require("brace/theme/vibrant_ink");
  require("./themes/codeBlock") // custom theme
  /*EDITOR THEMES EDDS HERE*/
  require("brace/ext/language_tools");
  require("brace/ext/searchbox");
  require("brace/ext/split");
  require("brace/keybinding/vim");
  require("brace/keybinding/emacs");
  require("brace/mode/html");
  require("brace/mode/javascript");
  require("brace/mode/less");
  require("brace/ext/beautify");
};

export default init;
