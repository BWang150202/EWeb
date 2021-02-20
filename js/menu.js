class Menu {
    constructor(id) {
        this.ul = document.querySelector(id)
        this.lis = this.ul.querySelectorAll('li')
        this.subMenu = this.ul.querySelectorAll('.sub-menu')
        this.time1 = null
        this.time2 = null
        this.init()
    }
    init() {
        console.log('menu')
        this.lis.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const li = e.target;
                if (this.time1 != null) {
                    clearTimeout(this.time1);
                }
                this.time1 = setTimeout(() => {
                    this.subMenu.forEach(i => {
                        i.classList.remove('active')
                    })
                    li.children[1].classList.add('active')
                }, 200)



            })
        });
        this.lis.forEach(item => {
            item.addEventListener('mouseleave', (e) => {
                const li = e.target;
                if (this.time2 != null) {
                    clearTimeout(this.time2)
                }
                this.time2 = setTimeout(() => {
                    li.children[1].classList.remove('active')
                }, 200)



            })
        });

    }
}