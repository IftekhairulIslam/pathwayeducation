/* Facebook Chat Plugin */
function addFacebookPlugin(pageId) {
  // Messenger Chat Plugin Code
  var fbRoot = document.createElement("div");
  document.body.appendChild(fbRoot);

  // Your Chat Plugin code
  var fbCustomerChat = document.createElement("div");
  fbCustomerChat.setAttribute("id", "fb-customer-chat");
  fbCustomerChat.setAttribute("class", "fb-customerchat");
  fbCustomerChat.setAttribute("page_id", pageId);
  fbCustomerChat.setAttribute("attribution", "biz_inbox");
  document.body.appendChild(fbCustomerChat);

  // Your SDK code
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v16.0",
    });
  };

  if (!window.location.href.includes("localhost")) {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
}

/* WhatsApp Chat Icon */
function createWhatsAppIcon(phoneNumber) {
  // Create WhatsApp messaging icon element
  var waIcon = document.createElement("a");
  waIcon.setAttribute("href", "https://wa.me/" + phoneNumber);
  waIcon.setAttribute("target", "_blank");
  waIcon.setAttribute("class", "whatsapp-icon");

  // Create WhatsApp icon using an image tag
  var waIconImg = document.createElement("img");
  waIconImg.setAttribute("src", "./custom/img/whatsapp-icon.png");
  waIconImg.setAttribute("alt", "WhatsApp");
  waIcon.appendChild(waIconImg);

  // Append the WhatsApp messaging icon element to the body
  document.body.appendChild(waIcon);
}

/* Phone Calling Icon */
function createPhoneIcon(phoneNumber) {
  // Create Phone icon element
  var phIcon = document.createElement("a");
  phIcon.setAttribute("href", "tel:" + phoneNumber);
  phIcon.setAttribute("target", "_blank");
  phIcon.setAttribute("class", "phone-icon");

  // Create Phone icon using an image tag
  var phIconImg = document.createElement("img");
  phIconImg.setAttribute("src", "./custom/img/phone-icon.png");
  phIconImg.setAttribute("alt", "Mobile Number");
  phIcon.appendChild(phIconImg);

  // Append the WhatsApp messaging icon element to the body
  document.body.appendChild(phIcon);
}
