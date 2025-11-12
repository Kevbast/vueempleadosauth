<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">VUE SERVICIOS</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/home">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/perfil">Perfil</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/subordinados">Subordinado</router-link>
                    </li>

                    <!-- DROPDOWN MENU -->
                    <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Series
                    </a>
                    <ul class="dropdown-menu" >
                         <li v-for="serie in series" :key="serie">
                            <router-link class="dropdown-item" :to="'/detailserie/'+serie.idSerie">{{ serie.nombre }}</router-link></li>
                    </ul>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
name:"MenuComponent",

}
</script>

<style>

</style>