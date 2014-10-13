
Router.route('/', {name: "home"});
Router.route('/blog', {name: "blog"});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);



  Template.Home.events({
    'click #go-blog': function () {
        Router.go('/blog');
        console.log("Router.go('/blog')");
    }
  });

  Template.Blog.events({
    'click #go-home': function () {
        Router.go('/');
        console.log("Router.go('/')");

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
