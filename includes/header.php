<?php include('includes/defaults.php') ?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php if( isset($meta_description) && $meta_description != '' ) { echo $meta_description; } else { echo $default_meta_description; }; ?>"/>
    <meta name="keywords" content="<?php if( isset($meta_keywords) && $meta_keyywords != '') { echo $meta_keywords; } else { echo $default_meta_keywords; } ?>" />
      <title><? if( isset($title) && $title != '' ) { echo $title; } else { echo $default_title; } ?></title>

    <!-- Bootstrap Core CSS -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- Fonts -->
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script type="text/javascript">
      (function(d) {
        var config = {
          kitId: 'qdm2ifj',
          scriptTimeout: 3000
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
      })(document);
    </script>

    <!-- Custom Theme CSS -->
    <link href="css/styles.css" rel="stylesheet">
    <link href="css/jquery.fancybox.css" rel="stylesheet">
    <link href="css/wf-roof.css" rel="stylesheet">

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-custom" class="<?php if( isset($body_class) && $body_class != '' ) { echo $body_class; }; ?>">
  <script type="text/javascript">
    (function() {
      var ra = document.createElement('script'); ra.type = 'text/javascript'; ra.async = true;
      ra.src = 'http://www.rate5.me/anbieterprofile/bohlen-design/siegel.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ra, s);
    })();
  </script>
    
    <div id="wf-roof">
      <div class="wf-roof-container">
        <div class="wf-roof-col-1 wf-roof-col">
          <a href="#" id="wf-roof-main-logo" ><img src="img/wf-roof/logo-walk-factory.png" /></a>
          <div class="wf-roof-contact-detail wf-roof-col">
            <span class="wf-roof-tel"><em>Tel:</em>0221-98 54 95 32</span>
            <span class="wf-roof-email"><em>Email:</em><a href="mailto:info@mail-wf.de">info@mail-wf.de</a></span>
            <span class="wf-roof-url"><em>Web:</em><a href="http://www.walk-factory.de">www.walk-factory.de</a></span>
          </div>
        </div>
        <div class="wf-roof-col-2 wf-roof-col">
          <h4>Weitere Shows der Walk Factory GmbH</h4>
          <div id="wf-roof-shows">
            <a href="#"><img src="img/wf-roof/logo-andre-desery-wirkungsvoll.png" /></a>
            <a href="#"><img src="img/wf-roof/logo-comedy-kellner.png" /></a>
            <a href="#"><img src="img/wf-roof/logo-euforia-die-dinnershow.png" /></a>
            <a href="#"><img src="img/wf-roof/logo-vinolusion.png" /></a>
          </div>
        </div>
      </div>
      <div class="wf-roof-trigger">
        <i class="wf-caret"></i>
      </div>
    </div>
    
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/">
                    <img src="img/comedy-kellner-logo-border.png" id="logo" />
                    <!-- <i class="fa fa-play-circle"></i>  <span class="light">Start</span> Bootstrap -->
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="die-idee.php">Die Idee</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#download">Die Kellner</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Die Show</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Preise</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Referenzen</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Kontakt</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>