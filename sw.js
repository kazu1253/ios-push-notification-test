self.addEventListener('push', (event) => {
  const data = event.data ? event.data.text() : 'テスト通知です！';
  event.waitUntil(
    self.registration.showNotification('通知テスト', {
      body: data,
      icon: 'icon.png'
    })
  );
});
