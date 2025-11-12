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
import ServiceEmpleados from '@/services/serviceempleados';
const service = new ServiceEmpleados();
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
        service.login(this.persona).then(response=>{
            console.log("Entrando..");
            service.saveToken(response.data.response);
            console.log(response.data.response);
            this.$router.push('/home');
        })

    }
}
}
</script>

<style>

</style>