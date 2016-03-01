'use strict';

function navigationDirective() {
    return {
        restrict: "E",
        templateUrl: "components/navigation/navigation.html",
        bindToController: true,
        controllerAs: "navigation",
        controller: 'navigationController'
    };
}

navigationController.$inject = ["$mdSidenav", "$window"];
function navigationController($mdSidenav, $window) {
    var self = this;

    self.sections = [
        {name: 'menu_home', icon: 'home', active: true, anchor: "anchor-home"},
        {name: 'menu_profile', icon: 'person_outline', anchor: "anchor-profile"},
        {name: 'menu_stories', icon: 'timelapse', anchor: "anchor-stories"},
        {name: 'menu_projects', icon: 'format_paint', anchor: "anchor-projects"},
        {name: 'menu_skills', icon: 'palette', anchor: "anchor-skills"},
        {name: 'menu_contact', icon: 'contact_mail', anchor: "anchor-contact"}
    ];

    self.toggleMenu = function (id) {
        var margin = 50;
        var element = $('#toolbar-nav')[0];
        var position = element.offsetTop + element.offsetHeight + 30;

        if ($window.scrollY <= position) margin = 0;

        $('.menu-container-side').css('margin-top', $window.scrollY + margin);
        $mdSidenav(id).toggle();
    };

    self.goToAnchorMobile = function (section, id) {
        $mdSidenav(id).toggle().then(function () {
            self.activate(section);
        })
    };

    self.activate = function (section) {
        for (var i = 0; i < self.sections.length; i++) {
            self.sections[i].active = false;
        }

        section.active = true;
    }
}

angular.module('Navigation', ["duScroll"])
    .value('duScrollDuration', 1000)
    .value('duScrollOffset', 0)
    .directive('navigationDirective', navigationDirective)
    .controller('navigationController', navigationController);