if (Meteor.isClient) {
  Template.hello.events({
    'click #box' : function () {
      Meteor._debug('click');
    }
  });
}
