
const contentLetterSrart_actived = `Anh có điều muốn nói á từ tận trong lòng á 💝, em có sẵn lòng muốn đọc không? 🥺 (●'◡'●) ✨

Nếu câu trả lời là say yes thì em bấm vào nút quà nha 🎁✨ (っ◔◡◔)っ 💝`
const mainContentLetter = "Chúc Thu Hà tuổi mới thật nhiều niềm vui 🌸, gặp nhiều may mắn và hạnh phúc ✨, luôn bình an và khỏe mạnh 💪. Nhìn lại một năm qua, anh thấy em đã trưởng thành và mạnh mẽ hơn rất nhiều, luôn nở nụ cười tươi dù có những lúc vui buồn 🌱. Chúc em thành công rực rỡ trong công việc và học tập 📚, tiếp tục theo đuổi những ước mơ và đừng ngại thử thách bản thân 🚀. Mong em sẽ tìm được những trải nghiệm thú vị trong cuộc sống, được bao quanh bởi những người bạn tốt 👫 và có thêm nhiều kỷ niệm đáng nhớ ✨. Hy vọng trong tuổi mới này em sẽ khám phá được nhiều đam mê mới, học hỏi được nhiều điều thú vị và ngày càng tự tin hơn trong cuộc sống 💫. Mùa đông đã về rồi, nhớ giữ ấm, ăn uống đầy đủ và chăm sóc bản thân thật tốt nha! 🌿 Wish you all the best! 🍀"//Nội dung của bức thư
const audio = document.getElementById('bgMusic');
// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/freepik__background__5335.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    audio.play();
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

/**
 * Creates animated light particles with random properties
 * @param {number} particleCount - Number of light particles to create
 */
function createLight(particleCount) {
  // Constants
  const CONTAINER_SELECTOR = '.backgroundParty';
  const PARTICLE_CONFIG = {
    blurLevels: [2, 4],
    colors: ['#FF0000', '#00FF00', '#FFFF00', '#FFA500', '#0000FF'], // Using hex colors
    minWidth: 15,
    maxExtraWidth: 5,
    minMoveTime: 4,
    maxExtraTime: 4,
    minBorderRadius: 10,
    maxExtraBorderRadius: 10
  };

  // Get container element
  const container = document.querySelector(CONTAINER_SELECTOR);
  if (!container) {
    console.error('Container element not found');
    return;
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    createLightParticle(container, PARTICLE_CONFIG);
  }
}

function createConfetti() {
  const CONFETTI_COUNT = 100;
  const COLORS = [
    '#ff0000', '#ff4444', '#ff8888', // Các tông màu đỏ
    '#ffd700', '#ffeb3b', '#ffc107', // Các tông màu vàng
    '#48D1CC', '#40E0D0', '#00CED1', // Các tông màu xanh ngọc
    '#ffffff' // Màu trắng cho điểm nhấn
  ];

  const container = document.querySelector('.backgroundParty');
  
  function createConfettiPiece() {
    const confetti = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 10 + 6; // 6px to 16px
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const rotation = Math.random() * 360;
    const startX = Math.random() * window.innerWidth;
    
    // Style for confetti piece
    Object.assign(confetti.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      left: `${startX}px`,
      top: '-20px',
      borderRadius: '2px',
      transform: `rotate(${rotation}deg)`,
      opacity: Math.random() + 0.4,
      pointerEvents: 'none'
    });

    // Add animation
    confetti.animate([
      {
        transform: `translate(0, 0) rotate(${rotation}deg)`,
        opacity: Math.random() + 0.4
      },
      {
        transform: `translate(${(Math.random() - 0.5) * 400}px, ${window.innerHeight}px) rotate(${rotation + 720}deg)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 3000 + 3000, // 3-6 seconds
      easing: 'cubic-bezier(.25,.46,.45,.94)',
      iterations: Infinity
    });

    return confetti;
  }

  // Create initial batch of confetti
  for (let i = 0; i < CONFETTI_COUNT; i++) {
    setTimeout(() => {
      const piece = createConfettiPiece();
      container.appendChild(piece);
      
      // Remove piece after animation
      setTimeout(() => {
        piece.remove();
      }, 6000);
    }, i * 50); // Stagger creation
  }

  // Add periodic confetti burst
  setInterval(() => {
    const burstCount = 20;
    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        const piece = createConfettiPiece();
        container.appendChild(piece);
        
        setTimeout(() => {
          piece.remove();
        }, 6000);
      }, i * 100);
    }
  }, 8000); // New burst every 8 seconds
}

// Add sparkle effect
function createSparkles() {
  const container = document.querySelector('.backgroundParty');
  const SPARKLE_COUNT = 30;

  function createSparkle() {
    const sparkle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    Object.assign(sparkle.style, {
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      left: `${startX}px`,
      top: `${startY}px`,
      boxShadow: '0 0 8px #ffffff',
      pointerEvents: 'none'
    });

    sparkle.animate([
      { opacity: 0, transform: 'scale(0)' },
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0)' }
    ], {
      duration: 1500,
      iterations: Infinity
    });

    return sparkle;
  }

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    container.appendChild(createSparkle());
  }
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
  createConfetti();
  createSparkles();
});