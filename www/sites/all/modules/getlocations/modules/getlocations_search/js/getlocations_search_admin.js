/**
 * @file
 * @author Bob Hutchinson http://drupal.org/user/52366
 * @copyright GNU GPL
 *
 * Javascript functions for getlocations_search admin
*/
(function ($) {

  Drupal.behaviors.getlocations_search_admin = {
    attach: function() {

      if ($("#edit-getlocations-search-defaults-method, #edit-getlocations-search-block-defaults-method").val() == 'vocab') {
        $("#getlocations_search_defaults_vocab").show();
      }
      else {
        $("#getlocations_search_defaults_vocab").hide();
      }
      $("#edit-getlocations-search-defaults-method, #edit-getlocations-search-block-defaults-method").change( function() {
        if ($(this).val() == 'vocab') {
          $("#getlocations_search_defaults_vocab").show();
        }
        else {
          $("#getlocations_search_defaults_vocab").hide();
        }
      });

      if ($("#edit-getlocations-search-defaults-restrict-by-country, #edit-getlocations-search-block-defaults-restrict-by-country").is('input')) {
        if ($("#edit-getlocations-search-defaults-restrict-by-country, #edit-getlocations-search-block-defaults-restrict-by-country").attr('checked')) {
          $("#getlocations_search_country").show();
        }
        else {
          $("#getlocations_search_country").hide();
        }
        $("#edit-getlocations-search-defaults-restrict-by-country, #edit-getlocations-search-block-defaults-restrict-by-country").change( function() {
          if ($("#edit-getlocations-search-defaults-restrict-by-country, #edit-getlocations-search-block-defaults-restrict-by-country").attr('checked')) {
            $("#getlocations_search_country").show();
          }
          else {
            $("#getlocations_search_country").hide();
          }
        });
      }

      if ($("#edit-getlocations-search-defaults-markermanagertype, #edit-getlocations-search-block-defaults-markermanagertype").val() == 1) {
        // markermanager
        $(".form-item-getlocations-search-defaults-usemarkermanager, .form-item-getlocations-search-block-defaults-usemarkermanager").show();
        $("#wrap-getlocations-clusteropts").hide();
        $("#wrap-getlocations-markeropts").show();
      }
      else if ($("#edit-getlocations-search-defaults-markermanagertype, #edit-getlocations-search-block-defaults-markermanagertype").val() == 2) {
        // markerclusterer
        $(".form-item-getlocations-search-defaults-usemarkermanager, .form-item-getlocations-search-block-defaults-usemarkermanager").hide();
        $("#wrap-getlocations-clusteropts").show();
        $("#wrap-getlocations-markeropts").hide();
      }
      else {
        // none
        $(".form-item-getlocations-search-defaults-usemarkermanager, .form-item-getlocations-search-block-defaults-usemarkermanager").hide();
        $("#wrap-getlocations-clusteropts").hide();
        $("#wrap-getlocations-markeropts").hide();
      }
      $("#edit-getlocations-search-defaults-markermanagertype, #edit-getlocations-search-block-defaults-markermanagertype").change(function() {
        if ($(this).val() == 1) {
          // markermanager
          $(".form-item-getlocations-search-defaults-usemarkermanager, .form-item-getlocations-search-block-defaults-usemarkermanager").show();
          $("#wrap-getlocations-clusteropts").hide();
          $("#wrap-getlocations-markeropts").show();
        }
        else if ($(this).val() == 2) {
          // markerclusterer
          $(".form-item-getlocations-search-defaults-usemarkermanager, .form-item-getlocations-search-block-defaults-usemarkermanager").hide();
          $("#wrap-getlocations-clusteropts").show();
          $("#wrap-getlocations-markeropts").hide();
        }
        else {
          // none
          $(".form-item-getlocations-search-defaults-usemarkermanager, .form-item-getlocations-search-block-defaults-usemarkermanager").hide();
          $("#wrap-getlocations-clusteropts").hide();
          $("#wrap-getlocations-markeropts").hide();
        }
      });

      if ($("#edit-getlocations-search-defaults-trafficinfo, #edit-getlocations-search-block-defaults-trafficinfo").is('input')) {
        if ($("#edit-getlocations-search-defaults-trafficinfo, #edit-getlocations-search-block-defaults-trafficinfo").attr('checked')) {
          $("#wrap-getlocations-trafficinfo").show();
        }
        else {
          $("#wrap-getlocations-trafficinfo").hide();
        }
        $("#edit-getlocations-search-defaults-trafficinfo, #edit-getlocations-search-block-defaults-trafficinfo").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-trafficinfo").show();
          }
          else {
            $("#wrap-getlocations-trafficinfo").hide();
          }
        });
      }

      if ($("#edit-getlocations-search-defaults-bicycleinfo, #edit-getlocations-search-block-defaults-bicycleinfo").is('input')) {
        if ($("#edit-getlocations-search-defaults-bicycleinfo, #edit-getlocations-search-block-defaults-bicycleinfo").attr('checked')) {
          $("#wrap-getlocations-bicycleinfo").show();
        }
        else {
          $("#wrap-getlocations-bicycleinfo").hide();
        }
        $("#edit-getlocations-search-defaults-bicycleinfo, #edit-getlocations-search-block-defaults-bicycleinfo").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-bicycleinfo").show();
          }
          else {
            $("#wrap-getlocations-bicycleinfo").hide();
          }
        });
      }

      if ($("#edit-getlocations-search-defaults-transitinfo, #edit-getlocations-search-block-defaults-transitinfo").is('input')) {
        if ($("#edit-getlocations-search-defaults-transitinfo, #edit-getlocations-search-block-defaults-transitinfo").attr('checked')) {
          $("#wrap-getlocations-transitinfo").show();
        }
        else {
          $("#wrap-getlocations-transitinfo").hide();
        }
        $("#edit-getlocations-search-defaults-transitinfo, #edit-getlocations-search-block-defaults-transitinfo").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-transitinfo").show();
          }
          else {
            $("#wrap-getlocations-transitinfo").hide();
          }
        });
      }

      if ($("#edit-getlocations-search-defaults-panoramio-show, #edit-getlocations-search-block-defaults-panoramio-show").is('input')) {
        if ($("#edit-getlocations-search-defaults-panoramio-show, #edit-getlocations-search-block-defaults-panoramio-show").attr('checked')) {
          $("#wrap-getlocations-panoramio").show();
        }
        else {
          $("#wrap-getlocations-panoramio").hide();
        }
        $("#edit-getlocations-search-defaults-panoramio-show, #edit-getlocations-search-block-defaults-panoramio-show").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-panoramio").show();
          }
          else {
            $("#wrap-getlocations-panoramio").hide();
          }
        });
      }

      if ($("#edit-getlocations-search-defaults-weather-show, #edit-getlocations-search-block-defaults-weather-show").is('input')) {
        if ($("#edit-getlocations-search-defaults-weather-show, #edit-getlocations-search-block-defaults-weather-show").attr('checked')) {
          $("#wrap-getlocations-weather").show();
        }
        else {
          $("#wrap-getlocations-weather").hide();
        }
        $("#edit-getlocations-search-defaults-weather-show, #edit-getlocations-search-block-defaults-weather-show").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-weather").show();
          }
          else {
            $("#wrap-getlocations-weather").hide();
          }
        });

        if ($("#edit-getlocations-search-defaults-weather-cloud, #edit-getlocations-search-block-defaults-weather-cloud").attr('checked')) {
          $("#wrap-getlocations-weather-cloud").show();
        }
        else {
          $("#wrap-getlocations-weather-cloud").hide();
        }
        $("#edit-getlocations-search-defaults-weather-cloud, #edit-getlocations-search-block-defaults-weather-cloud").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-weather-cloud").show();
          }
          else {
            $("#wrap-getlocations-weather-cloud").hide();
          }
        });
      }
      if ($("#edit-getlocations-search-defaults-polygons-enable, #edit-getlocations-search-block-defaults-polygons-enable").attr('checked')) {
        $("#wrap-getlocations-polygons").show();
      }
      else {
        $("#wrap-getlocations-polygons").hide();
      }
      $("#edit-getlocations-search-defaults-polygons-enable, #edit-getlocations-search-block-defaults-polygons-enable").change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-getlocations-polygons").show();
        }
        else {
          $("#wrap-getlocations-polygons").hide();
        }
      });

      if ($("#edit-getlocations-search-defaults-rectangles-enable, #edit-getlocations-search-block-defaults-rectangles-enable").attr('checked')) {
        $("#wrap-getlocations-rectangles").show();
      }
      else {
        $("#wrap-getlocations-rectangles").hide();
      }
      $("#edit-getlocations-search-defaults-rectangles-enable, #edit-getlocations-search-block-defaults-rectangles-enable").change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-getlocations-rectangles").show();
        }
        else {
          $("#wrap-getlocations-rectangles").hide();
        }
      });

      if ($("#edit-getlocations-search-defaults-circles-enable, #edit-getlocations-search-block-defaults-circles-enable").attr('checked')) {
        $("#wrap-getlocations-circles").show();
      }
      else {
        $("#wrap-getlocations-circles").hide();
      }
      $("#edit-getlocations-search-defaults-circles-enable, #edit-getlocations-search-block-defaults-circles-enable").change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-getlocations-circles").show();
        }
        else {
          $("#wrap-getlocations-circles").hide();
        }
      });

      if ($("#edit-getlocations-search-defaults-polylines-enable, #edit-getlocations-search-block-defaults-polylines-enable").attr('checked')) {
        $("#wrap-getlocations-polylines").show();
      }
      else {
        $("#wrap-getlocations-polylines").hide();
      }
      $("#edit-getlocations-search-defaults-polylines-enable, #edit-getlocations-search-block-defaults-polylines-enable").change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-getlocations-polylines").show();
        }
        else {
          $("#wrap-getlocations-polylines").hide();
        }
      });

      // search_places
      if ($("#edit-getlocations-search-defaults-search-places, #edit-getlocations-search-block-defaults-search-places").attr('checked')) {
        $("#wrap-getlocations-search-places").show();
      }
      else {
        $("#wrap-getlocations-search-places").hide();
      }
      $("#edit-getlocations-search-defaults-search-places, #edit-getlocations-search-block-defaults-search-places").change(function() {
        if ($(this).attr('checked')) {
          $("#wrap-getlocations-search-places").show();
        }
        else {
          $("#wrap-getlocations-search-places").hide();
        }
      });

      // search marker
      if ($("#edit-getlocations-search-defaults-do-search-marker, #edit-getlocations-search-block-defaults-do-search-marker").is('input')) {
        if ($("#edit-getlocations-search-defaults-do-search-marker, #edit-getlocations-search-block-defaults-do-search-marker").attr('checked')) {
          $("#wrap-getlocations-search-marker").show();
        }
        else {
          $("#wrap-getlocations-search-marker").hide();
        }
        $("#edit-getlocations-search-defaults-do-search-marker, #edit-getlocations-search-block-defaults-do-search-marker").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-search-marker").show();
          }
          else {
            $("#wrap-getlocations-search-marker").hide();
          }
        });
      }

      // search area shape
      if ($("#edit-getlocations-search-defaults-search-radshape-enable, #edit-getlocations-search-block-defaults-search-radshape-enable").is('input')) {
        if ($("#edit-getlocations-search-defaults-search-radshape-enable, #edit-getlocations-search-block-defaults-search-radshape-enable").attr('checked')) {
          $("#wrap-getlocations-search-radshape").show();
        }
        else {
          $("#wrap-getlocations-search-radshape").hide();
        }
        $("#edit-getlocations-search-defaults-search-radshape-enable, #edit-getlocations-search-block-defaults-search-radshape-enable").change(function() {
          if ($(this).attr('checked')) {
            $("#wrap-getlocations-search-radshape").show();
          }
          else {
            $("#wrap-getlocations-search-radshape").hide();
          }
        });
      }

    }
  };
}(jQuery));
