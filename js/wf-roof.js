var s,
WFRoot = {

  settings: {
    trigger: $('#wf-roof .wf-roof-trigger'),
    height: $('#wf-roof').outerHeight() -10,
    initClass: "closed"
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
    
  },

  bindUIActions: function() {
    // s.moreButton.on("click", function() {
    //   NewsWidget.getMoreArticles(s.numArticles);
    // });
    $('#wf-roof').addClass(s.initClass);
    // $('#wf-roof .wf-roof-container').hide();
    // $(s.trigger).click(function(){
    //   if ($("#wf-roof").hasClass("closed")) {
    //     $('#wf-roof.closed').animate({
    //       top: "0"
    //     }, "fast", function(){
    //       // complete
    //       $('#wf-roof.closed').removeClass("closed").addClass("open");
    //       $('#wf-roof .wf-roof-container').fadeIn();
    //     })
    //   } else {
    //     $('#wf-roof').animate({
    //       top: "-" + s.height
    //     }, "fast", function(){
    //       // complete
    //       $('#wf-roof').removeClass("open").addClass("closed");
    //       $('#wf-roof .wf-roof-container').hide();
    //     })
    //   }
    //
    // })
    $('#wf-roof').click(function(e){
      return false;
    })
    $(s.trigger).click(function(e){
      if ($("#wf-roof").hasClass("closed")) {
        $('#wf-roof.closed').removeClass("closed").addClass("open");
        $('#wf-roof .wf-roof-container').show();
      } else {
        $('#wf-roof').removeClass("open").addClass("closed");
        $('#wf-roof .wf-roof-container').hide();
      }
    })
  },

  getMoreArticles: function(numToGet) {
    // $.ajax or something
    // using numToGet as param
  }

};


$(document).ready(function() {
    // $('#wf-roof.closed .wf-roof-trigger').click(function(){
    //   $('#wf-roof.closed').animate({
    //     top: "0"
    //   }, "fast", function(){
    //     // complete
    //     $('#wf-roof.closed').removeClass("closed").addClass("open");
    //   })
    // })
    //
    // $('#wf-roof.open .wf-roof-trigger').click(function(){
    //   $('#wf-roof.open').animate({
    //     top: "-230px"
    //   }, "fast", function(){
    //     // complete
    //     $('#wf-roof.open').removeClass("open").addClass("closed");
    //   })
    // })
    WFRoot.init();
});
