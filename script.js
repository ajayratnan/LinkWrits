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
      const appLink = `vnd.youtube://${videoId}`;
      output.innerHTML = `✅ <strong>App Link:</strong> <a href="${appLink}">${appLink}</a>`;
    } else {
      output.innerHTML = `❌ Could not extract video ID from this URL.`;
    }
  } catch (e) {
    output.innerHTML = `❌ Invalid YouTube URL.`;
  }
}
