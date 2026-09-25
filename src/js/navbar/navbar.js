function navbar(item_menu) {
    const navEl = document.getElementById('navbar') || document.querySelector('#navbar');
    if (!navEl) return;

    navEl.innerHTML = `
        <nav class="navbar">
            ${item_menu
                .filter((menu) => menu.label !== '')
                .map((item) => {
                    const iconHtml = item.icon ? `<i data-lucide="${item.icon}"></i>` : '';
                    return `<li><a href="${item.url}" class="navbar-item navbar-item_icon">${iconHtml}${item.label}</a></li>`;
                })
                .join('')}
        </nav>`;

    const chatBtn = document.createElement('button');
    chatBtn.id = 'btn-chat';
    chatBtn.className = 'navbar-chat-button';
    chatBtn.innerHTML = '<i data-lucide="message-circle"></i>';
    navEl.appendChild(chatBtn);
}

export { navbar };