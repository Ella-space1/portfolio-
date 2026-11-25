// Posts stay in the visitor's own browser.
const KEY = 'xenoPosts';
function loadPosts() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}
function savePosts(posts) {
  try { localStorage.setItem(KEY, JSON.stringify(posts)); return true; } catch { return false; }
}
