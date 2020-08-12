$(function() {

    $('#js-shopping-list-form').submit(event =>  {
        //When the submit button is clicked on the input form, enter the following callback function
        
        event.preventDefault();
        //prevent default action
        
        const foodName = $(this).find('#shopping-list-entry').val();
        //foodName var is set to 'this' (the entire submissions form- button and input text included)
        //.find looks for the child id/class with the following name. .val() gets the value from---
        //the found input box within the form.
        $('ul.shopping-list').append(
            '<li><span class="shopping-item">'+foodName+'</span><div class="shopping-item-controls">'+
            '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button></div></li>')
        //Append the following string as html code to the ul with class 'shopping list'
        //When this html code is added, it creates a new li element from the string given
        

    })
    
    

    $('ul').on('click', 'button.shopping-item-toggle', function(event){
      //Watch for a click on 'shopping item toggle' button within a ul
      //Enter function when this happens
        event.preventDefault()
        //Prevent default button submission
        $(this).parent().siblings('span').toggleClass('shopping-item__checked')
        //'This' represents the toggle button, move to the parent of the button, then the sibling---
        //The sibling is identified as a 'span'. Toggle the class of that span to make the text crossed
        
    })

    $('ul').on('click', 'button.shopping-item-delete', function(event) {
      //Watch for a click on 'shopping item delete' button within a ul
      //Enter function when this happens
        event.preventDefault()  
        //Prevent default button submissions
      $(this).closest('li').remove();
        //The closest li above 'this' (delete button) is removed

      });
    
    
    })


    //First version of toggle check

    /*$('button.shopping-item-toggle').click(event =>{
        event.preventDefault();
        $(this).parent('.shopping-item').toggleClass('shopping-item__checked')
        
        //I am not sure if this is the correct use of 'this'
        //I am trying to take the parent 'shopping-item' class of the button clicked
        //It does not toggle. Why not?

    })*/
