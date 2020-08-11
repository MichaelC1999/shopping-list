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
    
        //There must be a more efficient way than to list out the entire section to append a new box

        //It adds a new section when button is clicked.
        //Why do I need .val() on the end?

    })
    
    

    $('li').on('click', 'button.shopping-item-toggle', function(event){
        event.preventDefault()
        const toDo = $(this)
        toDo.find('.shopping-item').toggleClass('shopping-item__checked')
        
        //My logic is that when you click on the toggle button, 
        //'this' would be the 'li' parent of the button. What does 'this' currently represent?

    })

    $('li').on('click', 'button.shopping-item-delete', function(event) {
        $(this).remove();
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
