<template>
  <h1>Subordinados</h1>
  <div class="table-responsive">
    <table class="table table-primary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">apellido</th>
          <th scope="col">oficio</th>
          <th scope="col">salario</th>
          <th scope="col">director</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado">
          <td>{{ empleado.idEmpleado }}</td>
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }}</td>
          <td>{{ empleado.director }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
import ServiceEmpleados from '@/services/serviceempleados';
const service= new ServiceEmpleados();
export default {
name:"SubordinadosComponent",
data(){
  return{
    empleados:[]
  }
},mounted(){
// Esta es la condición para proteger el Home:
  if (service.getToken() != null) {
      console.log("Entrando al Perfil...");
      console.log("Cargando los datos del perfil...");
    service.getSubordinados().then(response=>{
      this.empleados=response.data;
      console.log(this.empleado);
    })
  } else {
      // Si no hay token, redirige a la ruta '/' (inicio o login).
      this.$router.push('/');
  }
}

}
</script>
