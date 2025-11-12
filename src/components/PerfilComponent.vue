<template>
  <h1>Perfil</h1>
  <ul class="list-group" style="width: 50%; margin: auto; text-align: center;">
    <li class="list-group-item">ID EMPLEADO:{{ empleado.idEmpleado }}</li>
    <li class="list-group-item">APELLIDO:{{ empleado.apellido }}</li>
    <li class="list-group-item">OFICIO:{{ empleado.oficio }}</li>
    <li class="list-group-item">SALARIO:{{ empleado.salario }}</li>
    <li class="list-group-item">DIRECTOR:{{ empleado.director }}</li>
  </ul>
</template>

<script>
import ServiceEmpleados from '@/services/serviceempleados';
const service = new ServiceEmpleados();
export default {
name:"PerfilComponent",
data(){
  return{
    empleado:[]
  }
},mounted(){
// Esta es la condición para proteger el Home:
  if (service.getToken() != null) {
      console.log("Entrando al Perfil...");
      console.log("Cargando los datos del perfil...");
    service.getEmpleado().then(response=>{
      this.empleado=response.data;
      console.log(this.empleado)
    })
  } else {
      // Si no hay token, redirige a la ruta '/' (inicio o login).
      this.$router.push('/');
  }
}
}
</script>

<style>

</style>