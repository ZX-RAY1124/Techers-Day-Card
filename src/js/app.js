function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playaudio(){
  const audio = document.getElementById('music');
  if (audio.paused){
    audio.play();
  }else{
    audio.pause();
  }
}

function ballon(){
  const card = document.querySelector('.card'); // 获取卡片元素

  card.addEventListener('click', (event) => { // 添加点击事件监听器
    const balloon = document.createElement('div'); // 创建一个新的气球元素
    const ballonlist = ['❤️','💖','😽','🥰','💕','🎈']
    balloon.className = 'balloon'; // 设置气球类名
    const list_len = ballonlist.length;
    balloon.textContent = ballonlist[getRandomInt(0,list_len-1)]; // 设置气球内容

    // 计算点击位置相对于卡片的位置
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // 设置气球的位置
    balloon.style.left = `${x - 30}px`; // 减去气球宽度的一半以使其中心对齐
    balloon.style.top = `${y - 30}px`; // 减去气球高度的一半以使其中心对齐

    card.appendChild(balloon); // 将气球添加到卡片中

    // 在动画结束后移除气球
    balloon.addEventListener('animationend', () => {
      balloon.remove(); // 移除气球元素
    });
  });
}


document.addEventListener('DOMContentLoaded',() => ballon());
document.addEventListener('DOMContentLoaded', () =>{
  var audio = document.getElementById('music');
  audio.play();
});

