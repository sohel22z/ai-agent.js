// Load jQuery and inject AI agent
(function () {
  // Inject jQuery if not present
  if (!window.jQuery) {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    document.head.appendChild(script);
  }

  // Initialize AI Agent
  window.AIAgent = {
    init: function (apiKey) {
      // Track user behavior
      $(document).click(function (e) {
        // Send click data to your backend
        fetch("https://your-backend.com/track", {
          method: "POST",
          body: JSON.stringify({ event: "click", element: e.target.tagName }),
        });
      });

      // Inject chatbot UI
      $("body").append('<div id="ai-chatbot">Hello! How can I help?</div>');
    },
  };
})();