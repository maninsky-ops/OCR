self.addEventListener('install', (e) => {
  console.log('Installed');
});
self.addEventListener('fetch', (e) => {
  // 캐싱 로직 생략
});