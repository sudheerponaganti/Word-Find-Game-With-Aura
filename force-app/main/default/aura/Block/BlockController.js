({
    blockClickHandler : function(component, event, helper) {
        const open = component.get("v.open");
        if(!open){
            component.set("v.open", true);
            //get label value
            const label = component.get("v.label");
            //fire the component event(block click evevent)

            let compEvent = component.getEvent("onclick");
            compEvent.setParams({value : label});
            compEvent.fire();
        }
    },
    scriptsLoaded : function(component, event, helper) {
        const boardBlockElement = component.getElement(".board-block");
        fitText(boardBlockElement);
    }
})