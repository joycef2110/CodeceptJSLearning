Feature('people');

Scenario('Validate people request',  ({ I }) => {
    I.sendGetRequest('/people');
    I.seeResponseCodeIsSuccessful();

});

