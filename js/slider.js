class Slider {
    constructor(id) {
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector('ul')
        this.li = this.ul.querySelectorAll('li')
        this.indexBox = this.box.querySelector('.index-box')
        this.right = this.box.querySelector('.right-box');
        this.left = this.box.querySelector('.left-box');
        this.points = this.indexBox.querySelectorAll('li')
        this.index = 0
        this.time1 = null

        this.init()
    }

    init() {
        console.log(this.points[0])
        this.autoPlay()
        this.leftRight()


    }
    move(d) {
        this.points[this.index].classList.remove('active')
        if (d == 'left') {
            if (this.index == 0) {
                this.ul.style.left = -4 * 590 + 'px';
                this.index = 4;
            } else {
                this.ul.style.left = parseFloat(this.ul.style.left) + 590 + 'px'
                this.index--;
            }
        }
        if (d == 'right') {
            if (this.index == 4) {
                this.ul.style.left = 0 + 'px';
                this.index = 0;

            } else {
                this.ul.style.left = parseFloat(this.ul.style.left) - 590 + 'px'
                this.index++;

            }
        }
        console.log(this.ul.style.left)
        this.points[this.index].classList.add('active')

    }



    leftRight() {

        this.left.addEventListener('click', () => {
            console.log('left');
            this.move('left')
        })

        this.right.addEventListener('click', () => {
            console.log('right')
            this.move('right')

        })

        this.points.forEach(item => {

            item.addEventListener('mouseenter', (e) => {
                this.points[this.index].classList.remove('active')
                console.log((e.target).getAttribute('index-number'));
                this.index = (e.target).getAttribute('index-number');
                this.ul.style.left = -1 * this.index * 590 + 'px';
                console.log(this.ul.style.left)
                this.points[this.index].classList.add('active')
            })

        })
    }

    autoPlay() {
        this.time1 = setInterval(() => {
            this.move('right')
        }, 2000)
        this.box.addEventListener('mouseenter', () => {
            if (this.time1 != null) {
                clearInterval(this.time1)
            }
        })
        this.box.addEventListener('mouseleave', () => {
            this.time1 = setInterval(() => {
                this.move('right')
            }, 3000)
        })
    }








}