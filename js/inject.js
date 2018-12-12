// JavaScript source code



chrome.extension.onRequest.addListener(
    function (data) {
        contentNode = document.getElementById("chat_content");
        contentNode.innerHTML = contentNode.innerHTML + "google说:" + data.msg + "\r\n";
        contentNode.scrollTop = contentNode.scrollHeight;
    }
);



function sendChatMsg() {
    var msgNode = document.getElementById("chat_msg");
    if (msgNode.value == "") {
        return;
    }
    chrome.windows.getCurrent(function (wnd) {
        chrome.tabs.getAllInWindow(wnd.id, function (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].url == "https://www.google.com.hk/") {
                    chrome.tabs.sendRequest(tabs[i].id, { msg: msgNode.value });
                    msgNode.value = "";
                }
            }
        });
    });
    contentNode = document.getElementById("chat_content");
    contentNode.innerHTML = contentNode.innerHTML + "我说:" + msgNode.value + "\r\n";
    contentNode.scrollTop = contentNode.scrollHeight;
}

document.getElementById("btn2").addEventListener("click", sendChatMsg, false);
