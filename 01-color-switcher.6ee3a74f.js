!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.setAttribute("disabled","");var r=null;t.addEventListener("click",(function(){a.backgroundColor=n(),r=setInterval((function(){a.backgroundColor=n()}),1e3),e.attributes.disabled&&(t.setAttribute("disabled",""),e.removeAttribute("disabled",""))})),e.addEventListener("click",(function(){clearInterval(r),t.attributes.disabled&&(t.removeAttribute("disabled",""),e.setAttribute("disabled",""))}));var a=document.body.style;function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.6ee3a74f.js.map
