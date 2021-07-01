// main.js
$(function(){
    // 이미지, 배경 세팅값
    var titleData = [
      {
        imgUrl: 'images/MIST Silver1.png',
        bgUrl: 'images/Silver.svg'
      },
      {
        imgUrl: 'images/MIST Pink2.png',
        bgUrl: 'images/Pink.svg'
      },
      {
        imgUrl: 'images/MIST Mint3.png',
        bgUrl: 'images/Mint.svg'
      },
    ];

    // 이벤트
  $('.pager > ul > li').eq(0).click(function(){
    // 타이틀 제품 이미지
    $('figure img')
      .attr('src',  titleData[0].imgUrl);
    // 타이틀 배경
    $('#title figure').css('background-image', `url(${titleData[0].bgUrl})`);
    console.log(titleData[0].bgUrl)
  });

  $('.pager > ul > li').eq(1).click(function(){
    $('figure img')
      .attr('src',  titleData[1].imgUrl);
    $('#title figure').css('background-image', `url(${titleData[1].bgUrl})`);  
    console.log(titleData[0].bgUrl)
  });

  $('.pager > ul > li').eq(2).click(function(){
    $('figure img')
      .attr('src',  titleData[2].imgUrl);
      $('#title figure').css('background-image', `url(${titleData[2].bgUrl})`);    
  });


})