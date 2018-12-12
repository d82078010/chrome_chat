// JavaScript source code
// 
document.getElementById("btn1").addEventListener("click", function () {
    chrome.tabs.create({ 'url': 'chat_tab.html' }); }, false);
