'use strict';
var angular = require('angular');
require('ngMap');

function projectsDirective() {
    return {
        restrict: "E",
        templateUrl: require('./projects.html'),
        bindToController: true,
        controllerAs: "projectController",
        controller: 'projectsController'
    };
}

projectsController.$inject = [];
function projectsController() {
    var self = this;
    self.apiKey = 'AIzaSyC49hRYpSCphd8z1Ahc8ThR4O_jlNOg9QA';

    var projects = [
        {
            id: 0,
            name: 'projects_project_1_name',
            subtitle: 'projects_project_1_first_part_title',
            description: 'projects_project_1_first_part_text',
            subtitle2: 'projects_project_1_second_part_title',
            description2: 'projects_project_1_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.774036, -0.706215],
            zoom: 9,
            technos: [
                {image: "play", col: 3, row: 1},
                {image: "mongo", col: 2, row: 1},
                {image: "bootstrap", col: 2, row: 1},
                {image: "java", col: 3, row: 1}],
            missions: [
                "projects_project_1_mission_1",
                "projects_project_1_mission_2",
                "projects_project_1_mission_3",
                "projects_project_1_mission_4",
                "projects_project_1_mission_5"
            ]
        },
        {
            id: 1,
            name: 'projects_project_2_name',
            subtitle: 'projects_project_2_first_part_title',
            description: 'projects_project_2_first_part_text',
            subtitle2: 'projects_project_2_second_part_title',
            description2: 'projects_project_2_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.774036, -0.706215],
            zoom: 10,
            technos: [
                {image: "flexx", col: 2, row: 1},
                {image: "java", col: 3, row: 1},
                {image: "postgres", col: 3, row: 1},
                {image: "actionscript", col: 2, row: 1}],
            missions: [
                "projects_project_2_mission_1",
                "projects_project_2_mission_2",
                "projects_project_2_mission_3",
                "projects_project_2_mission_4",
                "projects_project_2_mission_5"
            ]
        },
        {
            id: 2,
            name: 'projects_project_3_name',
            subtitle: 'projects_project_3_first_part_title',
            description: 'projects_project_3_first_part_text',
            subtitle2: 'projects_project_3_second_part_title',
            description2: 'projects_project_3_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.774036, -0.706215],
            zoom: 10,
            technos: [
                {image: "spring", col: 3, row: 1},
                {image: "angular", col: 2, row: 1},
                {image: "bootstrap", col: 2, row: 1},
                {image: "postgres", col: 3, row: 1}],
            missions: [
                "projects_project_3_mission_1",
                "projects_project_3_mission_2",
                "projects_project_3_mission_3",
                "projects_project_3_mission_4",
                "projects_project_3_mission_5"
            ]
        },
        {
            id: 3,
            name: 'projects_project_4_name',
            subtitle: 'projects_project_4_first_part_title',
            description: 'projects_project_4_first_part_text',
            subtitle2: 'projects_project_4_second_part_title',
            description2: 'projects_project_4_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.774036, -0.706215],
            zoom: 10,
            technos: [
                {image: "sqlserver", col: 3, row: 1},
                {image: "bootstrap", col: 2, row: 1},
                {image: "java", col: 2, row: 1},
                {image: "play", col: 3, row: 1}],
            missions: [
                "projects_project_4_mission_1",
                "projects_project_4_mission_2",
                "projects_project_4_mission_3",
                "projects_project_4_mission_4",
                "projects_project_4_mission_5"
            ]
        },
        {
            id: 4,
            name: 'projects_project_5_name',
            subtitle: 'projects_project_5_first_part_title',
            description: 'projects_project_5_first_part_text',
            subtitle2: 'projects_project_5_second_part_title',
            description2: 'projects_project_5_second_part_text',
            marker: [44.837789, -0.57918],
            center: [44.774036, -0.706215],
            zoom: 10,
            technos: [
                {image: "angular", col: 3, row: 1},
                {image: "bootstrap", col: 2, row: 1},
                {image: "elastic", col: 2, row: 1},
                {image: "aspmvc", col: 3, row: 1}],
            missions: [
                "projects_project_5_mission_1",
                "projects_project_5_mission_2",
                "projects_project_5_mission_3",
                "projects_project_5_mission_4",
                "projects_project_5_mission_5"
            ]
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
            technos: [
                {image: "angular", col: 3, row: 1},
                {image: "grunt", col: 2, row: 1},
                {image: "bootstrap", col: 2, row: 1},
                {image: "nodeblack", col: 3, row: 1}],
            missions: [
                "projects_project_6_mission_1",
                "projects_project_6_mission_2",
                "projects_project_6_mission_3",
                "projects_project_6_mission_4",
                "projects_project_6_mission_5"
            ]
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
    .directive('projects', projectsDirective)
    .controller('projectsController', projectsController);