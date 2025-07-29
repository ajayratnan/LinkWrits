function generateLink() {
  const input = document.getElementById('inputURL').value.trim();
  const output = document.getElementById('output');

  try {
    const url = new URL(input);
    let videoId = '';

    if (url.hostname.includes('youtu.be')) {
      videoId = url.pathname.slice(1);
    } else {
      videoId = url.searchParams.get('v');
    }

    if (videoId) {
      const redirectLink = `${window.location.origin}/open.html?v=${videoId}`;
      output.innerHTML = `
        ✅ <strong>Smart Link:</strong><br>
        <a href="${redirectLink}" target="_blank">${redirectLink}</a>
      `;
    } else {
      output.innerHTML = `❌ Could not extract video ID from this URL.`;
    }
  } catch (e) {
    output.innerHTML = `❌ Invalid YouTube URL.`;
  }
}
