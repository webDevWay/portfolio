<template>
  <nav class="col-md-2 p-0" v-bind:class="$store.state.changeClassBurgerMenu">
  <ul class="nav-list">
      <li class="nav-list__category ">GENERAL</li>
      <li class="nav-list__item"><a class="nav-list__link" href="#"><i class="fas fa-user-circle nav-list__fasicons"></i>Dashboard</a></li>
      <li class="nav-list__item "><a class="nav-list__link" href="#"><i class="fas fa-paint-brush nav-list__fasicons"></i>Layouts</a></li>
      <li class="nav-list__item "><a class="nav-list__link" href="#"><i class="fas fa-leaf nav-list__fasicons"></i>Pages</a></li>
      <li class="nav-list__category">ELEMENTS</li>
      <li class="nav-list__item "><a class="nav-list__link" href="#"><i class="fas fa-recycle nav-list__fasicons"></i>Важное</a></li>
      <li class="nav-list__item "><a class="nav-list__link" href="#"><i class="fas fa-home nav-list__fasicons"></i>Результаты</a></li>
      <li class="nav-list__item "><a class="nav-list__link" href="#"><i class="fas fa-user-circle nav-list__fasicons"></i>О нас</a></li>
      <li class="nav-list__item "><a class="nav-list__link" href="#"><i class="fas fa-address-book nav-list__fasicons"></i>Контакты</a></li>
    </ul>
  </nav>
</template>

<script>
    export default {
        name: 'acc-leftNav',
    }
</script>

<style lang="sass">
  .nav-show
    display: block
    position: fixed
    width: 45%
    background: #fff
    top: 12%
    left: 0
    bottom: 0
    z-index: 999
    transform: scaleX(1) translateX(0)
    transform-origin: left center
    opacity: 1
  .nav-list
    padding: 20px 0 0 0
    /*text-align: center*/
    .nav-list__link
      text-decoration: none
      color: black
      display: block
      padding: 3% 5% 3% 10%
    .nav-list__link:hover
      color: black
      text-decoration: none
    .nav-list__category
      padding: 3% 5% 3% 10%
      color: #757575
    .nav-list__fasicons
      margin-right: 7px
      color: #757575
    .nav-list__item
      list-style-type: none
      width: 100%
      color: #424242
    .nav-list__item:hover
      background: #F1F4F5
    @media screen and (max-width: 767px)
      .nav-md-collapse
        display: none
</style>
