document.addEventListener('copy', (clipboard) => {
    clipboard.preventDefault(); // prevent the copy event
    
    const copiedLink = clipboard.target.innerText;

    try {
        const url = new URL(copiedLink);

        if (url.host == "x.com") {
            navigator.clipboard.writeText("https://vxtwitter.com" + url.pathname);
        }

    } catch { }
})