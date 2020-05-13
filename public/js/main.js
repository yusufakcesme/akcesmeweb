
document.getElementById('hamburger-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.add('active-menu')
})

document.getElementById('menu-close').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('active-menu')
})

document.querySelectorAll('.mobile-nav-btn').forEach(item => item.addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.remove('active-menu')
}))
