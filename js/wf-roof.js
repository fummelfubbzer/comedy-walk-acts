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
    $('#wf-roof .wf-roof-container').hide();
    $('#wf-roof').click(function(e){
      return false;
    })
    $(s.trigger).click(function(e){
      if ($("#wf-roof").hasClass("closed")) {
        $('#wf-roof.closed').removeClass("closed").addClass("open");
        $('#wf-roof .wf-roof-container').css("display","table");
      } else {
        $('#wf-roof').removeClass("open").addClass("closed");
        $('#wf-roof .wf-roof-container').css("display","none");
      }
    })
  },


};


$(document).ready(function() {

    WFRoot.init();
});
