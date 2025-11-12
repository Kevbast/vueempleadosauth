<template>
  <h1>LOGIN</h1>
  <form v-on:submit.prevent="login()" class="form-label" style="width: 50%; margin: auto;">
        <label class="form-label" >Username</label>
        <input type="text" class="form-control" v-model="persona.userName">
        <label class="form-label">Password</label>
        <input class="form-control" type="text" v-model="persona.password">

        <button class="btn btn-info">LOGIN</button>
    </form>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';
export default {
data(){
    return{
        persona:{
            userName:"",
            password:"",
        }
    }
},
methods:{
    login(){
        let apiUrl=Global.apiEmpleados;
        let request="auth/login";
        axios.post(apiUrl+request,this.persona).then(response=>{
            console.log(response.response);
        })
    }
}
}
</script>

<style>

</style>