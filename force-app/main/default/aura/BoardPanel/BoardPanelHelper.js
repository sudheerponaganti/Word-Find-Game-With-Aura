({
    addResultRecord : function(component, gameResult) {
        // cfreate apex method call action
    const action = component.get("c.addResult");
    const modeValue = component.get("v.selectedMode").toUpperCase();
    //set parameters
    action.setParams({
        result : gameResult.toUpperCase(),
        mode   : modeValue
    });

    // define a callback
    action.setCallback(this, function(response) {
        const state = response.getState();
        if (state !== "SUCCESS") {
           console.error("Error in saving Record");
        }
    });

    // call Apex method
    $A.enqueueAction(action);

    },

    showToast : function(title, message, type) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title,
            message,
            type
        });
        toastEvent.fire();
    }
})