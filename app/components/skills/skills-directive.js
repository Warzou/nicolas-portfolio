'use strict';

function skillsDirective() {
    return {
        restrict        : "E",
        templateUrl     : "components/skills/skills.html",
        bindToController: true,
        controllerAs    : "skills",
        controller      : 'skillsController'
    };
}

skillsController.$inject = [];
function skillsController() {
    var self = this;

    self.expertSkills = [
        { name: "Javascript", value: 70},
        { name: "Css 3", value: 75},
        { name: "Html 5", value: 85},
        { name: "C#", value: 60},
        { name: "Java", value: 55}
    ]

}

angular.module('Skills', [])
    .directive('skillsDirective', skillsDirective)
    .controller('skillsController', skillsController);