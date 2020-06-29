$(function(){
  
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="main-chat__message-list__message-box" data-message-id=${message.id}>
          <div class="main-chat__message-list__message-box__message-user">
            <div class="main-chat__message-list__message-box__message-user__message-name">
              ${message.user_name}
            </div>
            <div class="main-chat__message-list__message-box__message-user__message-date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__message-list__message-box__message-text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="main-chat__message-list__message-box__message-text__message-image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-chat__message-list__message-box" data-message-id=${message.id}>
        <div class="main-chat__message-list__message-box__message-user">
          <div class="main-chat__message-list__message-box__message-user__message-name">
            ${message.user_name}
          </div>
          <div class="main-chat__message-list__message-box__message-user__message-date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-list__message-box__message-text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  
  $('.main-chat__message-form__form-contents').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});      
      $('.main-chat__message-form__form-contents')[0].reset();
      $('.main-chat__message-form__form-contents__form-send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});