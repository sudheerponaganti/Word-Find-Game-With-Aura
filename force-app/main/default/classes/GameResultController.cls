public with sharing class GameResultController {
    

    @AuraEnabled
    public static List<Word_Shuffle__c> getResults(){
        // get current user's Id
        String userId = UserInfo.getUserId();

        List<Word_Shuffle__c> results = [SELECT Id, Name, Mode__c, Result__c,CreatedDate 
                                         FROM Word_Shuffle__c
                                         WHERE CreatedById =:userId
                                         WITH SECURITY_ENFORCED
                                         ORDER BY CreatedDate DESC];

           return results;
    }
}