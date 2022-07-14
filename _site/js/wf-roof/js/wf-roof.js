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

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {  
    
    if ($("#wf-roof").offset().top > 50) {
        $("#wf-roof").addClass("wf-collapse");
    } else {
        $("#wf-roof").removeClass("wf-collapse");
    }
});

$(document).ready(function() {    
    WFRoot.init();
});
