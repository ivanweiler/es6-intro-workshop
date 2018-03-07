export default class Toggle {
  constructor(links, content) {
    //get links
    this.links = document.querySelectorAll(links);
    //get divs
    this.divs = document.querySelectorAll(content);

    this.links.forEach((el,i) => {
      el.addEventListener('click', (e) => {
        this.toggle(i);
      });
    });

    this.toggle(0);
  }
  toggle(i) {
    //bad code, fixed on 2 links for simplicity, make it work on any no of links/divs
    if (i == 0) {
      this.divs[0].style.display = 'block';
      this.divs[1].style.display = 'none';
    } else {
      this.divs[0].style.display = 'none';
      this.divs[1].style.display = 'block';
    }
  }
}
