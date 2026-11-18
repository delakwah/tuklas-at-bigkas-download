"use strict";
const pageUrl = "https://delakwah.github.io/tuklas-at-bigkas-download/";
const feedback = document.getElementById("share-feedback");
let feedbackTimeout;
function showFeedback(message) {
  clearTimeout(feedbackTimeout);
  feedback.textContent = message;
  feedback.hidden = false;
  feedbackTimeout = setTimeout(() => { feedback.hidden = true; }, 8000);
}
document.getElementById("download-apk").addEventListener("click", () => {
  document.getElementById("download-note").textContent = "Your browser handles the download. Open Downloads when it finishes.";
});
document.getElementById("share-page").addEventListener("click", async () => {
  try {
    if (navigator.share) {
      await navigator.share({ title: "Tuklas at Bigkas", text: "Download the Android app.", url: pageUrl });
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(pageUrl);
      showFeedback("Download page link copied!");
    } else {
      showFeedback("Share this link: " + pageUrl);
    }
  } catch (error) {
    if (error.name !== "AbortError") showFeedback("Share this link: " + pageUrl);
  }
});
