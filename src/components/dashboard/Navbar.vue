<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/admin/products"
                   class="navbar-brand col-sm-11 col-md-11">
        Coffee
      </router-link>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse"
           id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#"
               @click.prevent="signout"
               class="nav-link btn btn-sm btn-light text-dark px-3">
              登出
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      document.cookie = 'hexToken=; expires=; path=/';
      this.$router.push('/');
    },
  },
};
</script>
