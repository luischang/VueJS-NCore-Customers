<template>
  <v-app>
    <v-tabs fixed-tabs background-color="indigo" dark>
      <v-tab
        v-for="item in itemsMenu"
        v-bind:key="item.router"
        :to="{ path: item.router }"
      >
        {{ item.names }}
      </v-tab>
    </v-tabs>
    <router-view> </router-view>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      itemsMenu: [
        { names: "Registro", router: "/dashboard/register" },
        { names: "Clientes", router: "/dashboard/customer" },
        { names: "Cerrar Sesión", router: "/" },
      ],
    };
  },
};
</script>