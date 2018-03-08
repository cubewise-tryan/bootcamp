<!-- This gets appended at the top for each page   update() -->
    <style>
        #page-view {
            padding-top: 0px;
        }
    </style>
    <section id="page-header" style="padding-top: 50px;">
    </section>
    <div class="row" style="margin: 10px;" ng-if="$root.ui.showHeader">
        <div class="col-lg-3">
            $rootScope
        </div>
        <div class="col-lg-3">
            <div>
                <label>Best App</label>
            </div>
            <select class="form-control" ng-model="$root.globals.bestApp">
                <option>Canvas</option>
                <option>Pulse</option>
                <option>Arc</option>
            </select>
        </div>
        <div class="col-lg-3">
            <div>
                <label>Version</label>
            </div>
            <tm1-ui-subnm tm1-instance="dev" tm1-dimension="Version" tm1-bind-model="true" ng-model="$root.globals.version" ></tm1-ui-subnm>
        </div>
    </div>
    <section ng-controller="HeaderCtrl">
        <div class="row" style="margin: 10px;" ng-if="$root.ui.showHeader">
            <div class="col-lg-3">
                Controller $broadcast
            </div>
            <div class="col-lg-3">
                <div>
                    <label>Best App</label>
                </div>
                <select class="form-control" ng-model="header.bestApp" ng-change="broadcastFromSelect()">
                    <option>Canvas</option>
                    <option>Pulse</option>
                    <option>Arc</option>
                </select>
            </div>
            <div class="col-lg-3">
                <div>
                    <label>Version</label>
                </div>
                <tm1-ui-subnm tm1-instance="dev" tm1-dimension="Version" tm1-bind-model="true" ng-model="header.version" tm1-change="broadcastFromSubnm()"></tm1-ui-subnm>
            </div>
        </div>
        <div style="margin: 10px;" ng-if="$root.ui.showHeader">
            <pre>header:{{header | json}}</pre>
            <pre>page:{{page | json}}</pre>
        </div>

        <hr/>
