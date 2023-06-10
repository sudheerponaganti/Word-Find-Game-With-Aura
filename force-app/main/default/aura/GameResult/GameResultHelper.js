({
    fetchResult : function(component) {
       const action = component.get("c.getResults");
       
       action.setCallback(this, function(response){
        const state = response.getState();
        if(state === 'SUCCESS'){
            const result = response.getReturnValue();
            component.set("v.data", result);
        }
       });
       $A.enqueueAction(action);
    }
})