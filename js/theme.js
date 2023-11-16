const link = document.createElement("link");
link.rel  = "stylesheet";

const hrefs = [
	"/css/light.css",
	"/css/dark.css",
];

function set_theme(is_dark) { link.href = hrefs[+is_dark]; };
function toggle_theme() { set_theme(link.href.indexOf(hrefs[1]) == -1); }
set_theme(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)


document.head.appendChild(link);