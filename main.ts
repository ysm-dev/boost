async function main() {
  // Papago page translation shortcut
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.metaKey && e.code === 'KeyT') {
      window.open(
        `https://papago.naver.net/website?locale=en&source=en&target=ko&url=${window.location.href}`,
      )
    }
  })

  // SimilarWeb shortcut
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.metaKey && e.code === 'KeyS') {
      window.open(
        `https://www.similarweb.com/website/${window.location.host}/#overview`,
      )
    }
  })
}

main()
