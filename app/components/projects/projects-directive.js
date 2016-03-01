'use strict';

function projectsDirective() {
    return {
        restrict: "E",
        templateUrl: "components/projects/projects.html",
        bindToController: true,
        controllerAs: "projectController",
        controller: 'projectsController'
    };
}

projectsController.$inject = [];
function projectsController() {
    var self = this;

    var projects = [
        {
            id: 0,
            name: 'projects_project_1_name',
            subtitle: 'projects_project_1_first_part_title',
            description: 'projects_project_1_first_part_text',
            subtitle2: 'projects_project_1_second_part_title',
            description2: 'projects_project_1_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["react large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 1,
            name: 'projects_project_2_name',
            subtitle: 'projects_project_2_first_part_title',
            description: 'projects_project_2_first_part_text',
            subtitle2: 'projects_project_2_second_part_title',
            description2: 'projects_project_2_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 2,
            name: 'projects_project_3_name',
            subtitle: 'projects_project_3_first_part_title',
            description: 'projects_project_3_first_part_text',
            subtitle2: 'projects_project_3_second_part_title',
            description2: 'projects_project_3_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 3,
            name: 'projects_project_4_name',
            subtitle: 'projects_project_4_first_part_title',
            description: 'projects_project_4_first_part_text',
            subtitle2: 'projects_project_4_second_part_title',
            description2: 'projects_project_4_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 4,
            name: 'projects_project_5_name',
            subtitle: 'projects_project_5_first_part_title',
            description: 'projects_project_5_first_part_text',
            subtitle2: 'projects_project_5_second_part_title',
            description2: 'projects_project_5_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.837789, -0.57918],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        },
        {
            id: 5,
            name: 'projects_project_6_name',
            subtitle: 'projects_project_6_first_part_title',
            description: 'projects_project_6_first_part_text',
            subtitle2: 'projects_project_6_second_part_title',
            description2: 'projects_project_6_second_part_text',
            marker: [45.501689, -73.567256], //montreal
            center: [45.501689, -73.567256],
            zoom: 10,
            technos1: ["node large", "angular ", "css3"],
            technos2: ["node", "angular", "css3"]
        }
    ];

    self.previousProject = function () {

        var id = self.project.id - 1;
        if (id === -1) id = projects.length - 1;

        self.project = projects[id];
    };

    self.nextProject = function () {
        var id = self.project.id + 1;
        if (id === projects.length) id = 0;

        self.project = projects[id];
    };

    self.project = projects[0];
}

angular.module('Projects', ['ngMap'])
    .directive('projectsDirective', projectsDirective)
    .controller('projectsController', projectsController);