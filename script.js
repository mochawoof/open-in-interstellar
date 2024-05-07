chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		title: "Open in Interstellar",
		contexts: ["link"],
		id: "menu"
	});
});

encode = e=>e?encodeURIComponent(e.toString().split("").map(((e,t)=>t%2?String.fromCharCode(2^e.charCodeAt()):e)).join("")):e;

chrome.contextMenus.onClicked.addListener((info) => {
	console.log(info);
	if (info.menuItemId == "menu") {
		chrome.tabs.create({
			url: "https://latenightnugget.vercel.app/a/" + encode(info.linkUrl)
		});
	}
});