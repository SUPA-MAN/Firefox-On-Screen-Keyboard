/*
OSK DTS
 Version: 2.0.0.0 - E
 Author:  Sebastian Cerda
 Date:    17 03 2022
 Purpose: A virtual Keyboard for client ElectroluX
 */

browser.webNavigation.onCompleted.addListener(function(details) {
    browser.tabs.sendMessage(details.tabId, JSON.stringify({ "directive": "insertKeyboard" }));
});