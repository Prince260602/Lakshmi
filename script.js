document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("about-btn");
  const contactBtn = document.getElementById("contact-btn");
  const closeAboutBtn = document.getElementById("close-about-btn");
  const closeContactBtn = document.getElementById("close-contact-btn");
  const closePopupBtn = document.getElementById("close-popup-btn");
  const popupModal = document.getElementById("popup-modal");
  const popupBody = document.getElementById("popup-body");

  aboutBtn.addEventListener("click", function () {
    popupBody.innerHTML = `
    
       
        <div style="background: rgba(0, 0, 0, 0.7);  border-radius: 10px; max-width: 600px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
        
    <h1 style="font-size: 28px; margin-bottom: 20px;">ABOUT</h1>
    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
      
Ten Lakshmi is an AI-driven quantitative hedge fund focused on delivering outstanding returns for its investors. We harness cutting-edge advancements in AI, machine learning, and data science to optimize trading strategies and performance.  
Access to Ten Lakshmi is exclusively by invitation.
    </p>

   
  </div>
      `;
    popupModal.style.display = "flex";
  });

  contactBtn.addEventListener("click", function () {
    popupBody.innerHTML = `
      <form id="form02" method="post" action="https://api.web3forms.com/submit" style="background: rgba(0, 0, 0, 0.8); font-family: 'Times New Roman', serif;
   border-radius: 8px; width: 100%; max-width: 480px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);">
    <input type="hidden" name="access_key" value="ef7d6db9-5581-4525-b98a-ca42fb0056f4">

    <h2 style="margin-bottom: 20px; font-size: 20px; text-align: center; text-transform: uppercase;">Contact Us</h2>

    <div style="margin-bottom: 15px; text-align: center;">
      <input type="text" name="name" placeholder="Name" maxlength="128" required style="width: 100%;font-family: 'Times New Roman', serif; padding: 10px; border: 1px solid #444; border-radius: 4px; background: transparent; color: #fff; font-size: 14px;">
    </div>
    <div style="margin-bottom: 15px;">
      <input type="email" name="email" placeholder="Email" maxlength="128" required style="width: 100%; font-family: 'Times New Roman', serif; padding: 10px; border: 1px solid #444; border-radius: 4px; background: transparent; color: #fff; font-size: 14px;">
    </div>
    <div style="margin-bottom: 15px;">
      <textarea name="message" placeholder="Message" maxlength="16384" required style="width: 100%;  font-family: 'Times New Roman', serif; padding: 10px; border: 1px solid #444; border-radius: 4px; background: transparent; color: #fff; font-size: 14px; height: 100px; resize: none;"></textarea>
    </div>
    <div style="text-align: center;">
      <button type="submit" style="padding: 10px 20px; font-family: 'Times New Roman', serif; border: 1px solid #fff; background: transparent; color: #fff; border-radius: 4px; cursor: pointer; font-size: 14px; transition: all 0.3s;">Send Message</button>
    </div>
  </form>
      `;
    popupModal.style.display = "flex";
  });

  closePopupBtn.addEventListener("click", function () {
    popupModal.style.display = "none";
  });

  closeAboutBtn.addEventListener("click", function () {
    popupModal.style.display = "none";
  });

  closeContactBtn.addEventListener("click", function () {
    popupModal.style.display = "none";
  });
});




    // <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
    //   Access to The Entrepreneurship Network is by invitation-only.
    // </p>