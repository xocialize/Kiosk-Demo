// JavaScript Document
var aMessage = {'command':'hello', data:[5,6,7,8,9]}
window.webkit.messageHandlers.interOp.postMessage(aMessage)

alert("testing");