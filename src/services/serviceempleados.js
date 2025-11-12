import axios from 'axios';
import Global from '@/Global';
export default class ServiceEmpleados{

    login(user) {
        return new Promise(function (resolve) {
            var request = "auth/login";
            var url = Global.apiEmpleados + request;

            axios.post(url, user).then((response) => {
                resolve(response);
            })
        });
    }

    getEmpleado() {
        var request = "api/empleados/perfilempleado";
        var url = Global.apiEmpleados + request;

        return new Promise(function (resolve) {
            axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            }).then((response) => {
                resolve(response);
            });
        });
    }

    getSubordinados(){
        var request = "api/empleados/subordinados";
        var url = Global.apiEmpleados + request;
        return new Promise(function (resolve) {
            axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            }).then((response) => {
                resolve(response);
            });
        });
    }

    saveToken(token) {
        localStorage.setItem("auth_token", token);
    }

    getToken() {
        return localStorage.getItem("auth_token");
    }

    removeToken() {
        localStorage.removeItem("auth_token");
    }

}