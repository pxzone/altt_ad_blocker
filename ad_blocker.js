// ==UserScript==
// @name     Removing ALTT ad banners
// @version  1.0
// @description  removing allt top banner in homepage, boards, topic thread (everywhere in altt)
// ==/UserScript==


(function() {
 let url = [removed].href;
  // check if page is profile page
  if(url.indexOf("index.php?action=profile") > 0){
  // removing top banner ad
    var first_link = document.querySelector("#main_content_section center a:first-child");
    if (first_link) {
      first_link.setAttribute("hidden", "hidden");
    }
    document.querySelector("#main_content_section center br");
    var small_element = document.querySelectorAll("#main_content_section center small");
    small_element.forEach(function(small) {
   small.setAttribute("hidden", "hidden");
    });
 }
  // check if page is in topic page
  else if( url.indexOf("index.php?topic") > 0){
    
    // removing top banner ad
    var first_link = document.querySelector("#main_content_section center a:first-child");
    if (first_link) {
      first_link.setAttribute("hidden", "hidden");
    }
    document.querySelector("#main_content_section center br");
    var small_element = document.querySelectorAll("#main_content_section center small");
    small_element.forEach(function(small) {
   small.setAttribute("hidden", "hidden");
    });
    
    //removing banner ad in every thread
    var ad_div = document.querySelectorAll('div[class*="windowbg"]');
    if (ad_div.length > 1) {
        ad_div[1][removed].removeChild(ad_div[1]);
    }
    
    // removing repeated forum images in every thread
    var forum_rules_img = document.querySelectorAll('img[src="https://i.imgur.com/CtEASyB.png"]');
    forum_rules_img.forEach(function(img) {
        img[removed].removeChild(img);
    });
 }
  // check if page is home page, boards and other forum pages
  else if(url.indexOf("index.php") > 0){
    // removing top banner ad
    var first_link = document.querySelector("#main_content_section center a:first-child");
    if (first_link) {
      first_link.setAttribute("hidden", "hidden");
    }
    document.querySelector("#main_content_section center br");
    var small_element = document.querySelectorAll("#main_content_section center small");
    small_element.forEach(function(small) {
   small.setAttribute("hidden", "hidden");
    });
  }
  
  
})();
