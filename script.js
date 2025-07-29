function generateLink() {
  const input = document.getElementById('inputURL').value.trim();
  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');
  const copyStatus = document.getElementById('copyStatus');

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
        <a href="${redirectLink}" target="_blank" id="generatedLink">${redirectLink}</a>
      `;
      copyBtn.style.display = 'inline-block';
      copyStatus.innerText = '';
    } else {
      output.innerHTML = `❌ Could not extract video ID from this URL.`;
      copyBtn.style.display = 'none';
      copyStatus.innerText = '';
    }
  } catch (e) {
    output.innerHTML = `❌ Invalid YouTube URL.`;
    copyBtn.style.display = 'none';
    copyStatus.innerText = '';
  }
}

function copyLink() {
  const linkElement = document.getElementById('generatedLink');
  const copyStatus = document.getElementById('copyStatus');

  if (!linkElement) return;

  const linkText = linkElement.href;

  navigator.clipboard.writeText(linkText).then(() => {
    copyStatus.innerText = '✅ Link copied to clipboard!';
  }).catch(() => {
    copyStatus.innerText = '❌ Failed to copy link.';
  });
}
