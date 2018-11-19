$(function () {
  renderLinks();
  $('#searchLink').on('input', function (e) {

    var input = $(this).val();
    renderLinks(input);

  });
});

function renderLinks(input) {
  var i;
  var connections = '<ul>'
  if (input) {
    for ( i = 0; i < contact_list.length; i++) {
      if ((contact_list[i].name).indexOf(input )!= -1) {
        connections += '<li><a href="' + contact_list[i].linkedin + '" target="_blank"><div  class="connection"> <img class="cimg" src="../assets/img/testimonial-avatars/' + contact_list[i].img + '" /><p class="comment"><span class="start">"</span>' + contact_list[i].comment + '<span class="end">"</span></p><div class="name">— ' + contact_list[i].name + '</div></div></a></li>';
      }
    }

  } else {


    for ( i = 0; i < contact_list.length; i++) {
      connections += '<li><a href="' + contact_list[i].linkedin + '" target="_blank"><div  class="connection"> <img class="cimg" src="../assets/img/testimonial-avatars/' + contact_list[i].img + '" /><p class="comment"><span class="start">"</span>' + contact_list[i].comment + '<span class="end">"</span></p><div class="name">— ' + contact_list[i].name + '</div></div></a></li>';
    }
  }

  connections += '</ul>';


  $('#connections').html(connections);
}