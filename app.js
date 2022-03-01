window.onscroll=function(e) {
    console.log(this.oldScroll>this.scrollY);
    this.oldScroll = this.scrollY;
    console.log("hello!");
}

console.log("goodbye!");
