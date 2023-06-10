({
    startGame : function(component, event, helper) {
        //access comboBox
       let gameModeComboBox =  component.find("gameMode");
       
       // access the value of the comboBox
       let selectedValue = gameModeComboBox.get("v.value");
       
       const selectedMode = component.get("v.selectedMode");

       // update selectedMode Attribute
       component.set("v.selectedMode", selectedValue);

     if(selectedMode){
        const boardComp = component.find("boardComp");
        // call aura method
        boardComp.startGame();
     }

    },

    reshuffleBoard : function(component, event, helper){
        const boardComp = component.find("boardComp");
        // call reshuffle aura method
        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisabled", true);
    },

    onResultHandler : function(component, event, helper){
        const result = event.getParam("result");
        console.log('the result event value is', result)
        if(result === "win"){
           component.set("v.reshuffleDisabled", true);
           helper.showToast("YOU WIN", "Hurray !!", "success");
        }else{
            component.set("v.reshuffleDisabled", false);
            helper.showToast("YOU LOSE", "Reshuffle the board to keep playing", "error");
        }
        helper.addResultRecord(component,result);
    }
})