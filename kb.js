/*
 FxKeyboard - MOD DTS
 Version: 1.10.2
 Author:  Sebastian Cerda
 Date:    09 02 2021
 Purpose: A virtual Keyboard for client Falabella
 */

browser.webNavigation.onCompleted.addListener(function(details) {
    browser.tabs.sendMessage(details.tabId, JSON.stringify({ "directive": "insertKeyboard" }));
});