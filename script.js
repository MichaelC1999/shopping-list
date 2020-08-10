$(function() {

    $('#js-shopping-list-form').submit(event =>  {
        event.preventDefault();
        
        const foodName = $(event.currentTarget).find('#shopping-list-entry');
        
        $('ul.shopping-list').append('<li><span class="shopping-item">'+foodName+'</span></li>')
    
        //It adds a new section when button is clicked.
        //Why won't it add the item that was input?
        //foodName variable was supposed to save the name of the item input 
        //I will add the 'cross' and 'delete' buttons after I resolve this

    })
    
    $('button.shopping-item-toggle').click(event =>{
        event.preventDefault();
        $(this).parent('.shopping-item').toggleClass('shopping-item__checked')
        
        //I am not sure if this is the correct use of 'this'
        //I am trying to take the parent 'shopping-item' class of the button clicked
        //It does not toggle. Why not?

    })

    $('li').on('click', 'button.shopping-item-delete', function(event) {
        this.remove();
        //This function just removes the delete button.
        //Why doesn't 'this' represent 'li'?, but rather the delete button?

      });
    
    
    })