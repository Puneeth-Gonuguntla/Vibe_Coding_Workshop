// Loads static rules.json on extension install (step 1 MVP)
chrome.runtime.onInstalled.addListener(() => {
  fetch(chrome.runtime.getURL('rules.json'))
    .then(res => res.json())
    .then(rules => {
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: rules.map(r => r.id),
        addRules: rules
      });
    });
});