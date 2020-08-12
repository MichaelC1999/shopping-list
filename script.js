$(function() {

    $('#js-shopping-list-form').submit(event =>  {
        event.preventDefault();
        
        const foodName = $(event.currentTarget).find('#shopping-list-entry').val();
        
        $('ul.shopping-list').append(
            '<li><span class="shopping-item">'+foodName+'</span><div class="shopping-item-controls">'+
            '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button></div></li>')
    
        

    })
    
    

    $('li').on('click', 'button.shopping-item-toggle', function(event){
        event.preventDefault()
        
        $(this).parent('.shopping-item').toggleClass('shopping-item__checked')
        
        //My logic is that when you click on the toggle button, 
        //'li' would be the parent of 'this', or the button. Am I using correct syntax for 'this' here?


    })

    $('ul').on('click', 'button.shopping-item-delete', function(event) {
      event.preventDefault()  
      $(this).parent('li').remove();
        //This function just removes the delete button.
        //Why doesn't 'this' represent 'li'?, but rather the delete button?
        //Shouldn't this callback function delete new boxes too?
        //.on uses event delgation, so shouldnt this approach include new boxes as well?

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
