chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if ((changeInfo.status == 'loading' || changeInfo.status == 'complete') && tab.active) {
    // check if is reddit page
    if (tab.url.indexOf('reddit.com') > -1) {
      // insert css
      const css = 'body { background-color: var(--newCommunityTheme-canvas); }';
      chrome.scripting.insertCSS({ target: { tabId: tabId }, css: css, });
    }
  }
});