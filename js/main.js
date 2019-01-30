$('#dropdown-menu').on('change', function() {
 $.ajax({
    method: 'GET',
    url: 'https://api.nytimes.com/svc/topstories/v2/'+$('#dropdown-menu').val()+'.json?api-key=0751ffff01d7a70710354972fa0ad4a9'
 })
 .done(function(data) {
// loop in the function in order to get 12 different articles in the dropdown menu
    $('p').empty(); 
  for (i = 0; i <=11; i++) {
   console.log(data.results);
   var description = data.results[i].abstract
    var imageUrl= data.results[i].multimedia[4].url
   var articleLink = data.results[i].url 
    console.log(description)
    console.log(imageUrl)
    console.log(articleLink)

 var htmlString = '<a class="textColor" href="'+articleLink+'"><div class="articleContainer"><h2>' + description + '</h2></div></a>'
  console.log(htmlString);

  $('p').append(htmlString);
  $('.articleContainer').last().css('background-image', 'url(' + imageUrl+')');


  }


    });


       
 });

 
 

