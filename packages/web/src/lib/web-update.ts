/** The hashed main script of a page, which changes with every build. */
const mainScript = (text: string) =>
  /\/static\/js\/index\.[0-9a-f]+\.js/.exec(text)?.[0];

const CHECK_EVERY_MS = 30 * 60_000;
const RECHECK_AFTER_MS = 10 * 60_000;

/**
 * Where a server hosts the app, a new release replaces its page under an open tab: tells when the page the
 * server now sends is another build than the one running. Apps that carry their own pages have nothing to check.
 */
export function watchForNewPage(onNew: () => void): () => void {
  if (__STANDALONE__) return () => {};
  const running = mainScript(
    [...document.scripts].map((s) => s.getAttribute('src') ?? '').join('\n')
  );
  if (!running) return () => {};
  const entry = location.href;
  let checkedAt = Date.now();
  let told = false;
  const check = async () => {
    if (told) return;
    checkedAt = Date.now();
    try {
      const res = await fetch(entry, {
        cache: 'no-store',
        headers: { Accept: 'text/html' },
      });
      const latest = res.ok ? mainScript(await res.text()) : undefined;
      if (latest && latest !== running) {
        told = true;
        onNew();
      }
    } catch {
      // Offline or the server restarting: the next check tries again.
    }
  };
  const timer = window.setInterval(() => void check(), CHECK_EVERY_MS);
  const back = () => {
    if (
      document.visibilityState === 'visible' &&
      Date.now() - checkedAt > RECHECK_AFTER_MS
    )
      void check();
  };
  document.addEventListener('visibilitychange', back);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener('visibilitychange', back);
  };
}
