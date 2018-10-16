$(document).ready(function() {
      var topic = ["dog","cat","rabbit","hamster","bird","chicken","frog"]; 
      var word = "owl";
      function gifbutton()
      {
             $(".gif-button").on("click", function() {
             console.log($(this).val()); 
             gif=($(this).val());
             console.log(gif);
             var queryURL = "https://api.giphy.com/v1/gifs/search?key=WSGRAYpQlLRf4DKBZWMScqxm3B9vHBuS&q="+gif;
             $.ajax({
             url: queryURL,
             method: "GET",
         
            })
             .then(function(response) {
             console.log(response);
             for (var x = 0; x< response.data.length; x++)
            {
            // var gifUrl = response.data[x].images.original.url;
             //console.log(gifUrl);
             var G = $("<img>");
             G.attr({src: response.data[x].images.original.url, id:"pic"});
             $("#search-content").prepend(G);
            }
             })
           })
          }
      var queryURL = "https://api.giphy.com/v1/gifs/search?key=WSGRAYpQlLRf4DKBZWMScqxm3B9vHBuS&q="+word;
      $.ajax({
      url: queryURL,
      method: "GET",
     
      })
      .then(function(response) {
      console.log(response);
      for (var i = 0; i< response.data.length; i++)
          {
           //console.log("something")
            //var imageUrl = response.data[i].images.original.url;
            //console.log(imageUrl);
            var Image = $("<img>");
            Image.attr({src: response.data[i].images.original.url, id:"pic"});
            $("#search-content").prepend(Image);
          }
      
      for (var j = 0; j < topic.length; j++) 
      {
          var gifButton = $("<button>");
          gifButton.addClass("gif-button-color gif-button");
          gifButton.text(topic[j]);
          gifButton.val(topic[j]);
          $("#btn").append(gifButton);   
          
      }
      gifbutton();
        
         $("#button").on("click", function(event) {
          event.preventDefault();
          var value = $("#add-button").val().trim();
          topic.push(value);
          $("#btn").empty();
          for (var j = 0; j < topic.length; j++) 
            {
               var gifButton = $("<button>");
               gifButton.addClass("gif-button-color gif-button");
               gifButton.text(topic[j]);
               gifButton.val(topic[j]);
               $("#btn").append(gifButton);   
          
            }
            gifbutton();
        });
  
    
        
    })
    
  
  })