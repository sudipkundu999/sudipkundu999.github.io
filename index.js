/**
 * Takes github repository name & redirects to it's github pages
 * @param {string} pathname
 */
const redirectTo = (pathname) => (window.location.pathname = pathname);

/**
 * Change the repo name accordingly to redirect from sudipkundu999.github.io
 * Use this as a temporary redirect to justify free subdomain (is-a.dev) PRs
 * which needs CNAME record as sudipkundu999.github.io
 */
const REPO_NAME = 'sudipkundu';

redirectTo(REPO_NAME);
