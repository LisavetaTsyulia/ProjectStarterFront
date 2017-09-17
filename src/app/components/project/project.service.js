"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var environment_1 = require("../../../environments/environment");
var http_1 = require("@angular/http");
var ProjectService = (function () {
    function ProjectService(http, authHttp, router) {
        this.http = http;
        this.authHttp = authHttp;
        this.router = router;
    }
    ProjectService.prototype.showMessage = function () {
    };
    ProjectService.prototype.create = function (title, userId, endDate, targetAmount) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http
            .post(environment_1.environment.serverUrl + "project/create", JSON.stringify({ title: title, userId: userId, endDate: endDate, targetAmount: targetAmount }), { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProjectService.prototype.findProjectById = function (projectId) {
        return this.http.get(environment_1.environment.serverUrl + "project/info?project_id=" + projectId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.updateProject = function (project) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http
            .post(environment_1.environment.serverUrl + "project/update", JSON.stringify(project), { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProjectService.prototype.createNews = function (news) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http
            .post(environment_1.environment.serverUrl + "project/createNews", JSON.stringify(news), { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProjectService.prototype.findNewsByProjectId = function (projectId) {
        return this.http.get(environment_1.environment.serverUrl + "project/news?project_id=" + projectId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.subscribeToProject = function (userId, projectId, needToSubscribe) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', localStorage.getItem('token'));
        return this.http
            .post(environment_1.environment.serverUrl + "project/subscribe", JSON.stringify({ userId: userId, projectId: projectId, needToSubscribe: needToSubscribe }), { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ProjectService.prototype.subscription = function (userId, projectId) {
        return this.authHttp.get(environment_1.environment.serverUrl + "project/subscription?" +
            "user_id=" + userId + "&project_id=" + projectId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.findAllUserProjects = function (userId) {
        return this.authHttp.get(environment_1.environment.serverUrl + "user/user_projects?" +
            "user_id=" + userId).map(function (res) { return res.json(); });
    };
    ProjectService.prototype.findAllSubscribedProjectsByUserId = function (userId) {
        return this.authHttp.get(environment_1.environment.serverUrl + "user/subscribed_projects?" +
            "user_id=" + userId).map(function (res) { return res.json(); });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable()
], ProjectService);
exports.ProjectService = ProjectService;
