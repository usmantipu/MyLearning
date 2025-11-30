browser.addCommand("getElementProp", function (customVar1, customVar2) {
    return {
        props: this.getElementsByTagName(customVar1)[0].getAttribute(customVar2);
        
    }
})