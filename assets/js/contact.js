$(function () {
  
  var connections = '<ul>'
  for (var i = 0; i < contact_list.length; i++) {
    connections += '<li><a href="' + contact_list[i].linkedin + '" target="_blank"><div  class="connection"> <img class="cimg" src="../assets/img/testimonial-avatars/' + contact_list[i].img + '" /><p class="comment">' + contact_list[i].comment + '</p><div class="name">— ' + contact_list[i].name + '</div></div></a></li>';
  }

  connections += '</ul>';

  
  $('#connections').html(connections);



});