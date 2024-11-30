
//Tema claro / escuro
const btn_toggle_theme = document.querySelector('#btn_toggle_theme');

btn_toggle_theme.addEventListener('click', () => {
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');

    const innerText = btn_toggle_theme.innerText;
    const textos = ['p', 'li a', 'h1', 'h2', 'h3', 'th', 'td', 'table', 'footer'];

    if (innerText == 'Light Theme') {
        //fundo escuro e texto claro
        btn_toggle_theme.innerHTML = 'Dark Theme'
        body.style.backgroundColor = "var(--color5)"
        footer.style.backgroundColor = "var(--color5)"

        textos.forEach((tag) => {
            document.querySelectorAll(tag).forEach(el => {
                el.style.color = 'white'
            })
        })

    } else {
        //fundo claro e texto escuro
        btn_toggle_theme.innerHTML = 'Light Theme'
        body.style.backgroundColor = ""
        footer.style.backgroundColor = ""

        textos.forEach((tag) => {
            document.querySelectorAll(tag).forEach(el => {
                el.style.color = "var(--color5)"
            })
        })
    }
})

