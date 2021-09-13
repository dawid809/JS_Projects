export default class Switch {
    constructor() {
        this.init();
    }

    init(): void {
        const switchWrapper = <HTMLDivElement>document.createElement('div');
        switchWrapper.className = 'switch-wrapper';
        const switcher = <HTMLButtonElement>(document.createElement('button'));
        switcher.className = 'switcher';
        const img = <HTMLImageElement>document.createElement('img');
        img.src='/lab4and5/icons/sun.png'

        switcher.addEventListener('click', () => {
            if (document.body.hasAttribute('data-theme')) {
                document.body.removeAttribute('data-theme');
                img.src='/lab4and5/icons/night.png'
             
            } else {
                document.body.setAttribute('data-theme', 'dark')
                img.src='/lab4and5/icons/sun.png'
            }
        });
        switcher.appendChild(img);
        switchWrapper.appendChild(switcher);

        const menuContainer = document.querySelector('.menu');
        menuContainer.appendChild(switchWrapper);
    }
}
