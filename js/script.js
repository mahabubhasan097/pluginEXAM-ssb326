$(document).ready(function(){


    //   isotope
      $('.portfolio-item').isotope({
          itemSelector:'.item', 
      });
      $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });

    
});