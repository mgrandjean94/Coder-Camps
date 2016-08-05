namespace cardealership.Controllers {

    ///////////////////////////////////////
    export class HomeController {
        public makes;


        constructor(private $http: ng.IHttpService) {

            this.$http.get('/api/makes')
                .then((response) => {
                    this.makes = response.data;
                });
        }

        public search(value) {
            let temp = this.makes.filter((current) => {
                return current.name.toLocaleLowerCase().indexOf
                    (value.toLowerCase()) > -1

            });
        }

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    export class AboutController {
        public cars;

        constructor(private $http: ng.IHttpService) {
            this.$http.get('/api/cars')
                .then((response) => {
                    this.cars = response.data;
                });
        }
        public search(value) {
            let temp = this.cars.filter((current) => {
                return current.shortDescription.toLocaleLowerCase().indexOf
                    (value.toLowerCase()) > -1
            });
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    export class DialogController {
        public cars;
        public description;



        constructor(public $stateParams: ng.ui.IStateParamsService, private $http: ng.IHttpService) {
          //  this.description = this.description.filter((p) => p.id == $stateParams['id'])[0];
            this.$http.get('/api/cars')
                .then((response) => {
                    this.cars = response.data;
                });
        }





    }

}