$(document).ready(function () {
    //새롭게 탭을 만들어 원본의 새로운 버전을 tab1에 복사한다.(new tab생성자함수:클래스 tab1:인스턴스)
    var tab1 = new Tab();
    //두개를 구분해주는 역할
    tab1.init('.tab_menu1', '.tab_contents1');

    var tab2 = new Tab();
    tab2.init('.tab_menu2', '.tab_contents2');

});

//함수방식

function Tab() {
    var that = this;

    that.$tabMenu = null;
    that.$tabContents = null;
    that.currentIndex = null;
    that.oldIndex = null;
    //매개변수 두개를 받는다.
    that.init = function (menu, contents) {
        that.currentIndex = 0;
        that.$tabMenu = $(menu).find('li');
        that.$tabContents = $(contents).find('li');

        that.initEvent();
    };

    that.initEvent = function () {


        that.$tabMenu.on('click', function () {
            that.oldIndex = that.currentIndex;
            that.currentIndex =$(this).index();

            that.tabMenuToggle($(this));
            that.tabContentsToggle();
        });
    };

    that.tabMenuToggle = function ($self) {
        that.$tabMenu.removeClass('active');
        $self.addClass('active');
    };

    that.tabContentsToggle = function () {

        that.$tabContents.eq(that.oldIndex).hide();
        that.$tabContents.eq(that.currentIndex).show();
    };
}












