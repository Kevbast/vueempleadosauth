<template>
  <h1>HOME COMPONENT</h1>
  <button @click="cerrarSesion">Cerrar Sesión</button>
</template>

<script>
import ServiceEmpleados from '@/services/serviceempleados';
const service = new ServiceEmpleados();
export default {
name:"HomeComponent",
data(){
  return{
  }
},mounted(){
// Esta es la condición para proteger el Home:
  if (service.getToken() != null) {
      console.log("Entrando a Home...") 
  } else {
      // Si no hay token, redirige a la ruta '/' (inicio o login).
      this.$router.push('/');
  }
},methods:{
  cerrarSesion(){
    service.removeToken();
    console.log("TOKEN ELIMINADO,CERRADA LA SESIÓN");
    this.$router.push('/');
  }
}

}
</script>

<style>

</style>